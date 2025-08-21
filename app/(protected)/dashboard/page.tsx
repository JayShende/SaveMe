import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import HomePage from "@/app/pages/home/homepage";
const Dash = () => {
  return (
    <div className="w-full h-full">
      <HomePage />
    </div>
  );
};

export default Dash;
