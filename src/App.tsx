import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Loader from "./components/Loader";
import "./index.css";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className=" bg-light text-black dark:bg-dark dark:text-white font-poppins">
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <NavBar />
            <Hero />
            <Tools />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
