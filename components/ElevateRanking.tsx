import React from 'react'
import Section from './Section'
import Image from 'next/image'
import joinUsImage from '../public/pics/hero.svg'
const ElevateRanking = () => {
    return (
        <div className='  pt-12 pb-12 md:pb-24 container'>
            <Section>
                <div className='rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23] bg-white  text-black overflow-hidden my-2 w-full p-8 sm:px-14 h-auto  flex flex-col-reverse lg:flex-row justify-center  lg:justify-start items-center gap-8 sm:gap-10'>

                    <div className='   w-full flex flex-col gap-8    items-center sm:items-start'>
                        <h1 className="  text-2xl sm:text-3xl font-bold ">
                            Ready to Elevate Your Search Rankings?
                        </h1>
                        <div className="w-full h-[1px] bg-black my-3 font-['Space_Grotesk']" />
                        <p className="sm:text-start text-center  text-base sm:text-lg font-normal font-['Space_Grotesk']">
                            Our proven SEO strategies are designed to help your business achieve long-lasting success in search engines. Whether you want to boost organic traffic, improve keyword rankings, or increase conversions, we're here to make it happen.
                        </p>
                        <p className="font-['Space_Grotesk'] font-semibold">Let's work together to grow your online presence.</p>
                        <button className='justify-start w-full items-center inline-flex'>
                            <a
                                href='###'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-full btn-tertiary hover:text-white hover:bg-black'
                            >
                                Start My SEO Journey
                            </a>
                        </button>
                    </div>
                    <div className='sm:w-1/2  '>
                        <Image
                            src={joinUsImage}
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

export default ElevateRanking
