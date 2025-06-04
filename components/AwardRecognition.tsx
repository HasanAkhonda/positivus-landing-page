'use client';

import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

import award1 from '../public/awards/award2.svg'; // ✅ adjust path if needed

const awards = [
  {
    image: award1,
    alt: 'award2017',
    title: 'Best Small Business Digital Marketing Agency of the Year',
    description:
      'Celebrating our success in delivering innovative strategies and measurable results for small business clients.',
  },
  {
    image: award1,
    alt: 'award2017',
    title: 'Best Small Business Digital Marketing Agency of the Year',
    description:
      'Celebrating our success in delivering innovative strategies and measurable results for small business clients.',
  },
  {
    image: award1,
    alt: 'award2017',
    title: 'Best Small Business Digital Marketing Agency of the Year',
    description:
      'Celebrating our success in delivering innovative strategies and measurable results for small business clients.',
  },
  {
    image: award1,
    alt: 'award2017',
    title: 'Best Small Business Digital Marketing Agency of the Year',
    description:
      'Celebrating our success in delivering innovative strategies and measurable results for small business clients.',
  },
  // Add more award objects here if needed
];

const AwardRecognition = () => {
  return (
    <div className="  py-12 md:py-24 container mx-auto">
      <Section>
        <SectionTitle
          sectionTitle="Awards & Recognition"
          description="At Positivus, our commitment to excellence has been recognized by industry leaders. Here are some of our proudest achievements:"
        />

        <div className="pb-4 grid grid-cols-2  md:grid-cols-4 gap-4 lg:gap-8 mt-10">
          {awards.map((award, index) => (
            <div key={index} className="rounded-3xl bg-gray-100 shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="flex my-6 flex-col items-center justify-center p-2 sm:p-4 xl:p-8 text-center">
                <div className="mb-6">
                  <Image
                    src={award.image}
                    alt={award.alt}
                    width={300}
                    height={300}
                    className="object-contain max-h-[180px]"
                  />
                </div>
                <div className="space-y-4 md:my-0  ">
                  <h3 className="text-lg md:text-2xl font-semibold font-['Space_Grotesk']">
                    {award.title}
                  </h3>
                  <p className="text-gray-700">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AwardRecognition;
