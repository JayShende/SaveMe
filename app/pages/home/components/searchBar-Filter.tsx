"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoFilterSharp } from "react-icons/io5";

const SearchBarFilter = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) => {
  return (
    <Card className="grid grid-cols-4 mx-6 my-2 px-6">
      <Input
        type="text"
        placeholder="Search"
        className="col-span-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="button" variant="outline" className="w-20">
        <IoFilterSharp />
      </Button>
    </Card>
  );
};

export default SearchBarFilter;
