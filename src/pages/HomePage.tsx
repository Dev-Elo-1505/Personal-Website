import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="p-5">
      <Hero />
      <div className="flex flex-col h-screen justify-end items-center p-5">
        <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
