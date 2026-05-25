import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#0A1F1C] min-h-screen text-white py-30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-2">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium leading-tight">
              Find your flow
              <br />
              with our <span className="text-gray-500">Classes</span>
            </h2>
          </div>

          <div className="mt-8 lg:mt-0 text-left">
            <p className="text-white max-w-70">
              A variety of classes designed to meet you exactly where you are.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm border-b border-b-white pb-1 hover:border-white/70 transition"
            >
              Contact us
            </a>
          </div>
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
