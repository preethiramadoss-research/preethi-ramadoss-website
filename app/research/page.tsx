"use client";

import React, { useState } from "react";
import { PUBLICATIONS } from "../../content/publications";

export default function ResearchPage() {
  const [showAll, setShowAll] = useState(false);

  const displayedPublications = showAll
    ? PUBLICATIONS
    : PUBLICATIONS.slice(0, 4);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold heading-accent">
          Research & Scientific Contributions
        </h1>

        <p className="mt-2 text-slate-600">
          Organized by research theme and selected publications.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {/* Research Areas */}
        <div className="h-fit rounded-xl border bg-white p-6">
          <h3 className="font-semibold">
            Research Themes
          </h3>

          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>Flexible Electrochemical Biosensors</li>
            <li>Sustainable Biomaterials</li>
            <li>Tissue Engineering Scaffolds</li>
            <li>Cellulose-Based Functional Materials</li>
            <li>Nanoparticles & Nanocomposite Materials</li>
          </ul>

          <div className="my-6 border-t" />

          <h3 className="font-semibold">
            Applications
          </h3>

          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>Functional Skin and Hair Care Products</li>
            <li>Biosensors</li>
            <li>Personal Care Products</li>
            <li>Sustainable Packaging Materials</li>
            <li>Functional Polymers</li>
            <li>Cancer Therapeutics</li>
            <li>Tissue Engineering</li>
            <li>Water Purification Membranes</li>
            <li>Green Semiconductors</li>
          </ul>
        </div>

        {/* Publications */}
        <div className="rounded-xl border bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-semibold">
              Selected Publications
            </h3>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {PUBLICATIONS.length} Publications
            </span>
          </div>

          <ul className="mt-5 space-y-4">
            {displayedPublications.map((p, index) => (
              <li
                key={p.title}
                className="border-b border-slate-100 pb-4 last:border-0"
              >
                <div className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                    {index + 1}
                  </span>

                  <div>
                    <div className="text-sm font-medium text-slate-800">
                      {p.title}
                    </div>

                    <div className="mt-1 text-xs leading-relaxed text-slate-500">
                      {p.authors} — {p.journal} ({p.year})
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {PUBLICATIONS.length > 4 && (
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="mt-5 inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              {showAll
                ? "Show Less"
                : `View All ${PUBLICATIONS.length} Publications`}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}