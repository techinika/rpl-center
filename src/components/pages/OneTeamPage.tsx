import React from "react";
import TeamProfileHeader from "../parts/teams/TeamPageTitle";
import TeamOverview from "../parts/teams/TeamOverview";
import TeamRoster from "../parts/teams/TeamRoster";
import TeamGallery from "../parts/teams/TeamGallerySection";
import TeamStaff from "../parts/teams/TeamStaffSection";
import FanClubCTA from "../parts/teams/FanClubCTA";

const rayonSportsData = {
  id: "2",
  teamName: "Rayon Sports FC",
  foundedYear: "1968",
  homeStadium: "Kigali Stadium",
  championships: 9,
  playersCount: 28,
  location: "Kigali, Rwanda",
  socials: {
    twitter: "https://twitter.com/rayon_sports",
    facebook: "https://facebook.com/rayonsportsfc",
    instagram: "https://instagram.com/rayonsports",
  },
  teamDescription:
    "Rayon Sports Football Club is a professional football club based in Kigali, Rwanda, that competes in the Rwanda Premier League. Founded in 1968, the club has established itself as one of the most successful and popular teams in Rwandan football history, with a passionate fan base known for their vibrant support during matches. The team plays its home games at Kigali Stadium and is known for its attacking style of play.",
  currentSeason: {
    position: 2,
    points: 42,
    form: ["W", "W", "W", "L"],
  },
  topScorer: {
    name: "Muhadjiri Hakizimana",
    goals: 14,
    imageSrc: "/rayon.jpg",
  },
  nextMatch: {
    date: "25 Aug",
    time: "15:00",
    location: "Kigali Stadium",
    team1Short: "Rayon",
    team2Short: "APR FC",
    team1Logo: "/coach.jpg",
    team2Logo: "/coach.jpg",
  },
};

function OneTeamPage() {
  return (
    <div>
      <TeamProfileHeader
        teamName={rayonSportsData.teamName}
        foundedYear={rayonSportsData.foundedYear}
        homeStadium={rayonSportsData.homeStadium}
        championships={rayonSportsData.championships}
        playersCount={rayonSportsData.playersCount}
        location={rayonSportsData.location}
        socials={rayonSportsData.socials}
      />
      <TeamOverview
        teamDescription={rayonSportsData.teamDescription}
        currentSeason={rayonSportsData.currentSeason}
        topScorer={rayonSportsData.topScorer}
        nextMatch={rayonSportsData.nextMatch}
      />
      <TeamGallery />
      <TeamRoster />
      <TeamStaff />
      <FanClubCTA />
    </div>
  );
}

export default OneTeamPage;
