// components/parts/TeamProfileHeader.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  MapPin,
  Users,
  Twitter,
  Facebook,
  Instagram,
  Star,
} from "lucide-react";

interface TeamProfileHeaderProps {
  teamName: string;
  foundedYear: string;
  homeStadium: string;
  championships: number;
  playersCount: number;
  location: string;
  socials: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

const TeamProfileHeader: React.FC<TeamProfileHeaderProps> = ({
  teamName,
  foundedYear,
  homeStadium,
  championships,
  playersCount,
  location,
  socials,
}) => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#17a561] to-[#1e90ff] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-6 md:space-y-0">
          {/* Left Column: Team Info and Stats */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            {/* Team Info */}
            <div className="flex items-center space-x-4">
              {/* Logo Placeholder */}
              <div className="h-24 w-24 rounded-lg bg-white bg-opacity-20 flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold">
                  {teamName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{teamName}</h1>
                <p className="text-sm mt-1 text-gray-200">
                  Founded: {foundedYear} | Home: {homeStadium}
                </p>
              </div>
            </div>
            {/* Stats Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
              <div className="flex items-center space-x-1 px-3 py-1 bg-green-700 text-white text-xs font-medium rounded-full">
                <Trophy className="h-4 w-4" />
                <span>{championships}x League Champions</span>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-yellow-600 text-white text-xs font-medium rounded-full">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-blue-700 text-white text-xs font-medium rounded-full">
                <Users className="h-4 w-4" />
                <span>{playersCount} Players</span>
              </div>
            </div>
          </div>

          {/* Right Column: Actions */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Button className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-6 py-2">
              <Star className="h-4 w-4 mr-2" /> Follow Team
            </Button>
            <div className="flex space-x-2">
              {socials.twitter && (
                <Link href={socials.twitter} passHref>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white text-green-600 hover:bg-gray-100 border-none"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {socials.facebook && (
                <Link href={socials.facebook} passHref>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white text-green-600 hover:bg-gray-100 border-none"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {socials.instagram && (
                <Link href={socials.instagram} passHref>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white text-green-600 hover:bg-gray-100 border-none"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfileHeader;
