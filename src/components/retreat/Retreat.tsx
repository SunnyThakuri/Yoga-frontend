import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";

const retreats = [
  {
    id: 1,
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    location: "Italy", // Note: Matches image UI despite title saying Spain
    image: "/img/retreats/1.jpg",
  },
  {
    id: 2,
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    location: "Italy",
    image: "/img/retreats/2.jpg",
  },
  {
    id: 3,
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    location: "Italy",
    image: "/img/retreats/3.jpg",
  },
  {
    id: 4,
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    location: "Italy",
    image: "/img/retreats/4.jpg",
  },
  {
    id: 5,
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    location: "Italy",
    image: "/img/retreats/5.jpg",
  },
  {
    id: 6,
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    location: "Italy",
    image: "/img/retreats/6.jpg",
  },
  {
    id: 7,
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    location: "Italy",
    image: "/img/retreats/7.jpg",
  },
  {
    id: 8,
    title: "Sana Sana Boutique Health & Wellness Retreat, Spain",
    date: "May 20 2026 - May 26 2026",
    location: "Italy",
    image: "/img/retreats/8.jpg",
  },
];

const Retreat = () => {
  return (
    <div className="bg-[#F8F5F0] py-25 px-20">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl font-semibold text-gray-900 mb-12">
          Yoga Retreats
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retreats.map((retreat) => (
            <Link key={retreat.id} href={"/retreat/id"}>
              <div className="relative group h-[450px] w-full rounded-[2rem] overflow-hidden shadow-sm transition-transform duration-500 hover:scale-[1.01]">
                {/* Background Image */}
                <img
                  src={retreat.image}
                  alt={retreat.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Location Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
                    <MapPin size={14} className="text-gray-600" />
                    <span className="text-xs font-medium text-gray-800">
                      {retreat.location}
                    </span>
                  </div>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h3 className="text-white text-xl font-medium leading-snug mb-3">
                    {retreat.title}
                  </h3>
                  <p className="text-white/80 text-xs font-light tracking-wide">
                    {retreat.date}
                  </p>
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
