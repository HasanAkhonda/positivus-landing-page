import React from 'react'
import Section from './Section'
import Image from 'next/image'
import pic from '../public/pics/proposal-pic.png'

const CreateSuccessStory = () => {
  return (
    <div className='   pb-12 md:pb-24 container'>
      <Section>
                 <div className='bg-[#b9ff66]    w-full p-8 sm:px-14 h-auto sm:h-[280px] rounded-[45px] inline-flex flex-col-reverse sm:flex-row justify-start items-center gap-8 sm:gap-10'>
          
          <div className='w-full flex flex-col gap-6 justify-between items-start'>
                  <h1 className="text-black text-2xl sm:text-3xl font-medium font-['Space_Grotesk']">
                    Let's Create Your Next Success Story
                  </h1>
                  <p className="text-start text-black text-base sm:text-lg font-normal font-['Space_Grotesk']">
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                    </p>
                  <button className='justify-start w-full items-center inline-flex'>
                    <a
                      href='###'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-fit btn-primary'
                    >
                      Get your free proposal
                    </a>
                  </button>
                </div>
                <div className='w-1/2 '>
            <Image
              src={pic}
              alt={''}
              width={700}
              height={300}
              layout='intrinsic'
            />
          </div>

        </div>
      </Section>
    </div>
  )
}

export default CreateSuccessStory
