import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 border-t border-gray-600 bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-600">
        <a href="#terms" className="hover:underline text-sm md:text-base">
          Terms & Conditions
        </a>
        <p className="text-sm md:text-base">2024 ConstructionCorp. All Rights Reserved.</p>
        <p className="text-sm md:text-base">Website by Imsunnyyz</p>
      </div>
    </footer>
  );
};

export default Footer;
