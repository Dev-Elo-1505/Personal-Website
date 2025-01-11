import { FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="m-auto text-center">
      <h1 className="text-4xl font-bold tracking-widest">ELO-OGHENE</h1>
      <h3 className="m-3 tracking-widest">Software Engineer</h3>
      <div className="flex space-y-4 justify-center items-center gap-4">
        <button className="bg-black cursor-pointer rounded-full text-white p-3 flex gap-2 items-center">
        <FaFileDownload /> Resume
        </button>
        <button className="bg-white border border-black cursor-pointer rounded-full text-black p-3">
          Contact me
        </button>
      </div>
    </section>
  );
};

export default Hero;
