"use client";

import React, { useState } from "react";
import { PUBLICATIONS } from "../../content/publications";

export default function ResearchPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold heading-accent md:text-3xl">
          Research & Scientific Contributions
        </h1>

        <p className="mt-2 text-slate-600">
          Organized by research theme and selected publications.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {/* Research Themes & Applications */}
        <div className="h-fit rounded-xl border bg-white p-6">
          <h3 className="font-semibold">Research Themes</h3>

          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>Flexible Electrochemical Biosensors</li>
            <li>Sustainable Biomaterials</li>
            <li>Tissue Engineering Scaffolds</li>
            <li>Cellulose-Based Functional Materials</li>
            <li>Nanoparticles & Nanocomposite Materials</li>
          </ul>

          <div className="my-6 border-t" />

          <h3 className="font-semibold">Applications</h3>

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

        {/* Selected Publications */}
        <div className="rounded-xl border bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-semibold">Selected Publications</h3>

            <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {PUBLICATIONS.length} Publications
            </span>
          </div>

          {/* Show only first 4 */}
          <ul className="mt-5 space-y-4">
            {PUBLICATIONS.slice(0, 3).map((p, index) => (
              <li
                key={p.title}
                className="border-b border-slate-100 pb-2 last:border-0"
              >
                <div className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                    {index + 1}
                  </span>

                  <div className="min-w-0">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium leading-relaxed text-slate-800 transition hover:text-primary hover:underline"
                      >
                        {p.title}
                        <span className="ml-1 text-xs">↗</span>
                      </a>
                    ) : (
                      <p className="text-sm font-medium leading-relaxed text-slate-800">
                        {p.title}
                      </p>
                    )}

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {p.authors} — {p.journal} ({p.year})
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* View All Button */}
          {PUBLICATIONS.length > 4 && (
            <div className="mt-6 border-t border-slate-100 pt-5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
              >
                View All Publications
                <span className="ml-2">→</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Publications Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="publications-modal-title"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h2
                  id="publications-modal-title"
                  className="text-xl font-semibold text-slate-900"
                >
                  Scientific Publications
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {PUBLICATIONS.length} research publications and scientific
                  contributions
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close publications"
              >
                ×
              </button>
            </div>

            {/* Scrollable Publication List */}
            <div className="overflow-y-auto px-6 py-5">
              <ol className="space-y-5">
                {PUBLICATIONS.map((p, index) => (
                  <li
                    key={p.title}
                    className="border-b border-slate-100 pb-5 last:border-0"
                  >
                    <div className="flex gap-4">
                      {/* Number */}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-600">
                        {index + 1}
                      </span>

                      <div className="min-w-0 flex-1">
                        {/* Publication Title */}
                        {p.link ? (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium leading-relaxed text-slate-800 transition hover:text-primary hover:underline"
                          >
                            {p.title}
                            <span className="ml-2 text-sm">↗</span>
                          </a>
                        ) : (
                          <h3 className="font-medium leading-relaxed text-slate-800">
                            {p.title}
                          </h3>
                        )}

                        {/* Authors */}
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {p.authors}
                        </p>

                        {/* Journal */}
                        <p className="mt-1 text-sm text-slate-500">
                          {p.journal} ({p.year})
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end border-t border-slate-200 px-6 py-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}