"use client";
// components/common/Navbar.tsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  border-b-2 border-b-white">
      <div className=" py-0 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="ml-16 flex items-center gap-10">
          <a href="/" className="text-white text-xl ">
            YOGA
          </a>
          <div className="h-16 w-px bg-white"></div>
          <div className="hidden md:flex items-center gap-10">
            <a href="/shop" className="text-white font-medium">
              Shop
            </a>
            <a href="/retreat" className="text-white font-medium">
              Retreat
            </a>
            <a href="/classes" className="text-white font-medium">
              Classes
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          {/* Phone Number */}
          <a
            href="tel:+12135550123"
            className="flex items-center gap-2 text-white font-medium"
          >
            <span>+1 (213) 555-0123</span>
          </a>

          {/* Join Now Button */}
          <button className="bg-white text-black px-6 py-5 ">Join Now</button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/30 px-6 py-8 flex flex-col gap-6 text-white">
          <a href="/shop" className="text-lg font-medium py-2">
            Shop
          </a>
          <a href="/retreat" className="text-lg font-medium py-2">
            Retreat
          </a>
          <a href="/classes" className="text-lg font-medium py-2">
            Classes
          </a>

          <a href="tel:+12135550123" className="text-lg font-medium py-2 pt-6">
            +1 (213) 555-0123
          </a>

          <button className="bg-white text-black py-4 rounded-full font-medium mt-4">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
