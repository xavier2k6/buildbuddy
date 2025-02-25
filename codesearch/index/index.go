package index

import (
	"bytes"
	"context"
	"encoding/binary"
	"fmt"
	"regexp"
	"runtime"
	"slices"
	"sort"
	"strconv"
	"sync"
	"time"

	"github.com/buildbuddy-io/buildbuddy/codesearch/performance"
	"github.com/buildbuddy-io/buildbuddy/codesearch/posting"
	"github.com/buildbuddy-io/buildbuddy/codesearch/token"
	"github.com/buildbuddy-io/buildbuddy/codesearch/types"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/cockroachdb/pebble/v2"
	"github.com/xiam/s-expr/ast"
	"github.com/xiam/s-expr/parser"
	"golang.org/x/exp/maps"
	"golang.org/x/sync/errgroup"
)

var (
	fieldNameRegex   = regexp.MustCompile(`^([a-zA-Z0-9][a-zA-Z0-9_]*)$`)
	nextGenerationMu = sync.Mutex{}
)

const batchFlushSizeBytes = 1_000_000_000 // flush batch every 1G

type postingLists map[string]posting.List

type Writer struct {
	db  *pebble.DB
	log log.Logger

	generation        uint32
	docIndex          uint32
	namespace         string
	tokenizers        map[types.FieldType]types.Tokenizer
	fieldPostingLists map[string]postingLists
	deletes           posting.List
	batch             *pebble.Batch
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
		tokenizers:        make(map[types.FieldType]types.Tokenizer),
		fieldPostingLists: make(map[string]postingLists),
		deletes:           posting.NewList(),
		batch:             db.NewBatch(),
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

	key := []byte("__generation__")
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
	return []byte(fmt.Sprintf("%s:gra:%s:%s", w.namespace, ngram, field))
}

func (w *Writer) deleteKey(docID uint64) []byte {
	return []byte(fmt.Sprintf("%s:del:%d:%s", w.namespace, docID, ""))
}

func (w *Writer) DeleteDocument(docID uint64) error {
	fieldsStart := w.storedFieldKey(docID, "")
	fieldsEnd := w.storedFieldKey(docID, "\xff")
	if err := w.db.DeleteRange(fieldsStart, fieldsEnd, nil); err != nil {
		return err
	}

	pl := posting.NewList(docID)
	buf, err := posting.Marshal(pl)
	if err != nil {
		return err
	}
	plKey := w.postingListKey(types.DeletesField, types.DeletesField)
	if err := w.db.Merge(plKey, buf, nil); err != nil {
		return err
	}
	return nil
}

func (w *Writer) UpdateDocument(matchField types.Field, newDoc types.Document) error {
	if matchField.Type() != types.KeywordField {
		return status.InternalError("match field must be of keyword type")
	}
	key := w.postingListKey(string(matchField.Contents()), matchField.Name())
	value, closer, err := w.db.Get(key)
	if err != nil && err != pebble.ErrNotFound {
		return err
	} else if err == pebble.ErrNotFound {
		// No old doc to delete -- add it and we're done.
		return w.AddDocument(newDoc)
	}
	defer closer.Close()

	postingList, err := posting.Unmarshal(value)
	if err != nil {
		return err
	}

	if postingList.GetCardinality() != 1 {
		return status.FailedPreconditionErrorf("Update would impact > 1 docs")
	}
	oldDocID := postingList.ToArray()[0]

	// Delete the previous document.
	fieldsStart := w.storedFieldKey(oldDocID, "")
	fieldsEnd := w.storedFieldKey(oldDocID, "\xff")
	w.batch.DeleteRange(fieldsStart, fieldsEnd, nil)
	w.deletes.Add(oldDocID)

	// Delete key so that AddDocument can rewrite it.
	w.batch.Delete(key, nil)

	return w.AddDocument(newDoc)
}

func (w *Writer) AddDocument(doc types.Document) error {
	w.docIndex++

	// **Always store DocID.**
	docID := uint64(w.generation)<<32 | uint64(w.docIndex)
	idKey := w.storedFieldKey(docID, types.DocIDField)
	w.batch.Set(idKey, Uint64ToBytes(docID), nil)

	for _, fieldName := range doc.Fields() {
		if !fieldNameRegex.MatchString(fieldName) {
			return status.InvalidArgumentErrorf("Invalid field name %q", fieldName)
		}
		field := doc.Field(fieldName)
		if _, ok := w.fieldPostingLists[field.Name()]; !ok {
			w.fieldPostingLists[field.Name()] = make(postingLists, 0)
		}
		postingLists := w.fieldPostingLists[field.Name()]

		// Lookup the tokenizer to use; if one has not already been
		// created for this field type then make it.
		if _, ok := w.tokenizers[field.Type()]; !ok {
			switch field.Type() {
			case types.SparseNgramField:
				w.tokenizers[field.Type()] = token.NewSparseNgramTokenizer(token.WithMaxNgramLength(6))
			case types.TrigramField:
				w.tokenizers[field.Type()] = token.NewTrigramTokenizer()
			case types.KeywordField:
				w.tokenizers[field.Type()] = token.NewWhitespaceTokenizer()
			default:
				return status.InternalErrorf("No tokenizer known for field type: %q", field.Type())
			}
		}
		tokenizer := w.tokenizers[field.Type()]
		tokenizer.Reset(bytes.NewReader(field.Contents()))

		for tokenizer.Next() == nil {
			ngram := string(tokenizer.Ngram())
			if _, ok := postingLists[ngram]; !ok {
				postingLists[ngram] = posting.NewList()
			}
			postingLists[ngram].Add(docID)
		}

		if field.Stored() {
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
	fieldNames := maps.Keys(w.fieldPostingLists)
	sort.Strings(fieldNames)
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
	ctx context.Context
	db  pebble.Reader
	log log.Logger

	namespace string
}

func NewReader(ctx context.Context, db pebble.Reader, namespace string) *Reader {
	subLog := log.NamedSubLogger(fmt.Sprintf("reader-%s", namespace))
	return &Reader{
		ctx:       ctx,
		db:        db,
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

func (r *Reader) getStoredFields(docID uint64, fieldNames ...string) (map[string]types.NamedField, error) {
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

	fields := make(map[string]types.NamedField, 0)
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
		fields[k.field] = types.NewNamedField(types.TrigramField, k.field, fieldVal, true /*=stored*/)
	}
	return fields, nil
}

func (r *Reader) GetStoredDocument(docID uint64) (types.Document, error) {
	return r.newLazyDoc(docID), nil
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
	return maps.Keys(dm.matchedPostings)
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
	fields map[string]types.NamedField
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
		d.fields[name] = fm[name]
	}
	return d.fields[name]
}

func (d lazyDoc) Fields() []string {
	return maps.Keys(d.fields)
}

func (r *Reader) newLazyDoc(docid uint64) *lazyDoc {
	return &lazyDoc{
		r:      r,
		id:     docid,
		fields: make(map[string]types.NamedField, 0),
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
