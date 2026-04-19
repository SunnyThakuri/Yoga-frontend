import React from "react";

const Breadth = () => {
  return (
    <div className="relative w-full h-[640px] lg:h-[720px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/img/landing/hero/landing.jpg"
        alt="Yoga class"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-top pt-20 px-6 lg:px-12">
        {/* Left Side - Heading */}
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Breadth deep.
            <br />
            Start practice
          </h1>
        </div>

        {/* Right Bottom - Description Box */}
        <div className="absolute bottom-12 right-6 lg:right-12 max-w-sm">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <p className="text-white text-[25px] leading-relaxed">
              Find your flow in a warm, inclusive space where every class helps
              you connect
            </p>
            <a
              href="#"
              className="inline-block mt-6 text-white text-sm font-medium border-b border-white pb-1 hover:border-white/70 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadth;
