"use client";

import { useEffect } from "react";

interface InstagramPreviewProps {
  url: string;
}

const InstagramPreview = ({ url }: InstagramPreviewProps) => {
  useEffect(() => {
    // Instagram requires their embed.js script to render previews
    if (!document.querySelector("#instagram-embed-script")) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      script.id = "instagram-embed-script";
      document.body.appendChild(script);
    } else {
      // reprocess embeds when component updates
      (window as any).instgrm?.Embeds?.process();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "100%",
      }}
    ></blockquote>
  );
};

export default InstagramPreview;
