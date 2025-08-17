/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Flag, Cake, User } from "lucide-react";

// Dummy data for team roster
const teamRosterData = [
  {
    number: 1,
    name: "Yves Kimenyi",
    position: "Goalkeeper",
    age: 28,
    nationality: "Rwanda",
    imageSrc: "/path/to/kimenyi-image.jpg",
  },
  {
    number: 5,
    name: "Ange Mutsinzi",
    position: "Defender",
    age: 24,
    nationality: "Rwanda",
    imageSrc: "/path/to/mutsinzi-image.jpg",
  },
  {
    number: 8,
    name: "Olivier Niyonzima",
    position: "Midfielder",
    age: 26,
    nationality: "Rwanda",
    imageSrc: "/path/to/niyonzima-image.jpg",
  },
  {
    number: 10,
    name: "Muhadjiri Hakizimana",
    position: "Forward",
    age: 27,
    nationality: "Rwanda",
    imageSrc: "/path/to/hakizimana-image.jpg",
  },
  {
    number: 14,
    name: "Savio Nshuti Dominique",
    position: "Midfielder",
    age: 27,
    nationality: "Rwanda",
    imageSrc: "/path/to/savio-image.jpg",
  },
  {
    number: 2,
    name: "Fitina Ombalenga",
    position: "Defender",
    age: 29,
    nationality: "Rwanda",
    imageSrc: "/path/to/ombalenga-image.jpg",
  },
];

const positionColors: { [key: string]: string } = {
  Goalkeeper: "bg-green-100 text-green-800",
  Defender: "bg-blue-100 text-blue-800",
  Midfielder: "bg-yellow-100 text-yellow-800",
  Forward: "bg-red-100 text-red-800",
  All: "",
};

const TeamRosterGrid: React.FC = () => {
  const [activePosition, setActivePosition] = useState<
    "All" | "Goalkeeper" | "Defender" | "Midfielder" | "Forward"
  >("All");

  const filteredPlayers = teamRosterData.filter(
    (player) => activePosition === "All" || player.position === activePosition
  );

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Team Roster
        </h2>

        {/* Position Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Goalkeeper", "Defender", "Midfielder", "Forward"].map(
            (position) => (
              <button
                key={position}
                onClick={() => setActivePosition(position as any)}
                className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activePosition === position
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
              >
                {position}
              </button>
            )
          )}
        </div>

        {/* Player Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player) => (
              <div
                key={player.number}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    {/* Placeholder for player image */}
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-gray-800">
                      {player.name}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        positionColors[player.position]
                      }`}
                    >
                      {player.position}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span>Number: {player.number}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cake className="h-4 w-4 text-gray-400" />
                    <span>Age: {player.age}</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <Flag className="h-4 w-4 text-gray-400" />
                    <span>Nationality: {player.nationality} 🇷🇼</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href={`/players/${player.number}`} passHref>
                    <button className="w-full text-center py-2 text-green-600 text-sm font-medium hover:underline">
                      View Stats
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500 col-span-full">
              No players found in this position.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamRosterGrid;
