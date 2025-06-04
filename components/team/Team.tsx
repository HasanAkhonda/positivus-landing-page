// pages/team.tsx
import React from 'react'
import TeamCard from '../ui/TeamCard'

interface TeamMember {
  pic:  StaticImageData
  name: string
  role: string
  description: string
  link: string
}

const description =
  'Meet the skilled and experienced team behind our successful digital marketing strategies'

// Team images
import p1 from '@/public/team/t1.png'
import p2 from '@/public/team/t2.png'
import p3 from '@/public/team/t3.png'
import p4 from '@/public/team/t4.png'
import p5 from '@/public/team/t5.png'
import p6 from '@/public/team/t6.png'
import SectionTitle from '../SectionTitle'
import { StaticImageData } from 'next/image'

const team: TeamMember[] = [
  {
    pic: p1,
    name: 'John Smith',
    role: 'CEO and Founder',
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    link: 'https://linkedin.com'
  },
  {
    pic: p2,
    name: 'Jane Doe',
    role: 'Director of Operations',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    link: 'https://linkedin.com'
  },
  {
    pic: p3,
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    link: 'https://linkedin.com'
  },
  {
    pic: p4,
    name: 'Emily Johnson',
    role: 'PPC Manager',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    link: 'https://linkedin.com'
  },
  {
    pic: p5,
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    link: 'https://linkedin.com'
  },
  {
    pic: p6,
    name: 'Sarah Kim',
    role: 'Content Creator',
    description:
      '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    link: 'https://linkedin.com'
  }
]

const Team: React.FC = () => {
  return (
    <section
      id='Team'
      className='section container mx-auto px-4 py-16 font-[Grotesk] text-center scroll-mt-32'
    >
      <SectionTitle sectionTitle={'Team'} description={description} />

      <div className='grid  grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10'>
        {team.map((member, index) => (
          <TeamCard
            key={index}
            pic={member.pic}
            name={member.name}
            role={member.role}
            description={member.description}
            link={member.link}
          />
        ))}
      </div>

      <div className='flex justify-end mt-10'>
        <button className='btn-primary'>
          See all team
        </button>
      </div>
    </section>
  )
}

export default Team
