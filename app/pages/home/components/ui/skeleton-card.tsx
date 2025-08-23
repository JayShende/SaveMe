import { TweetSkeleton } from "@/components/magicui/tweet-card";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <Card className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-fit overflow-hidden">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-[80px] " />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-[200px]" />
        </CardDescription>
        <CardAction>
          <div className="flex flex-row gap-2">
            <Skeleton className="h-4 w-4 rounded-2xl" />
            <Skeleton className="h-4 w-4 rounded-2xl" />
            <Skeleton className="h-4 w-4 rounded-2xl" />
          </div>
        </CardAction>
      </CardHeader>

      <CardContent className="p-0">
        <div>
          <TweetSkeleton className="w-full h-full border-0 rounded-none shadow-none transform-none will-change-auto" />
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex gap-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
