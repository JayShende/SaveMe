import { geistFont, interFont } from "@/fonts/fonts";
import { cn } from "@/lib/utils";

interface HeaderHomePageProps {
  pageName: string;
}

const CommmonHeader = ({ pageName }: HeaderHomePageProps) => {
  return (
    <div className="p-6">
      <div className={cn("text-lg font-semibold", geistFont.className)}>
        Hello 👋
      </div>
      <span className={cn("text-sm text-gray-800", interFont.className)}>
        All Your {pageName} Bookmarks Here
      </span>
    </div>
  );
};

export default CommmonHeader;
