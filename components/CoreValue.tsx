import React from 'react';
import Section from './Section';
import Card from './ui/card';
import SectionTitle from './SectionTitle';

const CoreValue = () => {
  const coreValues = [
    {
      title: 'Client Success First',
      description: 'We treat our clients’ goals as our own, with measurable results and open communication.'
    },
    {
      title: 'Innovation',
      description: 'We embrace change, adopt new tools, and pioneer solutions that push boundaries.'
    },
    {
      title: 'Collaboration',
      description: 'We thrive on teamwork — internally and with clients — for shared success.'
    },
    {
      title: 'Transparency',
      description: 'Open dialogue and honest reporting build trust that lasts beyond the project.'
    },
  ];

  return (
      <div className=' container    py-12 md:py-24'>
    <Section>
         
        <SectionTitle sectionTitle={'Core Values'} description={'  At the heart of everything we do lie the values that shape our vision and culture.'}/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-2'>
          {coreValues.map((value, index) => (
            <Card key={index} isUnderline={true}>
              <div className='p-[40px]'>
                <h4 className='font-semibold text-lg mb-2'>{value.title}</h4>
                <div className='w-full h-[1px] bg-black my-7'></div>
                <p className='text-gray-600 text-sm'>{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
    </Section>
      </div>
  );
};

export default CoreValue;
