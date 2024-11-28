import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 border-t border-gray-600 bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 mx-10 md:space-y-0 text-gray-600">
        <p className="text-sm md:text-base">
        Copyright © 2024. All rights reserved.</p>
        <p className="text-sm md:text-base">Designed & Build By{" "} 
        <a href="https://github.com/iamsunnyyz" className="hover:underline text-sm md:text-base">
          iamsunnyyz
        </a> </p>
      </div>
    </footer>
  );
};

export default Footer;
