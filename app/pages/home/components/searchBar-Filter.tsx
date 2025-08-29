"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoFilterSharp } from "react-icons/io5";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SearchBarFilter = ({
  search,
  setSearch,
}: {
  search?: string;
  setSearch?: (value: string) => void;
}) => {
  if (!setSearch) return null;
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

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="outline" className="w-20">
          <IoFilterSharp />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
