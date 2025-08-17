/* eslint-disable @typescript-eslint/no-explicit-any */
// components/pages/MatchList.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import {
  format,
  addDays,
  subDays,
  isSameDay,
  parseISO,
  startOfWeek,
  startOfToday,
} from "date-fns";

// Dummy data for matches grouped by date
const matchesByDate = [
  {
    date: "2025-08-15",
    matches: [
      {
        id: "match1",
        teams: [
          { name: "APR FC", short: "APR", score: 2 },
          { name: "Rayon Sports", short: "RAY", score: 0 },
        ],
        status: "FT",
        location: "Amahoro Stadium",
        time: "15:30",
        isUpcoming: false,
      },
      {
        id: "match2",
        teams: [
          { name: "Police FC", short: "POL", score: 1 },
          { name: "AS Kigali", short: "ASK", score: 1 },
        ],
        status: "FT",
        location: "Kigali Stadium",
        time: "13:00",
        isUpcoming: false,
      },
    ],
  },
  {
    date: "2025-08-16",
    matches: [
      {
        id: "match3",
        teams: [
          { name: "Mukura Victory", short: "MUK", score: 3 },
          { name: "Etincelles FC", short: "ETI", score: 0 },
        ],
        status: "FT",
        location: "Huye Stadium",
        time: "15:30",
        isUpcoming: false,
      },
      {
        id: "match4",
        teams: [
          { name: "Marines FC", short: "MAR", score: 0 },
          { name: "Kiyovu Sports", short: "KIY", score: 2 },
        ],
        status: "FT",
        location: "Umuganda Stadium",
        time: "15:30",
        isUpcoming: false,
      },
      {
        id: "match5",
        teams: [
          { name: "Gasogi United", short: "GAS", score: 1 },
          { name: "Bugesera FC", short: "BUG", score: 3 },
        ],
        status: "FT",
        location: "Nyamirambo Stadium",
        time: "13:00",
        isUpcoming: false,
      },
    ],
  },
  {
    date: "2025-08-20",
    matches: [
      {
        id: "match6",
        teams: [
          { name: "Musanze FC", short: "MUS", score: null },
          { name: "Sunrise FC", short: "SUN", score: null },
        ],
        status: "Upcoming",
        location: "Nyamirambo Stadium",
        time: "15:00",
        isUpcoming: true,
      },
      {
        id: "match7",
        teams: [
          { name: "Bugesera FC", short: "BUG", score: null },
          { name: "Police FC", short: "POL", score: null },
        ],
        status: "Upcoming",
        location: "Bugesera Stadium",
        time: "15:00",
        isUpcoming: true,
      },
    ],
  },
  {
    date: "2025-08-23",
    matches: [
      {
        id: "match8",
        teams: [
          { name: "APR FC", short: "APR", score: null },
          { name: "AS Kigali", short: "ASK", score: null },
        ],
        status: "Upcoming",
        location: "Amahoro Stadium",
        time: "18:30",
        isUpcoming: true,
      },
    ],
  },
];

const MatchList = () => {
  const [viewMode, setViewMode] = useState<"upcoming" | "date">("upcoming");
  const [selectedDate, setSelectedDate] = useState(startOfToday());
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(startOfToday())
  );

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePreviousWeek = () => {
    setCurrentWeekStart(subDays(currentWeekStart, 7));
  };

  const handleNextWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, 7));
  };

  const getWeekDays = () => {
    const days = [];
    let startDay = currentWeekStart;
    for (let i = 0; i < 7; i++) {
      days.push(startDay);
      startDay = addDays(startDay, 1);
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setViewMode("date");
  };

  const handleBackToUpcoming = () => {
    setViewMode("upcoming");
    setSelectedDate(startOfToday());
  };

  let matchesToDisplay: { date: string; matches: any[] }[] = [];
  if (viewMode === "upcoming") {
    matchesToDisplay = matchesByDate.filter((day) =>
      day.matches.some((match) => match.isUpcoming)
    );
  } else {
    const selectedDay = matchesByDate.find((day) =>
      isSameDay(parseISO(day.date), selectedDate)
    );
    if (selectedDay) {
      matchesToDisplay.push(selectedDay);
    }
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Day Picker */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button onClick={handlePreviousWeek} aria-label="Previous Week">
              <ChevronLeft className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors" />
            </button>
            <span className="text-xl font-bold text-gray-800 hidden md:block">
              {format(currentWeekStart, "MMMM yyyy")}
            </span>
            <button onClick={handleNextWeek} aria-label="Next Week">
              <ChevronRight className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {getWeekDays().map((day, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer transition-colors ${
                  isSameDay(day, selectedDate) && viewMode === "date"
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
                onClick={() => handleDateClick(day)}
              >
                <span className="text-sm">{daysOfWeek[day.getDay()]}</span>
                <span
                  className={`text-xl font-semibold mt-1 ${
                    isSameDay(day, selectedDate) && viewMode === "date"
                      ? "border-b-2 border-green-600"
                      : ""
                  }`}
                >
                  {format(day, "dd")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Upcoming Button */}
        {viewMode === "date" && (
          <div className="mb-4">
            <Button
              onClick={handleBackToUpcoming}
              variant="link"
              className="text-green-600 px-0 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Upcoming Matches
            </Button>
          </div>
        )}

        {/* Match List */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {viewMode === "upcoming"
              ? "Upcoming Matches"
              : `Matches on ${format(selectedDate, "PPPP")}`}
          </h3>
          {matchesToDisplay.length > 0 ? (
            matchesToDisplay.map((dayGroup) => (
              <div key={dayGroup.date}>
                {viewMode === "upcoming" && (
                  <h4 className="text-lg font-bold text-gray-700 mb-2 mt-4">
                    {format(parseISO(dayGroup.date), "PPPP")}
                  </h4>
                )}
                <div className="space-y-4">
                  {dayGroup.matches.map((match) => (
                    <div
                      key={match.id}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full">
                          {/* Left side with highlights/report */}
                          <div className="flex space-x-2 mb-4 md:mb-0">
                            {match.isUpcoming ? (
                              <Link href={`/buy-tickets/${match.id}`} passHref>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-green-600 border-green-600 hover:bg-green-50"
                                >
                                  Buy Tickets
                                </Button>
                              </Link>
                            ) : (
                              <>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-gray-500 border-gray-300"
                                >
                                  Highlights
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-gray-500 border-gray-300"
                                >
                                  Report
                                </Button>
                              </>
                            )}
                          </div>

                          {/* Match details */}
                          <div className="flex items-center justify-center space-x-4 w-full md:w-auto">
                            {/* Team 1 */}
                            <div className="flex flex-col items-center">
                              <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-800">
                                {match.teams[0].short}
                              </div>
                              <span className="mt-1 text-xs text-gray-700">
                                {match.teams[0].name}
                              </span>
                            </div>

                            {/* Score and Status */}
                            <div className="flex flex-col items-center mx-4">
                              <span className="text-2xl md:text-3xl font-bold text-gray-800">
                                {match.isUpcoming
                                  ? "vs"
                                  : `${match.teams[0].score} - ${match.teams[1].score}`}
                              </span>
                              <span className="text-xs font-semibold text-gray-500">
                                {match.status}
                              </span>
                            </div>

                            {/* Team 2 */}
                            <div className="flex flex-col items-center">
                              <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-800">
                                {match.teams[1].short}
                              </div>
                              <span className="mt-1 text-xs text-gray-700">
                                {match.teams[1].name}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right side with location and time */}
                        <div className="hidden md:flex flex-col items-end text-right">
                          <div className="text-sm text-gray-500 flex items-center mb-2">
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
                          <span className="text-sm text-gray-500 mb-2">
                            {match.time}
                          </span>
                          <Link href={`/match-details/${match.id}`} passHref>
                            <Button
                              variant="link"
                              className="text-green-600 hover:underline px-0 h-auto"
                            >
                              Match Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="container mx-auto px-4 py-8 text-center text-gray-500">
              <p>No matches scheduled for this date.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MatchList;
