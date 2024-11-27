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
        className="absolute inset-0 bg-white opacity-80"
        style={{
          zIndex: 1,
        }}
      ></div>
      <div className="relative container mx-auto px-6 z-10 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column - Founder Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <Image
            src="/Owner.jpg"
            alt="Founder"
            className="rounded-lg shadow-lg w-full object-cover"
            width={350}
            height={450}
          />
        </div>

        {/* Right Columns - Message */}
        <div className="w-full md:w-2/3 text-black">
          <h3 className="text-4xl font-bold text-[#D73200] mb-6">Chairman’s Message</h3>
          <hr className="my-4 border-t border-green-600 w-96" />
          <p className="text-lg font-semibold leading-relaxed mb-8">
            &quot;At our core, we believe in the transformative power of vision,
            hard work, and perseverance. Every brick laid, every milestone
            achieved, and every life touched is a testament to the unwavering
            dedication and commitment of our team. Together, we are building a
            legacy of excellence that will stand the test of time.&quot;
          </p>
          <p className="text-lg font-semibold leading-relaxed mb-8">
            As we move forward, our focus remains steadfast: delivering
            unparalleled quality and innovation, while staying true to our core
            values. To our clients, partners, and employees, I extend my
            heartfelt gratitude for being an integral part of this journey.
          </p>
          <p className="text-3xl font-semibold text-[#003366] mt-8">- <strong>MITHLESH MISHRA</strong></p>
        </div>
      </div>
    </section>
  );
};

export default ChairmansMessage;
