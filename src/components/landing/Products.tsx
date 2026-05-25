import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/landing/products/1.png",
    isNew: true,
  },
  {
    id: 2,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/landing/products/2.png",
    isNew: true,
  },
  {
    id: 3,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/landing/products/3.png",
    isNew: true,
  },
  {
    id: 4,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/landing/products/4.png",
    isNew: true,
  },
  {
    id: 5,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/landing/products/3.png",
    isNew: true,
  },
  {
    id: 6,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/landing/products/4.png",
    isNew: true,
  },
  {
    id: 7,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/landing/products/1.png",
    isNew: true,
  },
  {
    id: 8,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    image: "/img/landing/products/2.png",
    isNew: true,
  },
];

const Products = () => {
  return (
    <div className="bg-[#F8F5F0] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-bold">
            Explore <span className="text-gray-400">Products</span>
          </h2>
          <Link
            href="/shop"
            className="text-sm border-b border-b-gray-600 pb-1 hover:text-gray-600 transition"
          >
            Browse all products
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image Container - White Box */}
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-4">
                <Link href={"/shop/id"}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-6"
                  />
                </Link>

                {/* NEW Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-white text-xs font-medium px-3 py-1 rounded-full shadow border border-black">
                    NEW
                  </div>
                )}

                {/* Wishlist Icon */}
                <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
                  ♡
                </button>
              </div>

              {/* Name and Price - Outside the box */}
              <div className="px-1">
                <h3 className="text-lg font-medium line-clamp-2 min-h-[35px]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
