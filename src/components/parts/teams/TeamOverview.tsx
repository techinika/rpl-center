// components/parts/TeamOverview.tsx
import React from "react";

interface TopScorer {
  name: string;
  goals: number;
  imageSrc: string;
}

interface NextMatch {
  date: string;
  time: string;
  location: string;
  team1Short: string;
  team2Short: string;
  team1Logo: string;
  team2Logo: string;
}

interface TeamOverviewProps {
  teamDescription: string;
  currentSeason: {
    position: number;
    points: number;
    form: string[];
  };
  topScorer: TopScorer;
  nextMatch: NextMatch;
}

const getFormColor = (result: string) => {
  switch (result) {
    case "W":
      return "bg-green-500";
    case "D":
      return "bg-gray-400";
    case "L":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
};

const TeamOverview: React.FC<TeamOverviewProps> = ({
  teamDescription,
  currentSeason,
  topScorer,
  nextMatch,
}) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Team Overview
          </h2>
          <p className="text-gray-700 mb-6">{teamDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Season Card */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg text-start font-semibold text-gray-800 mb-4">
                Current Season
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="block text-sm text-gray-500">Position</span>
                  <span className="block text-2xl font-bold text-green-600">
                    {currentSeason.position}nd
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Points</span>
                  <span className="block text-2xl font-bold text-gray-800">
                    {currentSeason.points}
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Form</span>
                  <div className="flex space-x-1 mt-1">
                    {currentSeason.form.map((result, index) => (
                      <div
                        key={index}
                        className={`w-7 h-7 flex items-center justify-center rounded-full text-white text-xs font-bold ${getFormColor(
                          result
                        )}`}
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Top Scorer Card */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-start text-gray-800 mb-4">
                Top Scorer
              </h3>
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-sm text-gray-500">Image</span>
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-800">
                    {topScorer.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-bold text-green-600 text-lg">
                      {topScorer.goals}
                    </span>{" "}
                    Goals
                  </p>
                </div>
              </div>
            </div>

            {/* Next Match Card */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="text-lg text-start font-semibold text-gray-800 mb-4">
                Next Match
              </h3>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-bold text-gray-700">
                      {nextMatch.team1Short}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-800">
                    {nextMatch.date} - {nextMatch.time}
                  </span>
                  <span className="text-xl font-black text-gray-800">VS</span>
                  <div className="flex items-center justify-center text-gray-500 text-sm mt-1">
                    <span>{nextMatch.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-bold text-gray-700">
                      {nextMatch.team2Short}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;
