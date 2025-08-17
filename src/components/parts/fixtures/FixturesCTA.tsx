// components/parts/FixturesCTA.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FixturesCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const FixturesCTA: React.FC<FixturesCTAProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="bg-gradient-to-r from-[#17a561] to-[#1e90ff] py-12 md:py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-md md:text-lg mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <Link href={buttonLink} passHref>
          <Button
            variant="secondary"
            className="bg-white text-green-600 hover:bg-gray-100 font-bold px-6 py-6 rounded-full text-lg"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FixturesCTA;
