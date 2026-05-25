import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

const retreats = [
  {
    id: 1,
    location: "Italy",
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    image: "/img/landing/retreats/1.jpg", // Replace with your actual images
  },
  {
    id: 2,
    location: "Italy",
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    image: "/img/landing/retreats/2.jpg",
  },
  {
    id: 3,
    location: "Italy",
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    image: "/img/landing/retreats/3.jpg",
  },
];

const Retreat = () => {
  return (
    <div className="bg-[#F8F5F0] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              Yoga Retreats
            </h2>
          </div>

          <div className="mt-8 lg:mt-0 text-left">
            <p className="text-gray-600 max-w-60">
              A variety of classes designed to meet you exactly where you are.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-sm border-b border-b-gray-600 pb-1 hover:text-gray-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Retreat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retreats.map((retreat) => (
            <Link key={retreat.id} href={"/retreat/id"}>
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-[480px] overflow-hidden">
                  <Image
                    src={retreat.image}
                    alt={retreat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  {/* Location Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-sm">
                    <MapPin size={18} strokeWidth={2.5} /> {retreat.location}
                  </div>
                  {/* Text Inside Image (Bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-xl font-light leading-tight mb-2">
                      {retreat.title}
                    </h3>
                    <p className="text-sm text-white/90">{retreat.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Retreat;
