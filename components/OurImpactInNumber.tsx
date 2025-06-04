"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

export default function OurImpactInNumber() {
  const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "50+", label: "Experts" },
    { value: "100+", label: "Successful Campaigns" },
    { value: "20+", label: "Industry Awards" },
    { value: "500%", label: "ROI for our clients" },
  ];

  return (
    <div className="container py-12 md:py-24 mx-auto">
      <Section>
        <SectionTitle
          sectionTitle="Our Impact in Numbers"
          description="A snapshot of the achievements we’ve unlocked for clients and partners."
        />

        {/* Responsive Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-y-5 gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative text-center px-2">
              {/* Bracket top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full  border-t-4 border-l-4 border-r-4 border-black  rounded-t-4xl h-8"></div>

              {/* Stat Block */}
              <div className="pt-8">
                <div className="text-2xl font-bold text-black">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
