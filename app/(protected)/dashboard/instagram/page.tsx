"use client";
import CommmonHeader from "@/app/pages/home/components/common-header";
import HomePageContents from "@/app/pages/home/components/homepage-contents";
import SearchBarFilter from "@/app/pages/home/components/searchBar-Filter";
import SkeletonLoader from "@/app/pages/home/components/skeleton-loader";
import { useGetInstagramLinks } from "@/app/services/queries";
import { linksProps } from "@/app/types/link";
import { useState } from "react";

const Instagram = () => {
  const [search, setSearch] = useState("");

  const instagramLinks = useGetInstagramLinks();
  if (instagramLinks.isPending) {
    return (
      <div className="pt-28 sm:mt-14">
        <SkeletonLoader showCards={false} />
      </div>
    );
  }

  if (instagramLinks.isError) {
    return <span>Error in fetching Links </span>;
  }

  const filteredLinks = instagramLinks.data.filter(
    (link: linksProps) =>
      link.url.toLowerCase().includes(search.toLowerCase()) ||
      link.title?.toLowerCase().includes(search.toLowerCase()) ||
      link.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <CommmonHeader pageName="Instagram" />
      <SearchBarFilter search={search} setSearch={setSearch} />
      <HomePageContents links={filteredLinks} />
    </>
  );
};

export default Instagram;
