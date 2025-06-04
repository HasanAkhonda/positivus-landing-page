import React from 'react'
import Section from './Section'
import Image from 'next/image'
import joinUsImage from '../public/aboutNeon.svg'

const JoinTeam = () => {
  return (
    <div className='  py-12 md:py-24 container'>
      <Section>
        <div className='rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23] bg-[#b9ff66]  text-black overflow-hidden my-2 w-full p-8 sm:px-14 h-auto  flex flex-col-reverse sm:flex-row justify-center  lg:justify-start items-center gap-8 sm:gap-10'>
          <div className='sm:w-1/2  '>
            <Image
              src={joinUsImage}
              alt={''}
              width={700}
              height={300}
              layout='intrinsic'
            />
          </div>
          <div className=' md:ml-10 lg:ml-30 w-full flex flex-col gap-6    items-center sm:items-start'>
            <h1 className="  text-2xl sm:text-3xl font-medium font-['Space_Grotesk']">
              Join Our Team
            </h1>
            <p className="sm:text-start text-center  text-base sm:text-lg font-normal font-['Space_Grotesk']">
              At Positivus, we theives on innovation and collaboration. We're always looking for passionate individuals to join our team and help businesses grow. Ready to make an impact? </p>
            <button className='justify-start w-full items-center inline-flex'>
              <a
                href='###'
                target='_blank'
                rel='noopener noreferrer'
                className='w-full btn-primary'
              >
                Explore Careers
              </a>
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default JoinTeam
