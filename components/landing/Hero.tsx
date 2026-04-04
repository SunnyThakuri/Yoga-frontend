import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-full min-h-screen lg:h-[850px] overflow-hidden"
    >
      {/* Background Image - Full Screen */}
      <img
        src="/img/landing/hero/landing.jpg"
        alt="Yoga landing background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col px-6 lg:px-12 pt-20 lg:pt-24 pb-40">
        {/* Heading */}
        <div className="max-w-2xl mb-30">
          <h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-tight">
            Flow like water.
            <br />
            Stand like a tree.
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          {/* Labels */}
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 text-white/90 text-sm tracking-widest mb-4">
            <p>What others say</p>
            <p className="hidden lg:block">About Yoga</p>
          </div>

          {/* Full Width Border */}
          <div className="border-b-2 border-white  mb-8 -mx-6 lg:-mx-12" />

          {/* Two Columns */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Testimonial */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 w-145">
              <div className="flex gap-5">
                <img
                  src="/img/landing/hero/testimonial.jpg"
                  alt="Karine L."
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover shrink-0"
                />
                <div className="flex-1 flex flex-col">
                  <p className="text-white text-[15px] leading-relaxed flex-1">
                    “More than yoga - it’s a second home with incredible people
                    and caring teachers who make everyone feel welcome.”
                  </p>
                  <p className="text-white font-medium mt-6">Karine L.</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute left-1/2 -top-8 -bottom-50 w-px bg-white -translate-x-1/2" />
            {/* Right - About Yoga */}
            <div className="flex-1 flex flex-col">
              <p className="text-white text-[15px] leading-relaxed flex-1 w-100">
                We are a supportive community where you can grow and deepen your
                yoga practice.
              </p>
              <a
                href="#"
                className="inline-block mt-8 text-white border-b border-b-white pb-1 hover:border-b-amber-200 transition w-fit"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
