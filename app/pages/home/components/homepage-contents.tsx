import LinkCards from "./ui/tweet-card";
import { linksProps } from "@/app/types/link";

const HomePageContents = ({ links }: { links: linksProps[] }) => {
  return (
    <div className="grid grid-cols-3 gap-3 mx-6 isolate">
      {links.map((x: linksProps) => (
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
