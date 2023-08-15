import React from "react";

const TextHead = ({ text = "empty", additionStyle }) => {
  return (
    <p
      className="text-[14px] font-medium text-[#929292] leading-[14px] select-none"
      style={additionStyle}
    >
      {text}
    </p>
  );
};

export default TextHead;
