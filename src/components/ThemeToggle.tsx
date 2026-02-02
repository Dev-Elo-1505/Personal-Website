import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { LuSun, LuMoon, LuMonitor } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: "light", icon: LuSun, label: "Light" },
    { id: "dark", icon: LuMoon, label: "Dark" },
    { id: "system", icon: LuMonitor, label: "System" },
  ] as const;

  const activeOption = options.find((opt) => opt.id === theme) || options[2];

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-1 p-1 glass-panel rounded-2xl shadow-2xl"
          >
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setTheme(opt.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 ${
                  theme === opt.id
                    ? "bg-white/10 dark:bg-white/10 text-black dark:text-white shadow-sm"
                    : "hover:bg-black/5 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400"
                }`}
              >
                <opt.icon size={18} />
                <span className="text-sm font-medium">{opt.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 glass-panel rounded-full relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <activeOption.icon size={22} className="relative z-10" />
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
