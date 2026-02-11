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
    <div id="contact-section" className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
          REACH OUT!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Feel free to leave a message. I'll get back to you as soon as possible!
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white">
          <div>
            <input
              type="text"
              name="name"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
