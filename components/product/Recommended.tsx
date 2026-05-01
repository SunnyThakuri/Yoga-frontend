"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    images: ["/img/shop/1.png", "/img/shop/2.png", "/img/shop/3.png"],
    isNew: true,
  },
  {
    id: 2,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    images: ["/img/shop/2.png", "/img/product/2.png", "/img/product/3.png"],
    isNew: true,
  },
  {
    id: 3,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    images: ["/img/shop/3.png", "/img/product/2.png", "/img/product/3.png"],
    isNew: true,
  },
  {
    id: 4,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    images: ["/img/shop/4.png", "/img/product/2.png", "/img/product/3.png"],
    isNew: true,
  },
  {
    id: 5,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    images: ["/img/shop/1.png", "/img/product/2.png", "/img/product/3.png"],
    isNew: true,
  },
  {
    id: 6,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    images: ["/img/shop/2.png", "/img/product/2.png", "/img/product/3.png"],
    isNew: true,
  },
  {
    id: 7,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    images: ["/img/shop/3.png", "/img/product/2.png", "/img/product/3.png"],
    isNew: true,
  },
  {
    id: 8,
    name: "Azalea Brown Velvet Dining Chair",
    price: "$99.99",
    images: ["/img/shop/4.png", "/img/product/2.png", "/img/product/3.png"],
    isNew: true,
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wishlist, setWishlist] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const segment = width / product.images.length;
    const index = Math.min(Math.floor(x / segment), product.images.length - 1);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => setActiveIndex(0);

  return (
    <div className="group bg-transparent overflow-hidden transition-all duration-300">
      {/* Image */}
      <div
        className="relative aspect-5/6 bg-white overflow-hidden rounded-3xl cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Images — stack all, show active */}
        {product.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${product.name} ${i + 1}`}
            fill
            className={`object-contain p-8 transition-opacity duration-300 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* NEW Badge */}
        {product.isNew && (
          <div className="absolute top-5 left-5 bg-white text-xs font-medium px-4 py-1.5 rounded-full shadow">
            NEW
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWishlist((w) => !w)}
          className="absolute top-5 right-5 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition"
        >
          <Heart
            size={15}
            className={
              wishlist ? "fill-red-400 stroke-red-400" : "stroke-gray-400"
            }
          />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-200 ${
                i === activeIndex
                  ? "w-4 h-1.5 bg-gray-700"
                  : "w-1.5 h-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-1 pt-4 pb-2">
        <h3 className="text-sm font-medium line-clamp-2 min-h-10 text-gray-900">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-gray-400 mt-1">
          {product.price}
        </p>
      </div>
    </div>
  );
}

const Recommended = () => {
  return (
    <div className="bg-[#F8F5F0] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl mb-12 font-medium">You might also like</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
