import { motion } from "framer-motion";
import { useState } from "react";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Variants = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.button
        whileTap={{ scale: 1.3 }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        🧑‍🌾 Farm{" "}
        <motion.span
          style={{ display: "inline-block" }}
          variants={{
            open: { scale: [null, 2, 1] },
            closed: { scale: [null, 2, 1] },
          }}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? "🔓" : "🔒"}
        </motion.span>
      </motion.button>
      <motion.ul
        style={{
          listStyleType: "none",
          backgroundColor: "rgb(87, 54, 0)",
          fontSize: "2rem",
        }}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        <motion.li variants={itemVariants}>🐷</motion.li>
        <motion.li variants={itemVariants}>🐮</motion.li>
        <motion.li variants={itemVariants}>🐔</motion.li>
        <motion.li variants={itemVariants}>🐥</motion.li>
        <motion.li variants={itemVariants}>🐑</motion.li>
        <motion.li variants={itemVariants}>🦖</motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Variants;
