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
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const istString = date.toLocaleString("en-IN", options);

  // Determining The TweetId
  const tweetId = props.url.split("/")[5];
  const [clickCopy, setClickCopy] = useState(false);

  if (props.type === linkTypes.Twitter) {
    return (
      <Card
        className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-fit overflow-hidden isolate will-change-auto"
        style={{ contain: "layout paint" }}
      >
        <CardHeader>
          <CardTitle
            className={cn("text-lg font-semibold", dmSansFont.className)}
          >
            {props.title}
          </CardTitle>
          <CardDescription
            className={cn("font-medium", openSansFont.className)}
          >
            {props.description}
          </CardDescription>
          <CardAction className="flex flex-row gap-4 text-lg">
            <a href={props.url} target="_blank">
              <FaExternalLinkAlt className="text-gray-600 hover:cursor-pointer   hover:text-gray-800 transition-all duration-200" />
            </a>

            <div
              onClick={() => {
                navigator.clipboard.writeText(props.url);
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
            <ClientTweetCard
              id={tweetId}
              className="w-full h-full border-0 rounded-none shadow-none transform-none will-change-auto"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col">
          <div
            className={cn(
              "text-gray-700 text-sm flex gap-x-1",
              robotoMonoFont.className
            )}
          >
            {props.tags.map((x) => (
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
    return <div>Unsupported link type</div>;
  }
};

export default LinkCards;
