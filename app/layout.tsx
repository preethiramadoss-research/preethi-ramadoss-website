import "./common.css";
import "./common.extra.css";

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnalyticsScripts from "../components/AnalyticsScripts";
import DomGuard from "../components/layout/DomGuard";

export const metadata = {
  title:
    "Dr. Preethi Ramadoss, PhD — Biomaterials & Biosensor R&D Consultant",
  description:
    "Dr. Preethi Ramadoss — Biomaterials, biosensors, and sustainable healthcare technologies. Independent R&D consultant and inventor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 font-sans" suppressHydrationWarning>
        <DomGuard />
        <Navbar />

        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-10 pb-24">
          {children}
        </main>

        <div className="fixed bottom-0 left-0 z-100 w-full">
          <Footer />
        </div>

        <AnalyticsScripts />
      </body>
    </html>
  );
}