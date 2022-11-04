package parser

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"os/user"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/buildbuddy-io/buildbuddy/cli/arg"
	"github.com/buildbuddy-io/buildbuddy/cli/log"
	"github.com/buildbuddy-io/buildbuddy/cli/workspace"
)

var (
	importMatcher = regexp.MustCompile("(import|try-import)\\s+(?P<relative>\\%workspace\\%)?(?P<path>.*)")

	// Inheritance hierarchy: https://bazel.build/run/bazelrc#option-defaults
	// All commands inherit from "common".
	parentCommand = map[string]string{
		"test":           "build",
		"run":            "build",
		"clean":          "build",
		"mobile-install": "build",
		"info":           "build",
		"print_action":   "build",
		"config":         "build",
		"cquery":         "build",
		"aquery":         "build",

		"coverage": "test",
	}
)

type Rules struct {
	All              []*RcRule
	ByPhaseAndConfig map[string]map[string][]*RcRule
}

func StructureRules(rules []*RcRule) *Rules {
	r := &Rules{
		All:              rules,
		ByPhaseAndConfig: map[string]map[string][]*RcRule{},
	}
	for _, rule := range rules {
		byConfig := r.ByPhaseAndConfig[rule.Phase]
		if byConfig == nil {
			byConfig = map[string][]*RcRule{}
			r.ByPhaseAndConfig[rule.Phase] = byConfig
		}
		byConfig[rule.Config] = append(byConfig[rule.Config], rule)
	}
	return r
}

func (r *Rules) ForPhaseAndConfig(phase, config string) []*RcRule {
	byConfig := r.ByPhaseAndConfig[phase]
	if byConfig == nil {
		return nil
	}
	return byConfig[config]
}

// RcRule is a rule parsed from a bazelrc file.
type RcRule struct {
	Phase   string
	Config  string
	Options []string
}

func appendRcRulesFromImport(match []string, opts []*RcRule) ([]*RcRule, error) {
	importPath := ""
	for i, name := range importMatcher.SubexpNames() {
		switch name {
		case "relative":
			if len(match[i]) > 0 {
				importPath, _ = os.Getwd()
			}
		case "path":
			importPath = filepath.Join(importPath, match[i])
		}
	}
	file, err := os.Open(importPath)
	if err != nil {
		return opts, err
	}
	defer file.Close()
	return appendRcRulesFromFile(file, opts)
}

func appendRcRulesFromFile(in io.Reader, opts []*RcRule) ([]*RcRule, error) {
	scanner := bufio.NewScanner(in)
	var err error
	for scanner.Scan() {
		line := scanner.Text()
		// Handle line continuations (lines can end with "\" to effectively
		// continue the same line)
		for strings.HasSuffix(line, `\`) && scanner.Scan() {
			line = line[:len(line)-1] + scanner.Text()
		}

		line = stripCommentsAndWhitespace(line)
		if strings.TrimSpace(line) == "" {
			continue
		}

		if importMatcher.MatchString(line) {
			match := importMatcher.FindStringSubmatch(line)
			// TODO: Prevent import cycles
			opts, err = appendRcRulesFromImport(match, opts)
			if err != nil {
				log.Debugf("Error parsing import: %s", err.Error())
			}
			continue
		}

		opt, err := parseRcRule(line)
		if err != nil {
			log.Debugf("Error parsing bazelrc option: %s", err.Error())
			continue
		}
		// Bazel doesn't support configs for startup options and ignores them if
		// they appear in a bazelrc: https://bazel.build/run/bazelrc#config
		if opt.Phase == "startup" && opt.Config != "" {
			continue
		}
		opts = append(opts, opt)
	}
	return opts, scanner.Err()
}

func stripCommentsAndWhitespace(line string) string {
	index := strings.Index(line, "#")
	if index >= 0 {
		line = line[:index]
	}
	return strings.TrimSpace(line)
}

func parseRcRule(line string) (*RcRule, error) {
	tokens := strings.Fields(line)
	if len(tokens) == 0 {
		return nil, fmt.Errorf("unexpected empty line")
	}
	if strings.HasPrefix(tokens[0], "-") {
		return &RcRule{
			Phase:   "common",
			Options: tokens,
		}, nil
	}
	if !strings.Contains(tokens[0], ":") {
		return &RcRule{
			Phase:   tokens[0],
			Options: tokens[1:],
		}, nil
	}
	phaseConfig := strings.Split(tokens[0], ":")
	if len(phaseConfig) != 2 {
		return nil, fmt.Errorf("invalid bazelrc syntax: %s", phaseConfig)
	}
	return &RcRule{
		Phase:   phaseConfig[0],
		Config:  phaseConfig[1],
		Options: tokens[1:],
	}, nil
}

func ParseRCFiles(filePaths ...string) ([]*RcRule, error) {
	options := make([]*RcRule, 0)
	for _, filePath := range filePaths {
		file, err := os.Open(filePath)
		if err != nil {
			continue
		}
		defer file.Close()
		options, err = appendRcRulesFromFile(file, options)
		if err != nil {
			continue
		}
	}
	return options, nil
}

func ExpandConfigs(args []string) []string {
	ws, err := workspace.Path()
	if err != nil {
		log.Debugf("Could not determine workspace dir: %s", err)
	}
	return expandConfigs(ws, args)
}

func expandConfigs(workspaceDir string, args []string) []string {
	rcFiles := make([]string, 0)
	// TODO: handle --nosystem_rc, --system_rc no, --system_rc=0, etc.
	if arg.Get(args, "system_rc") != "no" {
		rcFiles = append(rcFiles, "/etc/bazel.bazelrc")
		rcFiles = append(rcFiles, `%ProgramData%\bazel.bazelrc`)
	}
	if workspaceDir != "" && arg.Get(args, "workspace_rc") != "no" {
		rcFiles = append(rcFiles, filepath.Join(workspaceDir, ".bazelrc"))
	}
	if arg.Get(args, "home_rc") != "no" {
		usr, err := user.Current()
		if err == nil {
			rcFiles = append(rcFiles, filepath.Join(usr.HomeDir, ".bazelrc"))
		}
	}
	// TODO(siggisim): Handle multiple bazelrc params.
	if b := arg.Get(args, "bazelrc"); b != "" {
		rcFiles = append(rcFiles, b)
	}
	r, err := ParseRCFiles(rcFiles...)
	if err != nil {
		log.Debugf("Error parsing .bazelrc file: %s", err.Error())
		return nil
	}
	rules := StructureRules(r)

	command, commandIndex := arg.GetCommandAndIndex(args)

	// Always apply bazelrc rules in order of the precedence hierarchy. For
	// example, for the "test" command, apply options in order of "common", then
	// "build", then "test".
	phases := getPhases(command)

	// We'll refer to args in bazelrc which aren't expanded from a --config
	// option as "default" args, like a .bazelrc line that just says "-c dbg" or
	// "build -c dbg" as opposed to something qualified like "build:dbg -c dbg".
	//
	// These default args take lower precedence than explicit command line args
	// so we expand those first just after the command.
	var defaultArgs []string
	for _, phase := range phases {
		defaultArgs = appendArgsForConfig(rules, defaultArgs, phase, "" /*=config*/)
	}
	args = concat(args[:commandIndex+1], defaultArgs, args[commandIndex+1:])

	for {
		config, i, length := arg.Find(args, "config")
		if i < 0 {
			break
		}

		var configArgs []string
		for _, phase := range phases {
			configArgs = appendArgsForConfig(rules, configArgs, phase, config)
		}

		args = concat(args[:i], configArgs, args[i+length:])
	}

	log.Debugf("expanded args: %+v", args)

	return args
}

func appendArgsForConfig(rules *Rules, args []string, phase, config string) []string {
	// TODO: Detect cycles in --config definitions, like
	// build:foo --config=bar, build:bar --config=foo
	for _, rule := range rules.ForPhaseAndConfig(phase, config) {
		for i := 0; i < len(rule.Options); i++ {
			opt := rule.Options[i]
			if strings.HasPrefix(opt, "--config=") {
				config := strings.TrimPrefix(opt, "--config=")
				args = appendArgsForConfig(rules, args, phase, config)
			} else if opt == "--config" && i+1 < len(rule.Options) {
				config := rule.Options[i+1]
				args = appendArgsForConfig(rules, args, phase, config)
				// Consume the following argument in this iteration too
				i++
			} else {
				args = append(args, opt)
			}
		}
	}
	return args
}

// getPhases returns the command's inheritance hierarchy in increasing order of
// precedence.
//
// Examples:
//
//     getPhases("run")      // {"common", "build", "run"}
//     getPhases("coverage") // {"common", "build", "test", "coverage"}
func getPhases(command string) (out []string) {
	for {
		if command == "" {
			out = append(out, "common")
			break
		}
		out = append(out, command)
		command = parentCommand[command]
	}
	reverse(out)
	return
}

func reverse(a []string) {
	for i := 0; i < len(a)/2; i++ {
		j := len(a) - i - 1
		a[i], a[j] = a[j], a[i]
	}
}

func concat(slices ...[]string) []string {
	length := 0
	for _, s := range slices {
		length += len(s)
	}
	out := make([]string, 0, length)
	for _, s := range slices {
		out = append(out, s...)
	}
	return out
}
