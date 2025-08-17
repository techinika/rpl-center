// components/parts/LiveMatches.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Dummy data for live matches
const liveMatches = [
  {
    id: "match1",
    status: "Live",
    teams: [
      { name: "APR FC", short: "APR", score: 2 },
      { name: "Rayon Sports", short: "RAY", score: 1 },
    ],
    minute: "75'",
  },
  {
    id: "match2",
    status: "Live",
    teams: [
      { name: "Mukura VS", short: "MUK", score: 0 },
      { name: "AS Kigali", short: "ASK", score: 0 },
    ],
    minute: "45'",
  },
  // Add more live matches here as needed
];

const LiveMatches = () => {
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  useEffect(() => {
    // Only set up the carousel if there is more than one live match
    if (liveMatches.length > 1) {
      const interval = setInterval(() => {
        setCurrentMatchIndex((prevIndex) =>
          prevIndex === liveMatches.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 5 seconds transition

      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }
  }, []);

  const currentMatch = liveMatches[currentMatchIndex];

  // Do not render the component if there are no live matches
  if (liveMatches.length === 0) {
    return null;
  }

  return (
    <div className="py-5 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Live indicator */}
          <div className="flex items-center space-x-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
            <span>Live</span>
          </div>
          {/* Match details */}
          <div className="flex items-center space-x-6">
            {/* Team 1 */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-800">
                {currentMatch.teams[0].short}
              </div>
              <span className="mt-1 text-sm text-gray-600">
                {currentMatch.teams[0].name}
              </span>
            </div>
            {/* Score */}
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-gray-800">
                {currentMatch.teams[0].score} - {currentMatch.teams[1].score}
              </span>
              <span className="text-xs text-gray-500">
                {currentMatch.minute}
              </span>
            </div>
            {/* Team 2 */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-800">
                {currentMatch.teams[1].short}
              </div>
              <span className="mt-1 text-sm text-gray-600">
                {currentMatch.teams[1].name}
              </span>
            </div>
          </div>
        </div>
        {/* Match Details Link */}
        <Link href={`/match-details/${currentMatch.id}`} passHref>
          <span className="cursor-pointer text-sm font-semibold text-green-600 hover:text-green-800 flex items-center">
            Match Details
            <span className="ml-1 text-lg">›</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LiveMatches;
