'use client'

import React from 'react'
import ServiceCard from '../ui/ServiceCard' // Adjust if path differs
import ui from '../../public/pics/card-pic6.png'
import frontend from '../../public/pics/card-pic2.png'
import ecommerce from '../../public/pics/card-pic5.png'
import web from '../../public/pics/card-pic1.png'
import cms from '../../public/pics/card-pic4.png'
import app from '../../public/pics/card-pic3.png'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

// ✅ Example: Replace these with real SVG/Image imports like above
const services = [
  {
    titleTop: 'Creative',
    titleBottom: 'Websites',
    subtitle: 'Pixel-Perfect, Engaging & Fast',
    img: web,
    alt: 'Creative Websites',
    link: '#'
  },
  {
    titleTop: 'Frontend',
    titleBottom: 'Magic',
    subtitle: 'Next.js, Nuxt, Astro, Tailwind',
    img: frontend,
    alt: 'Frontend Magic',
    link: '#'
  },
  {
    titleTop: 'Web App',
    titleBottom: 'Development',
    subtitle: 'React / Vue / Svelte SPA & SSR',
    img: app,
    alt: 'Web App Development',
    link: '#'
  },
  {
    titleTop: 'CMS',
    titleBottom: 'Development',
    subtitle: 'WordPress, Sanity, Strapi',
    img: cms,
    alt: 'CMS Development',
    link: '#'
  },
  {
    titleTop: 'eCommerce',
    titleBottom: 'Solutions',
    subtitle: 'Shopify, WooCommerce, Snipcart',
    img: ecommerce,
    alt: 'eCommerce Solutions',
    link: '#'
  },
  {
    titleTop: 'UI / UX',
    titleBottom: 'Design',
    subtitle: 'Prototypes, Design Systems, Wireframes',
    img: ui,
    alt: 'UI / UX Design',
    link: '#'
  }
]

const Services = () => {
  return (
    <section
      id='services'
      className='section container mx-auto px-4 py-16 text-center scroll-mt-32'
    >
      <SectionTitle
        sectionTitle={'services'}
        description={
          ' We offer a wide range of web development and design services.'
        }
      />

      <div className='mt-12 grid grid-cols-1  lg:grid-cols-2 gap-8 '>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index + 1}
            titleTop={service.titleTop}
            titleBottom={service.titleBottom}
            img={service.img}
            alt={service.alt}
            link={service.link}
          />
        ))}
      </div>

      <div className='bg-zinc-100 mt-24 w-full p-8 sm:px-14 h-auto sm:h-[280px] rounded-[45px] inline-flex flex-col sm:flex-row justify-start items-center gap-8 sm:gap-10'>
        <div className='w-full flex flex-col gap-6 justify-between items-start'>
          <h1 className="text-black text-2xl sm:text-3xl font-medium font-['Space_Grotesk']">
            Let’s make things happen
          </h1>
          <p className="text-start text-black text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className='justify-start w-full items-center inline-flex'>
            <a
              href='###'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full btn-primary'
            >
              Get your free proposal
            </a>
          </button>
        </div>
        <div className='hidden lg:block'>
          <Image
            src={'/pics/proposal-pic.png'}
            alt={''}
            width={1200}
            height={300}
            layout='intrinsic'
          />
        </div>
      </div>
    </section>
  )
}

export default Services
