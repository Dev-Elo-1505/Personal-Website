import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Tools from "../components/Tools";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className=" bg-light text-black dark:bg-dark dark:text-white flex flex-col gap-5">
      <NavBar />
      <Hero />
      <Tools />
      <About />
      <Projects />
      <Footer />
      {/* <About />
      <div className="flex flex-col h-screen justify-end items-center p-5">
        <p>elo-oghene</p>
        
        <FaMoon />
      </div>
      <Footer /> */}
    </div>
  );
};

export default HomePage;
