import html from "../assets/html.png";
import react from "../assets/react.svg";
import js from "../assets/js.svg";
const stacks = [
  { id: 1, name: "React", src: react },
  {
    id: 2,
    name: "Next.js",
    src: "next",
  },
  {
    id: 3,
    name: "TailwindCSS",
    src: "tailwind",
  },
  {
    id: 4,
    name: "Typescript",
    src: "typescript",
  },
  {
    id: 5,
    name: "HTML",
    src: html,
  },
  {
    id: 6,
    name: "JS",
    src: js,
  },
  {
    id: 7,
    name: "MongoDB",
    src: "mongo",
  },
  {
    id: 8,
    name: "PostgreSQL",
    src: "postgres",
  },
  {
    id: 9,
    name: "GraphQL",
    src: "graphql",
  },
  {
    id: 10,
    name: "Apollo",
    src: "apollo",
  },
];

const Tools = () => {
  return (
    <div className="flex overflow-hidden bg-black/5 backdrop-blur">
      <div className="flex animate-infinite-scroll gap-10 bg-[#f5f5f5] py-4 text-black">
        {[...stacks, ...stacks].map((stack) => (
          <div key={stack.id} className="flex items-center gap-2">
            <img src={stack.src} alt={stack.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
