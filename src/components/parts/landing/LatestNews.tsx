// components/parts/LatestNews.tsx
import React from "react";
import Link from "next/link";

// Dummy data for news articles
const newsArticles = [
  {
    id: "news1",
    image: "/APR-FC.jpg", // Replace with your image path
    category: "Match Report",
    date: "Oct 12, 2023",
    title: "APR FC secures dramatic win against Rayon Sports in Derby",
    summary:
      "A late goal from Ibrahim Niyonzima secured all three points for APR FC in a thrilling encounter at Amahoro Stadium.",
  },
  {
    id: "news2",
    image: "/match.jpg", // Replace with your image path
    category: "Interview",
    date: "Oct 10, 2023",
    title: "Kiyovu Sports appoints new head coach ahead of crucial fixtures",
    summary:
      "Former international player Jean-UX Pilot Niyomugabo takes charge with the aim of returning the club to championship contention.",
  },
  {
    id: "news3",
    image: "/rayon.jpg", // Replace with your image path
    category: "Fan Zone",
    date: "Oct 8, 2023",
    title:
      "Rwanda Premier League announces fan engagement initiatives for 2023/24 season",
    summary:
      "New programs aim to increase stadium attendance and improve the matchday experience for supporters across the country.",
  },
];

const LatestNews = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
          <Link href="/news">
            <span className="text-sm font-semibold text-green-600 hover:text-green-800 transition-colors duration-200 cursor-pointer">
              View All News
            </span>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Image */}
                <div className="relative h-48 w-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-gray-500">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
