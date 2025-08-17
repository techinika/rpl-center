// components/parts/Footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-green-600">RPL</span>
              <span className="ml-2 text-xl font-semibold">
                Rwanda Premier League
              </span>
            </div>
            <p className="text-sm">
              The official website of the Rwanda Premier League, providing fans
              with the latest news, fixtures, and results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-white">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/fixtures" className="hover:text-white">
                  Fixtures & Results
                </Link>
              </li>
              <li>
                <Link href="/table" className="hover:text-white">
                  League Table
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About RPL
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-2 mb-4">
              <Link
                href="#"
                className="bg-gray-700 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="bg-gray-700 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="bg-gray-700 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="bg-gray-700 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
            <p className="text-sm">
              Follow us for exclusive content and updates
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © 2023 Rwanda Premier League. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
