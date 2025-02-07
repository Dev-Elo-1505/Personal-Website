import { stacks } from "../data"

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
