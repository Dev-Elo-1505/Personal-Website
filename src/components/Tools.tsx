import { stacks } from "../data";
import { motion } from "motion/react";
import "../index.css"

const Tools = () => {
  return (
    <div className="bg-black/5 backdrop-blur flex MyGradient">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center justify-center p-5"
      >
        {stacks.map((stack) => (
          <img
            src={stack.src}
            alt={stack.name}
            width="50px"
            title={stack.name}
          />
        ))}
      </motion.div>
    </div>
    
  );
};

export default Tools;
