import Image from "next/image";
import React from "react";

const IndividualRetreat = () => {
  return (
    <div className="relative lg:h-screen h-[900px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/landing/hero/landing.jpg" // Replace with your actual image
        alt="Vinyasa Flow Class"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-12">
        {/* Top Section */}
        <div>
          <h1 className="text-white text-6xl md:text-7xl font-semibold leading-tight tracking-tight mt-30">
            Sana Sana Boutique Health & Wellness
            <br />
            Retreat, Spain
          </h1>

          <button className="mt-8 mb-2 bg-white text-black px-8 py-3.5 font-medium hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center border-t border-gray-400 pt-4">
          {/* Level */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-75">
              Start Date:
            </p>
            <p className="text-2xl font-medium mt-1">June 05 2026</p>
          </div>

          {/* Duration */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-75">
              End Date:
            </p>
            <p className="text-2xl font-medium mt-1">Jun 07 2026</p>
          </div>

          {/* Coming Up */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-75">
              Location:{" "}
            </p>
            <p className="text-2xl font-medium mt-1">UK England, Suffolk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualRetreat;
