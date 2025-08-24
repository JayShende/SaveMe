import { linksProps, linkTypes } from "@/app/types/link";
import { ClientTweetCard } from "@/components/magicui/client-tweet-card";
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

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import InstagramPreview from "./instagram-card";
import WebUrlCard from "./weburl-card";

const LinkCards = (props: linksProps) => {
  // Convert to Date object
  const date = new Date(props.createdAt);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const istString = date.toLocaleString("en-IN", options);

  // Determining The TweetId
  const tweetId = props.url.split("/")[5];
  const [clickCopy, setClickCopy] = useState(false);

  if (props.type === linkTypes.Twitter) {
    return (
      <Card className="group relative h-[500px] bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardHeader className="relative z-10 pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <CardTitle
                className={cn(
                  "text-lg font-bold text-gray-900 line-clamp-2 leading-tight",
                  dmSansFont.className
                )}
              >
                {props.title}
              </CardTitle>
              <CardDescription
                className={cn(
                  "text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed",
                  openSansFont.className
                )}
              >
                {props.description}
              </CardDescription>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 transition-all duration-200 group/btn"
            >
              <FaExternalLinkAlt className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText(props.url);
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

            <button className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 transition-all duration-200 group/btn">
              <MdDelete className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 p-0 flex-1 min-h-0">
          <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-sm">
            <ClientTweetCard
              id={tweetId}
              className="w-full h-full border-0 rounded-xl shadow-none transform-none"
            />
          </div>
        </CardContent>

        <CardFooter className="relative z-10 pt-4 border-t border-gray-100 bg-gradient-to-r from-gray-50/50 to-transparent">
          <div className="w-full">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {props.tags.map((tag) => (
                <span
                  key={tag.name}
                  className={cn(
                    "px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-200 transition-colors duration-200",
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
  } else if (props.type === linkTypes.Instagram) {
    return (
      <InstagramPreview
        url={props.url}
        title={props.title}
        description={props.description}
        tags={props.tags}
        createdAt={props.createdAt}
      />
    );
  } else if (props.type === linkTypes.WebUrl) {
    return (
      <WebUrlCard
        url={props.url}
        title={props.title}
        description={props.description}
        tags={props.tags}
        createdAt={props.createdAt}
      />
    );
  } else {
    return (
      <Card className="h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg rounded-2xl flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🔗</div>
          <p className="text-sm">Unsupported link type</p>
        </div>
      </Card>
    );
  }
};

export default LinkCards;
