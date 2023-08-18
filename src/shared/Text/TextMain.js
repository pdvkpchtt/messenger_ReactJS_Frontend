import React from "react";

const TextMain = ({ text = "empty", additionStyle, tailwindStyle = "" }) => {
  return (
    <p
      className={`${tailwindStyle} text-[14px] text-[#fff] leading-[14px] select-none`}
      style={additionStyle}
    >
      {text}
    </p>
  );
};

export default TextMain;
