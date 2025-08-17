// components/parts/PageTitle.tsx
import React from "react";

interface PageTitleProps {
  title: string;
  description: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-[#17a561] to-[#1e90ff] py-12 md:py-16 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-md md:text-lg max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default PageTitle;
