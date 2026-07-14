import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verdict - End the group-chat debate",
    short_name: "Verdict",
    description:
      "One tap, one vote, one final answer. The group-chat debate ender.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FAF5EC",
    theme_color: "#FF4D2E",
    categories: ["productivity", "lifestyle", "social"],
    icons: [
      {
        src: "/verdict-logo.png",
        type: "image/png",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        type: "image/png",
        sizes: "180x180",
        purpose: "maskable",
      },
    ],
  };
}
