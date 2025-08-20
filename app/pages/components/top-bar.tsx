"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { House, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface TopBarProps {
  username: string;
  email: string;
  image?: string;
  initials: string;
}

const TopBar = ({ username, email, image, initials }: TopBarProps) => {
  return (
    <div className=" w-full  ">
      <div className="flex justify-between items-center mx-10">
        <div className="text-sm font-medium">Save Me</div>

        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={image || undefined}
                  alt={username || "user"}
                />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-3">
              <DropdownMenuLabel>Hello 👋 {username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <House />
                Home
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  signOut();
                }}
              >
                <LogOut className="text-red-600" /> Logout
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center"></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
