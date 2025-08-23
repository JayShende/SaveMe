import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MdAddCircleOutline } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { useState, useEffect } from "react";
import AddLinkForm from "./add-link-form";

interface AddLinkProps {
  availableTags:  Array<{ tagId: string; name: string }>;
}

const AddLink = ({ availableTags }: AddLinkProps) => {
  const [showAnimations, setShowAnimations] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimations(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2 shadow-lg hover:shadow-xl animate-pulse hover:animate-none group">
          {/* Pulse ring effect - only show for 5 seconds */}
          {showAnimations && (
            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20"></div>
          )}

          {/* Main button content */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <IoAdd className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300 ease-out" />
          </div>

          {/* Glow effect - only show for 5 seconds */}
          {showAnimations && (
            <div className="absolute inset-0 rounded-full bg-emerald-300 opacity-30 blur-sm"></div>
          )}
        </button>
      </DialogTrigger>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-y-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle>Tets</DialogTitle>
        <AddLinkForm availableTags={availableTags} />
      </DialogContent>
    </Dialog>
  );
};

export default AddLink;
