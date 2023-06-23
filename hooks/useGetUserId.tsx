import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const useGetUserId = () => {
  const { data: session } = useSession();
  const userId = getSessionUserId(session);

  function getSessionUserId(session: any): string {
    if (session?.user?.id) {
      return session.user.id;
    } else if (session?.user?.userId) {
      return session.user.userId;
    } else {
      return "";
    }
  }

  useEffect(() => {
    getSessionUserId(session);
  }, []);

  return { userId };
};

export default useGetUserId;
