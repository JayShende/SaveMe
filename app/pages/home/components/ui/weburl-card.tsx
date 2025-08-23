"use client";

import { useState } from "react";
import {
  Card,
  CardAction,
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
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
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
    <Card
      className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-fit overflow-hidden isolate will-change-auto"
      style={{ contain: "layout paint" }}
    >
      <CardHeader>
        <CardTitle
          className={cn("text-lg font-semibold", dmSansFont.className)}
        >
          {title}
        </CardTitle>
        <CardDescription className={cn("font-medium", openSansFont.className)}>
          {description}
        </CardDescription>
        <CardAction className="flex flex-row gap-4 text-lg">
          <a href={url} target="_blank">
            <FaExternalLinkAlt className="text-gray-600 hover:cursor-pointer hover:text-gray-800 transition-all duration-200" />
          </a>

          <div
            onClick={() => {
              navigator.clipboard.writeText(url);
              setClickCopy(true);
              setTimeout(() => {
                setClickCopy(false);
              }, 1000);
            }}
          >
            {clickCopy ? (
              <MdOutlineDone className="text-gray-600 hover:text-gray-800 hover:cursor-pointer transition-all duration-200" />
            ) : (
              <FaCopy className="text-gray-600 hover:text-gray-800 hover:cursor-pointer transition-all duration-200" />
            )}
          </div>
          <div>
            <MdDelete className="text-red-500 hover:text-red-800 hover:cursor-pointer transition-all duration-200" />
          </div>
        </CardAction>
      </CardHeader>

      <CardContent className="p-0 overflow-hidden">
        <div className="w-full h-full">
          <div className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-3">
              <FaGlobe className="text-blue-600 text-xl" />
              <div>
                <div className="font-medium text-gray-900">
                  {getDomain(url)}
                </div>
                <div className="text-sm text-gray-500 truncate">{url}</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 line-clamp-3">
              {description || "Click to visit this website"}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col">
        <div
          className={cn(
            "text-gray-700 text-sm flex gap-x-1",
            robotoMonoFont.className
          )}
        >
          {tags.map((x) => (
            <span key={x.name}>#{x.name}</span>
          ))}
        </div>
        <div
          className={cn(
            "text-sm text-gray-800 font-semibold",
            openSansFont.className
          )}
        >
          {istString}
        </div>
      </CardFooter>
    </Card>
  );
};

export default WebUrlCard;
