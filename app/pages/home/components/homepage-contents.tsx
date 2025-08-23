"use client";

import { useFetchAllLinks, useGetAllTags } from "@/app/services/queries";
import LinkCards from "./ui/tweet-card";
import { linksProps } from "@/app/types/link";
import SkeletonLoader from "./skeleton-loader";

const HomePageContents = () => {
  const fetchAllLinks = useFetchAllLinks();
  const getAllTags = useGetAllTags();

  if (fetchAllLinks.isPending || getAllTags.isPending) {
    return <SkeletonLoader/>
  }

  if (fetchAllLinks.isError || fetchAllLinks.isError) {
    return <span>Error in fetching Links or Tags</span>;
  }
  return (
    <div className="grid grid-cols-3 gap-3 mx-6 isolate">
      {fetchAllLinks.data.map((x: linksProps) => (
        <div key={x.linkId} className="isolate will-change-auto">
          <LinkCards
            linkId={x.linkId}
            url={x.url}
            type={x.type}
            createdAt={x.createdAt}
            tags={x.tags}
            userId={x.userId}
            title={x.title}
            description={x.description}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePageContents;
