import { AnimatePresence, motion } from "framer-motion";

import EmptyAvatar from "../../shared/ui/EmptyAvatar";
import TextMain from "../../shared/Text/TextMain";
import TextHead from "../../shared/Text/TextHead";

const ChatCard = ({ item, divider = false, onPress = () => {} }) => {
  return (
    <div
      className={`flex flex-row gap-[8px] p-[8px] cursor-pointer transition duration-[250ms] hover:bg-[#2c2c2c] ${
        divider ? "border-b-[1px] border-[#2c2c2c]" : "mb-[16px]"
      }`}
      onClick={() => onPress()}
    >
      <EmptyAvatar />
      <div className="flex flex-col gap-[8px] overflow-hidden">
        <TextMain
          text={item.username}
          additionStyle={{ marginTop: 4, fontSize: 16, fontWeight: "medium" }}
          tailwindStyle="whitespace-nowrap truncate"
        />
        {/* doesnt work how it should work :(( */}

        <AnimatePresence>
          {item.connected === false ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TextHead text={"Online"} additionStyle={{ fontSize: 13 }} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatCard;
