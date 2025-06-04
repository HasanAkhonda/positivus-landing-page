import React from 'react'
import SplitHero from './reusable/SplitHero'
import HeroIlust from '@/public/pics/hero.svg'; // Adjust this path to your actual Next.js alias setup


const ServiceHero = () => {
  return (
    <div>
      <SplitHero image={HeroIlust} title={'Expert Digital Marketing Services'} description={"Unlock your business's full potential with tailored strategies designed to drive growth and deliver results."}/>
    </div>
  )
}

export default ServiceHero
