// components/parts/SubscribeForm.tsx
import React from "react";

const SubscribeForm = () => {
  return (
    <div className="bg-[#00519E] py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Subscribe to our newsletter to receive the latest news, match updates,
          and exclusive content from the Rwanda Premier League.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full max-w-md bg-white rounded-l-md border-0 focus:ring-2 focus:ring-yellow-500 text-black px-4 py-3"
          />
          <button className="rounded-r-md bg-[#F2C00E] hover:bg-[#e0b020] text-black font-semibold px-6 py-3 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
