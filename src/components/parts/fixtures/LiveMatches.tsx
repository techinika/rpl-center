// components/parts/LiveMatchesSection.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Dummy data for live matches
const liveMatches = [
  {
    id: "match1",
    teams: [
      { name: "APR FC", short: "APR", score: 2 },
      { name: "Rayon Sports", short: "RAY", score: 1 },
    ],
    minute: "75'",
    location: "Amahoro Stadium",
  },
  {
    id: "match2",
    teams: [
      { name: "Mukura VS", short: "MUK", score: 0 },
      { name: "AS Kigali", short: "ASK", score: 0 },
    ],
    minute: "45'",
    location: "Huye Stadium",
  },
  {
    id: "match3",
    teams: [
      { name: "Kiyovu Sports", short: "KIY", score: 1 },
      { name: "Musanze FC", short: "MUS", score: 1 },
    ],
    minute: "90'",
    location: "Kigali Stadium, Nyamirambo",
  },
];

const LiveMatchesSection = () => {
  // Do not render the component if there are no live matches
  if (liveMatches.length === 0) {
    return null;
  }

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Live Matches</h2>

        {/* Live Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveMatches.map((match) => (
            <div
              key={match.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                {/* Live indicator */}
                <div className="flex items-center space-x-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                  <span>Live</span>
                </div>
                <div className="text-xs text-gray-500">{match.minute}</div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                {/* Team 1 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-800">
                    {match.teams[0].short}
                  </div>
                  <span className="mt-2 text-sm text-gray-600">
                    {match.teams[0].name}
                  </span>
                </div>
                {/* Score */}
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-gray-800">
                    {match.teams[0].score} - {match.teams[1].score}
                  </span>
                </div>
                {/* Team 2 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-800">
                    {match.teams[1].short}
                  </div>
                  <span className="mt-2 text-sm text-gray-600">
                    {match.teams[1].name}
                  </span>
                </div>
              </div>

              {/* Location and Details Button */}
              <div className="mt-6 flex flex-col items-center">
                <div className="text-sm text-gray-500 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.686 2 6 4.686 6 8s6 14 6 14 6-10.686 6-14-2.686-6-6-6zm0 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                  {match.location}
                </div>
                <Link href={`/match-details/${match.id}`} passHref>
                  <Button
                    variant="outline"
                    className="text-green-600 border-green-600 hover:bg-green-50"
                  >
                    View Match Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMatchesSection;
