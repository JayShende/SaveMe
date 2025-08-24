import LHSSideBar from "@/app/pages/components/lhs-sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  
  
  return (
    <div className="w-screen h-screen flex gap-2">
      {/* LHS Sidebar */}
      <LHSSideBar />
      <main className="flex-1 overflow-y-auto ">{children}</main>

      {/* RHS SidePane */}
    </div>
  );
};

export default Layout;
