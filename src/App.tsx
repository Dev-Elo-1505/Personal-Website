import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeContext";
import "./index.css";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <Layout>
          <NavBar />
          <Hero />
          <Tools />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;
