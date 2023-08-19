import { motion } from "framer-motion";

const SendIcon = ({ onPress = () => {}, inactive = false }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      whileTap={{ scale: 0.9 }}
      onTap={onPress}
      className={`rounded-[99px] w-fit h-fit p-[5px] cursor-pointer transition duration-[250ms] ${
        inactive ? "bg-gray-600" : "bg-[#604ae6] hover:bg-[#7A67EF]"
      }`}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3.402 6.673c-.26-2.334 2.143-4.048 4.266-3.042l11.944 5.658c2.288 1.083 2.288 4.339 0 5.422L7.668 20.37c-2.123 1.006-4.525-.708-4.266-3.042L3.882 13H12a1 1 0 1 0 0-2H3.883l-.48-4.327Z"
        clipRule="evenodd"
      />
    </motion.svg>
  );
};

export default SendIcon;
