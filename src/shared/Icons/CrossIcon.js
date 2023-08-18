import { motion } from "framer-motion";

const CrossIcon = ({ onPress = () => {} }) => {
  return (
    <motion.svg
      className="cursor-pointer group transition duration-[250ms] rounded-[99px]"
      onClick={onPress}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileTap={{ scale: 0.95 }}
    >
      <circle cx="18" cy="18" r="18" className=" fill-[#2c2c2c]" />
      <path
        className="stroke-[#604ae6] group-hover:stroke-[#7A67EF] transition duration-[250ms]"
        d="M22.5 13.5L13.5 22.5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-[#604ae6] group-hover:stroke-[#7A67EF] transition duration-[250ms]"
        d="M13.5 13.5L22.5 22.5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default CrossIcon;
