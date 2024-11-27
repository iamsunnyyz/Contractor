import React from "react";
import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white px-6 py-10 md:px-12 space-y-10">
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        
      <div className="flex items-center space-x-4">
        <Image src="/brand.png" alt="Company Logo" className="h-12 w-auto" width={100} height={150}/>
        <span className="text-white text-3xl font-semibold">MITHLESH MISHRA</span>
      </div>
      
      </div>

      {/* Divider Line */}
      <hr className="border-t border-gray-600" />

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {/* Left Column - Contact Information */}
        <div className="space-y-4">
          <p><strong>Address:</strong> A-205, 2nd Floor, Mahalaxmi Kapda Market, Pulgaon Chowk</p>
          <p><strong></strong>Durg (C.G.) 491001, India</p>
          <p><strong>Email:</strong> mithleshmishra@gmail.com</p>
          <p><strong>Phone:</strong> +91 99819-56550, +91 89595-90550</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59519.88127286214!2d81.24172072852913!3d21.19245373582798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29231ae815e213%3A0xbf7f1c7892db4907!2sDurg%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1730984975012!5m2!1sen!2sin"
            className="w-full h-32 rounded"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
