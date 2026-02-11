import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:iyerdhanush4@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact-section" className="bg-transparent animated fadeInUp max-w-screen-xl mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl bg-[#111]/50 backdrop-blur-md border border-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl transition-all hover:border-[#836FFF]/30">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white sm:text-4xl mb-4 tracking-tighter uppercase">
            Let's <span className="text-[#836FFF]">Build</span> Together
          </h2>
          <p className="max-w-md mx-auto text-gray-400 font-medium">
            Have a project in mind or just want to chat about the intersection of finance and tech? Drop me a line!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-[#080808] border border-gray-800 rounded-xl p-4 text-white text-sm focus:border-[#836FFF] focus:ring-1 focus:ring-[#836FFF] outline-none transition-all"
                placeholder="Dhanush Iyer"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full bg-[#080808] border border-gray-800 rounded-xl p-4 text-white text-sm focus:border-[#836FFF] focus:ring-1 focus:ring-[#836FFF] outline-none transition-all"
                placeholder="iyerdhanush4@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Your Message</label>
            <textarea
              name="message"
              className="w-full bg-[#080808] border border-gray-800 rounded-xl p-4 text-white text-sm focus:border-[#836FFF] focus:ring-1 focus:ring-[#836FFF] outline-none transition-all"
              placeholder="Tell me about your vision..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#836FFF] hover:bg-[#6c5ce7] text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-xl shadow-[0_0_20px_-5px_rgba(131,111,255,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Transmission 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
