import { socials } from "../data";

const SocialBar = () => {
  return (
    <div className="flex justify-between items-center gap-10 glass-panel p-5 rounded-2xl w-full lg:col-span-2">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="w-8 cursor-pointer hover:rotate-45 transition-transform duration-500"
        >
          <img 
            src={social.src} 
            alt={social.name} 
            className={`${(social.name === "Twitter" || social.name === "Github") ? "dark:invert" : ""} transition-all duration-300`} 
          />
        </a>
      ))}
    </div>
  )
}

export default SocialBar