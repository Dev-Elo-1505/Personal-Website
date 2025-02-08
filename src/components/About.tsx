import profilepic from "../assets/profilepic.jpeg";

const About = () => {
  return (
    <section className="p-5 md:px-20 min-h-screen md:pt-10">
      <div className="text-2xl text-black/40 mb-5">A B O U T</div>
      <main className="flex flex-col lg:justify-between lg:flex-center gap-5 items-center lg:flex-row-reverse">
        <div className="w-72">
          <img
            src={profilepic}
            alt=""
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:w-1/2 text-justify space-y-4">
          <h2 className="text-3xl">
            I'm Elo-oghene. I live in Lagos, where I build the future.
          </h2>
          <p>
            I am a self-driven, career-oriented software engineer specializing
            in front-end development and open-source, currently pursuing a
            bachelors degree in computer science. My expertise lies in building
            interactive web applications on the client side. Primarily working
            with technologies like JavaScript, Next.js, TypeScript and Python.
          </p>
          <p>
            I strongly believe in continuous learning and improving myself, so I
            try my best to learn in any situation possible, unfavorable or not.
          </p>
          <p>
            I’m currently on the lookout for exciting challenges and internship
            opportunities where I can apply my skills, learn from industry
            experts, and contribute to impactful projects.
          </p>
          <p>Let’s connect, share ideas, and build the future together!</p>
        </div>
      </main>
    </section>
  );
};

export default About;
