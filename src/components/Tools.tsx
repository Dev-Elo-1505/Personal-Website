const stacks = [
  { id: 1, name: "React", src: "react" },
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
    name: "Node.js",
    src: "node",
  },
  {
    id: 6,
    name: "Express.js",
    src: "express",
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
    <div className="flex overflow-hidden bg-black">
      <ul className="flex animate-infinite-scroll gap-10 bg-black py-4 text-white">
        {[...stacks, ...stacks].map((stack) => {
          return (
            <li key={stack.id} className="flex items-center gap-2">
              <p className="text-gray-300">{stack.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tools;
