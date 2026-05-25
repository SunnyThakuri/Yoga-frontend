import React from "react";
import Image from "next/image";

const IndividualClass = () => {
  return (
    <div className="relative h-screen min-h-[700px] overflow-hidden">
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
          <h1 className="text-white text-6xl md:text-7xl font-semibold leading-tight tracking-tight mt-40">
            Vinyasa Flow
          </h1>

          <button className="mt-8 bg-white text-black px-8 py-3.5 font-medium hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Level */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-75">
              Level
            </p>
            <p className="text-2xl font-medium mt-1">All Levels</p>
          </div>

          {/* Duration */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-75">
              Duration
            </p>
            <p className="text-2xl font-medium mt-1">3 Months</p>
          </div>

          {/* Coming Up */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-75">
              Coming Up
            </p>
            <p className="text-2xl font-medium mt-1">Sept 9, 2026</p>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-75">
              Location
            </p>
            <p className="text-2xl font-medium mt-1">Zen Room</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualClass;
