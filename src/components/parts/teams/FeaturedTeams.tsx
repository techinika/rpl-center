// components/parts/FeaturedTeams.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Dummy data for featured teams
const featuredTeamsData = [
  {
    title: "Season Champions",
    description:
      "A look at the top-performing teams from the recently concluded season.",
    teams: [
      {
        id: "1",
        name: "APR FC",
        description:
          "Crowned as the champions of the Rwanda Premier League in the 2023/2024 season.",
        isRunnerUp: false,
      },
      {
        id: "2",
        name: "Rayon Sports",
        description:
          "Secured the first runner-up position with a strong performance, showcasing their title ambitions.",
        isRunnerUp: true,
      },
    ],
    actionText: "View Standings",
    actionLink: "/standings",
  },
  {
    title: "Recently Promoted",
    description:
      "Teams that have earned their place in the top flight for the upcoming season.",
    teams: [
      {
        id: "15",
        name: "Amagaju FC",
        description:
          "A dominant force in the second division, Amagaju FC is back in the top flight.",
      },
      {
        id: "16",
        name: "Etoile de l'Est",
        description:
          "Earned a hard-fought promotion and will be looking to make their mark on the league.",
      },
    ],
    actionText: "Explore New Teams",
    actionLink: "/teams",
  },
  {
    title: "Relegated to Tier 2",
    description:
      "Teams that have been relegated and will compete in the second division.",
    teams: [
      {
        id: "20",
        name: "AS Muhanga",
        description:
          "After a challenging season, AS Muhanga will look to regroup in the second division.",
      },
      {
        id: "21",
        name: "Espoir FC",
        description:
          "Finished at the bottom of the table and will be fighting for a quick return to the top league.",
      },
    ],
    actionText: "Learn More",
    actionLink: "/teams",
  },
];

const FeaturedTeams = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        {featuredTeamsData.map((section, index) => (
          <div key={index} className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                {section.title}
              </h2>
              <p className="mt-2 text-md text-gray-600 max-w-2xl mx-auto">
                {section.description}
              </p>
              <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto`}
            >
              {section.teams.map((team, teamIndex) => (
                <div
                  key={teamIndex}
                  className="bg-gray-50 rounded-lg shadow-md border border-gray-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {/* Logo Placeholder */}
                      <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-4">
                        <span className="text-xl font-bold text-gray-700">
                          {team.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          {team.name}
                        </h3>
                        {"isRunnerUp" in team && team.isRunnerUp && (
                          <span className="text-sm font-semibold text-gray-500">
                            First Runner-up
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-6">
                      {team.description}
                    </p>
                    <Link href={`/teams/${team.id}`} passHref>
                      <Button
                        variant="outline"
                        className="w-full text-green-600 border-green-600 hover:bg-green-50"
                      >
                        View Team Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href={section.actionLink} passHref>
                <Button
                  variant="link"
                  className="text-green-600 hover:underline"
                >
                  {section.actionText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTeams;
