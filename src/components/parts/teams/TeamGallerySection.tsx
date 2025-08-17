// components/parts/TeamGallery.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy-Bilddaten – ersetzen Sie dies durch Ihre tatsächlichen Bild-URLs
const galleryImages = [
  { id: 1, src: "/rayon1.jpg", alt: "Team in Action" },
  { id: 2, src: "/rayon2.jpg", alt: "Players Celebrating" },
  { id: 3, src: "/rayon3.jpg", alt: "Team Portrait" },
  { id: 4, src: "/rayon4.jpg", alt: "Match Highlights" },
];

const TeamGallery = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Team Gallery
          </h2>
          <Link
            href="/team/gallery"
            className="text-green-600 hover:underline text-sm"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex space-x-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative w-64 h-40 md:w-80 md:h-48 rounded-lg shadow-md overflow-hidden flex-shrink-0"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
