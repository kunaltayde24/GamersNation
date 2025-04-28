import React from "react";
import { FaDiscord, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-10">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <img
            src="/images/gamersnation-logo.png"
            alt="GamersNation Logo"
            className="h-12"
          />
          <span className="text-2xl font-bold tracking-widest">GAMERSNATION</span>
        </div>
        <div className="flex space-x-6 text-2xl">
          <a href="#" className="hover:text-red-500"><FaDiscord /></a>
          <a href="#" className="hover:text-red-500"><FaLinkedin /></a>
          <a href="#" className="hover:text-red-500"><FaGlobe /></a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-gray-300">
        <div>
          <h4 className="text-white font-semibold mb-3">GamersNation</h4>
          <ul className="space-y-2">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Cookie Settings</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Bug Reports</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#">Trending Games</a></li>
            <li><a href="#">New Releases</a></li>
            <li><a href="#">Esports</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} GamersNation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
