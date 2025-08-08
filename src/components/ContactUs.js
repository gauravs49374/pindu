import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Get in Touch</h3>
            <p className="text-gray-800 mb-2">📍 Address: Houseno 22, Sundernagar Mandi HP, Pin 175018</p>
            <p className="text-gray-800 mb-2">📞 Phone: +91 7018411865</p>
            <p className="text-gray-800 mb-2">📧 Email: gauravs49374@gmail.com</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded text-black"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded text-black"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
