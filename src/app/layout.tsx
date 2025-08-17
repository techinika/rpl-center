import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/parts/Navigation";
import { Footer } from "@/components/parts/Footer";

export const metadata: Metadata = {
  title: "Rwanda Premier League | The Official Home of Rwandan Football",
  description:
    "The official digital hub for the Rwanda Premier League. Get the latest news, live scores, upcoming fixtures, team and player profiles, and more. Your centralized source for Rwandan football.",
  keywords: [
    "Rwanda Premier League",
    "RPL",
    "Rwandan football",
    "fixtures",
    "live scores",
    "league table",
    "teams",
    "players",
    "Kigali",
    "Rayon Sports",
    "APR FC",
  ],
  openGraph: {
    title: "Rwanda Premier League | The Official Home of Rwandan Football",
    description:
      "The official digital hub for the Rwanda Premier League. Get the latest news, live scores, upcoming fixtures, team and player profiles, and more. Your centralized source for Rwandan football.",
    url: "https://www.rpl.rw", // Replace with your domain
    siteName: "Rwanda Premier League",
    images: [
      {
        url: "https://www.rpl.rw/og-image.jpg", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Rwanda Premier League Official Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda Premier League | The Official Home of Rwandan Football",
    description:
      "The official digital hub for the Rwanda Premier League. Get the latest news, live scores, upcoming fixtures, team and player profiles, and more. Your centralized source for Rwandan football.",
    images: ["https://www.rpl.rw/twitter-image.jpg"], // Replace with your Twitter card image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
