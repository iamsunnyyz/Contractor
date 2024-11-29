"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AboutAndGoalSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  // Images for the dynamic box in the Goal section
  const images = [
    "/48.jpg",
    "/38.jpg",
    "/41.jpg",
    "/64.jpg",
    "/66.jpg",
    "/71.jpg",
  ];

  // Headings and descriptions for the Goal section
  const headings = ["Vision", "Mission", "Core Values"];
  const descriptions = [
    "To emerge as a pioneer in global infrastructure with a model mix that will lead to an efficient, sustainable, economical, and safe system.",
    "To incorporate excellence in execution, engineering, and design, emerging as a global corporation with phenomenal growth.",
    "We believe Work is Worship. Our organization is guided by moral and social ethics in all its endeavors.",
  ];

  // Automatic image change (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <section
      className="about-goal-section relative py-16 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/69.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: .7 }}
        aria-hidden="true"
      ></div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 md:px-12">

        {/* About Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">
            About Us
          </h2>
          <hr className="border-t-2 border-white mx-auto w-24 mb-4" />
          <h6 className="text-lg md:text-xl font-medium mb-8 text-green-600">
          MITHLESH MISHRA CONSTRUCTIONS
          </h6>

          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="mb-6 text-base md:text-lg">
              Our construction firm has been delivering exceptional projects
              with dedication and excellence. With years of experience and a
              commitment to quality, we bring a unique approach to every project
              we undertake, ensuring top-notch results and client satisfaction.
            </p>
            <p className="mb-8 text-base md:text-lg">
              As a thought leader in our industry, we strive to fulfill a role
              not just as a contractor, but as a full partner throughout the
              project. That same philosophy drives our commitment to respect and
              inclusion for our associates.
            </p>
            <a
              href="/Company Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 text-white font-medium text-lg rounded-md shadow-md hover:bg-green-700 transition duration-300"
            >
            View Company Profile
            </a>

          </div>
        </div>

        {/* Goal Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Dynamic Image Box */}
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-lg overflow-hidden shadow-md w-full max-w-md">
              <Image
                src={images[activeImage]}
                loading="lazy"
                alt={`Dynamic Image ${activeImage + 1}`}
                className="w-full h-auto object-cover rounded-lg"
                height={300}
                width={500}
              />
            </div>
            <div className="flex mt-4 space-x-4 justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    activeImage === index ? "bg-green-600" : "bg-gray-400"
                  }`}
                  onClick={() => setActiveImage(index)}
                ></button>
              ))}
            </div>
          </div>

          {/* Right Side - Goal Information */}
          <div className="grid grid-rows-3 gap-8">
            {headings.map((heading, index) => (
              <div key={index}>
                <h3 className="text-xl md:text-2xl text-white font-semibold">
                  {heading}
                </h3>
                <hr className="w-20 border-t-2 border-green-600 my-2" />
                <p className="text-white text-sm md:text-base">
                  {descriptions[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndGoalSection;
