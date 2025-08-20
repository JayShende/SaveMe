import TopBar from "./components/top-bar";
import { auth } from "@/auth";
const HomePage = async () => {
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
    <>
      <TopBar username={name} email={email} image={image} initials={initials} />
    </>
  );
};

export default HomePage;
