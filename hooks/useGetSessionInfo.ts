

import { auth } from "@/auth";
import { useEffect, useState } from "react";

export function useGetSessionInfo() {
  const [data, setdata] = useState({});

  useEffect(() => {
    async function getSessionDetails() {
      const session = await auth();
      console.log("Session");
      console.log(session);
      if (!session) {
        throw new Error("Network response was not ok");
      }
      setdata(session);
      console.log(data);
    }
    getSessionDetails()
  }, []);

  return {data}
}
