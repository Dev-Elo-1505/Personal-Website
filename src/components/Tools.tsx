import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import nextjs from "../assets/nextjs.svg"
import tailwind from "../assets/tailwind.svg"
const stacks = [
  {
    id: 1,
    src: html,
    name: "HTML"
  },
  {
    id: 2,
    src: css,
    name: "CSS"
  },
  {
    id: 3,
    src: js,
    name: "JavaScript"
  },
  {
    id: 4,
    src: react,
    name: "ReactJs"
  },
  {
    id: 5,
    src: nextjs,
    name: "NextJs"
  },
  {
    id: 6,
    src: tailwind,
    name: "TailwindCss"
  },
  
];

const Tools = () => {
  return (
    <div className="flex h-20 w-full overflow-hidden bg-black/5 backdrop-blur">
      <div className="flex animate-infinite-scroll gap-10 bg-[#f5f5f5] py-4 text-black">
        {[...stacks, ...stacks].map((stack) => (
          <div key={stack.id} className="flex items-center gap-10 text-4xl">
            <img src={stack.src} alt={stack.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
