// components/TeamCard.tsx
import React from 'react'
import Card from './card'
import Image, { StaticImageData } from 'next/image'

interface TeamCardProps {
  pic: StaticImageData
  name: string
  role: string
  description: string
  link: string
}

const TeamCard: React.FC<TeamCardProps> = ({
  pic,
  name,
  role,
  description,
  link
}) => {
  return (
    <Card isUnderline={true}>
      <div className='p-[60px]'>
        <div className='flex flex-col  sm:flex-row relative'>
          <picture>
            <Image src={pic} alt={name} className='w-32 h-32 rounded-full' />
          </picture>
          <div className='flex flex-col justify-end sm:ml-5'>
            <h3 className='text-lg font-medium'>{name}</h3>
            <p className='text-sm font-normal'>{role}</p>
          </div>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute right-0 top-0'
          >
            <Image
              src='/pics/profile-in.svg'
              alt='LinkedIn Logo'
              className='w-8 h-8'
              width={120} 
              height={100}
            />
          </a>
        </div>
        <div className='w-full h-[1px] bg-black my-7'></div>
        <div>{description}</div>
      </div>
    </Card>
  )
}

export default TeamCard
