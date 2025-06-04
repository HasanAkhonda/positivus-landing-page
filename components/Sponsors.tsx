'use client';
import Amazon from "@/public/company/Company_logo.svg";
import Dribbble from "@/public/company/Company logo (5).svg"; 
import HubSpot from "@/public/company/Company logo (4).svg"; 
import Notion from "@/public/company/Company logo (3).svg"; 
import Netflix from "@/public/company/Company logo (2).svg"; 
import Zoom from "@/public/company/Company logo (1).svg"; 

import Image from 'next/image';
import Section from "./Section";

const sponsors = [
  { src: Amazon, alt: 'Amazon logo' },
  { src: Dribbble, alt: 'Dribbble logo' },
  { src: HubSpot, alt: 'HubSpot logo' },
  { src: Notion, alt: 'Notion logo' },
  { src: Netflix, alt: 'Netflix logo' },
  { src: Zoom, alt: 'Zoom logo' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-12 scroll-mt-32">
      <Section>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 items-center gap-4">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="p-4 grayscale hover:grayscale-0 transition duration-200"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={120}
                height={48}
                className="h-auto w-auto mx-auto"
              />
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}
