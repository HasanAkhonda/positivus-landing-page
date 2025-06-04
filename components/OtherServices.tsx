'use client'

import React from 'react'
 import ui from '../public/pics/card-pic6.png'
import frontend from '../public/pics/card-pic2.png'
import ecommerce from '../public/pics/card-pic5.png'
import web from '../public/pics/card-pic1.png'
import cms from '../public/pics/card-pic4.png'
import app from '../public/pics/card-pic3.png'
 import Image from 'next/image'
import ServiceCard from './ui/ServiceCard'
import SectionTitle from './SectionTitle'

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

const OtherServices = () => {
  return (
    <section
      id='services'
      className='section container mx-auto px-4 py-16 text-center scroll-mt-32'
    >
      <SectionTitle
        sectionTitle={'Our Other Services'}
        description={
          'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
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
    </section>
  )
}

export default OtherServices
