import React from "react";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grainy-bg min-h-screen font-poppins selection:bg-teal-100 selection:text-teal-900 transition-colors duration-300">
      {/* Decorative Blobs */}
      {/* <div className="blob bg-teal-200 top-[-100px] right-[-100px]" /> */}
      {/* <div className="blob bg-pink-100 bottom-[10%] right-[-100px]" />
      <div className="blob bg-blue-100 top-[40%] left-[-200px]" /> */}
      
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        {children}
      </div>

      <ThemeToggle />
    </div>
  );
};

export default Layout;
