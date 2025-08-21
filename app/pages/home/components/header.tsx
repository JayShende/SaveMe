import { geistFont, interFont } from "@/fonts/fonts";
import { cn } from "@/lib/utils";

interface HeaderHomePageProps {
  username: string;
}

const HeaderHomePage = ({ username }: HeaderHomePageProps) => {
  return (
    <div className="p-6">
      <div className={cn("text-lg font-semibold", geistFont.className)}>
        Hello 👋 {username}
      </div>
      <span className={cn("text-sm text-gray-800", interFont.className)}>
        Welcome to Bookmark Me
      </span>
    </div>
  );
};

export default HeaderHomePage;
