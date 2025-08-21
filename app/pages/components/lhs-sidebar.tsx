import { auth } from "@/auth";
import SideBar from "./sideBar";

const LHSSideBar = async () => {
  const session = await auth();
  if (!session?.user) {
    return (
      <div className="bg-emerald-100 w-full h-10 flex items-center justify-center text-sm text-red-500">
        No active session
      </div>
    );
  }

  const { name, image, email } = session.user;
  if (name == null || name == undefined) {
    return;
  }
  if (email == null || email == undefined) {
    return;
  }
  if (image == null || image == undefined) {
    return;
  }
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "NA";
  if (initials == null || initials == undefined) {
    return;
  }
  return (
    <SideBar username={name} email={email} image={image} initials={initials} />
  );
};

export default LHSSideBar;
