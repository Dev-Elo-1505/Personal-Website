import profilePic from "../assets/about-pic.jpg";
import quote from "../assets/quote.jpg";
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import github from "../assets/GitHub_Invertocat_Dark.svg"
import leetcode from "../assets/leetcode.jpeg"

const Hero = () => {
  return (
    <section className="flex h-screen flex-col gap-10">
      <div>
        {/* badge */}
        <div>
          <h1 className="text-3xl font-bold mb-5">
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
      <div className="grid place-items-center gap-5">
        <div className="rounded-xl">
          <img
            src={profilePic}
            alt="Profile photo"
            className="w-full object-cover rounded-xl h-full"
          />
        </div>
        <div className="rounded-xl ">
          <img
            src={quote}
            alt="My favourite quote about excellence."
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <div>
          <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="#"><img src={twitter} alt="" /></a>
          <a href="#"><img src={github} alt="" /></a>
          <a href="#"><img src={leetcode} alt="" /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
