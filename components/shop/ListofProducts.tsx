import React from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";
const products = [
  {
    id: 1,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/shop/1.png",
    isNew: true,
  },
  {
    id: 2,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/shop/2.png",
    isNew: true,
  },
  {
    id: 3,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/shop/3.png",
    isNew: true,
  },
  {
    id: 4,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/shop/4.png",
    isNew: true,
  },
  {
    id: 5,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/shop/1.png",
    isNew: true,
  },
  {
    id: 6,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/shop/2.png",
    isNew: true,
  },
  {
    id: 7,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/shop/3.png",
    isNew: true,
  },
  {
    id: 8,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/shop/4.png",
    isNew: true,
  },
];

const ListofProducts = () => {
  return (
    <div className="bg-[#F8F5F0] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 mt-16">
          <button className="px-5 py-2 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-white transition">
            <SlidersHorizontal size={18} strokeWidth={2.5} />
            Filters
          </button>
          <div className="flex items-center gap-4 text-sm ">
            <div className="text-gray-500">1674 items</div>
            <div className="border border-gray-300 rounded-full px-4 py-2">
              <select className="bg-transparent  rounded-full">
                <option>Most Relevant</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-400 mt-[-20]  mb-8 -mx-6 lg:-mx-32" />

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-transparent overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-5/6 bg-white overflow-hidden  rounded-3xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />

                {/* NEW Badge */}
                {product.isNew && (
                  <div className="absolute top-5 left-5 bg-white text-xs font-medium px-4 py-1.5 rounded-full shadow">
                    NEW
                  </div>
                )}

                {/* Wishlist */}
                <button className="absolute top-5 right-5 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
                  ♡
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-sm font-medium line-clamp-2 min-h-10.5">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition mx-auto font-medium">
          View more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mt-1"
            fill="none"
            viewBox="0 0 24 28"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ListofProducts;
