"use client";
import React from "react";
import { X } from "lucide-react";

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
}

const Filter = ({ isOpen, onClose }: FilterProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Filtered by:</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900"
            >
              <X size={24} />
            </button>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="bg-gray-100 px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
              Yoga mat <span className="text-gray-400 cursor-pointer">×</span>
            </div>
            <div className="bg-gray-100 px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
              Black <span className="text-gray-400 cursor-pointer">×</span>
            </div>
            <div className="bg-gray-100 px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
              Ivory <span className="text-gray-400 cursor-pointer">×</span>
            </div>
            <div className="bg-gray-100 px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
              $50 - $100 <span className="text-gray-400 cursor-pointer">×</span>
            </div>
            <div className="bg-gray-100 px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
              30% off or more{" "}
              <span className="text-gray-400 cursor-pointer">×</span>
            </div>
            <div className="bg-gray-100 px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
              Wool <span className="text-gray-400 cursor-pointer">×</span>
            </div>
            <button className="text-sm text-gray-500 hover:text-black underline">
              Clear All
            </button>
          </div>

          {/* Filter Categories */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Category (1)</h3>
                <span className="text-gray-400">-</span>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-black"
                      defaultChecked
                    />
                    <span>Yoga mat (34)</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-black" />
                    <span>Bottle (22)</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-black" />
                    <span>Gloves (22)</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-black" />
                    <span>Protein Bar (22)</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-black" />
                    <span>Mug (48)</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-black" />
                    <span>Ring (48)</span>
                  </label>
                </div>
              </div>
              <button className="mt-4 text-sm text-gray-700 underline">
                Show More
              </button>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Type (1)</h3>
                <span className="text-gray-400">+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Color (2)</h3>
                <span className="text-gray-400">+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Price (1)</h3>
                <span className="text-gray-400">+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Material (1)</h3>
                <span className="text-gray-400">+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Discount (1)</h3>
                <span className="text-gray-400">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
