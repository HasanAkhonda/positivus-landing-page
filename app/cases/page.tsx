import CasesHero from '@/components/CasesHero'
import CreateSuccessStory from '@/components/CreateSuccessStory'
import FeaturedStory from '@/components/FeaturedStory'
import SuccessStories from '@/components/SuccessStories'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <CasesHero/>
      <FeaturedStory/>
      <SuccessStories/>
      <Testimonials/>
      <CreateSuccessStory/>
    </div>
  )
}

export default page
