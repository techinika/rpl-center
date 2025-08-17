// components/parts/DayPicker.tsx
"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, subDays } from "date-fns";

interface DayPickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DayPicker: React.FC<DayPickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

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

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between mb-8">
      <button onClick={handlePreviousWeek} aria-label="Previous Week">
        <ChevronLeft className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors" />
      </button>
      <div className="flex items-center space-x-4">
        {getWeekDays().map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer transition-colors ${
              format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
                ? "text-green-600"
                : "text-gray-600 hover:text-green-600"
            }`}
            onClick={() => onDateChange(day)}
          >
            <span className="text-sm">{daysOfWeek[day.getDay()]}</span>
            <span
              className={`text-xl font-semibold mt-1 ${
                format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
                  ? "border-b-2 border-green-600"
                  : ""
              }`}
            >
              {format(day, "dd")}
            </span>
          </div>
        ))}
      </div>
      <button onClick={handleNextWeek} aria-label="Next Week">
        <ChevronRight className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors" />
      </button>
    </div>
  );
};

export default DayPicker;
