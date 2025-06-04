import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Section from '../Section';

interface SplitHeroProps {
  id?: string;
  image: StaticImageData;
  title: string;
  description: string;
  reverse?: boolean; // Optional: image on right
}

const SplitHero = ({ id, image, title, description, reverse = false }: SplitHeroProps) => {
  return (
    <div className="lg:px-5 py-12 container md:py-24">
      <Section id={id}>
        <div
          className={`relative flex flex-col md:bg-[#f3f3f3] rounded-4xl items-center md:flex-row ${
            reverse ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className="flex items-center py-5 md:w-6/12">
            <Image src={image} alt="Hero Illustration" className="rounded-4xl" priority />
          </div>

          {/* Text */}
          <div className="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10">
            <div className="text-left space-y-3">
              <h1 className="text-4xl font-medium leading-none md:text-6xl text-center md:text-left">
                {title}
              </h1>
              <p className="mt-6 mb-8 text-md font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SplitHero;
