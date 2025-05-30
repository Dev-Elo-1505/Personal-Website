import profilePic from "../assets/about-pic.jpg";
import quote from "../assets/quote.jpg";
import SocialBar from "./SocialBar";
import resume from "../document/resume.pdf";

const Hero = () => {
  return (
    <section
      className="flex min-h-screen flex-col lg:flex-row lg:justify-between lg:items-center gap-10 md:px-20 p-5"
      id="home"
    >
      <div className="flex flex-col gap-3 justify-center">
        <div className="w-fit bg-teal-100  rounded-full px-2 py-1 text-teal-500 font-semibold tracking-wide mb-3 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          <p className="text-[10px] ">AVAILABLE FOR WORK</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-5 md:text-4xl lg:text-5xl">
            <span>Hi, I'm Elo-oghene </span>
            <br />
            <span>Frontend Engineer</span>
          </h1>
          <p className="text-sm text-gray-400 mb-5">
            I build functional UIs and problem solving softwares that people need.
          </p>
        </div>
        <div>
        <a href={resume} target="_blank" rel="noreferrer">
          <button className="bg-dark text-white rounded-full px-5 py-2 hover:brightness-95 active:scale-95 transition-transform duration-500">
            Download Resume
          </button>
          </a>
        </div>
      </div>
      <div className="grid place-content-center gap-5 lg:w-1/2 lg:grid-cols-2 lg:gap-3 lg:h-full">
        <div className="lg:w-60 lg:h-60 rounded-xl">
          <img
            src={profilePic}
            alt="Profile photo"
            className="w-full object-cover rounded-xl h-full hover:skew-y-6 transition-transform duration-500"
          />
        </div>
        <div className="rounded-xl lg:w-60 lg:h-60">
          <img
            src={quote}
            alt="My favourite quote about excellence."
            className="w-full h-full rounded-xl object-cover"
            title="Love this, hope you do too."
          />
        </div>
        <SocialBar />
      </div>
    </section>
  );
};

export default Hero;
