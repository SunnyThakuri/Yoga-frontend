import React from "react";

const stats = [
  {
    number: "10+",
    label: "Years teaching",
  },
  {
    number: "4,000+",
    label: "Classes taught",
  },
  {
    number: "95%",
    label: "Student retention",
  },
  {
    number: "80+",
    label: "Workshops hosted",
  },
];

const Building = () => {
  return (
    <div className="bg-[#F8F5F0] py-4 px-6">
      <div className="max-w-7xl mx-auto mb-10">
        {/* Main Text */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            <span>
              A calm, inclusive space for building strength, finding balance,
              and
            </span>
            <br />
            <span className="text-[#64748B]">reconnecting with yourself.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow transition-all duration-300"
            >
              <div className="text-4xl md:text-3xl font-normal text-gray-900 mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Building;
