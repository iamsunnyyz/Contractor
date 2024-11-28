"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Track scroll direction and hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        // User is scrolling down
        setShowNavbar(false);
      } else {
        // User is scrolling up
        setShowNavbar(true);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav
      className={`fixed w-full bg-opacity-40 backdrop-filter backdrop-blur-lg z-10 bg-black transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Company Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/Brand.png"
            alt="Company Logo"
            className="object-contain"
            width={100}
            height={200}
          />
          
        </div>

        {/* Menu for large screens */}
        <ul className="hidden md:flex text-sm space-x-6 text-white">
          {[
            { name: "HOME", href: "#home" },
            { name: "ABOUT US", href: "#about-us" },
            { name: "WHAT WE BUILD", href: "#what-we-build" },
            { name: "SECTOR", href: "#projects-section" },            
            { name: "STATS", href: "#stats" },
            { name: "CONTACT", href: "#contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link href={item.href} legacyBehavior>
                <a className="hover:text-gray-400">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger menu for small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-black bg-opacity-80 z-20 md:hidden`}
        >
          <ul className="flex flex-col space-y-4 text-white text-center p-4">
            {[
              { name: "HOME", href: "#home" },
              { name: "ABOUT US", href: "#about-us" },
              { name: "WHAT WE BUILD", href: "#what-we-build" },
              { name: "STATS", href: "#stats" },
              { name: "CONTACT", href: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} legacyBehavior>
                  <a
                    className="hover:text-gray-400"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
