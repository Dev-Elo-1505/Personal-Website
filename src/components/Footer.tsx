import { FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row p-5 text-center border-t border-[#665e5d]">
      <div className="flex items-center gap-2">Built with <FaReact /> React <IoLogoVercel /> Vercel</div>
      <div className="text-[#665e5d] mt-3 mb-10">Copyright &copy; Elo-oghene 2025 All Rights Reserved</div>
    </div>
  );
};

export default Footer;
