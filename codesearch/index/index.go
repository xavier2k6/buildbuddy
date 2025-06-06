package index

import (
	"bytes"
	"context"
	"encoding/binary"
	"fmt"
	"maps"
	"runtime"
	"slices"
	"strconv"
	"sync"
	"time"

	"github.com/buildbuddy-io/buildbuddy/codesearch/performance"
	"github.com/buildbuddy-io/buildbuddy/codesearch/posting"
	"github.com/buildbuddy-io/buildbuddy/codesearch/types"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/cockroachdb/pebble"
	"github.com/xiam/s-expr/ast"
	"github.com/xiam/s-expr/parser"
	"golang.org/x/sync/errgroup"
)

var (
	nextGenerationMu = sync.Mutex{}
)

const (
	batchFlushSizeBytes = 1_000_000_000 // flush batch every 1G
	generationKey       = "__generation__"
)

type postingLists map[string]posting.List

// Writer is not thread-safe. A single instance should not be used concurrently.
// Multiple instances can be used concurrently without crashing, however CRUD operations are
// not atomic, so index corruption can occur if multiple writers are used to modify the same
// documents at the same time.
type Writer struct {
	db  *pebble.DB
	log log.Logger

	generation        uint32
	docIndex          uint32
	namespace         string
	fieldPostingLists map[string]postingLists
	deletes           posting.List
	batch             *pebble.Batch
	tokenizers        map[string]types.Tokenizer
}

func NewWriter(db *pebble.DB, namespace string) (*Writer, error) {
	generation, err := nextGeneration(db)
	if err != nil {
		return nil, err
	}
	subLog := log.NamedSubLogger(fmt.Sprintf("writer:%s (generation %d)", namespace, generation))

	return &Writer{
		db:                db,
		log:               subLog,
		generation:        generation,
		docIndex:          0,
		namespace:         namespace,
		fieldPostingLists: make(map[string]postingLists),
		deletes:           posting.NewList(),
		batch:             db.NewBatch(),
		tokenizers:        make(map[string]types.Tokenizer),
	}, nil
}

func BytesToUint64(buf []byte) uint64 {
	return binary.LittleEndian.Uint64(buf)
}

func Uint64ToBytes(i uint64) []byte {
	buf := make([]byte, 8)
	binary.LittleEndian.PutUint64(buf, i)
	return buf
}

func BytesToUint32(buf []byte) uint32 {
	return binary.LittleEndian.Uint32(buf)
}

func Uint32ToBytes(i uint32) []byte {
	buf := make([]byte, 4)
	binary.LittleEndian.PutUint32(buf, i)
	return buf
}

// nextGeneration returns a monotonically increasing integer (uint32) that can
// be used as the top 32 bytes of a 64bit doc ID generated by a single indexing
// thread.
func nextGeneration(db *pebble.DB) (uint32, error) {
	nextGenerationMu.Lock()
	defer nextGenerationMu.Unlock()

	key := []byte(generationKey)
	var newGeneration uint32

	value, closer, err := db.Get(key)
	if err != pebble.ErrNotFound {
		if err != nil {
			return 0, err
		}
	}

	if len(value) > 0 {
		newGeneration = BytesToUint32(value) + 1
	}
	if closer != nil {
		if err := closer.Close(); err != nil {
			return 0, err
		}
	}

	if err := db.Set(key, Uint32ToBytes(newGeneration), pebble.Sync); err != nil {
		return 0, err
	}
	return newGeneration, nil
}

type indexKeyType string

const (
	// All stored doc fields are stored under the `docField` key, including
	// docid.
	docField indexKeyType = "doc"

	// Any searchable grams, of any length, are stored under `ngram` field.
	ngramField indexKeyType = "gra"

	// Deleted doc tombstones are stored under `deleteField`.
	deleteField indexKeyType = "del"

	// Keys are separated by `keySeparator`. The general key form is:
	// <namespace>:<key_type>:<contents>:<field_name>:<segment_id>
	keySeparator = ":"
)

type key struct {
	namespace string
	keyType   indexKeyType
	data      []byte
	field     string
}

var sep = []byte(keySeparator)

func splitRight1(s, sep []byte) [][]byte {
	i := bytes.LastIndex(s, sep)
	if i == -1 {
		return [][]byte{s}
	}

	r := [][]byte{
		s[i+1:],
	}
	if len(s[:i]) > 0 {
		r = append(r, s[:i])
	}
	return r
}

func (k *key) FromBytes(b []byte) error {
	// Parse namespace
	chunks := bytes.SplitN(b, sep, 2)
	if len(chunks) != 2 {
		return status.InternalErrorf("error parsing namespace key: %q", b)
	}
	k.namespace, b = string(chunks[0]), chunks[1]

	// Parse key type
	chunks = bytes.SplitN(b, sep, 2)
	if len(chunks) != 2 {
		return status.InternalErrorf("error parsing key type key: %q", b)
	}
	k.keyType, b = indexKeyType(chunks[0]), chunks[1]

	// Next field is data, which may contain the separator character! So
	// we parse the two safe fields from the end now, and whatever is left
	// is data.

	// Parse field, and remainder is data.
	chunks = splitRight1(b, sep)
	if len(chunks) != 2 {
		return status.InternalErrorf("error parsing field key: %q", b)
	}
	k.field, k.data = string(chunks[0]), chunks[1]
	return nil
}

func (k *key) DocID() uint64 {
	if k.keyType != docField && k.keyType != deleteField {
		return 0
	}
	d, err := strconv.ParseUint(string(k.data), 10, 64)
	if err == nil {
		return d
	}
	return 0
}
func (k *key) NGram() []byte {
	if k.keyType != ngramField {
		return nil
	}
	return k.data
}

func (w *Writer) storedFieldKey(docID uint64, field string) []byte {
	return []byte(fmt.Sprintf("%s:doc:%d:%s", w.namespace, docID, field))
}

func (w *Writer) postingListKey(ngram string, field string) []byte {
	// Example: gr12345:gra:foo:content:1234-asdad-123132-asdasd-123
	return postingListKey(w.namespace, ngram, field)
}

func postingListKey(namespace, ngram, field string) []byte {
	return []byte(fmt.Sprintf("%s:gra:%s:%s", namespace, ngram, field))
}

func (w *Writer) lookupDocId(matchField types.Field) (uint64, error) {
	if matchField.Type() != types.KeywordField {
		return 0, status.InternalError("match field must be of keyword type")
	}
	key := postingListKey(w.namespace, string(matchField.Contents()), matchField.Name())

	var postingList posting.List
	// First, check in the current batch
	if pl, ok := w.fieldPostingLists[matchField.Name()][string(matchField.Contents())]; ok {
		postingList = pl
	} else {
		// If not found, check in the index
		value, closer, err := w.db.Get(key)
		if err != nil {
			return 0, err
		}
		defer closer.Close()

		postingList, err = posting.Unmarshal(value)
		if err != nil {
			return 0, err
		}
	}

	if postingList.GetCardinality() != 1 {
		return 0, status.FailedPreconditionErrorf("Match field matches > 1 docs: %v", matchField)
	}
	return postingList.ToArray()[0], nil
}

// Deletes the document with the given docID.
func (w *Writer) DeleteDocument(docID uint64) error {
	// TODO(jdelfino): There's an issue with this delete function: it doesn't delete the document's
	// id field postings. The id field is the field used in UpdateDocument and DeleteDocumentByMatchField
	// to find the previous version of the document. So if we delete using this method, then later
	// add a new document with the same external id, future updates to that document will fail
	// because they will match multiple documents. I think the solution is to honor the deleted doc
	// id list when looking up by ID, but that's a potential performance issue.
	// As of this writing, DeleteDocument isn't used, so we'll just walk around the landmine for now.
	fieldsStart := w.storedFieldKey(docID, "")
	fieldsEnd := w.storedFieldKey(docID, "\xff")
	if err := w.batch.DeleteRange(fieldsStart, fieldsEnd, nil); err != nil {
		return err
	}
	w.deletes.Add(docID)
	return nil
}

// Deletes the document matching the provided matchField.
// The matchField must be a keyword field, and an error is returned if the number of documents
// matching the matchField is not exactly 1.
func (w *Writer) DeleteDocumentByMatchField(matchField types.Field) error {
	docId, err := w.lookupDocId(matchField)
	if err != nil {
		if err == pebble.ErrNotFound {
			return nil // Doc not found, delete is a no-op
		}
		return err
	}
	key := w.postingListKey(string(matchField.Contents()), matchField.Name())
	// The key field needs to be explicitly deleted, unlike the other fields, otherwise the old docID
	// will remain in the posting list for the id field
	w.batch.Delete(key, nil)

	// The key field must also be removed from any pending updates, in case this document was
	// already added previously in this batch.
	if fpl, ok := w.fieldPostingLists[matchField.Name()]; ok {
		if pl, ok := fpl[string(matchField.Contents())]; ok {
			pl.Remove(docId)
		}
	}

	return w.DeleteDocument(docId)
}

// Updates an existing document, or adds it if it doesn't exist. Document identity is determined
// by the matchField parameter, which must be a keyword field.
// Returns an error if the number of documents matching the matchField is not exactly 1.
// Note: This implementation does not handle file renames - clients must explicitly
// delete the old file and add (or update) the new file when renames happen.
func (w *Writer) UpdateDocument(matchField types.Field, newDoc types.Document) error {
	err := w.DeleteDocumentByMatchField(matchField)
	if err != nil {
		return err
	}

	return w.AddDocument(newDoc)
}

func (w *Writer) AddDocument(doc types.Document) error {
	w.docIndex++

	// **Always store DocID.**
	docID := uint64(w.generation)<<32 | uint64(w.docIndex)
	idKey := w.storedFieldKey(docID, types.DocIDField)
	w.batch.Set(idKey, Uint64ToBytes(docID), nil)

	for _, fieldName := range doc.Fields() {
		field := doc.Field(fieldName)
		if _, ok := w.fieldPostingLists[field.Name()]; !ok {
			w.fieldPostingLists[field.Name()] = make(postingLists, 0)
		}
		postingLists := w.fieldPostingLists[field.Name()]

		// Tokenizers are not thread-safe, so the writer must create its own instances.
		if _, ok := w.tokenizers[field.Name()]; !ok {
			w.tokenizers[field.Name()] = field.Schema().MakeTokenizer()
		}
		tokenizer := w.tokenizers[field.Name()]

		tokenizer.Reset(bytes.NewReader(field.Contents()))

		for tokenizer.Next() == nil {
			ngram := string(tokenizer.Ngram())
			if _, ok := postingLists[ngram]; !ok {
				postingLists[ngram] = posting.NewList()
			}
			postingLists[ngram].Add(docID)
		}

		if field.Schema().Stored() {
			storedFieldKey := w.storedFieldKey(docID, field.Name())
			w.batch.Set(storedFieldKey, field.Contents(), nil)
		}
	}
	if w.batch.Len() >= batchFlushSizeBytes {
		if err := w.flushBatch(); err != nil {
			return err
		}
	}
	return nil
}

func (w *Writer) flushBatch() error {
	if w.batch.Empty() {
		return nil
	}
	w.log.Infof("Batch size is %d", w.batch.Len())
	if err := w.batch.Commit(pebble.NoSync); err != nil {
		return err
	}
	w.log.Debugf("flushed batch")
	w.batch = w.db.NewBatch()
	return nil
}

func (w *Writer) Flush() error {
	mu := sync.Mutex{}
	eg := new(errgroup.Group)
	eg.SetLimit(runtime.GOMAXPROCS(0))
	writePLs := func(key []byte, pl posting.List) error {
		valueLength := posting.GetSerializedSizeInBytes(pl)
		keyLength := len(key)

		mu.Lock()
		defer mu.Unlock()
		op := w.batch.MergeDeferred(keyLength, valueLength)
		copy(op.Key, key)
		if err := posting.MarshalInto(pl, op.Value[:0]); err != nil {
			return err
		}
		if err := op.Finish(); err != nil {
			return err
		}
		if w.batch.Len() >= batchFlushSizeBytes {
			if err := w.flushBatch(); err != nil {
				return err
			}
		}
		return nil
	}
	fieldNames := slices.Sorted(maps.Keys(w.fieldPostingLists))
	for _, fieldName := range fieldNames {
		postingLists := w.fieldPostingLists[fieldName]
		log.Printf("field: %q had %d ngrams", fieldName, len(postingLists))
		for ngram, docIDs := range postingLists {
			ngram := ngram
			fieldName := fieldName
			docIDs := docIDs
			eg.Go(func() error {
				return writePLs(w.postingListKey(ngram, fieldName), docIDs)
			})
		}
	}
	if w.deletes.GetCardinality() > 0 {
		eg.Go(func() error {
			plKey := w.postingListKey(types.DeletesField, types.DeletesField)
			return writePLs(plKey, w.deletes)
		})
	}
	if err := eg.Wait(); err != nil {
		return err
	}
	return w.flushBatch()
}

type Reader struct {
	ctx    context.Context
	db     pebble.Reader
	schema types.DocumentSchema // TODO(jdelfino): Could store this in the index, in theory
	log    log.Logger

	namespace string
}

func NewReader(ctx context.Context, db pebble.Reader, namespace string, schema types.DocumentSchema) *Reader {
	subLog := log.NamedSubLogger(fmt.Sprintf("reader-%s", namespace))
	return &Reader{
		ctx:       ctx,
		db:        db,
		schema:    schema,
		log:       subLog,
		namespace: namespace,
	}
}

func (r *Reader) storedFieldKey(docID uint64, field string) []byte {
	return []byte(fmt.Sprintf("%s:doc:%d:%s", r.namespace, docID, field))
}

func (r *Reader) allDocIDs() (posting.FieldMap, error) {
	iter, err := r.db.NewIter(&pebble.IterOptions{
		LowerBound: r.storedFieldKey(0, types.DocIDField),
		UpperBound: []byte(fmt.Sprintf("%s:doc:\xff", r.namespace)),
	})
	if err != nil {
		return nil, err
	}
	defer iter.Close()
	defer func() {
		r.recordIterStats(iter, docField)
	}()

	resultSet := posting.NewList()
	k := key{}

	fieldSet := make(map[string]struct{})
	for iter.First(); iter.Valid(); iter.Next() {
		if err := k.FromBytes(iter.Key()); err != nil {
			return nil, err
		}
		if k.keyType == docField && k.field == types.DocIDField {
			resultSet.Add(BytesToUint64(iter.Value()))
		} else {
			fieldSet[k.field] = struct{}{}
		}
		continue
	}
	fm := posting.NewFieldMap()
	for fieldName := range fieldSet {
		fm.OrField(fieldName, resultSet)
	}
	return fm, nil
}

func (r *Reader) recordIterStats(iter *pebble.Iterator, kt indexKeyType) {
	tracker := performance.TrackerFromContext(r.ctx)
	if tracker == nil {
		return
	}
	stats := iter.Stats()
	iStats := stats.InternalStats
	switch kt {
	case docField:
		tracker.Add(performance.DOC_BYTES_READ, int64(iStats.KeyBytes+iStats.ValueBytes))
		tracker.Add(performance.DOC_KEYS_SCANNED, int64(iStats.PointCount))
	case ngramField:
		tracker.Add(performance.INDEX_BYTES_READ, int64(iStats.KeyBytes+iStats.ValueBytes))
		tracker.Add(performance.INDEX_KEYS_SCANNED, int64(iStats.PointCount))
	default:
		break
	}
}

func (r *Reader) getStoredFields(docID uint64, fieldNames ...string) (map[string]types.Field, error) {
	docIDStart := r.storedFieldKey(docID, "")
	iter, err := r.db.NewIter(&pebble.IterOptions{
		LowerBound: docIDStart,
		UpperBound: r.storedFieldKey(docID, "\xff"),
	})
	if err != nil {
		return nil, err
	}
	defer iter.Close()
	defer func() {
		r.recordIterStats(iter, docField)
	}()

	shouldCopyField := func(fieldName string) bool {
		if len(fieldNames) == 0 {
			return true
		}
		for _, allowedFieldName := range fieldNames {
			if allowedFieldName == fieldName {
				return true
			}
		}
		return false
	}

	fields := make(map[string]types.Field, 0)
	k := key{}
	for iter.First(); iter.Valid(); iter.Next() {
		if err := k.FromBytes(iter.Key()); err != nil {
			return nil, err
		}
		if k.keyType != docField || k.field == types.DocIDField {
			// Skip docID -- we already have it from args.
			continue
		}

		if !shouldCopyField(k.field) {
			continue
		}
		fieldVal := make([]byte, len(iter.Value()))
		copy(fieldVal, iter.Value())
		fields[k.field] = r.schema.Field(k.field).MakeField(fieldVal)
	}
	return fields, nil
}

// TODO(jdelfino): We can't know if the document exists or not until we fetch the fields, but we
// also want to fetch lazily, to avoid unnecessary fetches. This results in missing document
// errors surfacing way downstream, in code that probably doesn't expect the document to be able to
// be empty. Consider at least looking up the id field here to ensure the document exists.
func (r *Reader) GetStoredDocument(docID uint64) types.Document {
	return r.newLazyDoc(docID)
}

// postingList looks up the set of docIDs matching the provided ngram.
// If `field` is set to a non-empty value, matches are restricted to just the
// specified field. Otherwise, all fields are searched.
// If `restrict` is set to a non-empty value, matches will only be returned if
// they are both found and also are present in the restrict set.
func (r *Reader) postingList(ngram []byte, restrict posting.FieldMap, field string) (posting.FieldMap, error) {
	minKey := []byte(fmt.Sprintf("%s:gra:%s:%s", r.namespace, ngram, field))
	maxKey := append(minKey, byte('\xff'))
	iter, err := r.db.NewIter(&pebble.IterOptions{
		LowerBound: minKey,
		UpperBound: maxKey,
	})
	if err != nil {
		return nil, err
	}
	defer iter.Close()
	defer func() {
		r.recordIterStats(iter, ngramField)
	}()

	k := key{}
	resultSet := posting.NewFieldMap()
	for iter.First(); iter.Valid(); iter.Next() {
		if err := k.FromBytes(iter.Key()); err != nil {
			return nil, err
		}
		if k.keyType != ngramField {
			return nil, status.FailedPreconditionErrorf("key %q not ngram field!", iter.Key())
		}
		if field != k.field {
			break
		}
		if !bytes.Equal(ngram, k.data) {
			continue
		}
		postingList, err := posting.Unmarshal(iter.Value())
		if err != nil {
			return nil, err
		}
		if tracker := performance.TrackerFromContext(r.ctx); tracker != nil {
			tracker.Add(performance.POSTING_LIST_COUNT, 1)
			tracker.Add(performance.POSTING_LIST_DOCIDS_COUNT, int64(postingList.GetCardinality()))
		}

		resultSet.OrField(k.field, postingList)
	}
	if restrict.GetCardinality() > 0 {
		resultSet.And(restrict)
	}
	return resultSet, nil
}

const (
	QNone = ":none"
	QAll  = ":all"

	QAnd = ":and"
	QOr  = ":or"
	QEq  = ":eq"
)

var allowedAtoms = []string{QNone, QAll, QEq, QAnd, QOr}

func qOp(expr *ast.Node) (string, error) {
	if !expr.IsVector() || len(expr.List()) < 1 {
		return "", status.InvalidArgumentErrorf("%q not q-expr with op", expr)
	}
	firstNode := expr.List()[0]
	if firstNode.Type() != ast.NodeTypeAtom {
		return "", status.InvalidArgumentErrorf("%q not atom", expr)
	}
	atomString, ok := firstNode.Value().(string)
	if !ok {
		return "", status.InvalidArgumentErrorf("Query atom: %q not string", expr.Value())
	}
	if !slices.Contains(allowedAtoms, atomString) {
		return "", status.InvalidArgumentErrorf("Unknown query atom: %q", firstNode.Value())
	}
	return atomString, nil
}

func (r *Reader) postingQuery(q *ast.Node, restrict posting.FieldMap) (posting.FieldMap, error) {
	op, err := qOp(q)
	if err != nil {
		return nil, err
	}
	switch op {
	case QNone:
		return posting.NewFieldMap(), nil
	case QAll:
		if restrict != nil && restrict.GetCardinality() > 0 {
			return restrict, nil
		}
		return r.allDocIDs()
	case QAnd:
		var list posting.FieldMap
		for _, subQuery := range q.List()[1:] {
			l, err := r.postingQuery(subQuery, restrict)
			if err != nil {
				return nil, err
			}
			if list == nil {
				list = l
			} else {
				list.And(l)
			}
		}
		return list, nil
	case QOr:
		list := posting.NewFieldMap()
		for _, subQuery := range q.List()[1:] {
			l, err := r.postingQuery(subQuery, restrict)
			if err != nil {
				return nil, err
			}
			list.Or(l)
		}
		return list, nil
	case QEq:
		children := q.List()
		if len(children) != 3 {
			return nil, status.InvalidArgumentErrorf("%s expression should have 3 elements: %q (has %d)", QEq, children, len(children))
		}
		field, ok := children[1].Value().(string)
		if !ok {
			return nil, status.InvalidArgumentErrorf("field name %q must be a string", children[1])
		}
		ngram, ok := children[2].Value().(string)
		if !ok {
			return nil, status.InvalidArgumentErrorf("ngram %q must be a string/bytes", children[2])
		}
		// TODO(tylerw): consider if this is the right place
		// for this to happen.
		if s, err := strconv.Unquote(ngram); err == nil {
			ngram = s
		}
		pl, err := r.postingList([]byte(ngram), restrict, field)
		if err != nil {
			return nil, err
		}
		return pl, nil
	default:
		return nil, status.FailedPreconditionErrorf("Unknown query op: %q", op)
	}
}

func (r *Reader) removeDeletedDocIDs(results posting.FieldMap) error {
	fm, err := r.postingList([]byte(types.DeletesField), posting.NewFieldMap(), types.DeletesField)
	if err != nil {
		return err
	}
	pl := fm.ToPosting()
	if pl.GetCardinality() == 0 {
		return nil
	}
	for _, docID := range pl.ToArray() {
		results.Remove(docID)
	}
	return nil
}

type docMatch struct {
	docid           uint64
	matchedPostings map[string]types.Posting
}

func (dm *docMatch) FieldNames() []string {
	return slices.Collect(maps.Keys(dm.matchedPostings))
}
func (dm *docMatch) Docid() uint64 {
	return dm.docid
}
func (dm *docMatch) Posting(fieldName string) types.Posting {
	return dm.matchedPostings[fieldName]
}

type lazyDoc struct {
	r *Reader

	id     uint64
	fields map[string]types.Field
}

func (d lazyDoc) ID() uint64 {
	return d.id
}

func (d lazyDoc) Field(name string) types.Field {
	if f, ok := d.fields[name]; ok {
		return f
	}
	fm, err := d.r.getStoredFields(d.id, name)
	if err == nil {
		field, ok := fm[name]
		if !ok {
			d.fields[name] = d.r.schema.Field(name).MakeField(nil)
		} else {
			d.fields[name] = field
		}
	}
	return d.fields[name]
}

func (d lazyDoc) Fields() []string {
	return slices.Collect(maps.Keys(d.fields))
}

func (r *Reader) newLazyDoc(docid uint64) *lazyDoc {
	return &lazyDoc{
		r:      r,
		id:     docid,
		fields: make(map[string]types.Field, 0),
	}
}

func sprint(node *ast.Node) string {
	buf := ""
	if node.IsVector() {
		buf += "("
		children := node.List()
		for i := range children {
			buf += sprint(children[i])
			if i != len(children)-1 {
				buf += " "
			}
		}
	}
	buf = node.Encode() + buf
	if node.IsVector() {
		buf += ")"
	}
	return buf
}

func simplifySQuery(node *ast.Node) *ast.Node {
	if node.IsVector() {
		children := node.List()
		if len(children) == 1 && children[0].IsVector() {
			// Skip redundant outer list wrapping
			r := simplifySQuery(children[0])
			return r
		}

		op, err := qOp(node)
		if err != nil {
			return node // bail
		}

		if (op == QAnd || op == QOr) && len(children) == 2 {
			// Simplify expressions like:
			//   (:and (expr))
			//   (:or (expr))
			// into just (expr)
			r := simplifySQuery(children[1])
			return r
		}

		newNode := ast.NewExpression(node.Token())
		for i := range children {
			if children[i].IsVector() && len(children[i].List()) == 1 {
				atom, ok := (children[i].List()[0]).Value().(string)
				if ok && op == QAnd && atom == QAll {
					// skip '(:all)' nodes ANDed with other
					// terms
					continue
				}
			}
			newNode.Push(simplifySQuery(children[i]))
		}
		return newNode
	}
	return node
}

func (r *Reader) RawQuery(squery string) ([]types.DocumentMatch, error) {
	raw, err := parser.Parse([]byte(squery))
	if err != nil {
		return nil, err
	}
	root := simplifySQuery(raw)
	r.log.Infof("squery: %s", sprint(root))

	start := time.Now()
	bm, err := r.postingQuery(root, posting.NewFieldMap())
	if err != nil {
		return nil, err
	}

	if tracker := performance.TrackerFromContext(r.ctx); tracker != nil {
		tracker.TrackOnce(performance.POSTING_LIST_QUERY_DURATION, int64(time.Since(start)))
	}

	start = time.Now()
	err = r.removeDeletedDocIDs(bm)
	if tracker := performance.TrackerFromContext(r.ctx); tracker != nil {
		tracker.TrackOnce(performance.REMOVE_DELETED_DOCS_DURATION, int64(time.Since(start)))
	}

	if err != nil {
		return nil, err
	}

	docMatches := make(map[uint64]*docMatch, 0)
	for field, pl := range bm {
		for _, docid := range pl.ToArray() {
			if _, ok := docMatches[docid]; !ok {
				docMatches[docid] = &docMatch{
					docid:           docid,
					matchedPostings: make(map[string]types.Posting),
				}
			}
			docMatch := docMatches[docid]
			docMatch.matchedPostings[field] = nil // TODO(tylerw): fill in.
		}
	}

	// Convert to interface (ugh).
	matches := make([]types.DocumentMatch, len(docMatches))
	i := 0
	for _, dm := range docMatches {
		matches[i] = types.DocumentMatch(dm)
		i++
	}
	return matches, nil
}
