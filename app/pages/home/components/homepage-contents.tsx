import LinkCards from "./ui/tweet-card";
import { linksProps } from "@/app/types/link";

const HomePageContents = ({ links }: { links: linksProps[] }) => {
  if (links.length == 0) {
    return <div>No result Found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 pb-24">
      {links.map((x: linksProps) => (
        <div key={x.linkId} className="w-full">
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
