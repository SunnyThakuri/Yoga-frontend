import React from "react";
import Image from "next/image";
import Link from "next/link";

const classes = [
  {
    id: "01",
    title: "Vinyasa Flow",
    description: "Dynamic movement for strength and flexibility.",
    level: "All Levels",
    duration: "3 Months",
    tags: ["Energy", "Flexibility", "Strength"],
    image: "/img/landing/findflow/1.jpg", // Replace with your actual images
  },
  {
    id: "02",
    title: "Hatha Yoga",
    description: "Dynamic movement for strength and flexibility.",
    level: "Beginner",
    duration: "1 Month",
    tags: ["Energy", "Flexibility", "Strength"],
    image: "/img/landing/about/1.jpg",
  },
  {
    id: "03",
    title: "Yin Yoga",
    description: "Dynamic movement for strength and flexibility.",
    level: "All Levels",
    duration: "3 Months",
    tags: ["Energy", "Flexibility", "Strength"],
    image: "/img/landing/findflow/3.jpg",
  },
];

const Flow = () => {
  return (
    <div className="bg-[#F8F5F0] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
              Find your flow
              <br />
              with our <span className="text-gray-500">Classes</span>
            </h2>
          </div>

          <div className="mt-8 lg:mt-0 text-left">
            <p className="text-gray-600 max-w-70">
              A variety of classes designed to meet you exactly where you are.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-sm underline hover:text-gray-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Classes List */}
        <div className="space-y-16">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Content */}

              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-400 font-medium tracking-widest">
                    {cls.id}
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <Link href={"/classes/id"}>
                  <h3 className="text-4xl font-semibold mb-3">{cls.title}</h3>
                  <p className="text-gray-600 mb-6">{cls.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {cls.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 text-xs border border-#9F4312 rounded-full text-[#9F4312]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>

              {/* Right Side - Info + Smaller Image */}
              <div className="lg:col-span-5">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
                  {/* Level & Duration Info */}
                  <div className="lg:w-40 flex-shrink-0 lg:mt-8 ">
                    <p className="text-sm text-gray-500">Level:</p>
                    <p className="font-medium text-3xl">{cls.level}</p>

                    <p className="text-sm text-gray-500 mt-6">Duration:</p>
                    <p className="font-medium text-3xl">{cls.duration}</p>
                  </div>

                  {/* Image Container - Fixed for mobile */}
                  <div className="relative w-full max-w-[280px] lg:max-w-[280px] h-50 aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={cls.image}
                      alt={cls.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 260px"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flow;
