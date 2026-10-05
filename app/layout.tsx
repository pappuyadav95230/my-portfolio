import type { Metadata } from "next";
import "./globals.css";

import { Afacad_Flux } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const afacadFlux = Afacad_Flux({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pappu Kumar Yadav | Full Stack Developer",
  description: "Full Stack Developer · SaaS · AI Systems · Scalable Web Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afacadFlux.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}