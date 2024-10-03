import { motion } from "framer-motion";

const AnimatedArrow = () => {
  return (
      <motion.div
        className="absolute top-[580px] left-[330%]" 
        animate={{ y: [0, 20, 0] }} // Animation de rebond
        transition={{ duration: 1, repeat: Infinity }} // Répéter indéfiniment
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-24 h-24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
  );
};

export default AnimatedArrow;
