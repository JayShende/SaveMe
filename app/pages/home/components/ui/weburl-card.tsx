"use client";

import { useState } from "react";
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
import { MdDelete } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface WebUrlCardProps {
  url: string;
  title: string;
  description?: string;
  tags: Array<{ name: string }>;
  createdAt: Date;
}

const WebUrlCard = ({
  url,
  title,
  description,
  tags,
  createdAt,
}: WebUrlCardProps) => {
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

  // Extract domain from URL for display
  const getDomain = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return url;
    }
  };

  return (
    <Card className="group relative h-[500px] bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 hover:text-green-700 transition-all duration-200 group/btn"
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
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 transition-all duration-200 group/btn"
          >
            {clickCopy ? (
              <MdOutlineDone className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            ) : (
              <FaCopy className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            )}
          </button>

          <button className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 transition-all duration-200 group/btn">
            <MdDelete className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
          </button>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 p-0 flex-1 min-h-0">
        <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-sm p-6">
          <div className="h-full flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-green-100 to-blue-100">
                <FaGlobe className="text-green-600 text-2xl" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-lg text-gray-900 mb-1">
                  {getDomain(url)}
                </div>
                <div className="text-sm text-gray-500 truncate">{url}</div>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                <div className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                  {description ||
                    "Click to visit this website and explore its content. This link will open in a new tab for your convenience."}
                </div>
              </div>
            </div>
          </div>
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
                  "px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full border border-green-200 hover:bg-green-200 transition-colors duration-200",
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

export default WebUrlCard;
