import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import HomePage from "@/app/pages/homepage";
const Dash = () => {
  return (
    <div className="w-screen h-screen px-6 py-4">
      <HomePage/>
    </div>
  );
};

export default Dash;
