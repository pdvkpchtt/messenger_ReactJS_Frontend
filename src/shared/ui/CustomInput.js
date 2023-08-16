import { CircularProgressbar } from "react-circular-progressbar";
import TextError from "../Text/TextError";

import TextHead from "../Text/TextHead";

const CustomInput = ({
  value = "",
  onChange = () => {},
  placeholder = "empty",
  password = false,
  head = "",
  textError = "empty",
  invalid = false,
  maxLength,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between">
        {head ? (
          <TextHead
            additionStyle={{ marginBottom: 8, marginLeft: 4 }}
            text={head}
          />
        ) : null}
        {maxLength ? (
          <div className="w-[16px] h-[16px] mr-[4px]">
            <CircularProgressbar
              strokeWidth={15}
              value={value.length}
              maxValue={maxLength}
            />
          </div>
        ) : null}
      </div>

      <input
        onChange={(e) => onChange(e.target.value)}
        className="outline-none bg-[#141414] placeholder:text-[#929292] text-[#fff] p-[8px] rounded-[8px] transition duration-[300ms] hover:inner-border-[1px] hover:inner-border-[#604ae6] focus-within:inner-border-[#604ae6] focus-within:inner-border-[1px]"
        value={value}
        placeholder={placeholder}
        type={password && "password"}
        maxLength={maxLength}
      />

      {invalid ? (
        <TextError
          additionStyle={{ marginTop: 4, marginLeft: 4 }}
          text={textError}
        />
      ) : null}
    </div>
  );
};

export default CustomInput;
