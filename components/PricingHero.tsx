'use client';

import React from 'react';
import pricingData from '@/data/priceDats.json';
import Section from '@/components/Section';


const PricingHero = () => {
    return (
        <div className='  py-12 container md:py-24'>
            <Section id="about"  >
                <div className="  text-start mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
                        Pricing
                    </h2>
                    <p className="mb-5 font-light   sm:text-xl">
                        Elevate Your Online Preence: Competitive Pricing <br />for Exceptional Results
                    </p>
                </div>

                <div className="space-y-8 pb-4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   sm:gap-6 xl:gap-10 lg:space-y-0">
                    {pricingData.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col justify-between rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23] ${item.popular ? 'bg-[#191a23] text-white' : 'bg-[#F3F3F3]'
                                }`}
                        >
                            <div className="flex flex-col p-6 mx-auto relative max-w-lg text-start">
                                {item.popular && (
                                    <span className="absolute right-6 top-8 bg-green text-black text-xs px-3 py-1 rounded-full mb-3">
                                        Popular
                                    </span>
                                )}
                                <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>

                                <div className="flex justify-start items-baseline my-6">
                                    <span className="mr-2 text-5xl font-extrabold">${item.price}</span>
                                    <span className={item.popular ? 'text-gray-300' : 'text-gray-500'}>/month</span>
                                </div>



                                <div className="flex flex-col gap-3">
                                    <button
                                        className={`w-full py-2.5 px-5 rounded-lg font-medium transition hover:scale-105 ${item.popular
                                            ? 'bg-green text-black hover:bg-white'
                                            : 'bg-black text-white hover:bg-[#b9ff66] hover:text-black '
                                            }`}
                                    >
                                        {item.action}
                                    </button>

                                    {item.popular ? (
                                        <button
                                            className={`w-full py-2.5 px-5 rounded-lg font-medium transition border border-white ${item.popular ? 'text-white' : 'text-black'
                                                } hover:bg-white hover:scale-105 hover:text-black`}
                                        >
                                            {item.quote}
                                        </button>
                                    ) :
                                        <button
                                            className={`w-full py-2.5 px-5 rounded-lg font-medium transition border border-black ${item.popular ? 'text-white' : 'text-black'
                                                } hover:bg-black hover:scale-105 hover:text-white`}
                                        >
                                            {item.quote}
                                        </button>
                                    }

                                    <div className='w-full h-[1px] bg-black my-7'></div>

                                </div>
                                <div className="flex flex-col gap-3 mb-6 text-left">
                                    {item.features.map((feature: string, i: number) => (
                                        <ListItem key={i} label={feature} />
                                    ))}
                                </div>


                            </div>
                        </div>
                    ))}

                </div>
            </Section>
        </div>
    );
}
function ListItem({ label }: { label: string }) {
    return (
        <li className="flex items-center space-x-3">
            <svg
                className="w-5 h-5 text-green-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 
        12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
            </svg>
            <span>{label}</span>
        </li>
    );
}


export default PricingHero
