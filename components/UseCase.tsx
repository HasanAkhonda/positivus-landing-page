'use client';

import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './ui/card';
import CaseCard from './ui/CaseCard'; // ✅ Import here

const cards = [
  {
    title:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    link: 'https://google.com',
  },
  {
    title:
      'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    link: 'https://google.com',
  },
  {
    title:
      'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    link: 'https://google.com',
  },
];

const UseCase = () => {
  return (
    <section id="cases" className="container py-16 scroll-mt-32 p-4">
      <SectionTitle
        sectionTitle="Use Case"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="flex flex-col lg:flex-row justify-between bg-dark text-gray rounded-[45px] p-1 gap-6">
        {cards.map((card, index) => (
          <Card key={index}>
            <CaseCard title={card.title} link={card.link} />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UseCase;
