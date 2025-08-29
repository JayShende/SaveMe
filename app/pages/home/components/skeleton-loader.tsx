import { PiLinkSimpleBold } from "react-icons/pi";
import StatsCard from "./ui/cards";
import SkeletonCard from "./ui/skeleton-card";
import { FaGlobe, FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import SearchBarFilter from "./searchBar-Filter";

interface SkeletonLoaderProps {
  showCards: boolean;
}

const SkeletonLoader = ({
  showCards
}:SkeletonLoaderProps) => {
  return (
    <>
     {showCards && <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-6">
        <StatsCard
          lable="Total Links"
          icon={PiLinkSimpleBold}
          color="blue"
          loading={true}
        />
        <StatsCard
          lable="Twitter"
          icon={FaXTwitter}
          color="red"
          loading={true}
        />
        <StatsCard
          lable="Instagram"
          icon={LuInstagram}
          color="cyan"
          loading={true}
        />
        <StatsCard
          lable="Web URL"
          icon={FaGlobe}
          color="purple"
          loading={true}
        />
      </div>}
      <SearchBarFilter />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mx-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  );
};

export default SkeletonLoader;
