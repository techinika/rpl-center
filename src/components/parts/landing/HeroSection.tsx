// components/parts/HeroSection.tsx
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/amahoro.jpg')", // Replace with the actual image path
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17a561] to-[#1e90ff] opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-start p-8 justify-center mx-auto text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Rwanda Premier League 2023/24
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl">
          The home of Rwandan football - follow your favorite teams, check
          fixtures and stay updated with the latest news.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link href="/fixtures">
            <button className="rounded-md bg-[#ffca28] px-6 py-3 text-black font-semibold transition-colors hover:bg-[#e0b020]">
              View Fixtures
            </button>
          </Link>
          <Link href="/teams">
            <button className="rounded-md border border-white bg-transparent px-6 py-3 text-white t4ansition-colors hover:bg-white hover:text-black">
              Explore Teams
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
