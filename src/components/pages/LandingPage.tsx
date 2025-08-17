import React from "react";
import HeroSection from "../parts/landing/HeroSection";
import LiveMatches from "../parts/landing/LiveMatches";
import UpcomingFixtures from "../parts/landing/FixturesSection";
import LatestNews from "../parts/landing/LatestNews";
import TeamsSection from "../parts/landing/TeamsSection";
import LeagueTable from "../parts/landing/LeagueTableSection";
import SubscribeForm from "../parts/CTASection";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <LiveMatches />
      <UpcomingFixtures />
      <LatestNews />
      <TeamsSection />
      <LeagueTable />
      <SubscribeForm />
    </div>
  );
}

export default LandingPage;
