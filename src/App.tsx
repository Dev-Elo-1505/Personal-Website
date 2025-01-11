import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
