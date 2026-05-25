// components/Overview.tsx

import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="bg-[#F8F5F0]">
      <div className="pt-20 pb-1 px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-10">
          <div className="font-semibold text-6xl">Overview</div>
          <div>
            Vinyasa flow is a dynamic, breath-led practice that links movement
            and mindfulness with continuous, flowing transitions. Expect a
            creative sequence of poses that builds strength, flexibility, and
            inner focus. <br />
            <br /> With guidance from our instructors, you will move fluidly
            from one posture to the next, using breath as your anchor,
            cultivating balance, energy, and presence throughout your practice.
          </div>
        </div>
        <div className="border-b border-gray-400  mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-10">
          <div className="font-semibold text-6xl">Schedule</div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between rounded-4xl bg-white py-4 px-8">
              <div className="text-gray-500 text-lg"> Tuesday</div>
              <div className="text-lg"> 13:00 - 15:00</div>
            </div>
            <div className="flex flex-row justify-between rounded-4xl bg-white py-4 px-8">
              <div className="text-gray-500 text-lg"> Thursday</div>
              <div className="text-lg"> 13:45 - 15:45</div>
            </div>
            <div className="flex flex-row justify-between rounded-4xl bg-white py-4 px-8">
              <div className="text-gray-500 text-lg"> Sunday</div>
              <div className="text-lg"> 14:00 - 16:00</div>
            </div>
            <div className="text-gray-500 text-sm">
              *Schedule may vary slightly. You’ll receive updates for any
              changes.
            </div>
          </div>
        </div>
        <div className="border-b border-gray-400  mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-10">
          <div className="font-semibold text-6xl">Impact</div>
          <div>
            <div className="flex lg:flex-row flex-col justify-between gap-4 ">
              <div className="text-lg bg-white px-14 py-4 rounded-4xl justify-between">
                Energy
              </div>
              <div className="text-lg bg-white px-14 py-4 rounded-4xl justify-between">
                Flexibility
              </div>
              <div className="text-lg bg-white px-14 py-4 rounded-4xl justify-between">
                Strength
              </div>
            </div>
            <div className="text-gray-500 text-sm mt-4">
              *Focus areas to help you get the most from class.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
