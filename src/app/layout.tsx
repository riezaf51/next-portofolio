import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CurvedSeparator from "@/components/Separator/CurvedSeparator";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Rieza Fachrezi",
  description:
    `Welcome to my portfolio! I am an efficient and detail-oriented individual with a 
    passion for continuous learning and growth in the IT field. As a recent graduate in 
    Informatics from Telkom University, I possess experience and a strong interest in 
    diverse areas, including Software Engineering (mobile, front-end, back-end, and full-stack) 
    and Data Science. I invite you to explore my projects, where I showcase how I combine 
    creativity with technical skills to tackle real-world challenges.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <CurvedSeparator />
        <Footer />
      </body>
    </html>
  );
}
