import { useMemo } from "react";
import dashboardHtmlRaw from "../components/dashboard.html?raw";
import dashboardCssRaw from "../components/index.css?raw";
import dashboardJsRaw from "../components/index.js?raw";

function normalizeAssetPaths(value) {
  return value
    .replace(/(["'(])images\//g, "$1/images/")
    .replace(/(["'(])tabimages\//g, "$1/tabimages/")
    .replace(/url\((["']?)images\//g, "url($1/images/")
    .replace(/url\((["']?)tabimages\//g, "url($1/tabimages/");
}

export default function SkinDashboardPage() {
  const srcDoc = useMemo(() => {
    const html = normalizeAssetPaths(dashboardHtmlRaw)
      .replace(/<link[^>]*href=["']index\.css["'][^>]*>\s*/i, "")
      .replace(/<script[^>]*src=["']index\.js["'][^>]*><\/script>\s*/i, "");

    const css = normalizeAssetPaths(dashboardCssRaw);
    const js = dashboardJsRaw.replace(/<\/script/gi, "<\\/script");

    return html
      .replace("</head>", `<style>${css}</style></head>`)
      .replace("</body>", `<script>${js}</script></body>`);
  }, []);

  return (
    <iframe
      title="Skin Dashboard"
      srcDoc={srcDoc}
      style={{
        width: "100%",
        minHeight: "100vh",
        height: "100vh",
        border: 0,
        display: "block",
        background: "#f7f3ee",
      }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  );
}
