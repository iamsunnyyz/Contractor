"use client";
import React from "react";
import Image from "next/image";

const ChairmansMessage: React.FC = () => {
  return (
    <section
      className="chairman-message-section relative py-20"
      style={{
        backgroundImage: `url('/36.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-80"
        style={{
          zIndex: 1,
        }}
      ></div>
      <div className="relative container mx-auto px-6 z-10 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column - Founder Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <Image
            src="/Owner.jpg"
            loading="lazy"
            alt="Founder"
            className="rounded-lg shadow-lg w-full object-cover"
            width={350}
            height={450}
          />
        </div>

        {/* Right Columns - Message */}
        <div className="w-full md:w-2/3 text-black px-4 md:px-0">
          <h3 className="text-2xl md:text-4xl font-bold text-[#D73200] mb-4 md:mb-6">
          Chairman’s Message
          </h3>
          <hr className="my-4 border-t border-green-600 w-2/3 md:w-96" />
          <p className="text-base text-white md:text-lg font-semibold leading-relaxed mb-6 md:mb-8">
          &quot;At our core, we believe in the transformative power of vision, hard work, and perseverance. Every brick laid, every milestone achieved, and every life touched is a testament to the unwavering dedication and commitment of our team. Together, we are building a legacy of excellence that will stand the test of time.&quot;
          </p>
          <p className="text-base text-white md:text-lg font-semibold leading-relaxed mb-6 md:mb-8">
          As we move forward, our focus remains steadfast: delivering unparalleled quality and innovation, while staying true to our core values. To our clients, partners, and employees, I extend my heartfelt gratitude for being an integral part of this journey.
          </p>
          <p className="text-xl md:text-3xl font-semibold text-[#6082B6] mt-6 md:mt-8">
          - <strong>MITHLESH MISHRA JI</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChairmansMessage;
