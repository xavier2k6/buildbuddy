"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1546],{43831:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>l,default:()=>_,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var d=n(74848),r=n(28453);function o(e){const s={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h3,{id:"exported_buildbuddy_remote_execution_queue_length-gauge",children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"exported_buildbuddy_remote_execution_queue_length"})})," (Gauge)"]}),"\n",(0,d.jsx)(s.p,{children:"Number of actions currently waiting in the executor queue."}),"\n",(0,d.jsx)(s.h4,{id:"labels",children:"Labels"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.strong,{children:"pod_name"})}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-promql",children:"sum by(pod_name) (exported_buildbuddy_remote_execution_queue_length)\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"exported_buildbuddy_invocation_duration_usec-histogram",children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"exported_buildbuddy_invocation_duration_usec"})})," (Histogram)"]}),"\n",(0,d.jsxs)(s.p,{children:["The total duration of each invocation, in ",(0,d.jsx)(s.strong,{children:"microseconds"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"labels-1",children:"Labels"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"invocation_status"})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"pod_name"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"examples-1",children:"Examples"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-promql",children:"# Median invocation duration in the past 5 minutes\nhistogram_quantile(\n0.5,\nsum(rate(exported_buildbuddy_invocation_duration_usec_bucket[5m])) by (le)\n)\n\n# Number of invocations per Second\nsum by (invocation_status) (rate(exported_buildbuddy_invocation_duration_usec_count[5m]))\n\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"exported_buildbuddy_remote_cache_num_hits-counter",children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"exported_buildbuddy_remote_cache_num_hits"})})," (Counter)"]}),"\n",(0,d.jsx)(s.p,{children:"Number of cache hits."}),"\n",(0,d.jsx)(s.h4,{id:"labels-2",children:"Labels"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"cache_type"})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"pod_name"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"examples-2",children:"Examples"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-promql",children:"# Number of Hits as measured over the last week\nsum by (cache_type) (increase(exported_buildbuddy_remote_cache_num_hits[1w]))\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"exported_buildbuddy_remote_cache_download_size_bytes-counter",children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"exported_buildbuddy_remote_cache_download_size_bytes"})})," (Counter)"]}),"\n",(0,d.jsx)(s.p,{children:"Number of bytes downloaded from the remote cache."}),"\n",(0,d.jsx)(s.h4,{id:"labels-3",children:"Labels"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.strong,{children:"pod_name"})}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"examples-3",children:"Examples"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-promql",children:"# Number of bytes downloaded as measured over the last week\nsum(increase(exported_buildbuddy_remote_cache_download_size_bytes[1w]))\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"exported_buildbuddy_remote_cache_upload_size_bytes-counter",children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"exported_buildbuddy_remote_cache_upload_size_bytes"})})," (Counter)"]}),"\n",(0,d.jsx)(s.p,{children:"Number of bytes uploaded to the remote cache."}),"\n",(0,d.jsx)(s.h4,{id:"labels-4",children:"Labels"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.strong,{children:"pod_name"})}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"examples-4",children:"Examples"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-promql",children:"# Number of bytes uploaded as measured over the last week\nsum(increase(exported_buildbuddy_remote_cache_upload_size_bytes[1w]))\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"exported_buildbuddy_remote_execution_duration_usec-histogram",children:[(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"exported_buildbuddy_remote_execution_duration_usec"})})," (Histogram)"]}),"\n",(0,d.jsxs)(s.p,{children:["The total duration of remote execution, in ",(0,d.jsx)(s.strong,{children:"microseconds"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"labels-5",children:"Labels"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"os"})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"pod_name"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"examples-5",children:"Examples"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-promql",children:"# The total duration of remote execution as measured over the last week\nsum by (os) (rate(exported_buildbuddy_remote_execution_duration_usec_sum[1w]))\n"})})]})}function t(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}const i={id:"prometheus-metrics-for-cloud",title:"Prometheus Metrics for Cloud Users",sidebar_label:"Prometheus Metrics for Cloud"},l=void 0,c={id:"prometheus-metrics-for-cloud",title:"Prometheus Metrics for Cloud Users",description:"For cloud users, BuildBuddy exposes Prometheus metrics",source:"@site/../docs/prometheus-metrics-for-cloud.mdx",sourceDirName:".",slug:"/prometheus-metrics-for-cloud",permalink:"/docs/prometheus-metrics-for-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/prometheus-metrics-for-cloud.mdx",tags:[],version:"current",lastUpdatedBy:"Zoey Greer",lastUpdatedAt:1731688924e3,frontMatter:{id:"prometheus-metrics-for-cloud",title:"Prometheus Metrics for Cloud Users",sidebar_label:"Prometheus Metrics for Cloud"},sidebar:"someSidebar",previous:{title:"Prometheus Metrics On-prem",permalink:"/docs/prometheus-metrics-on-prem"},next:{title:"Architecture Overview",permalink:"/docs/architecture-overview"}},u={},a=[{value:"<strong><code>exported_buildbuddy_remote_execution_queue_length</code></strong> (Gauge)",id:"exported_buildbuddy_remote_execution_queue_length-gauge",level:3},{value:"Labels",id:"labels",level:4},{value:"Examples",id:"examples",level:4},{value:"<strong><code>exported_buildbuddy_invocation_duration_usec</code></strong> (Histogram)",id:"exported_buildbuddy_invocation_duration_usec-histogram",level:3},{value:"Labels",id:"labels-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"<strong><code>exported_buildbuddy_remote_cache_num_hits</code></strong> (Counter)",id:"exported_buildbuddy_remote_cache_num_hits-counter",level:3},{value:"Labels",id:"labels-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"<strong><code>exported_buildbuddy_remote_cache_download_size_bytes</code></strong> (Counter)",id:"exported_buildbuddy_remote_cache_download_size_bytes-counter",level:3},{value:"Labels",id:"labels-3",level:4},{value:"Examples",id:"examples-3",level:4},{value:"<strong><code>exported_buildbuddy_remote_cache_upload_size_bytes</code></strong> (Counter)",id:"exported_buildbuddy_remote_cache_upload_size_bytes-counter",level:3},{value:"Labels",id:"labels-4",level:4},{value:"Examples",id:"examples-4",level:4},{value:"<strong><code>exported_buildbuddy_remote_execution_duration_usec</code></strong> (Histogram)",id:"exported_buildbuddy_remote_execution_duration_usec-histogram",level:3},{value:"Labels",id:"labels-5",level:4},{value:"Examples",id:"examples-5",level:4}];function h(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["For cloud users, BuildBuddy exposes ",(0,d.jsx)(s.a,{href:"https://prometheus.io",children:"Prometheus"})," metrics\nto monitor and alert on their usage."]}),"\n",(0,d.jsxs)(s.p,{children:["In order to fetch Prometheus metrics, you can add the following ",(0,d.jsx)(s.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config",children:"scrape config"})," in\nyour Prometheus configuration:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-yaml",children:'global:\n  scrape_interval: 3600s\nscrape_configs:\n  - job_name: buildbuddy\n    scheme: https\n    authorization:\n      type: "x-buildbuddy-api-key"\n      credentials: "<buildbuddy_api_key>"\n    metrics_path: "/api/v1/metrics"\n    static_configs:\n      - targets: ["app.buildbuddy.io"]\n'})}),"\n",(0,d.jsxs)(s.p,{children:["To view these metrics in a live-updating dashboard, we recommend using a tool\nlike ",(0,d.jsx)(s.a,{href:"https://grafana.com",children:"Grafana"}),"."]}),"\n",(0,d.jsx)(t,{})]})}function _(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>i});var d=n(96540);const r={},o=d.createContext(r);function t(e){const s=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(o.Provider,{value:s},e.children)}}}]);