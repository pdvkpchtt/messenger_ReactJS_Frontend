import { useContext } from "react";

import { FriendContext } from "../../pages/Home/Home";
import TextHead from "../../shared/Text/TextHead";

const Right = () => {
  const { friendState } = useContext(FriendContext);

  return friendState.length === 0 ? (
    <div className="p-[16px] w-full justify-center flex items-center h-full">
      <TextHead
        text="You have no friends yet..."
        additionStyle={{ fontSize: 24 }}
      />
    </div>
  ) : (
    <div>Right</div>
  );
};

export default Right;
