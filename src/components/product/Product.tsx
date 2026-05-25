"use client";

import { useState } from "react";
import { MapPin, Minus, Plus, ChevronDown } from "lucide-react";

const product = {
  name: "Printed Wristline Wonder Corset with the Shrug",
  price: 70,
  rating: 4,
  reviewCount: 42,
  colors: [
    { name: "Black", hex: "#111111" },
    { name: "Red", hex: "#e02020" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  description:
    "A statement with a Flower Printed Crop Shrug and Corset Set. This stylish ensemble features a backless, sleeved shrug paired with a fitted corset and a skirt — boasting a front V-shaped wide waistband and a side button to unbutton the slit at the bottom, offering both elegance and comfort. Perfect for any occasion!",
  details: [
    { label: "Stretch factor", value: "Stretchy" },
    { label: "Care", value: "Dry Clean and Machine Wash" },
  ],
  fabricContent: [
    "Black — Made from double layer of premium, stretch slinky jersey (97% Polyester, 3% Elastane).",
    "Shrug — Floral prints on georgette fabric (100% polyester)",
    "Red — Made from double layer of premium, stretch slinky Lycra jersey (95% Polyester, 5% Elastane).",
    "Shrug — Floral prints on georgette fabric (100% polyester)",
  ],
  note: "Color may vary due to lightning of the set.",
  images: ["/img/product/1.png", "/img/product/2.png", "/img/product/3.png"],
};

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill={i <= rating ? "#f5a623" : "#ddd"}
          >
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-400">({count})</span>
    </div>
  );
}

const Product = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(true);

  return (
    <div className="bg-[#F8F5F0] py-20 px-10 min-h-screen flex items-start justify-center">
      <div className="max-w-7xl w-full bg-transparent rounded-sm grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* LEFT: Image Gallery */}
        <div className="flex bg-transparent">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2 p-4 border-r border-gray-100">
            {product.images.map((src, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-24 h-25 rounded-sm overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-150 ${
                  activeImage === i
                    ? "ring-2 ring-gray-800"
                    : "ring-2 ring-transparent"
                }`}
              >
                <img
                  src={src}
                  alt={`thumb-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          {/* <div className="relative flex-1 overflow-hidden min-h-115">
            <img
              src={product.images[activeImage]}
              alt="Product"
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
            />
          </div> */}
          {/* All 3 images stacked vertically */}
          <div className="flex-1 flex flex-col gap-4">
            {product.images.map((src, i) => (
              <div key={i} className="w-full object-contain overflow-hidden">
                <img
                  src={src}
                  alt={`product-${i}`}
                  className="w-full h-135 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="flex flex-col gap-5 p-10">
          {/* Title & Price */}
          <div>
            <h1 className="text-xl font-semibold text-gray-900 leading-snug mb-2 tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-gray-900">
                US${product.price}
              </span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Color */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2.5">
              Color:{" "}
              <strong className="text-gray-900">{selectedColor.name}</strong>
            </p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  title={c.name}
                  className={`w-7 h-7 rounded-full transition-all duration-150 ${
                    selectedColor.name === c.name
                      ? "ring-2 ring-gray-800 ring-offset-2"
                      : "ring-2 ring-transparent"
                  }`}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2.5">
              Size: <strong className="text-gray-900">{selectedSize}</strong>
            </p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 text-xs rounded-sm border transition-all duration-150 tracking-wide ${
                    selectedSize === s
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2.5">
              Quantity
            </p>
            <div className="inline-flex items-center border border-gray-200 rounded-sm overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors duration-100"
              >
                <Minus size={14} />
              </button>
              <span className="w-11 text-center text-sm font-medium text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors duration-100"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5">
            <button className="w-full py-3.5 bg-gray-900 hover:bg-gray-700 text-white text-xs uppercase tracking-widest rounded-sm transition-colors duration-150">
              Message us on WhatsApp
            </button>
            <button className="w-full py-3.5 bg-white hover:bg-gray-50 text-gray-900 text-xs uppercase tracking-widest border border-gray-200 hover:border-gray-400 rounded-sm transition-all duration-150">
              Message us on Messenger
            </button>
          </div>

          <hr className="border-gray-100" />

          {/* Product Details Accordion */}
          <div>
            <button
              onClick={() => setDetailsOpen((o) => !o)}
              className="w-full flex justify-between items-center bg-transparent border-none cursor-pointer p-0"
            >
              <span className="text-sm font-semibold text-gray-900 tracking-tight">
                Product Details
              </span>
              <ChevronDown
                size={18}
                className={`text-gray-500 transition-transform duration-200 ${
                  detailsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {detailsOpen && (
              <div className="mt-4 flex flex-col gap-3">
                <p className="text-xs text-gray-500 leading-relaxed">
                  {product.description}
                </p>
                {product.details.map((d) => (
                  <p key={d.label} className="text-xs text-gray-500">
                    <strong className="text-gray-700">{d.label}:</strong>{" "}
                    {d.value}
                  </p>
                ))}
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1.5">
                    Fabric content
                  </p>
                  <ul className="list-disc pl-4 flex flex-col gap-1">
                    {product.fabricContent.map((f, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-500 leading-relaxed"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-400 italic">{product.note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
