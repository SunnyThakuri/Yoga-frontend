import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-107.5 lg:h-200 overflow-hidden">
      {/* Background Image - Properly positioned */}
      <img
        src="/img/landing.jpg"
        alt="Yoga landing background"
        className="absolute  w-full h-full object-cover object-bottom"
      />

      {/* Dark Overlay - Makes text visible */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full items-start justify-start px-6 lg:px-12 pt-20 lg:pt-30">
        <div className="max-w-xl ">
          <h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-30">
            <div className="mb-4"> Flow like water.</div>
            Stand like a tree.
          </h1>
        </div>
        <div className="text-white">
          <div className="flex gap-160 mb-5">
            <p>What other say</p>
            <p>About Yoga</p>
          </div>
          <div className="mb-6 border-b border-b-white -mx-6 lg:-mx-12 " />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - What others say */}
            <div className="bg-white/10 backdrop-blur-md p-3 pr-30 rounded-2xl border border-white/20 w-150">
              <div className="flex gap-6 ">
                <img
                  src="/img/testimonial.jpg" // Change this to your actual photo
                  alt="Karine L."
                  className="w-40 h-40 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 flex flex-col">
                  <p className="text-white text-[15px] leading-relaxed flex-1">
                    “More than yoga - it’s a second home with incredible people
                    and caring teachers who make everyone feel welcome.”
                  </p>
                  <p className="text-white font-medium">Karine L.</p>
                </div>
              </div>
            </div>

            {/* Right Column - About Yoga */}

            <div className="flex-1 flex flex-col">
              <p className="text-white text-[15px] leading-relaxed flex-1">
                We are a supportive community where you can grow and deepen your
                yoga practice.
              </p>
              <a
                href="#"
                className="inline-block mt-6 text-white border-b border-b-amber-100 pb-1 hover:border-b-amber-300 transition-colors w-fit"
              >
                Learn More
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
