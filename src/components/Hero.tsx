const Hero = () => {
  return (
    <section className="m-auto text-center">
      <h1 className="text-4xl font-bold tracking-widest">ELO-OGHENE</h1>
      <h3 className="m-3 tracking-widest">Software Engineer</h3>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <button className="bg-black cursor-pointer rounded-full text-white p-3 w-3/4">
          Download Resume
        </button>
        <button className="bg-black cursor-pointer rounded-full text-white p-3 w-3/4">
          Contact me
        </button>
      </div>
    </section>
  );
};

export default Hero;
