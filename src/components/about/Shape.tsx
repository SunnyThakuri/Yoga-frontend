import React from "react";
import Image from "next/image";

const Shape = () => {
  return (
    <div className="bg-[#F8F5F0] py-5 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 mt-10">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            What shapes
            <br />
            our
            <span className="text-[#64748B]"> Philosophy</span>
          </h2>
        </div>
        <div className="border-b-2 border-gray-200  mb-8 -mx-6 lg:-mx-32" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 ">
          {/* Left Image */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden lg:w-60 lg:h-40 w-50 h-30">
              <Image
                src="/img/landing/findflow/1.jpg" // Replace with your actual image
                alt="Yoga silhouette at sunset"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Content */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-row gap-5">
              <div className="text-sm font-medium text-gray-400 mb-2">01</div>
              <p className="text-[15px] leading-relaxed text-gray-700">
                We believe yoga is more than movement - it’s a practice of
                presence, awareness, and self-discovery that begins and grows
                with practices.
              </p>
            </div>

            <div className="flex flex-row gap-5">
              <div className="text-sm font-medium text-gray-400 mb-2">02</div>
              <p className="text-[15px] leading-relaxed text-gray-700">
                We believe yoga is more than movement - it’s a practice of
                presence, awareness, and self-discovery that begins and grows
                with practices.
              </p>
            </div>

            <a
              href="#"
              className="inline-block text-sm ml-8 text-gray-400 font-medium border-b border-b-gray-400 pb-1 hover:text-gray-800 transition"
            >
              Explore Classes
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden lg:w-80 lg:h-70 w-60 h-50 ">
              <Image
                src="/img/landing/findflow/3.jpg" // Replace with your actual image
                alt="Man meditating on mountain"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-200  mb-8 -mx-6 lg:-mx-32" />
      </div>
    </div>
  );
};

export default Shape;
