"use client";
import Image from "next/image";
import { useState } from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Button from "../button/Button";
import necklace from "../../../public/collection/neck.png";

export default function ProductMainPage() {
  const productImages = [necklace, necklace, necklace];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const stockAvailable = 12;

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      {/* Main Image and Thumbnails */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="flex-1">
          <div className="relative w-full">
            <Image
              src={productImages[activeImageIndex]}
              alt="Heart necklace"
              width={600}
              height={600}
              className="rounded-xl object-cover w-full h-auto"
            />
            {/* Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
            >
              <ChevronRight />
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex space-x-3 mt-4">
            {productImages.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                width={100}
                height={100}
                className={`rounded-lg cursor-pointer border-2 ${
                  activeImageIndex === i
                    ? "border-green-600"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImageIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold">Heart necklace</h1>
          <div className="text-2xl text-green-700 font-bold">₹1,999</div>
          <div className="text-gray-500 line-through">MRP ₹2,999</div>
          <p className="text-sm text-gray-700">
            Anti-tarnish guarantee. Magnetic lock. Long-lasting finish.
          </p>

          {/* Stock and Quantity */}
          <div className="mt-4 text-sm text-gray-800">
            <span
              className={`${
                stockAvailable > 0
                  ? "text-green-700"
                  : "text-red-600"
              } font-medium`}
            >
              {stockAvailable > 0
                ? `${stockAvailable} in stock`
                : "Out of stock"}
            </span>
          </div>

          {/* Quantity with icons */}
          <div className="flex items-center gap-4 mt-2">
            <label className="text-sm">Quantity:</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              >
                <RemoveIcon fontSize="small" />
              </button>
              <span className="px-3">{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((prev) =>
                    Math.min(stockAvailable, prev + 1)
                  )
                }
                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              >
                <AddIcon fontSize="small" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="bg-white border text-green-800 px-6 py-2 rounded-full">
              Buy Now
            </Button>
            <Button className="sm:w-80" variant="outline">
              Add to bag
            </Button>
          </div>
        </div>
      </div>

      {/* Offers */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D6E6DF]">
            <ShieldIcon fontSize="medium" />
          </div>
          <div>
            <span className="font-medium">6-Month Colour Warranty</span>
            <p className="text-sm text-gray-600">
              Your necklace won’t fade. We promise.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D6E6DF]">
            <KeyboardReturnIcon fontSize="medium" />
          </div>
          <div>
            <span className="font-medium">Easy 3-Day Return</span>
            <p className="text-sm text-gray-600">
              Change your mind? We got you.
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Offers */}
      <div className="mt-10 flex flex-col gap-5 bg-[#D6E6DF] p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Delivery Offers</h2>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <KeyboardReturnIcon />
          </div>
          <p>
            <strong>FREE delivery</strong> on orders above ₹799
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <KeyboardReturnIcon />
          </div>
          <p>
            <strong>FREE necklace</strong> on orders above ₹999
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">You may also like</h2>
        <div className="flex gap-4 overflow-x-auto">
          {[1, 2].map((n) => (
            <div key={n} className="border rounded-lg p-2 w-40 flex-shrink-0">
              <Image
                src={`/images/necklace-${n}.jpg`}
                alt={`Recommended ${n}`}
                width={160}
                height={160}
                className="rounded"
              />
              <p className="text-sm mt-2">Heart necklace</p>
              <p className="text-green-700 font-bold text-sm">₹1,999</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Customer reviews</h2>
        <button className="text-green-600 underline">Write a review</button>
        <div className="mt-6 space-y-4">
          {[1, 2, 3].map((r) => (
            <div key={r} className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Ananya, Mumbai</span>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">
                "It hasn’t tarnished at all – and I wear it daily. Truly
                stunning."
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-500">
        <p className="mt-6">
          Follow us 💗 <span className="text-pink-600">Instagram</span>{" "}
          <span className="text-blue-600">Facebook</span>
        </p>
      </footer>
    </div>
  );
}
