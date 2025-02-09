import { socials } from "../data";

const SocialBar = () => {
  return (
    <div className="flex justify-between items-center gap-10 bg-black/5 backdrop-blur p-5 rounded-xl w-full lg:col-span-2">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-8 cursor-pointer hover:rotate-45 transition-transform duration-500"
            >
              <img src={social.src} alt={social.name} />
            </a>
          ))}
        </div>
  )
}

export default SocialBar