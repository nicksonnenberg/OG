"use client";

import { motion } from "framer-motion";

interface AnimatedUnderlineProps {
  className?: string;
}

export const AnimatedUnderline = ({ className }: AnimatedUnderlineProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: [0, 1, 1, 1, 0],
          opacity: [0, 1, 1, 0, 0]
        }}
        transition={{
          duration: 4,
          ease: ["easeInOut", "linear", "easeInOut", "easeInOut"],
          times: [0, 0.375, 0.625, 0.75, 1],
          repeat: Infinity,
        }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2%"
        d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
      ></motion.path>
    </motion.svg>
  );
};
