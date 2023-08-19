const Message = ({ item, friend }) => {
  return (
    item.content.length > 0 && (
      <div
        className={`${
          item.to === friend.userId
            ? "bg-[rgba(164,164,164,0.2)]"
            : "bg-[rgba(96,74,230,0.3)] ml-auto"
        } max-w-[200px] w-fit h-fit mt-[8px] py-[8px] break-words px-[13px] rounded-[25px] text-[#fff] text-[16px]`}
      >
        {item.content}
      </div>
    )
  );
};

export default Message;
