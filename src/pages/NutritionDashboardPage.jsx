import { useMemo } from "react";
import nutritionHtmlRaw from "../../../nutrition.html?raw";
import nutritionCssRaw from "../../../nutrition.css?raw";
import nutritionJsRaw from "../../../nutrition.js?raw";

function normalizeAssetPaths(value) {
  return value
    .replace(/(["'(])images\//g, "$1/images/")
    .replace(/url\((["']?)images\//g, "url($1/images/");
}

export default function NutritionDashboardPage() {
  const srcDoc = useMemo(() => {
    const html = normalizeAssetPaths(nutritionHtmlRaw)
      .replace(/<link[^>]*nutrition\.css[^>]*>\s*/i, "")
      .replace(/<script[^>]*src=["']nutrition\.js["'][^>]*><\/script>\s*/i, "");

    const css = normalizeAssetPaths(nutritionCssRaw);
    const js = nutritionJsRaw.replace(/<\/script/gi, "<\\/script");

    return html
      .replace("</head>", `<style>${css}</style></head>`)
      .replace("</body>", `<script>${js}</script></body>`);
  }, []);

  return (
    <iframe
      title="Nutrition Dashboard"
      srcDoc={srcDoc}
      style={{
        width: "100%",
        minHeight: "100vh",
        height: "100vh",
        border: 0,
        display: "block",
        background: "#F7F3EE",
      }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  );
}
