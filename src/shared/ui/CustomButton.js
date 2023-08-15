import { motion } from "framer-motion";

const CustomButton = ({ text = "empty", onPress = () => {} }) => {
  return (
    <motion.button
      className="w-fit px-[16px] py-[8px] rounded-[13px] bg-[#604ae6] text-[#fff] font-medium transition duration-[300ms] hover:bg-[#7A67EF] select-none"
      whileTap={{ scale: 0.9 }}
      onTap={() => onPress()}
    >
      {text}
    </motion.button>
  );
};

export default CustomButton;
