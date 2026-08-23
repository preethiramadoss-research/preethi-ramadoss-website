import "./common.css";
import "./common.extra.css";

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnalyticsScripts from "../components/AnalyticsScripts";

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
      <body className="min-h-screen bg-white text-slate-900" suppressHydrationWarning>
        <Navbar />

        <main className="w-full max-w-6xl mx-auto px-6 py-10 pb-24">
          {children}
        </main>

        <div className="fixed bottom-0 left-0 z-50 w-full">
          <Footer />
        </div>

        <AnalyticsScripts />
      </body>
    </html>
  );
}