import { useRef } from "react";
import SendIcon from "../Icons/SendIcon";

const CustomChatInput = ({
  value = "",
  onChange = () => {},
  onPress = () => {},
  placeholder = "empty",
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onPress();
    }
  };

  const ref = useRef(null);

  return (
    <div className="flex flex-row w-full">
      <input
        ref={ref}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full mr-[8px] outline-none bg-[#141414] placeholder:text-[#929292] text-[#fff] p-[8px] rounded-[8px] transition duration-[300ms] hover:inner-border-[1px] hover:inner-border-[#604ae6] focus-within:inner-border-[#604ae6] focus-within:inner-border-[1px]`}
        value={value}
        placeholder={placeholder}
        onKeyDownCapture={(e) => handleKeyDown(e)}
      />

      <SendIcon
        inactive={!value.length > 0}
        onPress={
          value.length > 0
            ? () => {
                onPress();
                ref.current?.focus();
              }
            : () => {}
        }
      />
    </div>
  );
};

export default CustomChatInput;
