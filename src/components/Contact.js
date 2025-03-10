import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Animated Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
          Get in Touch
        </h2>
        <p className="text-lg text-white mb-8 animate-fadeIn delay-100 text-center">
          I'd love to hear from you! Please fill out the form below to get in touch.
        </p>

        {/* Contact Form Card */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 animate-slideUp">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea 
                id="message" 
                placeholder="Your Message" 
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
