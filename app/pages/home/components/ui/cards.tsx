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
import { interFont } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

interface cardsProps {
  lable: string;
  value?: number;
  icon: IconType;
  color: string;
  loading:boolean;
}

const colorClasses: Record<string, { bg: string; text: string }> = {
  cyan: { bg: "bg-cyan-50", text: "text-cyan-800" },
  purple: { bg: "bg-purple-50", text: "text-purple-800" },
  red: { bg: "bg-red-50", text: "text-red-800" },
  blue: { bg: "bg-blue-50", text: "text-blue-800" },
  // add more as needed
};

const StatsCard = ({ lable, value, icon: Icon, color,loading }: cardsProps) => {
  const classes = colorClasses[color] || colorClasses["blue"]; // fallback

  if(loading)
  {
    return(
      <Card>
      <CardContent className="flex gap-x-4">
        <div className={`${classes.bg} p-3 w-fit rounded-lg`}>
          <Icon className={`w-5 h-5 ${classes.text}`} />
        </div>
        <div className={cn("flex flex-col font-medium", interFont.className)}>
          <span className="text-zinc-600">{lable}</span>
         <Skeleton className="h-4 w-8 " />
        </div>
      </CardContent>
    </Card>
    )
  }

  return (
    <Card>
      <CardContent className="flex gap-x-4">
        <div className={`${classes.bg} p-3 w-fit rounded-lg`}>
          <Icon className={`w-5 h-5 ${classes.text}`} />
        </div>
        <div className={cn("flex flex-col text-sm font-medium", interFont.className)}>
          <span className="text-zinc-600">{lable}</span>
          <span>{value}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
