import { useContext, useState } from "react";
import { MessagesContext } from "../../pages/Home/Home";

import CustomChatInput from "../../shared/ui/CustomChatInput";
import socket from "../../socket/socket";

const ChatBox = ({ userId }) => {
  const { setMessages } = useContext(MessagesContext);

  const [messageState, setMessageState] = useState("");

  return (
    <CustomChatInput
      value={messageState}
      onChange={(e) => setMessageState(e)}
      placeholder="Type message..."
      onPress={() => {
        socket.emit("dm", { to: userId, from: null, content: messageState });
        setMessages((prevMsgs) => [
          { to: userId, from: null, content: messageState },
          ...prevMsgs,
        ]);
        setMessageState("");
      }}
    />
  );
};

export default ChatBox;
