import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristian Suarez - Senior Software Engineer & AI Specialist",
  description:
    "Experienced Senior Software Engineer and UX/UI Designer specializing in AI, Full-Stack Development, and Web3. Over 10 years building scalable, secure applications. Currently working on AI projects at Focus and co-founding Hira.",
  keywords: [
    "Cristian Suarez",
    "Senior Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "UX/UI Designer",
    "React",
    "TypeScript",
    "Python",
    "Web3",
    "Blockchain",
    "AI",
    "Machine Learning",
    "Portfolio",
    "Warsaw",
    "Poland",
  ],
  authors: [
    { name: "Cristian Suarez", url: "https://cristiansuarez.netlify.app/" },
  ],
  creator: "Cristian Suarez",
  publisher: "Cristian Suarez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cristiansuarez.netlify.app/",
    title: "Cristian Suarez - Senior Software Engineer & AI Specialist",
    description:
      "Experienced Senior Software Engineer and UX/UI Designer specializing in AI, Full-Stack Development, and Web3. Over 10 years building scalable, secure applications.",
    siteName: "Cristian Suarez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Suarez - Senior Software Engineer & AI Specialist",
    description:
      "Experienced Senior Software Engineer and UX/UI Designer specializing in AI, Full-Stack Development, and Web3. Over 10 years building scalable, secure applications.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
