"use client";
import Link from "next/link";
// components/common/Navbar.tsx
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isTransparent =
    pathname === "/classes" ||
    pathname === "/contact-us" ||
    pathname === "/retreat";

  return (
    <nav
      className={`lg:absolute fixed top-0 left-0 right-0 z-50  border-b-2  ${
        isTransparent ? "border-b-black" : "border-b-white "
      }`}
    >
      <div className=" py-0 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="ml-16 flex items-center gap-10">
          <Link
            href={"/"}
            className={` text-xl ${
              isTransparent ? "text-black" : "text-white "
            }`}
          >
            YOGA
          </Link>
          <div
            className={`h-16 w-px  ${isTransparent ? "bg-black" : "bg-white "}`}
          ></div>
          <div
            className={`hidden md:flex items-center gap-10 font-medium  ${
              isTransparent ? "text-black" : "text-white "
            } `}
          >
            <Link href="/shop">Shop</Link>
            <Link href="/retreat">Retreat</Link>
            <Link href="/classes">Classes</Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          {/* Phone Number */}
          <div
            className={`h-16 w-px  ${isTransparent ? "bg-black" : "bg-white "}`}
          ></div>
          <Link
            href="tel:+12135550123"
            className={`flex items-center gap-2 font-medium  ${
              isTransparent ? "text-black" : "text-white "
            }`}
          >
            <span>+1 (213) 555-0123</span>
          </Link>

          {/* Join Now Button */}
          <button
            className={` ${
              isTransparent ? "bg-black text-white" : "bg-white text-black"
            }  px-6 py-5 `}
          >
            <Link href="/contact-us">Join Now</Link>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden  p-2  ${
            isTransparent ? " text-black" : " text-white"
          }`}
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
          <Link href="/shop" className="text-lg font-medium py-2">
            Shop
          </Link>
          <Link href="/retreat" className="text-lg font-medium py-2">
            Retreat
          </Link>
          <Link href="/classes" className="text-lg font-medium py-2">
            Classes
          </Link>

          <Link
            href="tel:+12135550123"
            className="text-lg font-medium py-2 pt-6"
          >
            +1 (213) 555-0123
          </Link>

          <button className="bg-white text-black py-4 rounded-full font-medium mt-4">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
