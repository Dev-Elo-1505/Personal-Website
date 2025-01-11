import { FaMoon } from "react-icons/fa";
import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="p-5 bg-[#1f1f22] text-white">
      <Hero />
      <About />
      <div className="flex flex-col h-screen justify-end items-center p-5">
        <p>elo-oghene</p>
        <NavBar />
        <FaMoon />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
