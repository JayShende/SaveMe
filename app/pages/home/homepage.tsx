import { auth } from "@/auth";
import HeaderHomePage from "./components/header";

import BodyComponent from "./components/body-component";
const HomePage = async () => {
  const session = await auth();
  if (!session?.user) {
    return (
      <div className="bg-emerald-100 w-full h-10 flex items-center justify-center text-sm text-red-500">
        No active session
      </div>
    );
  }

  const { name } = session.user;
  if (name == null || name == undefined) {
    return;
  }
  return (
    <div className="w-full h-full flex flex-col gap-y-3">
      <HeaderHomePage username={name} />

      <BodyComponent />
    </div>
  );
};

export default HomePage;
