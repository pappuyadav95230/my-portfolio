import type { Metadata } from "next";
import "./globals.css";

// Alternative font import (use this if geist/font fails)
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pappu Kumar Yadav | Full Stack Developer",
  description: "MERN Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Use either Geist or Inter font */}
      <body className={inter.className}>
        {" "}
        {/* Fallback to Inter */}
        {/* OR if you get Geist working: */}
        {/* <body className={`${GeistSans.variable} ${GeistMono.variable}`}> */}
        <Navbar />
        {children}
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}