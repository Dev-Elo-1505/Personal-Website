import { useState } from "react";
import { navData } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <nav className="flex justify-center items-center sticky top-5 z-50 pb-5">
      <div className="flex justify-center items-center px-6 py-2 w-fit bg-black/5 rounded-lg bg-clip-padding backdrop-filter backdrop-blur border border-white/10">
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
                    className="absolute text-xs bg-black text-white px-2 py-1 rounded-md whitespace-nowrap pointer-events-none"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
              <a
                href={href}
                className="text-dark hover:text-gray-400 transition-colors p-2"
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
