import React from "react";

const features = [
  {
    icon: "🛍️", // Replace with actual icons
    text: "Lowest Price",
  },
  {
    icon: "💰", // Replace with actual icons
    text: "Cash on Delivery",
  },
  {
    icon: "📦", // Replace with actual icons
    text: "7-day Returns",
  },
];

export default function FeaturesSection() {
  return (
    <div className="flex items-center justify-around bg-blue-100 p-4 rounded-lg shadow-md max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center gap-2 text-gray-700">
          <div className="bg-white p-3 rounded-full shadow-md">
            <span className="text-2xl">{feature.icon}</span>
          </div>
          <p className="text-sm font-semibold">{feature.text}</p>
        </div>
      ))}
    </div>
  );
}
