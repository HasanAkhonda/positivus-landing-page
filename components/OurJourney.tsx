import React from 'react';
import SectionTitle from './SectionTitle';
import Section from './Section';
import Image from 'next/image';
import graphicLeft from '@/assets/graphic-left.svg';
import graphicRight from '@/assets/graphic-right.svg';

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description:
      'Positivus was founded to help businesses navigate the digital world and achieve online success.',
    position: 'left',
  },
  {
    year: '2021',
    title: 'Industry Recognition',
    description:
      'Positivus was named among the top 50 global digital agencies, affirming our leadership.',
    position: 'right',
  },
  {
    year: '2023',
    title: 'Innovation and Growth',
    description:
      'With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.',
    position: 'left',
  },
  {
    year: '2024',
    title: 'Leading the Future',
    description:
      'This year, Positivus is pioneering the use of AI and automation to deliver smarter strategies and redefine new standards in digital marketing.',
    position: 'right',
  },
];

const OurJourney = () => {
  return (
    <Section>
      <div className='container lg:px-5 py-12 md:py-24'>
        <SectionTitle
          sectionTitle="Our Journey"
          description="From humble beginnings to industry leaders, discover how Positivus has evolved to drive success for businesses worldwide"
        />

        <div className="relative  ">
          <div className="hidden sm:block absolute -rotate-30 -left-80 top-0">
            <Image src={graphicLeft} alt="Left graphic" />
          </div>
          <div className="hidden sm:block absolute -rotate-30 -right-80 top-[380px]">
            <Image src={graphicRight} alt="Right graphic" />
          </div>

          <div className="lg:px-50 md:px-20 px-4 relative space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-5 items-start gap-4">
                {/* Year */}
                <div className={`text-left sm:col-span-2 ${item.position === 'left' ? 'sm:text-right sm:pr-6' : 'sm:order-2 sm:pl-6'}`}>
                  <h3 className="text-3xl font-bold text-black">{item.year}</h3>
                </div>

                {/* Card */}
                <div className="sm:col-span-3 bg-dark text-white rounded-[30px] p-6 shadow-md">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurJourney;
