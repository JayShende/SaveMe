"use client";

import { useFetchAllLinks, useGetAllTags } from "@/app/services/queries";
import HomePageContents from "./homepage-contents";
import SearchBarFilter from "./searchBar-Filter";
import SkeletonLoader from "./skeleton-loader";
import StatsCardsCompoenent from "./CardsComponent";
import { linksProps } from "@/app/types/link";
import AddLink from "./add-link-component";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { useState } from "react";

const BodyComponent = () => {
  const [search, setSearch] = useState("");

  const isFetching = useIsFetching({ queryKey: ["Get_Links"] }); // number of active queries
  const isMutating = useIsMutating({mutationKey:["links_mutation"]}); // number of active mutations
  const isLoading = isFetching + isMutating > 0;

  const fetchAllLinks = useFetchAllLinks();
  const getAllTags = useGetAllTags();

  if (fetchAllLinks.isPending || getAllTags.isPending || isLoading) {
    return <SkeletonLoader />;
  }

  if (fetchAllLinks.isError || getAllTags.isError) {
    return <span>Error in fetching Links or Tags</span>;
  }

  // Filter links based on search input (URL, title, and description)
  const filteredLinks = fetchAllLinks.data.filter(
    (link: linksProps) =>
      link.url.toLowerCase().includes(search.toLowerCase()) ||
      link.title?.toLowerCase().includes(search.toLowerCase()) ||
      link.description?.toLowerCase().includes(search.toLowerCase())
  );

  // Stats
  let twitter_links_count = 0;
  let instagram_links_count = 0;
  let weburl_links_count = 0;

  filteredLinks.forEach((x: linksProps) => {
    const urlName = x.url.split("/");
    if (urlName[2] === "x.com") {
      twitter_links_count++;
    } else if (urlName[2] === "www.instagram.com") {
      instagram_links_count++;
    } else {
      weburl_links_count++;
    }
  });

  const total_links_count =
    twitter_links_count + instagram_links_count + weburl_links_count;

  const statsData = {
    total_links_count,
    twitter_links_count,
    instagram_links_count,
    weburl_links_count,
  };

  return (
    <div className="relative">
      <StatsCardsCompoenent {...statsData} />
      <SearchBarFilter search={search} setSearch={setSearch} />
      <HomePageContents links={filteredLinks} />
      <AddLink availableTags={getAllTags.data || []} />
    </div>
  );
};

export default BodyComponent;
