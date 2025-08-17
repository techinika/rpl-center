"use client";

import React from "react";
import PageTitle from "../parts/PageTitle";
import DateFilter from "../parts/fixtures/TopFilter";
import LiveMatchesSection from "../parts/fixtures/LiveMatches";
import MatchList from "../parts/fixtures/MatchList";
import FixturesCTA from "../parts/fixtures/FixturesCTA";

function FixturesPage() {
  return (
    <div>
      <PageTitle
        title="Fixtures & Results"
        description="Know upcoming and results in Rwanda Premier League"
      />
      <DateFilter />
      <LiveMatchesSection />
      <MatchList />
      <FixturesCTA
        title="Check the Latest League Standings"
        description="See how the latest results have impacted the table. Track your favorite team's position as the season progresses."
        buttonText="View Standings"
        buttonLink="/standings"
      />
    </div>
  );
}

export default FixturesPage;
