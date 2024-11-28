"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProjectsSection() {
  const [projects] = useState([
    { id: 1, image: "/sector/nh.jpg", title: "National Highway" },
    { id: 2, image: "/sector/pwd.jpg", title: "PWD" },
    { id: 3, image: "/sector/pmgsy.jpg", title: "PMGSY" },
    { id: 4, image: "/sector/railway.jpg", title: "Railway" },
    { id: 5, image: "/sector/road.jpg", title: "Road" },
    { id: 6, image: "/sector/bridge.jpg", title: "Bridge" },
  ]);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isHovering) {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0; // Reset for seamless looping
        } else {
          carousel.scrollLeft += 1; // Increment scroll position
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId); // Cleanup
  }, [isHovering]);

  // Handle Drag to Scroll
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!carouselRef.current) return;

    setIsDragging(true);
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;

    e.preventDefault();
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = (pageX - carouselRef.current.offsetLeft - startX) * 2; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle Hover to Pause Auto-scroll
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="relative w-full bg-black text-white py-16"
      style={{
        backgroundImage: "url('/51.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for Dim Background */}
      <div className="absolute inset-0 bg-[#71797E] opacity-80 z-1"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
          Sectors
        </h2>
        <hr className="border-t-4 border-green-600 mx-auto w-24 mb-4" />
        <p className="text-lg md:text-xl font-semibold text-black">
          We have delivered projects in various sectors, building excellence at every step.
        </p>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="mt-8 overflow-hidden relative cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            handleMouseUp();
            handleMouseLeave();
          }}
          onMouseEnter={handleMouseEnter}
          onTouchStart={(e) => handleMouseDown(e)}
          onTouchMove={(e) => handleMouseMove(e)}
          onTouchEnd={() => {
            handleMouseUp();
            handleMouseLeave();
          }}
        >
          <div
            className="flex space-x-4"
            style={{ width: "max-content" }}
          >
            {projects.concat(projects).map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-64 h-60 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-2/3"
                  width={300}
                  height={300}
                />
                <div className="p-4 h-1/3 flex items-center justify-center">
                  <h3 className="text-2xl font-semibold text-center text-black">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
