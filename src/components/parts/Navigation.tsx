// components/parts/Header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <Link
              href="mailto:info@rpl.rw"
              className="flex items-center hover:text-gray-900"
            >
              <span className="mr-1">✉️</span> Contact
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              ℹ️ About
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <p>
              <span>English</span> | <span>Kinyarwanda</span>
            </p>
            <div className="flex space-x-2">
              <Link href="#" aria-label="Facebook">
                <FaFacebook />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaTwitter />{" "}
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram />{" "}
              </Link>
              <Link href="#" aria-label="YouTube">
                <FaYoutube />{" "}
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation with Border */}
        <div className="border-t border-gray-200 pt-4 pb-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Logo Placeholder */}
              <div className="h-10 w-10 flex items-center justify-center bg-green-600 text-white rounded-md mr-2">
                <span className="font-bold">RPL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-800">
                  Rwanda Premier League
                </span>
              </div>
            </div>
            <ul className="hidden space-x-8 text-gray-700 md:flex">
              <li>
                <Link href="/" className="hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-green-600">
                  News
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-green-600">
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/fixtures"
                  className="font-bold text-green-600 border-b-2 border-green-600"
                >
                  Fixtures
                </Link>
              </li>
              <li>
                <Link href="/table" className="hover:text-green-600">
                  Table
                </Link>
              </li>
              <li>
                <Link href="/players" className="hover:text-green-600">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-green-600">
                  Gallery
                </Link>
              </li>
            </ul>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
