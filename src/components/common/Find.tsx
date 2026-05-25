import React from "react";

const Find = () => {
  return (
    <div className="bg-[#200C02] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
              Find your place
              <br />
              and <span className="text-gray-400">practice here</span>
            </h2>
          </div>

          <div className="max-w-xs lg:text-left">
            <p className="text-white text-[15px] leading-relaxed">
              A variety of classes designed to meet you exactly where you are.
            </p>
            <a
              href="#"
              className="inline-block mt-6 text-sm border-b border-b-gray-400 pb-2 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  ">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm  tracking-widest text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Meet our instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm tracking-widest text-white mb-6">
              Useful Links
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Blog / Social */}
          <div>
            <h3 className="text-sm tracking-widest text-white mb-6">Blog</h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 text-center text-sm text-gray-500">
          2025, Yoga
        </div>
      </div>
    </div>
  );
};

export default Find;
