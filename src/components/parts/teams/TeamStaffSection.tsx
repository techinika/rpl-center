import React from "react";
import Image from "next/image";

// Dummy data for team staff
const staffData = [
  {
    name: "Francis Haringingo",
    role: "Head Coach",
    imageSrc: "/coach.jpg",
  },
  {
    name: "Yannick Nkurunziza",
    role: "Assistant Coach",
    imageSrc: "/coach.jpg",
  },
  {
    name: "Kondo Christian",
    role: "Goalkeeping Coach",
    imageSrc: "/coach.jpg",
  },
  {
    name: "Emmanuel Tuyisenge",
    role: "Team Manager",
    imageSrc: "/coach.jpg",
  },
];

const TeamStaff = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Coaching Staff
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {staffData.map((staff, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="h-28 w-28 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for staff image */}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {staff.name}
                </h3>
                <p className="text-sm text-gray-500">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStaff;
