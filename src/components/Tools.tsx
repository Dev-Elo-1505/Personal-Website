import { stacks } from "../data";
import { motion } from "motion/react";
import "../index.css"

const Tools = () => {
const duplicatedStacks = [...stacks, ...stacks]

  return (
    <div className="overflow-hidden  flex bg-black/5 backdrop-blur MyGradient w-full">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center justify-center p-5"
      >
        {duplicatedStacks.map((stack) => (
          <img
          key={stack.id}
            src={stack.src}
            alt={stack.name}
            width="40px"
            title={stack.name}
          />
        ))}
      </motion.div>
    </div>
    
  );
};

export default Tools;
