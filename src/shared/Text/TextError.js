import React from "react";

const TextError = ({ text = "empty", additionStyle }) => {
  return (
    <p
      className="text-[14px] text-[rgba(255,59,48)] leading-[14px] select-none"
      style={additionStyle}
    >
      {text}
    </p>
  );
};

export default TextError;
