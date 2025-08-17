import React from "react";
import PageTitle from "../parts/PageTitle";
import TeamsGrid from "../parts/teams/TeamsGrid";
import FeaturedTeams from "../parts/teams/FeaturedTeams";
import FixturesCTA from "../parts/fixtures/FixturesCTA";

function TeamsPage() {
  return (
    <div>
      <PageTitle
        title="RPL Teams"
        description="Get to know all the clubs in the Rwanda Premier League, including their history, squads, and recent performance."
      />
      <TeamsGrid />
      <FeaturedTeams />
      <FixturesCTA
        title="Check Their Upcoming Schedule"
        description="Find out when your favorite teams are playing next and mark your calendar for the big match-ups."
        buttonText="View Fixtures & Results"
        buttonLink="/fixtures"
      />
    </div>
  );
}

export default TeamsPage;
