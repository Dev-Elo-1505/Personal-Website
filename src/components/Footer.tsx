import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";

const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row py-5 px-10 text-center border-t border-[#665e5d] md:h-32">
      <div className="flex items-center gap-2">
        Built with <img src={react} width="20px" /> React <img src={tailwind} width="20px" /> Tailwind
      </div>
      <div className="text-[#665e5d] mt-3 md:mt-0 md:mb-0 mb-10 text-sm">
        Copyright &copy; Elo-oghene 2025 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
