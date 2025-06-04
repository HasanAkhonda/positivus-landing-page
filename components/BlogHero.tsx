import React from 'react'
import SplitHero from './reusable/SplitHero'
import pic from '../public/pics/hero.svg'

const BlogHero = () => {
  return (
    <div>
      <SplitHero image={pic} title={'PPC vs. Organic Marketing: Which One Is Right for Your Business?'} description={'PPC and organic marketing each offer unique benefits for driving traffic and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance.'}/>
    </div>
  )
}

export default BlogHero
