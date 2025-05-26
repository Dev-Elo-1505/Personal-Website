import profilepic from "../assets/profilepic.jpeg";

const About = () => {
  return (
    <section className="p-5 md:px-20 min-h-screen md:pt-10" id="about">
      <div className="text-2xl text-black/40 mb-5">A B O U T</div>
      <main className="flex flex-col lg:justify-between gap-5 items-center lg:flex-row-reverse">
        <div className="w-72">
          <img
            src={profilepic}
            alt=""
            className="w-full object-cover rounded-xl"
          />
        </div>
        <div className="lg:w-1/2 text-justify space-y-4">
          
          <p>
            Hello, I'm Elo-oghene, a Frontend Software Engineer and Computer Engineering student. I care deeply about the positive impact of AI and software engineering on the world, and I'm passionate about building clean, functional, and human-centered digital experiences.
          </p>
          <p>
            I primarily work with JavaScript, TypeScript, React, and Next.js, and I'm always expanding my toolkit. One of my core values is continuous learning, so I do my best to grow through every experience, whether it’s favorable or challenging.
          </p>
          <p>
            I'm currently seeking frontend-focused internships and other exciting opportunities where I can join a team of innovative builders and contribute to real-world projects.
          </p>
          <p>Asides coding, you’ll often find me watching lighthearted, non-dark series or reading soulful essays on Substack.</p>
          <p>Feel free to reach out!</p>
        </div>
      </main>
    </section>
  );
};

export default About;
