import { projects } from "../data";

const Projects = () => {
  return (
    <section className="p-5 md:px-20 min-h-screen md:pt-10">
      <div className="text-2xl text-black/40 underline-offset-2">
        P R O J E C T S
      </div>
      <main className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
        {projects.map((project) => (
          <div className="w-72 bg-black/5 backdrop-blur rounded-xl p-5 flex flex-col justify-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src={project.src}
                alt=""
                className="w-full object-contain rounded-sm"
              />
            </div>
            <div className="mt-3">
              <h2 className="font-semibold">{project.name}</h2>
              <p className="mt-3 mb-3">{project.description}</p>
              <div className="flex justify-between items-center">
                <a href={project.repolink}>Repo</a>
                <a href={project.livelink}>Live</a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Projects;
