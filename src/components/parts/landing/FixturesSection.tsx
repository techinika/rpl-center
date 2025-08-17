// components/parts/UpcomingFixtures.tsx
import React from "react";
import Link from "next/link";

// Dummy data for upcoming fixtures
const upcomingMatches = [
  {
    date: "Sunday, 15 Oct 2023",
    time: "15:00",
    teams: [
      { name: "Kiyovu Sports", short: "KIY" },
      { name: "Musanze FC", short: "MUS" },
    ],
    location: "Kigali Stadium, Nyamirambo",
  },
  {
    date: "Monday, 16 Oct 2023",
    time: "18:30",
    teams: [
      { name: "Police FC", short: "POL" },
      { name: "Etincelles FC", short: "ETI" },
    ],
    location: "Amahoro Stadium, Kigali",
  },
  {
    date: "Wednesday, 18 Oct 2023",
    time: "15:00",
    teams: [
      { name: "Marines FC", short: "MAR" },
      { name: "Sunrise FC", short: "SUN" },
    ],
    location: "Umuganda Stadium, Rubavu",
  },
];

const UpcomingFixtures = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Upcoming Fixtures
          </h2>
          <Link href="/fixtures">
            <span className="text-sm font-semibold text-green-600 hover:text-green-800 transition-colors duration-200 cursor-pointer">
              View All Fixtures
            </span>
          </Link>
        </div>

        {/* Fixtures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingMatches.map((match, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              {/* Date and Time */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500 font-semibold">
                <span>{match.date}</span>
                <span>{match.time}</span>
              </div>

              {/* Teams and Logos */}
              <div className="flex items-center justify-center space-x-4">
                {/* Team 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-800">
                    {match.teams[0].short}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {match.teams[0].name}
                  </span>
                </div>

                {/* VS */}
                <span className="text-xl font-bold text-gray-400">vs</span>

                {/* Team 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-800">
                    {match.teams[1].short}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {match.teams[1].name}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.686 2 6 4.686 6 8s6 14 6 14 6-10.686 6-14-2.686-6-6-6zm0 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                <span>{match.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingFixtures;
