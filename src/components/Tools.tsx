import { stacks } from "../data";
import { motion } from "motion/react";
import "../index.css"

const Tools = () => {
const duplicatedStacks = [...stacks, ...stacks]

  return (
    <div className="overflow-hidden flex glass-panel MyGradient w-full">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
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
            className={`${(stack.name === "Github" || stack.name === "NextJs") ? "dark:invert" : ""} transition-all duration-300`}
          />
        ))}
      </motion.div>
    </div>
    
  );
};

export default Tools;
