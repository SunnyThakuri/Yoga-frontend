import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#F8F5F0] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Let’s begin
            <br />
            <span className="text-gray-500">with a message</span>
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-6 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-gray-400 transition"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inquiry type <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-6 py-4 text-gray-500 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-gray-400 transition appearance-none">
                <option value="">Select type</option>
                <option value="class">Class Inquiry</option>
                <option value="retreat">Retreat Inquiry</option>
                <option value="private">Private Session</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-gray-400 transition"
              />
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience level <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-6 py-4 text-gray-500 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-gray-400 transition appearance-none">
                <option value="">Select type</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter your phone"
                className="w-full px-6 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-gray-400 transition"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="w-full px-6 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-gray-400 transition"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
                  📅
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Add any questions or notes..."
              className="w-full px-6 py-4 bg-white rounded-3xl border border-gray-200 focus:outline-none focus:border-gray-400 transition resize-y"
            />
          </div>

          {/* Submit Button */}
          <div className="flex pt-0">
            <button
              type="submit"
              className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition text-md"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
