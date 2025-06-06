// package testcli contains test utilities for end-to-end CLI integration tests.
package testcli

import (
	"bytes"
	"flag"
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"sync"
	"testing"

	"github.com/buildbuddy-io/buildbuddy/cli/storage"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testbazel"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testbazelisk"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testfs"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testgit"
	"github.com/buildbuddy-io/buildbuddy/server/util/lockingbuffer"
	"github.com/buildbuddy-io/buildbuddy/server/util/terminal"
	"github.com/creack/pty"
	"github.com/stretchr/testify/require"
)

var (
	// Set by x_defs in BUILD file
	bbRunfilePath string

	streamOutputs = flag.Bool("test_stream_cli_output", false, "Show live CLI output during test execution.")
	verbose       = flag.Bool("test_cli_verbose", false, "Whether to add --verbose=1 to the CLI.")

	initEnvOnce sync.Once
)

// BinaryPath returns the path to the CLI binary.
// It's usually preferable to use Command() instead.
func BinaryPath(t *testing.T) string {
	return testfs.RunfilePath(t, bbRunfilePath)
}

// Command returns an *exec.Cmd for the CLI binary.
//
// Prefer using BazelCommand for bazel-specific commands, such as build, test, query
// as the additional flags will help improve hermeticity of the tests.
func Command(t *testing.T, workspacePath string, args ...string) *exec.Cmd {
	initEnvOnce.Do(func() {
		// Need a HOME dir for .cache and .config dirs.
		home := testfs.MakeTempDir(t)
		err := os.Setenv("HOME", home)
		require.NoError(t, err)
		// Always run the sidecar in debug mode for tests.
		err = os.Setenv("BB_SIDECAR_ARGS", "--app.log_level=debug")
		require.NoError(t, err)
	})
	if *verbose {
		args = append(args, "--verbose=1")
	}
	cmd := exec.Command(BinaryPath(t), args...)
	cmd.Dir = workspacePath
	if *streamOutputs {
		cmd.Stdout = os.Stderr
		cmd.Stderr = os.Stderr
	}
	return cmd
}

// BazelCommand returns a bazel-specific command with system and home bazelrc ignored
// to ensure hermetic testing result.
func BazelCommand(t *testing.T, workspacePath string, args ...string) *exec.Cmd {
	return Command(t, workspacePath, append([]string{"--nosystem_rc", "--nohome_rc"}, args...)...)
}

// BazeliskCommand returns a bazelisk command to invoke the CLI via the
// .bazelversion trick.
// It's usually preferable to use BazelCommand() except when specifically
// testing bazelisk integration.
func BazeliskCommand(t *testing.T, workspacePath string, args ...string) *exec.Cmd {
	cmd := Command(t, workspacePath, args...)
	cmd.Args[0] = testbazelisk.BinaryPath(t)
	return cmd
}

// Output is like cmd.Output() except that it allows streaming CLI outputs for
// debugging purposes.
func Output(cmd *exec.Cmd) ([]byte, error) {
	buf := bytes.NewBuffer(nil)
	var w io.Writer = buf
	if *streamOutputs {
		w = io.MultiWriter(w, os.Stderr)
		cmd.Stderr = os.Stderr
	}
	cmd.Stdout = w
	err := cmd.Run()
	return buf.Bytes(), err
}

// CombinedOutput is like cmd.CombinedOutput() except that it allows streaming
// CLI outputs for debugging purposes.
func CombinedOutput(cmd *exec.Cmd) ([]byte, error) {
	buf := bytes.NewBuffer(nil)
	var w io.Writer = buf
	if *streamOutputs {
		w = io.MultiWriter(w, os.Stderr)
	}
	cmd.Stdout = w
	cmd.Stderr = w
	err := cmd.Run()
	return buf.Bytes(), err
}

// NewWorkspace creates a new bazel workspace with .bazelversion configured
// to use the pre-downloaded bazel binary from test runfiles.
func NewWorkspace(t *testing.T) string {
	ws := testbazel.MakeTempModule(t, map[string]string{
		".bazelversion": testbazel.BinaryPath(t),
	})
	// Make it a git workspace to test git metadata.
	testgit.Init(t, ws)
	return ws
}

// DumpSidecarLog dumps the sidecar log to the terminal. Useful for debugging.
func DumpSidecarLog(t *testing.T) {
	cacheDir, err := storage.CacheDir()
	require.NoError(t, err)
	entries, err := os.ReadDir(cacheDir)
	require.NoError(t, err)
	for _, entry := range entries {
		if !strings.HasSuffix(entry.Name(), ".log") {
			continue
		}
		b, err := os.ReadFile(filepath.Join(cacheDir, entry.Name()))
		require.NoError(t, err)
		fmt.Printf("--- Sidecar log ---\n%s", string(b))
		return
	}
	require.FailNowf(t, "could not find sidecar logs in cache dir", "")
}

type Terminal struct {
	t      *testing.T
	output *lockingbuffer.LockingBuffer
	// File is the file used for writing to the terminal.
	File *os.File
}

// PTY returns a pseudoterminal for use in tests.
func PTY(t *testing.T) *Terminal {
	ptmx, tty, err := pty.Open()
	require.NoError(t, err)
	t.Cleanup(func() {
		_ = tty.Close()
		_ = ptmx.Close()
	})
	term := &Terminal{
		t: t, File: tty, output: lockingbuffer.New(),
	}
	w := io.Writer(term.output)
	if *streamOutputs {
		w = io.MultiWriter(term.output, os.Stderr)
	}
	go io.Copy(w, ptmx)
	return term
}

// Run runs the given command, writing the output to the terminal.
func (t *Terminal) Run(cmd *exec.Cmd) {
	cmd.Stdout = t.File
	cmd.Stderr = t.File
	err := cmd.Run()
	require.NoError(t.t, err)
}

// Raw returns the raw terminal content.
func (t *Terminal) Raw() string {
	return t.output.String()
}

// Render returns the effective contents currently displayed on the terminal
// screen. For example, if the raw contents contain an ANSI sequence to delete a
// line, that line will not be returned by this function.
func (t *Terminal) Render() string {
	screen, err := terminal.NewScreenWriter(0)
	require.NoError(t.t, err)
	_, err = screen.Write([]byte(t.Raw()))
	require.NoError(t.t, err)
	return string(screen.Render())
}
