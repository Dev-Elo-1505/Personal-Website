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
      <div className="text-2xl text-black/40 mb-5">C O N T A C T</div>
      <main className="flex flex-col lg:justify-between lg:flex-row gap-5 items-center">
        <div className="w-72">
          <p className="text-3xl font-bold mb-3 md:text-4xl lg:text-5xl">
            LET'S CHAT✨
          </p>
          <p className="text-gray-400 mb-5 lg:mb-10">
            I enjoy working with dedicated engineers and creatives from
            businesses to build quality softwares that people need.
          </p>
          <SocialBar />
        </div>
        <div className="lg:w-1/2 w-full p-5 rounded-xl shadow-md">
          <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
            <h3 className="font-bold text-xl">Send me a message 🚀</h3>
            <div>
              <input
                type="text"
                placeholder="Full name*"
                value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/5 backdrop-blur p-2 rounded-md focus:outline-none focus:border focus:border-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address*"
                value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/5 backdrop-blur p-2 rounded-md focus:outline-none focus:border focus:border-gray-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-semibold block mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-black/5 backdrop-blur p-2 rounded-md focus:outline-none focus:border focus:border-gray-400"
              ></textarea>
            </div>
            <div>
              <button className="bg-dark text-white rounded-lg p-3 hover:brightness-95 active:scale-95 transition-transform duration-500" type="submit">
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
