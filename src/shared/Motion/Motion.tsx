import React from "react";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

interface MotionWrapperProps {
  className: string;
  width?: number;
}

export const MotionWrapper = ({
  children,
  className,
  width,
}: React.PropsWithChildren<MotionWrapperProps>) => {
  console.log(width);
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className={className}
      style={{ width: width ? `${width}%` : `100%` }}
    >
      {children}
    </motion.div>
  );
};
