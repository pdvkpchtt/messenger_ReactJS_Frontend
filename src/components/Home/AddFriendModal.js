import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import CrossIcon from "../../shared/Icons/CrossIcon";
import CustomButton from "../../shared/ui/CustomButton";
import CustomInput from "../../shared/ui/CustomInput";

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { bottom: "-100%", transition: { type: "spring" } },
  isOpen: { bottom: "0%" },
  exit: { bottom: "-100%" },
};
const AddFriendModal = ({
  handleClose = () => {},
  isOpen = false,
  translate = "translate(-50%, 0%)",
}) => {
  const [friendName, setFriendName] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-[70%]"
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <motion.div
            className="[@media(hover)]:max-w-[500px] w-full h-fit fixed bg-[#222222] bottom-0 left-[50%] rounded-t-[35px]"
            variants={containerVariant}
            style={{ transform: translate }}
          >
            <div className="p-[12px] w-full flex justify-end border-b-[1px] border-b-[#2c2c2c]">
              <CrossIcon
                onPress={() => {
                  handleClose();
                  setFriendName("");
                }}
              />
            </div>

            <div className="p-[16px] w-full flex flex-col gap-[16px] justify-center items-center">
              <CustomInput
                value={friendName}
                onChange={(value) => setFriendName(value)}
                head="Enter friend name:"
                placeholder="Friend name"
                maxLength={10}
              />
              <CustomButton text="Submit" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddFriendModal;
