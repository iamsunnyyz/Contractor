"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";

const NumberStatsSection: React.FC = () => {
  const stats = useMemo(() => [
    { value: 1999, label: "Established in" },
    { value: 12, label: "Projects" },
    { value: 1000, label: "Work Employed" },
    { value: 5, label: "Active Projects" },
    { value: 15606, label: "Turn Over In Lacs" },
    { value: 25, label: "Years Experience" },
  ], []);

  const [counters, setCounters] = useState<number[]>(new Array(stats.length).fill(0));
  const [hasAnimated, setHasAnimated] = useState(false); // To ensure animation runs only once
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true); // Ensure the animation runs only once
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Uses the viewport
      threshold: 0.3, // Trigger when 30% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // Animation duration in ms
    const steps = 100; // Number of animation steps
    const interval = duration / steps;

    const increments = stats.map((stat) => stat.value / steps);

    const intervalId = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((count, index) =>
          count < stats[index].value
            ? Math.min(count + increments[index], stats[index].value)
            : stats[index].value // Stop incrementing when the target value is reached
        )
      );

      const allCountersComplete = counters.every(
        (count, index) => count >= stats[index].value
      );

      if (allCountersComplete) {
        clearInterval(intervalId);
      }
    }, interval);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [hasAnimated, stats, counters]);

  return (
    <section
      ref={sectionRef}
      className="numberstats-section py-20 min-h-screen bg-cover bg-center relative"
    >
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h3 className="keyfigtitle text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-0">
            Key Figures
          </h3>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-block text-center mx-auto"
            >
              <div className="heading">
                <p className="text-gray-700 text-lg">{stat.label}</p>
                <hr className="my-4 border-t border-black w-48 mx-auto" />
                <h4 className="text-6xl text-gray-800">
                  {Math.floor(counters[index])}
                  {index !== 0 && <small className="text-3xl text-gray-800">+</small>}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberStatsSection;
