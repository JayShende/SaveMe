"use client";

import { geistFont, interFont } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { Bookmark, House } from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { FaAngleUp } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { signOut } from "next-auth/react";
import Image from "next/image";
interface SideBarProps {
  username: string;
  email: string;
  image?: string;
  initials: string;
}

const navItems = [
  { label: "Home", href: "/dashboard", icon: House },
  { label: "Twitter", href: "/dashboard/twitter", icon: FaXTwitter },
  { label: "Instagram", href: "/dashboard/instagram", icon: LuInstagram },
  { label: "WebURL", href: "/dashboard/weburl", icon: FaGlobe },
];

const SideBar = ({ username, email, image, initials }: SideBarProps) => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-[280px] h-full border-r bg-white sm:flex flex-col justify-between hidden ">
        <div>
          {/* Logo / Title */}
          <div className="flex items-center gap-x-2 text-2xl border-b p-6 ">
            <Bookmark className="text-emerald-600" />
            <span className={cn("font-semibold", geistFont.className)}>
              Bookmark Me
            </span>
          </div>

          {/* Nav Items */}
          <nav className="mt-2">
            {navItems.map((x) => {
              const Icon = x.icon;
              const isActive = pathname === x.href;
              return (
                <Link
                  key={x.href}
                  href={x.href}
                  className={cn(
                    "flex items-center gap-x-3 h-10 m-3 px-3 rounded-lg transition-colors duration-150",
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-semibold"
                      : "text-zinc-600 hover:bg-gray-100 hover:text-zinc-700"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{x.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom user Pane */}
        <Popover>
          <PopoverTrigger>
            <div className=" bg-gray-50 h-15 hover:bg-gray-100 transition-all duration-150 rounded-lg m-3 flex items-center justify-between px-2">
              <div className="flex ">
                {/* <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={image || undefined}
                    alt={username || "user"}
                  />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar> */}
                {image == undefined ? (
                  <span className="bg-muted flex size-full items-center justify-center rounded-full">
                    {initials}
                  </span>
                ) : (
                  <Image
                    src={image}
                    alt="profile-pic"
                    width={45}
                    height={45}
                    className="rounded-full ring-2 ring-gray-600 sm:w-11 w-8 sm:h-11 h-8 "
                  />
                )}

                <div
                  className={cn(
                    "flex flex-col gap-y-1 ml-3 font-semibold",
                    interFont.className
                  )}
                >
                  <span className="text-left text-gray-800 text-sm">
                    {username}
                  </span>
                  <Badge className="bg-blue-600">
                    <LuBadgeCheck /> Verified User
                  </Badge>
                </div>
              </div>

              <FaAngleUp className="text-gray-600" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={cn(
              "w-[250px] h-[100px] flex flex-col justify-between gap-y-2",
              interFont.className
            )}
          >
            <div className="text-sm text-gray-700 font-semibold flex gap-x-2 items-center h-[50%] rounded-sm px-2 hover:bg-gray-100 ">
              <MdOutlineEmail />
              {email}
            </div>
            <div
              className="text-red-600 flex items-center gap-x-2 text-left h-[50%] rounded-sm px-2 hover:bg-gray-100 hover:cursor-pointer "
              onClick={() => {
                signOut();
              }}
            >
              <IoIosLogOut />
              <span className="text-sm font-semibold">Logout</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="w-full h-16 border-t shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white fixed inset-x-0 bottom-0 z-10 sm:hidden grid grid-cols-5 rounded-t-lg place-items-center">
        {navItems.map((x) => {
          const Icon = x.icon;
          const isActive = pathname === x.href;
          return (
            <Link
              key={x.href}
              href={x.href}
              className={cn(
                "flex flex-col items-center justify-center gap-y-1 h-10 m-1  rounded-lg transition-colors duration-150",
                isActive
                  ? " text-emerald-700 font-semibold"
                  : "text-zinc-600 hover:bg-gray-100 hover:text-zinc-700"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold text-xs">{x.label}</span>
            </Link>
          );
        })}
        <Popover>
          <PopoverTrigger className="m-1">
            <div className="flex items-center justify-center ">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src={image || undefined}
                  alt={username || "user"}
                />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={cn(
              "w-[250px] h-[130px] flex flex-col justify-between gap-y-1 mb-5 p-4",
              interFont.className
            )}
          >
            <div
              className={cn("flex gap-x-2  font-semibold", interFont.className)}
            >
              <span className="text-left text-gray-800 text-sm">
                {username}
              </span>
              <Badge className="bg-blue-600 rounded-full">
                <LuBadgeCheck />
              </Badge>
            </div>
            <div className="text-sm text-gray-700 font-semibold flex gap-x-2 items-center  rounded-sm  hover:bg-gray-100 ">
              <MdOutlineEmail />
              {email}
            </div>
            <div
              className="text-red-600 flex items-center gap-x-2 text-left  rounded-sm  hover:bg-gray-100 hover:cursor-pointer "
              onClick={() => {
                signOut();
              }}
            >
              <IoIosLogOut />
              <span className="text-sm font-semibold">Logout</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default SideBar;
