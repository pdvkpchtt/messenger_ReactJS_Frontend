import { AnimatePresence, motion } from "framer-motion";
import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Left from "../../components/Home/Left";
import Right from "../../components/Home/Right";

export const FriendContext = createContext();

const Home = () => {
  const isMobile = useMediaQuery({ query: "(pointer:coarse)" });

  const [friendState, setFriendState] = useState([
    { username: "Loong naaaaaamsase", connected: false },
    { username: "Danil", connected: true },
  ]);

  return (
    <FriendContext.Provider value={{ friendState, setFriendState }}>
      <AnimatePresence>
        {isMobile ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            className="flex h-fit items-center justify-center flex-row gap-[16px] bg-[#222222] rounded-[35px] w-full p-[16px]"
          >
            <p className="font-semibold text-[#604ae6] text-[26px] text-center">
              Mobile version is in progress...
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            className="flex flex-row bg-[#222222] rounded-[35px] w-full"
          >
            <div className="max-w-[250px] w-full border-r-[1px] border-[#2c2c2c]">
              <Left />
            </div>
            <div className="p-[16px] w-full">
              <Right />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </FriendContext.Provider>
  );
};

export default Home;
