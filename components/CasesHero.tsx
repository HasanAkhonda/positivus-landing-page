import React from 'react'
import SplitHero from './reusable/SplitHero'
import HeroIlust from '../public/about.svg';

const CasesHero = () => {
  return (
    <div>
      <SplitHero
      id="about"
      image={HeroIlust}
      title="Together for Success"
      description="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."
    />
    </div>
  )
}

export default CasesHero
