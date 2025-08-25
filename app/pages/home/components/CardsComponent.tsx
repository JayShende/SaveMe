import StatsCard from "./ui/cards";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";

interface StatsCardsCompoenentProps {
  total_links_count: number;
  twitter_links_count: number;
  instagram_links_count: number;
  weburl_links_count: number;
}

const StatsCardsCompoenent = (props: StatsCardsCompoenentProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-6">
      <StatsCard
        lable="Total Links"
        value={props.total_links_count}
        icon={PiLinkSimpleBold}
        color="blue"
        loading={false}
      />
      <StatsCard
        lable="Twitter"
        value={props.twitter_links_count}
        icon={FaXTwitter}
        color="red"
        loading={false}
      />
      <StatsCard
        lable="Instagram"
        value={props.instagram_links_count}
        icon={LuInstagram}
        color="cyan"
        loading={false}
      />
      <StatsCard
        lable="Web URL"
        value={props.weburl_links_count}
        icon={FaGlobe}
        color="purple"
        loading={false}
      />
    </div>
  );
};

export default StatsCardsCompoenent;
