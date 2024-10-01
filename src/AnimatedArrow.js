import React from 'react';
import { motion } from 'framer-motion';

const AnimatedArrow = () => {
  return (
    <motion.div
      className="absolute top-20 right-10" 
      animate={{ y: [0, 20, 0] }} // Animation de rebond
      transition={{ duration: 1, repeat: Infinity }} // Répéter indéfiniment
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        className="w-14 h-14"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />{/* Flèche vers le haut */}
      </svg>
    </motion.div>
  );
};

export default AnimatedArrow;
