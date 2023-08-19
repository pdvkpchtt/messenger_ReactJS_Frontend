import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

import { FriendContext, MessagesContext } from "../../pages/Home/Home";
import TextHead from "../../shared/Text/TextHead";
import ChatBox from "./ChatBox";
import Message from "./Message";

const Right = ({ userId, name }) => {
  useEffect(() => {
    bottomDiv.current?.scrollIntoView();
  });
  const bottomDiv = useRef(null);

  const { friendState } = useContext(FriendContext);
  const { messages } = useContext(MessagesContext);

  return friendState.length === 0 ? (
    <div className="p-[16px] w-full justify-center flex items-center h-full">
      <TextHead
        text="You have no friends yet..."
        additionStyle={{ fontSize: 24 }}
      />
    </div>
  ) : (
    <div className="flex flex-col h-full justify-end">
      <div className="overflow-y-scroll mb-[16px] w-full h-[calc(100vh-193px)] items-end">
        <AnimatePresence>
          {friendState.map((item, index) => (
            <div key={index}>
              {name === item.username &&
                messages
                  .filter(
                    (msg) => msg.to === item.userid || msg.from === item.userid
                  )
                  .reverse()
                  .map((message, index) => (
                    <Message
                      key={index}
                      item={message}
                      friend={item}
                      userId={userId}
                    />
                  ))}
            </div>
          ))}
        </AnimatePresence>
        <div ref={bottomDiv} />
      </div>
      <ChatBox userId={userId} />
    </div>
  );
};

export default Right;
