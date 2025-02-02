import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import NextjsOriginalWordmark from "devicons-react/lib/icons/NextjsOriginalWordmark";
import TailwindcssPlainWordmark from "devicons-react/lib/icons/TailwindcssPlainWordmark";
import TypescriptPlain from "devicons-react/lib/icons/TypescriptPlain";
import HTML5PlainWordmark from "devicons-react/lib/icons/Html5PlainWordmark";
import JavascriptPlain from "devicons-react/lib/icons/JavascriptPlain";
import Css3Plain from "devicons-react/lib/icons/Css3PlainWordmark";
const stacks = [
  { id: 1, name: "React", src: <ReactOriginal size={50} /> },
  {
    id: 2,
    name: "Next.js",
    src: <NextjsOriginalWordmark size={50} />,
  },
  {
    id: 3,
    name: "TailwindCSS",
    src: <TailwindcssPlainWordmark size={100} />,
  },
  {
    id: 4,
    name: "Typescript",
    src: <TypescriptPlain size={50} />,
  },
  {
    id: 5,
    name: "HTML",
    src: <HTML5PlainWordmark size={50} />,
  },
  {
    id: 6,
    name: "JS",
    src: <JavascriptPlain size={50} />,
  },
  {
    id: 7,
    name: "CSS",
    src: <Css3Plain size={50} />,
  },
];

const Tools = () => {
  return (
    <div className="flex h-20 w-full overflow-hidden bg-black/5 backdrop-blur">
      <div className="flex animate-infinite-scroll gap-10 bg-[#f5f5f5] py-4 text-black">
        {[...stacks, ...stacks].map((stack) => (
          <div key={stack.id} className="flex items-center gap-10 text-4xl">
            {stack.src}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
