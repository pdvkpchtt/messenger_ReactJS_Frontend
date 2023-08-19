import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useContext, useState } from "react";

import socket from "../../socket/socket";
import CrossIcon from "../../shared/Icons/CrossIcon";
import CustomButton from "../../shared/ui/CustomButton";
import CustomInput from "../../shared/ui/CustomInput";
import { FriendContext } from "../../pages/Home/Home";

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
const AddFriendModal = ({ handleClose = () => {}, isOpen = false }) => {
  const [friendName, setFriendName] = useState("");
  const [invalid, setInvalid] = useState(null);

  const { friendState, setFriendState } = useContext(FriendContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-[70%] flex justify-center"
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <LayoutGroup>
            <motion.div
              className="[@media(hover)]:max-w-[500px] w-full h-fit fixed bg-[#222222] bottom-0 rounded-t-[35px]"
              variants={containerVariant}
              layout
            >
              <div className="p-[12px] w-full flex justify-end border-b-[1px] border-b-[#2c2c2c]">
                <CrossIcon
                  onPress={() => {
                    handleClose();
                    setFriendName("");
                    setInvalid(null);
                  }}
                />
              </div>

              <div className="p-[16px] w-full flex flex-col gap-[16px] justify-center items-center">
                <CustomInput
                  value={friendName}
                  onChange={(value) => setFriendName(value)}
                  head="Enter friend name:"
                  placeholder="Friend name"
                  invalid={invalid != null}
                  textError={invalid}
                  maxLength={10}
                />
                <CustomButton
                  text="Submit"
                  onPress={() => {
                    if (!friendName.length > 0)
                      setInvalid("This field must be filled");

                    if (
                      friendState.filter((item) => item.username === friendName)
                        .length === 0
                    ) {
                      socket.emit(
                        "add_friend",
                        friendName,
                        ({ errorMsg, done, newFriend }) => {
                          if (done) {
                            setFriendState((c) => [newFriend, ...c]);
                            handleClose();
                            setInvalid(null);
                            setFriendName("");
                            return;
                          }
                          setInvalid(errorMsg);
                        }
                      );
                    } else setInvalid("User is already in your friends list");
                  }}
                />
              </div>
            </motion.div>
          </LayoutGroup>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddFriendModal;
