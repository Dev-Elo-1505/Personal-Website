import profilePic from "../assets/about-pic.jpg";
import quote from "../assets/quote.jpg";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/GitHub_Invertocat_Dark.svg";
import leetcode from "../assets/leetcode.jpeg";

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    src: linkedin,
    href: "https://www.linkedin.com/in/addisijoy/",
  },
  {
    id: 2,
    name: "Twitter",
    src: twitter,
    href: "https://x.com/Elooghene__",
  },
  {
    id: 3,
    name: "Github",
    src: github,
    href: "https://github.com/Dev-Elo-1505",
  },
];

const Hero = () => {
  return (
    <section className="flex h-screen flex-col lg:flex-row lg:justify-between lg:flex-center gap-10 md:py-8 md:px-20 p-5">
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
            I build stunning and user-centric interfaces.
          </p>
        </div>
        <div>
          <button className="bg-dark text-white rounded-full px-5 py-2">
            Download Resume
          </button>
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
          />
        </div>
        <div className="flex justify-between items-center gap-10 bg-black/5 backdrop-blur p-5 rounded-xl w-full lg:col-span-2">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-8 cursor-pointer hover:rotate-45 transition-transform duration-500"
            >
              <img src={social.src} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
