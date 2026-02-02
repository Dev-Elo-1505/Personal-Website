import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timeout = setTimeout(() => {
      finishLoading();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  const words = ["THINK.", "BUILD.", "SHIP."];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      y: -1000,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center grainy-bg font-poppins"
        >
          <div className="flex flex-col items-center">
            <div className="flex gap-2 sm:gap-4 mb-4">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={childVariants}
                  className="text-[#37352f] dark:text-[#d3d3d3] text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-[2px] bg-teal-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
