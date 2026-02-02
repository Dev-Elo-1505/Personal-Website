import { useState } from "react";
import { navData } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <nav className="flex justify-center items-center sticky top-5 z-50 pb-5 transition-colors duration-300">
      <div className="flex justify-center items-center px-6 py-2 w-fit glass-panel rounded-lg bg-clip-padding">
        <ul className="flex items-center gap-6 px-2">
          {navData.map(({ id, href, Icon, label }) => (
            <li
              key={id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <AnimatePresence>
                {hoveredId === id && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 35, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute text-xs bg-[#37352f] dark:bg-[#d3d3d3] text-white dark:text-black px-2 py-1 rounded-md whitespace-nowrap pointer-events-none"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
              <a
                href={href}
                className="text-[#37352f] dark:text-[#d3d3d3] hover:text-gray-400 dark:hover:text-gray-500 transition-colors p-2"
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
