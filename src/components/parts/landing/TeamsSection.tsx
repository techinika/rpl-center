// components/parts/TeamsSection.tsx
import React from "react";
import Link from "next/link";

// Dummy data for teams
const teams = [
  { name: "APR FC", short: "APR", slug: "apr-fc" },
  { name: "Rayon Sports", short: "RAY", slug: "rayon-sports" },
  { name: "Kiyovu Sports", short: "KIY", slug: "kiyovu-sports" },
  { name: "Police FC", short: "POL", slug: "police-fc" },
  { name: "Musanze FC", short: "MUS", slug: "musanze-fc" },
  { name: "AS Kigali", short: "AS", slug: "as-kigali" },
  { name: "AS Kigali", short: "AS", slug: "as-kigali" },
  { name: "AS Kigali", short: "AS", slug: "as-kigali" },
  { name: "AS Kigali", short: "AS", slug: "as-kigali" },
  // Add more teams as needed
];

const TeamsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Teams</h2>
          <Link href="/teams">
            <span className="text-sm font-semibold text-green-600 hover:text-green-800 transition-colors duration-200 cursor-pointer">
              View All Teams
            </span>
          </Link>
        </div>

        {/* Teams Carousel/Grid */}
        <div className="flex space-x-4 overflow-x-auto p-2 scrollbar-hide">
          {teams.map((team, index) => (
            <Link key={index} href={`/teams/${team.slug}`}>
              <div className="flex flex-col items-center justify-center p-4 min-w-[150px] bg-white rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105">
                {/* Team Icon/Logo Placeholder */}
                <div className="flex items-center justify-center h-20 w-20 bg-gray-200 rounded-full mb-2">
                  <span className="text-lg font-bold text-gray-800">
                    {team.short}
                  </span>
                </div>
                {/* Team Name */}
                <span className="text-sm font-medium text-gray-700 text-center">
                  {team.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
