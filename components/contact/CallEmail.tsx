import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactCards = () => {
  const contactMethods = [
    {
      title: "Call Us",
      info: "+1 (213) 555-1245",
      icon: <Phone size={20} className="text-gray-700" />,
      image: "/img/contact/1.jpg",
      alt: "Yoga practitioner sitting in a calm space",
    },
    {
      title: "Email Us",
      info: "hello@yoga.com",
      icon: <Mail size={20} className="text-gray-700" />,
      image: "/img/contact/2.jpg",
      alt: "Yoga practitioner doing a downward dog variation",
    },
    {
      title: "Visit Us",
      info: "1457 Coral Way, Miami",
      icon: <MapPin size={20} className="text-gray-700" />,
      image: "/img/contact/3.jpg",
      alt: "Yoga practitioner in an arm balance pose",
    },
  ];

  return (
    <div className="bg-[#F8F5F0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-semibold text-black mb-16 tracking-tight">
          We are here to help
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Content Header */}
              <div className="p-8 pb-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm tracking-wide">
                    {method.info}
                  </p>
                </div>
                <div className="pt-1">{method.icon}</div>
              </div>

              {/* Image Section */}
              <div className="flex-grow ">
                <div className="h-[300px] w-full overflow-hidden">
                  <img
                    src={method.image}
                    alt={method.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
