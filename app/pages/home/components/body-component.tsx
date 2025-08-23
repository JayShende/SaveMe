"use client";

import { useFetchAllLinks, useGetAllTags } from "@/app/services/queries";
import HomePageContents from "./homepage-contents";
import SearchBarFilter from "./searchBar-Filter";
import SkeletonLoader from "./skeleton-loader";
import StatsCardsCompoenent from "./CardsComponent";
import { linksProps } from "@/app/types/link";

const BodyComponent = () => {
  const fetchAllLinks = useFetchAllLinks();
  const getAllTags = useGetAllTags();

  if (fetchAllLinks.isPending || getAllTags.isPending) {
    return (
      <>
        <SkeletonLoader />
      </>
    );
  }

  if (fetchAllLinks.isError || fetchAllLinks.isError) {
    return <span>Error in fetching Links or Tags</span>;
  }
  let total_links_count = 0;
  let twitter_links_count=0;
  let instagram_links_count=0;
  let weburl_links_count=0;

  fetchAllLinks.data.map((x:linksProps)=>{
    const urlName=x.url.split("/");
    console.log(urlName);
    if(urlName[2]=="x.com"){
      twitter_links_count++;
    }
    else if(urlName[2]=="www.instagram.com"){
      instagram_links_count++;
    }
    else{
      weburl_links_count++;
    }
  })
  total_links_count=(twitter_links_count+instagram_links_count+weburl_links_count);
  const statsData={
    total_links_count,
    twitter_links_count,
    instagram_links_count,
    weburl_links_count
  }
  return (
    <>
      <StatsCardsCompoenent {...statsData}  />
      <SearchBarFilter />
      <HomePageContents links={fetchAllLinks.data} />
    </>
  );
};

export default BodyComponent;
