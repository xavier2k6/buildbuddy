package testserver

import (
	"fmt"
	"io"
	"net/http"
	"os/exec"
	"sync"
	"testing"
	"time"

	"github.com/bazelbuild/rules_go/go/runfiles"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
)

const (
	// readyCheckPollInterval determines how often to poll BuildBuddy server to check
	// whether it's up and running.
	readyCheckPollInterval = 500 * time.Millisecond
	// readyCheckTimeout determines how long to wait until giving up on waiting for
	// BuildBuddy server to become ready. If this timeout is reached, the test case
	// running the server will fail with a timeout error.
	readyCheckTimeout = 60 * time.Second
)

type Server struct {
	monitoringPort        int
	healthCheckServerType string
	mu                    sync.Mutex
	exited                bool
	// err is the error returned by `cmd.Wait()`.
	err error
}

func runfile(t *testing.T, path string) string {
	resolvedPath, err := runfiles.Rlocation(path)
	if err != nil {
		t.Fatal(err)
	}
	return resolvedPath
}

type Opts struct {
	BinaryRunfilePath     string
	Args                  []string
	HTTPPort              int
	HealthCheckServerType string
}

func Run(t *testing.T, opts *Opts) *Server {
	server := &Server{
		monitoringPort:        opts.HTTPPort,
		healthCheckServerType: opts.HealthCheckServerType,
	}

	cmd := exec.Command(runfile(t, opts.BinaryRunfilePath), opts.Args...)
	cmd.Stdout = log.Writer("[testserver] ")
	cmd.Stderr = log.Writer("[testserver] ")
	if err := cmd.Start(); err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() {
		cmd.Process.Kill() // ignore errors
	})
	go func() {
		err := cmd.Wait()
		server.mu.Lock()
		defer server.mu.Unlock()
		server.exited = true
		server.err = err
	}()
	if err := server.waitForReady(); err != nil {
		t.Fatal(err)
	}
	return server
}

func isOK(resp *http.Response) (bool, error) {
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return false, err
	}
	return string(body) == "OK", nil
}

func (s *Server) waitForReady() error {
	start := time.Now()
	log.Debug("testserver waitForReady start")
	for i := 0; ; i++ {
		s.mu.Lock()
		exited := s.exited
		err := s.err
		s.mu.Unlock()
		if exited {
			return fmt.Errorf("binary failed to start: %s", err)
		}
		resp, err := http.Get(fmt.Sprintf("http://localhost:%d/readyz?server-type=%s", s.monitoringPort, s.healthCheckServerType))
		ok := false
		if err == nil {
			ok, err = isOK(resp)
		}
		if ok {
			return nil
		}
		if time.Since(start) > readyCheckTimeout {
			errMsg := ""
			if err == nil {
				errMsg = fmt.Sprintf("/readyz status: %d", resp.StatusCode)
			} else {
				errMsg = fmt.Sprintf("/readyz err: %s", err)
			}
			return fmt.Errorf("binary failed to start within %s (%d requests): %s", readyCheckTimeout, i, errMsg)
		}
		time.Sleep(readyCheckPollInterval)
	}
}
