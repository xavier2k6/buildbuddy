load("@io_bazel_rules_go//go:def.bzl", "go_library")

go_library(
    name = "telemetry",
    srcs = ["telemetry_client.go"],
    importpath = "github.com/buildbuddy-io/buildbuddy/server/telemetry",
    visibility = ["//visibility:public"],
    deps = [
        "//proto:telemetry_go_proto",
        "//server/endpoint_urls/build_buddy_url",
        "//server/environment",
        "//server/nullauth",
        "//server/remote_execution/config",
        "//server/util/grpc_client",
        "//server/util/log",
        "//server/version",
        "@com_github_google_uuid//:uuid",
    ],
)
