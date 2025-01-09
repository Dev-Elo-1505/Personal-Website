import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
