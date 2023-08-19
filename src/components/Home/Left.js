import { useContext, useState } from "react";

import { FriendContext } from "../../pages/Home/Home";
import FriendIcon from "../../shared/Icons/FriendIcon";
import TextHead from "../../shared/Text/TextHead";
import AddFriendModal from "./AddFriendModal";
import ChatCard from "./ChatCard";

const Left = ({ setIndex = () => {} }) => {
  const { friendState } = useContext(FriendContext);

  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="p-[16px] border-b-[1px] items-center border-[#2c2c2c] flex flex-row justify-between">
        <TextHead
          text="Add friend"
          additionStyle={{ fontSize: 20, fontWeight: "medium" }}
        />

        <FriendIcon onPress={() => setModal(true)} />
      </div>
      <div className="overflow-y-scroll rounded-bl-[35px] h-[calc(100vh-174px)] flex flex-col">
        {friendState.length === 0 ? (
          <div className="p-[16px]">
            <TextHead text="You have no friends yet..." />
          </div>
        ) : (
          friendState.map((item, index) => (
            <ChatCard
              key={index}
              item={item}
              divider={index !== friendState.length - 1}
              onPress={() => setIndex(index)}
            />
          ))
        )}
      </div>

      <AddFriendModal
        handleClose={() => {
          setModal(false);
        }}
        isOpen={modal}
      />
    </>
  );
};

export default Left;
