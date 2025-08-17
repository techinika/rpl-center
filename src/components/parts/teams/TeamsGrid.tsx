"use client";

// components/pages/TeamsGrid.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Dummy data for teams
const tier1Teams = [
  { id: "1", name: "APR FC", logo: "/path/to/apr-logo.png" },
  { id: "2", name: "Rayon Sports", logo: "/path/to/rayon-logo.png" },
  { id: "3", name: "AS Kigali", logo: "/path/to/askigali-logo.png" },
  { id: "4", name: "Police FC", logo: "/path/to/police-logo.png" },
  { id: "5", name: "Mukura Victory Sports", logo: "/path/to/mukura-logo.png" },
  { id: "6", name: "Kiyovu Sports", logo: "/path/to/kiyovu-logo.png" },
  { id: "7", name: "Gasogi United", logo: "/path/to/gasogi-logo.png" },
  { id: "8", name: "Musanze FC", logo: "/path/to/musanze-logo.png" },
  { id: "9", name: "Marines FC", logo: "/path/to/marines-logo.png" },
  { id: "10", name: "Etincelles FC", logo: "/path/to/etincelles-logo.png" },
  { id: "11", name: "Bugesera FC", logo: "/path/to/bugesera-logo.png" },
  { id: "12", name: "Gorilla FC", logo: "/path/to/gorilla-logo.png" },
  { id: "13", name: "Sunrise FC", logo: "/path/to/sunrise-logo.png" },
  { id: "14", name: "Rwamagana City FC", logo: "/path/to/rwamagana-logo.png" },
  { id: "15", name: "Amagaju FC", logo: "/path/to/amagaju-logo.png" },
  { id: "16", name: "Etoile de l'Est", logo: "/path/to/etoile-logo.png" },
];

const tier2Teams = [
  { id: "17", name: "Intare FC", logo: "/path/to/intare-logo.png" },
  { id: "18", name: "Vision FC", logo: "/path/to/vision-logo.png" },
  { id: "19", name: "Gicumbi FC", logo: "/path/to/gicumbi-logo.png" },
];

const TeamsGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tier 1 Teams Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Rwanda Premier League Teams
          </h2>
          <p className="mt-2 text-md text-gray-600 max-w-2xl mx-auto">
            Explore the top clubs competing in the top flight of Rwandan
            football.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tier 1 Teams Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tier1Teams.map((team) => (
            <Link key={team.id} href={`/teams/${team.id}`} passHref>
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center text-center cursor-pointer">
                {/* Logo Placeholder */}
                <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-xl font-bold text-gray-700">
                    {team.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {team.name}
                </h3>
                <ArrowRight className="mt-2 h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* Tier 2 Teams Section Title */}
        <div className="text-center mt-16 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Tier 2 Teams to Watch
          </h2>
          <p className="mt-2 text-md text-gray-600 max-w-2xl mx-auto">
            These are some of the top teams from the second division with a
            chance of promotion.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tier 2 Teams Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tier2Teams.map((team) => (
            <Link key={team.id} href={`/teams/${team.id}`} passHref>
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center text-center cursor-pointer">
                {/* Logo Placeholder */}
                <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-xl font-bold text-gray-700">
                    {team.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {team.name}
                </h3>
                <ArrowRight className="mt-2 h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsGrid;
