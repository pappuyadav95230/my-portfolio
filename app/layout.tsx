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
  title: "Pappu Kumar Yadav | Full-Stack Developer & Tech Partner",
  description: "Full-Stack Developer building Custom Web Apps, DevOps & Cloud Deployments (AWS/GCP), Backend/Frontend, and AI Automations for businesses.",
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