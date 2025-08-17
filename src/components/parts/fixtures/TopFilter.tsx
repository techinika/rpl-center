// components/parts/FixturesFilter.tsx
"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Dummy data for teams and seasons
const teams = [
  { name: "All Teams", value: "all" },
  { name: "APR FC", value: "apr-fc" },
  { name: "Rayon Sports", value: "rayon-sports" },
  { name: "Police FC", value: "police-fc" },
  { name: "Kiyovu Sports", value: "kiyovu-sports" },
  // Add more teams here
];

const seasons = [
  { name: "2023-2024 Season", value: "2023-24" },
  { name: "2022-2023 Season", value: "2022-23" },
  // Add more seasons here
];

const FixturesFilter = () => {
  const [filterType, setFilterType] = useState("results"); // 'results' or 'fixtures'
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [selectedSeason, setSelectedSeason] = useState("2023-24");

  return (
    <div className="bg-white py-6 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          {/* Results/Fixtures Toggle */}
          <div className="flex rounded-lg overflow-hidden border border-gray-300">
            <button
              onClick={() => setFilterType("results")}
              className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
                filterType === "results"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Results
            </button>
            <button
              onClick={() => setFilterType("fixtures")}
              className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
                filterType === "fixtures"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Fixtures
            </button>
          </div>

          {/* Team and Season Filters */}
          <div className="flex items-center space-x-4">
            <Select onValueChange={setSelectedTeam} value={selectedTeam}>
              <SelectTrigger className="w-[180px] rounded-lg">
                <SelectValue placeholder="All Teams" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Teams</SelectLabel>
                  {teams.map((team) => (
                    <SelectItem key={team.value} value={team.value}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedSeason} value={selectedSeason}>
              <SelectTrigger className="w-[180px] rounded-lg">
                <SelectValue placeholder="2023-2024 Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Seasons</SelectLabel>
                  {seasons.map((season) => (
                    <SelectItem key={season.value} value={season.value}>
                      {season.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixturesFilter;
