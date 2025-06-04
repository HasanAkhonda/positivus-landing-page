'use client';

import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Accordion, { AccordionContentItem } from '../components/ui/Accordion';


const processAccordionData: AccordionContentItem[] = [
  {
    index: 1,
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts...'
  },
  {
    index: 2,
    title: 'Research',
    description:
      'After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends...'
  },
  {
    index: 3,
    title: 'Implementation',
    description:
      'Once the research is complete, we will begin implementing the strategy including website optimization, content creation, and more...'
  },
  {
    index: 4,
    title: 'Optimization',
    description:
      'We will continuously monitor and optimize your marketing campaigns to ensure maximum performance and adjust as needed...'
  },
  {
    index: 5,
    title: 'Reporting',
    description:
      'We will provide regular reports on performance, including metrics and recommendations for ongoing improvements...'
  },
  {
    index: 6,
    title: 'Improvement',
    description:
      'Based on performance reports, we will refine strategies, explore new channels, and align efforts more closely with goals...'
  }
];



const Process  = () => {
  return (
    <section id="process" className="container p-4 mt-[140px] scroll-mt-32">
      <SectionTitle
        sectionTitle="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />
      <Accordion data={ processAccordionData} />
    </section>
  );
};

export default Process;
