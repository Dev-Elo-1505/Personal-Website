import { projects } from "../data";
import { FaGithub, FaLink } from "react-icons/fa";



const Projects = () => {
  return (
    <section className="p-5 md:px-20 min-h-screen md:pt-10" id="project">
  <div className="text-2xl text-[#37352f]/40 dark:text-[#d3d3d3]/40 mb-5 transition-colors duration-300">
    P R O J E C T S
  </div>
  <main className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
      <div
        key={project.name}
        className="w-full max-w-sm bg-white dark:bg-[#1f1f1f] shadow-sm hover:shadow-md rounded-xl flex flex-col overflow-hidden transition-all duration-300 border border-black/5 dark:border-white/5"
      >
        <div className="h-48 overflow-hidden">
          <img
            src={project.src}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h2 className="font-semibold text-xl text-[#37352f] dark:text-[#d3d3d3] transition-colors duration-300">{project.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4 line-clamp-3 transition-colors duration-300">
            {project.description}
          </p>
          <div className="flex justify-between items-center gap-4 mt-auto text-xl text-gray-500 dark:text-gray-400 transition-colors duration-300">
            {project.repolink && (
              <a href={project.repolink} target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-black dark:hover:text-white transition-colors duration-300" />
              </a>
            )}
            {project.livelink && (
              <a href={project.livelink} target="_blank" rel="noopener noreferrer">
                <FaLink className="hover:text-black dark:hover:text-white transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </main>
</section>

  )
}

export default Projects