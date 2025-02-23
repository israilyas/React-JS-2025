import React from "react";

export default function Contact() {
  return (
    <div className="relative bg-gray-900 pb-16 pt-32">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-400">
            Have questions? Reach out and let's talk!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Info */}
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg h-auto">
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            <p className="mt-2 text-gray-400">
              We'd love to hear from you. Fill out the form or contact us directly.
            </p>

            <div className="mt-4 space-y-3">
              {/* Location */}
              <div className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-3">Pakistan</span>
              </div>

              {/* Phone */}
              <div className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-3">+1234567890</span>
              </div>

              {/* Email */}
              <div className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-3">israilyas@example.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-800 p-6 shadow-lg rounded-lg h-auto">
            <h3 className="text-2xl font-semibold text-white">Send a Message</h3>

            <form className="mt-4 space-y-3">
              {/* Name Field */}
              <div>
                <label className="block text-gray-300">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-300">Email</label>
                <input type="email" placeholder="Your Email" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-300">Phone</label>
                <input type="tel" placeholder="Your Phone" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-300">Message</label>
                <textarea rows="4" placeholder="Your Message" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-orange-500"></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-500 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <iframe
            className="w-full h-72 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.4575429066454!2d67.03445331500222!3d24.910383284029847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dc8e63e8e8d%3A0x7a9b3ec4f730f4!2sGulshan-e-Iqbal%2C%20Karachi!5e0!3m2!1sen!2s!4v1619328210812!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
