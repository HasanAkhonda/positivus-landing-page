'use client';

import Image from 'next/image';
import React from 'react';
import ctaImage from '../public/pics/cta.svg';
import Section from './Section';

export default function QuoteBanner() {
  return (
    <div className='  py-12 md:py-24  container'>
      <Section>
        <div className='bg-black text-white   w-full p-8 sm:px-14 h-auto sm:h-[280px] rounded-[45px] inline-flex flex-col-reverse sm:flex-row justify-start items-center gap-8 sm:gap-10'>
          <div className='w-1/2 '>
            <Image
              src={ctaImage}
              alt={''}
              width={700}
              height={300}
              layout='intrinsic'
            />
          </div>
          <div className=' md:ml-10 lg:ml-30 w-full flex flex-col gap-6 justify-between items-start'>
            <blockquote className=" max-w-md text-xl p-2 sm:text-2xl font-medium leading-relaxed">
              “At Positivus, we believe that success is built on{' '}
              <span className="text-lime-400 font-semibold">innovation</span>,{' '}
              <span className="text-lime-400 font-semibold">collaboration</span>, and a relentless focus on delivering results.”
            </blockquote>
            <p className="mt-4 text-sm text-gray-400">— John Smith, Founder of Positivus</p>

          </div>

        </div>
      </Section>
    </div>
  );
}
