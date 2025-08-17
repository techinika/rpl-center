"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Ticket, Users, Newspaper } from "lucide-react";

const FanClubCTA = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#17a561] to-[#1e90ff]">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center">
          <div className="mb-4">
            <Sparkles className="mx-auto h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Join the Official Fan Club
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {`Become an official member to get exclusive access and show your
            dedicated support for the team's sustainability.`}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-3 rounded-full mb-2">
                <Ticket className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Priority Tickets
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-3 rounded-full mb-2">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Exclusive Content
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-3 rounded-full mb-2">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Meet & Greet Access
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-3 rounded-full mb-2">
                <Newspaper className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Monthly Newsletter
              </span>
            </div>
          </div>

          <Button
            className="bg-green-600 text-white hover:bg-green-700 rounded-full px-8 py-3 text-lg font-semibold"
            onClick={() => console.log("Navigate to membership page")} // Placeholder for future logic
          >
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FanClubCTA;
