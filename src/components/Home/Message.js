import { motion } from "framer-motion";

const Message = ({ item, friend, userId }) => {
  return (
    item.content.length > 0 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${
          item.to === friend.userid
            ? "bg-[rgba(96,74,230,0.3)] ml-auto"
            : "bg-[rgba(164,164,164,0.2)]"
        } max-w-[200px] w-fit h-fit mt-[8px] py-[8px] break-words px-[13px] rounded-[25px] text-[#fff] text-[16px]`}
      >
        {item.content}
      </motion.div>
    )
  );
};

export default Message;
