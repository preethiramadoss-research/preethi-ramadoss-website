import React from "react";
import { INNOVATIONS } from "../../content/innovations";
import TechnologyOpportunityCard from "./TechnologyOpportunityCard";

export default function FeaturedInnovations() {
  return (
    <section className="py-10 px-6 sm:px-8 lg:px-12">
      <h2 className="mb-6 text-2xl font-semibold">
        From Research to Real-World Innovation
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {INNOVATIONS.map((i) => (
          <TechnologyOpportunityCard
            key={i.id}
            title={i.title}
            desc={i.shortDescription}
            patent={i.patentNumber}
          />
        ))}
      </div>
    </section>
  );
}