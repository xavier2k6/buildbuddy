load("@build_bazel_rules_nodejs//internal/common:copy_to_bin.bzl", "copy_to_bin")
load("@aspect_rules_esbuild//esbuild:defs.bzl", "esbuild")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@aspect_rules_swc//swc:defs.bzl", "swc_compile")
load("@npm//:jasmine/package_json.bzl", jasmine_bin = "bin")

def _swc(**kwargs):
    swc_compile(
        swcrc = "//:swcrc",
        **kwargs
    )

def ts_library(name, srcs, strict = False, **kwargs):
    tsconfig = "//:tsconfig"
    if strict:
        tsconfig = "//:tsconfig_strict"
    ts_project(
        name = name,
        tsconfig = tsconfig,
        composite = True,
        transpiler = _swc,
        srcs = srcs,
        validate = False,
        # ts_project uses persistent worker by default,
        # However the worker pool is shared per package thus having multiple
        # ts_project rules in the same package will cause the workers to
        # generate the wrong .tsbuildinfo file.
        # Disable for now (use RBE instead).
        #
        # https://github.com/aspect-build/rules_ts/issues/309
        supports_workers = False,
        **kwargs
    )

def ts_jasmine_node_test(name, srcs, deps = [], size = "small", strict = False, **kwargs):
    if len(srcs) != 1:
        fail("srcs must contain exactly one TS source file")

    # jasmine_node_test can't run TS tests directly, so compile the TS to JS
    # first. Note, this produces an ES6 module. We use ES6 modules as our
    # transpilation target throughout the app since esbuild currently does not
    # do code-splitting properly on commonjs modules that are produced by SWC.
    ts_library(
        name = "%s_esm" % name,
        strict = strict,
        testonly = 1,
        srcs = srcs,
        deps = deps + ["//:node_modules/@types/jasmine"],
        **kwargs
    )

    # node only supports running ES6 modules directly if they end with ".mjs",
    # or if package.json has "type":"module". However, neither of these will
    # work. We can't have files end with .mjs, because rules_nodejs just doesn't
    # support it currently. And we would need all transitive deps of the test to
    # end with .mjs, not just the test itself, so copying/renaming is not really
    # feasible either. And we can't set "type":"module" in package.json, because
    # then node would interpret _all_ ".js" files as ES modules, which breaks
    # some rules_nodejs tools that are implemented as .js wrapper scripts in
    # commonjs format. So, we are stuck invoking esbuild here to instead give us
    # a commonjs module that nodejs can run.
    #
    # TODO(bduffany): Use a browser-based test runner since ES6 modules would be
    # more easily supported there.
    esbuild(
        name = "%s_commonjs" % name,
        config = {"resolveExtensions": [".mjs", ".js"]},
        testonly = 1,
        entry_point = srcs[0],
        deps = ["%s_esm" % name],
    )

    # Copy the commonjs module to trick jasmine_node_test into thinking this is
    # a plain JS source. The test fails with "no specs found" if we try to pass
    # the commonjs module output as srcs directly.
    native.genrule(
        name = "%s_entrypoint" % name,
        srcs = [":%s_commonjs.js" % name],
        outs = [":%s_commonjs.test.js" % name],
        cmd_bash = "cp $(SRCS) $@",
        tags = ["local"],
    )

    jasmine_bin.jasmine_test(
        name = name,
        size = "small",
        data = [":%s_commonjs.test.js" % name],
        args = ["**/*.test.js"],
        **kwargs
    )
