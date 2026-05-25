import React from "react";
import Image from "next/image";

const insightsData = [
  {
    id: 1,
    category: "News",
    date: "Jul 5, 2025",
    title: "Join Our Upcoming Yoga Workshop Series",
    image: "/img/landing/insights/1.jpg",
  },
  {
    id: 2,
    category: "Blog",
    date: "Jul 5, 2025",
    title: "Join Our Upcoming Yoga Workshop Series",
    image: "/img/landing/about/1.jpg",
  },
  {
    id: 3,
    category: "News",
    date: "Jul 5, 2025",
    title: "Join Our Upcoming Yoga Workshop Series",
    image: "/img/landing/insights/3.jpg",
  },
  {
    id: 4,
    category: "Blog",
    date: "Jul 5, 2025",
    title: "Join Our Upcoming Yoga Workshop Series",
    image: "/img/landing/insights/4.jpg",
  },
];

const Insights = () => {
  return (
    <div className="bg-[#F8F5F0] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <h2 className="text-5xl font-bold">
            Our <span className="text-gray-400">Insights</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end gap-x-160 mb-6">
          <div>
            <button className=" text-gray-400">News</button>
          </div>

          <div>
            <button className=" text-gray-400">Blog</button>
          </div>
        </div>

        {/* Insights Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insightsData.map((item) => (
            <div
              key={item.id}
              className="group   overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row  "
            >
              <div className="rounded-3xl relative md:w-8/12 h-64 md:h-auto overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-medium leading-tight mb-6 line-clamp-2">
                  {item.title}
                </h3>

                <a
                  href="#"
                  className="text-sm font-medium border-b border-b-gray-600 pb-1 text-gray-400 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block text-sm border-b border-b-gray-600 pb-1 text-gray-400 transition"
          >
            Explore All
          </a>
        </div>
      </div>
    </div>
  );
};

export default Insights;
