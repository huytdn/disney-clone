import React from "react";
import logo from "../assets/images/disney.png";

function Footer() {
  return (
    <footer className="bg-[#131520] text-white py-8 px-4">
      <div className="flex flex-col items-center space-y-6">
        <img src={logo} alt="Logo" className="w-50" />

        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <a href="#">Disney+</a>
          </li>
          <li>
            <a href="#">Sign Up for News</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Help & Guest Services</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Internet Safety</a>
          </li>
          <li>
            <a href="#">Collection Statement</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Interest-Based Ads</a>
          </li>
          <li>
            <a href="#">Disney Studios Australia</a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center">
          © 2025 Disney and related entities. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
