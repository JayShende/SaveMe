import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoFilterSharp } from "react-icons/io5";
const SearchBarFilter = () => {
    
    return (
    <Card className="grid grid-cols-4 mx-6 my-2 px-6">
        <Input type="text" placeholder="Search" className="col-span-3" />
        <Button type="submit" variant="outline" className="w-20">
          <IoFilterSharp />
        </Button>
    </Card>
  );
};

export default SearchBarFilter;
