import { useContext } from "react";

import { FriendContext } from "../../pages/Home/Home";
import FriendIcon from "../../shared/Icons/FriendIcon";
import TextHead from "../../shared/Text/TextHead";
import ChatCard from "./ChatCard";

const Left = () => {
  const { friendState, setFriendState } = useContext(FriendContext);

  return (
    <>
      <div className="p-[16px] border-b-[1px] items-center border-[#2c2c2c] flex flex-row justify-between">
        <TextHead
          text="Add friend"
          additionStyle={{ fontSize: 20, fontWeight: "medium" }}
        />

        <FriendIcon />
      </div>
      <div className="overflow-y-scroll rounded-bl-[35px] h-[calc(100vh-174px)] flex flex-col">
        {friendState.length === 0 ? (
          <div className="p-[16px]">
            <TextHead text="You have no friends yet..." />
          </div>
        ) : (
          friendState.map((item, index) => (
            <ChatCard
              item={item}
              key={index}
              divider={index !== friendState.length - 1}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Left;
