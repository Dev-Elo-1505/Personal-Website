import SocialBar from "./SocialBar";

const Contact = () => {
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
          <form className="flex flex-col gap-5">
            <h3 className="font-bold text-xl">Send me a message 🚀</h3>
            <div>
              <input
                type="text"
                placeholder="Full name*"
                className="w-full bg-black/5 backdrop-blur p-2 rounded-md focus:outline-none focus:border focus:border-gray-400"
              />
            </div>
            <div>
              <input type="email" placeholder="Email address*" className="w-full bg-black/5 backdrop-blur p-2 rounded-md focus:outline-none focus:border focus:border-gray-400" />
            </div>
            <div>
              <label htmlFor="message" className="font-semibold block mb-2">Your Message</label>
              <textarea name="message" id="message" rows={4} className="w-full bg-black/5 backdrop-blur p-2 rounded-md focus:outline-none focus:border focus:border-gray-400"></textarea>
            </div>
            <div>
              <button 
           className="bg-dark text-white rounded-lg p-3 hover:brightness-95 active:scale-95 transition-transform duration-500">Send Message</button>
            </div>
          </form>
          
        </div>
      </main>
    </section>
  );
};

export default Contact;
