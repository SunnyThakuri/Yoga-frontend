import React from "react";

const benefits = [
  {
    icon: "🧘",
    title: "Strength",
    description: "Build stability and power",
  },
  {
    icon: "🌸",
    title: "Flexibility",
    description: "Increase range and ease",
  },
  {
    icon: "⚖️",
    title: "Balance",
    description: "Find harmony in movement",
  },
];

const WhyYoga = () => {
  return (
    <div className="bg-[#F8F5F0] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-semibold mb-16">
          Why practice yoga
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-6xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-light mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <p className="mt-16 text-gray-600 max-w-sm mx-auto text-[15px] leading-relaxed">
          From strength and flexibility to calm and connection, see what regular
          practice can bring to your life.
        </p>
      </div>
    </div>
  );
};

export default WhyYoga;
