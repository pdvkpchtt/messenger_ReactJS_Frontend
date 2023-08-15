import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex flex-col mb-[16px] gap-[5px] [@media(pointer:coarse)]:gap-[2.5px] items-center mx-auto cursor-pointer"
      whileTap={{ scale: 0.95 }}
    >
      <p className="font-bold text-[#604ae6] text-[32px] [@media(pointer:coarse)]:text-[26px] [@media(pointer:coarse)]:leading-[26px] leading-[32px] select-none">
        Chat!
      </p>
      <p className="font-semibold text-[#fff] text-[16px] [@media(pointer:coarse)]:text-[13px] [@media(pointer:coarse)]:leading-[13px] leading-[16px] select-none">
        Without borders
      </p>
    </motion.div>
  );
};

export default Logo;
