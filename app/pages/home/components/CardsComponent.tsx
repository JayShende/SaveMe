import StatsCard from "./ui/cards";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";

const CardsCompoenent = () => {
  return (
    <div className="flex gap-x-5 px-6 w-max-full flex-wrap">
      <StatsCard
        lable="Total Links"
        value={12}
        icon={PiLinkSimpleBold}
        color="blue"
      />
      <StatsCard lable="Twitter" value={12} icon={FaXTwitter} color="red" />
      <StatsCard lable="Instagram" value={12} icon={LuInstagram} color="cyan" />
      <StatsCard lable="Web URL" value={12} icon={FaGlobe} color="purple" />
    </div>
  );
};

export default CardsCompoenent;
