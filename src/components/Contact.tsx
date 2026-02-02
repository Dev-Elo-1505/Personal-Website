import { useRef, useState } from "react";
import SocialBar from "./SocialBar";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const notify = () => toast("Message sent successfully!☺️");
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    if (!form.current) return;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          notify();
          setFormData({ name: "", email: "", message: "" });
          setLoading(false)
        },
        (error) => {
          console.log(error.text)
          setError(true)
        }
      );
  };

  return (
    
    <section className="p-5 md:px-20 min-h-screen md:pt-10" id="contact">
      <div className="text-2xl text-[#37352f]/40 dark:text-[#d3d3d3]/40 mb-5 transition-colors duration-300">C O N T A C T</div>
      <main className="flex flex-col lg:justify-between lg:flex-row gap-5 items-center">
        <div className="w-72">
          <p className="text-3xl font-bold mb-3 md:text-4xl lg:text-5xl text-[#37352f] dark:text-[#d3d3d3] transition-colors duration-300">
            LET'S CHAT✨
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-5 lg:mb-10">
            I enjoy working with dedicated engineers and creatives from
            businesses to build quality softwares that people need.
          </p>
          <SocialBar />
        </div>
        <div className="lg:w-1/2 w-full p-5 rounded-xl">
          <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
            <h3 className="font-bold text-xl text-[#37352f] dark:text-[#d3d3d3]">Send me a message 🚀</h3>
            <div>
              <input
                type="text"
                placeholder="Full name*"
                value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/5 dark:bg-white/5 backdrop-blur-md p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 dark:text-white transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address*"
                value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/5 dark:bg-white/5 backdrop-blur-md p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 dark:text-white transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-semibold block mb-2 text-[#37352f] dark:text-[#d3d3d3]">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-black/5 dark:bg-white/5 backdrop-blur-md p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 dark:text-white transition-all duration-300"
              ></textarea>
            </div>
            <div>
              <button className="bg-[#37352f] dark:bg-[#d3d3d3] text-white dark:text-[#191919] rounded-full px-6 py-3 hover:opacity-90 active:scale-95 transition-all duration-300 shadow-sm font-medium w-full md:w-fit" type="submit">
                {loading ? "Loading..." : "Send Message"}
              </button>
            </div>
            {error && <p className="text-red-500">Error sending form</p>}
          </form>
        </div>
        <ToastContainer />
      </main>
    </section>
  );
};

export default Contact;
