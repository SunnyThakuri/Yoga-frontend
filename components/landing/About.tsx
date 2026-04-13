import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#0A1F1C] min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-sm tracking-[3px] text-gray-400 mb-4">
            ABOUT YOGA
          </p>
          <h1 className="text-5xl md:text-6xl font-light leading-snug max-w-4xl mx-auto">
            A warm, inclusive space
            <br />
            <span className="text-gray-400">to move, breathe, and</span>
            <br /> grow your practice
          </h1>
        </div>

        {/* Images Container */}
        <div className="relative flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Left Image - 1.jpg */}
          <div className="relative w-full lg:w-auto lg:flex-1 max-w-[380px]">
            <div className="relative overflow-hidden rounded-3xl aspect-5/5">
              <Image
                src="/img/landing/about/1.jpg"
                alt="Woman doing yoga pose"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 300+ Members Badge */}
            <div className="absolute -bottom-3 -right-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl text-sm text-center">
              300+ <br /> Members
            </div>
          </div>

          {/* Center Image - 2.jpg (Slightly Lower) */}
          <div className="relative w-full lg:w-auto lg:flex-1 max-w-[410px] mt-4 lg:mt-40">
            <div className="relative overflow-hidden rounded-3xl aspect-2/2">
              <Image
                src="/img/landing/about/2.jpg"
                alt="Group yoga class"
                fill
                className="object-cover"
              />
            </div>

            {/* 97% Satisfaction Badge */}
            <div className="absolute -bottom-5 -right-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl text-sm text-center">
              97% <br /> Satisfaction
            </div>
          </div>

          {/* Right Image - 3.jpg (Aligned with Left) */}
          <div className="relative w-full lg:w-auto lg:flex-1 max-w-[380px] lg:mt-0">
            <div className="relative overflow-hidden rounded-3xl aspect-square">
              <Image
                src="/img/landing/about/3.jpg"
                alt="Woman meditating outdoors"
                fill
                className="object-cover"
              />
            </div>

            {/* 24/7 Support Badge */}
            <div className="absolute -top-3 -left-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl text-sm text-center">
              24/7 <br /> Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
