package translate

import (
	"os"
	"path/filepath"
	"strings"

	"github.com/buildbuddy-io/buildbuddy/cli/translate/js"
	"github.com/buildbuddy-io/buildbuddy/cli/translate/yaml"
)

type Translator interface {
	Translate(path string, data string) (string, error)
}

var (
	translators = map[string]Translator{
		".js":    js.New(),
		".yaml":  yaml.New(),
		".bazel": nil,
		"":       nil,
	}
)

func Translate(path string) (string, error) {
	fileExt := filepath.Ext(path)
	translator, ok := translators[fileExt]
	if !ok {
		return "", nil
	}
	if translator == nil {
		return path, nil
	}
	fileContents, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}
	output, err := translator.Translate(path, string(string(fileContents)))
	if err != nil {
		return "", err
	}
	fileName := filepath.Base(path)
	outputPath := filepath.Dir(path) + "/" + strings.TrimSuffix(fileName, filepath.Ext(fileName)) + ".bazel"
	output = "# Auto-generated by running `bb fix`\n# Source file: " + path + "\n\n" + output
	os.WriteFile(outputPath, []byte(output), 0777)
	return outputPath, nil
}
