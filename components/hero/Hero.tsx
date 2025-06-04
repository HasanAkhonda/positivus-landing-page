'use client';

import Image from 'next/image';
import HeroIlust from '@/public/pics/hero.svg'; // Adjust this path to your actual Next.js alias setup

export default function Hero() {
  return (
    <section  className="mx-auto container" id="home">
      <div className="relative flex flex-col-reverse items-center md:flex-row" id="hero">
        {/* Left Text Content */}
        <div className="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10">
          <div className="text-left space-y-3 p-4 ">
            <h1 className="text-4xl font-medium leading-none md:text-6xl  text-left">
              Navigating the <br /> digital landscape <br /> for success
            </h1>
            <p className="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12  text-left md:pr-12">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <div className="w-full  justify-start items-center inline-flex">
              <a
                href="###"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7"
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10">
          <Image src={HeroIlust} alt="Hero Illustration" priority />
        </div>
      </div>
    </section>
  );
}
