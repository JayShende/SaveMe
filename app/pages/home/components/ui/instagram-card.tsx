"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dmSansFont, openSansFont, robotoMonoFont } from "@/fonts/fonts";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { cn } from "@/lib/utils";
import RemoveCard from "./remove-card";

interface InstagramEmbedGlobal {
  instgrm?: {
    Embeds?: {
      process?: () => void;
    };
  };
}

interface InstagramPreviewProps {
  url: string;
  title: string;
  description?: string;
  tags: Array<{ name: string }>;
  createdAt: Date;
  linkId: string;
}

const InstagramPreview = ({
  url,
  title,
  description,
  tags,
  createdAt,
  linkId,
}: InstagramPreviewProps) => {
  const [clickCopy, setClickCopy] = useState(false);

  // Convert to Date object
  const date = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const istString = date.toLocaleString("en-IN", options);

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
      (window as unknown as InstagramEmbedGlobal).instgrm?.Embeds?.process?.();
    }
  }, [url]);

  return (
    <Card className="group relative h-[500px] bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <CardTitle
              className={cn(
                "text-lg font-bold text-gray-900 line-clamp-2 leading-tight",
                dmSansFont.className
              )}
            >
              {title}
            </CardTitle>
            <CardDescription
              className={cn(
                "text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed",
                openSansFont.className
              )}
            >
              {description}
            </CardDescription>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 hover:text-pink-700 transition-all duration-200 group/btn"
          >
            <FaExternalLinkAlt className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
          </a>

          <button
            onClick={() => {
              navigator.clipboard.writeText(url);
              setClickCopy(true);
              setTimeout(() => {
                setClickCopy(false);
              }, 1000);
            }}
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 hover:text-green-700 transition-all duration-200 group/btn"
          >
            {clickCopy ? (
              <MdOutlineDone className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            ) : (
              <FaCopy className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            )}
          </button>

          <RemoveCard linkId={linkId} />
        </div>
      </CardHeader>

      <CardContent className="relative z-10 p-0 flex-1 min-h-0">
        <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-sm">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: "12px",
              margin: "0",
              maxWidth: "100%",
              minWidth: "100%",
              padding: "0",
              width: "100%",
              height: "100%",
            }}
          ></blockquote>
        </div>
      </CardContent>

      <CardFooter className="relative z-10 pt-4 border-t border-gray-100 bg-gradient-to-r from-gray-50/50 to-transparent">
        <div className="w-full">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={cn(
                  "px-3 py-1 text-xs font-medium bg-pink-100 text-pink-700 rounded-full border border-pink-200 hover:bg-pink-200 transition-colors duration-200",
                  robotoMonoFont.className
                )}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Timestamp */}
          <div
            className={cn(
              "text-xs text-gray-500 font-medium flex items-center gap-2",
              openSansFont.className
            )}
          >
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            {istString}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default InstagramPreview;
