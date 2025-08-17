// components/parts/LeagueTable.tsx
import React from "react";
import Link from "next/link";

// Dummy data for the league table (Top 5)
const leagueTableData = [
  {
    rank: 1,
    team: { name: "APR FC", short: "APR" },
    p: 8,
    w: 6,
    d: 2,
    l: 0,
    gd: "+12",
    pts: 20,
  },
  {
    rank: 2,
    team: { name: "Rayon Sports", short: "RAY" },
    p: 8,
    w: 5,
    d: 2,
    l: 1,
    gd: "+8",
    pts: 17,
  },
  {
    rank: 3,
    team: { name: "Police FC", short: "POL" },
    p: 8,
    w: 5,
    d: 1,
    l: 2,
    gd: "+6",
    pts: 16,
  },
  {
    rank: 4,
    team: { name: "Kiyovu Sports", short: "KIY" },
    p: 8,
    w: 4,
    d: 2,
    l: 2,
    gd: "+5",
    pts: 14,
  },
  {
    rank: 5,
    team: { name: "AS Kigali", short: "AS" },
    p: 8,
    w: 3,
    d: 3,
    l: 2,
    gd: "+2",
    pts: 12,
  },
];

const LeagueTable = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">League Table</h2>
          <Link href="/table">
            <span className="text-sm font-semibold text-green-600 hover:text-green-800 transition-colors duration-200 cursor-pointer">
              Full Table
            </span>
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Header */}
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  P
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  W
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  D
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  L
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  GD
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  PTS
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {leagueTableData.map((row) => (
                <tr
                  key={row.rank}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold mr-3">
                        {row.team.short}
                      </div>
                      <div>{row.team.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.p}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.w}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.d}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.l}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.gd}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                    {row.pts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default LeagueTable;
