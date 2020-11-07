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

export const MotionWrapper = ({ children, className }: React.PropsWithChildren<{className: string}>) => (
  <motion.div initial="out" animate="in" exit="out" variants={pageTransition} className={className}>
    {children}
  </motion.div>
);
