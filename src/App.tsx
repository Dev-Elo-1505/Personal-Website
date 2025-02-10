import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import "./index.css";


function App() {
  return (
    <>
      <div className=" bg-light text-black dark:bg-dark dark:text-white">
      <NavBar />
      <Hero />
      <Tools />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
    </>
  );
}

export default App;
