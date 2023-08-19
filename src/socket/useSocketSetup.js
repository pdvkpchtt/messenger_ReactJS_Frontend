import { useContext, useEffect } from "react";

import { AccountContext } from "../components/AccountContext";
import socket from "./socket";

const useSocketSetup = () => {
  const { setUser } = useContext(AccountContext);

  useEffect(() => {
    socket.connect();
    socket.on("connect_error", () => {
      setUser({ loggedIn: false });
    });

    return () => {
      socket.off("connect_error");
    };
  }, [setUser]);
};

export default useSocketSetup;
