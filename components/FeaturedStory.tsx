'use client';
import Image from 'next/image';
import GreenIcon from '../components/Icons/icon5.svg';
import Section from './Section';
import Card from './ui/card';

const stats = [
    { value: '200%', label: 'Increase in organic traffic' },
    { value: '150%', label: 'Rise in online sales' },
    { value: '75%', label: 'Reduction in cost-per-click (CPC)' },
    { value: '300%', label: 'Improvement in conversion rate' },
];

const FeaturedStory = () => {
    return (
        <div className="container pb-12 lg:pt-6 ">
            <Section>
                <Card  >
                    <div className='flex bg-black rounded-[45px]'>
                        {/* logo */}
                        <div className='lg:hidden flex pt-8 pl-10 sm:pt-12 sm:pl-12 '>
                            <svg className='rotate-45 sm:rotate-0' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="#b9ff66" />
                            </svg>

                        </div>
                        {/* maincontent */}
                        <div className="bg-black text-white w-full p-8 sm:p-[50px] rounded-[45px] flex flex-col lg:flex-row gap-10">
                            {/* LEFT TEXT CONTENT */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex flex-col gap-8">
                                    <h3>

                                        {/* Mobile version */}
                                        <span className="inline sm:hidden text-[#b9ff66] text-3xl font-semibold ">
                                            FEATURED
                                        </span>

                                        {/* Desktop version */}
                                        <span className="hidden sm:inline bg-[#b9ff66] text-black text-sm sm:text-3xl px-3 py-1 rounded-md font-semibold">
                                            Featured Success Story
                                        </span>
                                    </h3>
                                    <h2 className="text-2xl sm:text-3xl font-semibold">
                                        Scaling Success for a Leading <br/>E-Commerce Brand
                                    </h2>
                                    <p className="text-base sm:text-lg leading-relaxed max-w-md">
                                        Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, drive traffic, and boost sales.
                                    </p>

                                    {/* Desktop "Read" button */}
                                    <div className="hidden lg:inline-flex mt-4">
                                        <a href="link" className="flex items-center gap-2 text-[#b9ff66] font-medium hover:underline">
                                            <Image src={GreenIcon} alt="icon" width={20} height={20} />
                                            Read
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT GRID */}
                            <div className="flex-1 flex flex-col items-start lg:items-end gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
                                    {stats.map((stat, i) => (
                                        <div
                                            key={i}
                                            className="bg-white text-black rounded-3xl lg:max-w-[150px] lg:aspect-square  p-4 flex flex-col"
                                        >
                                            <span className="text-4xl font-bold mb-1">{stat.value}</span>
                                            <p className="text-sm">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile "Read" button */}
                                <div className="mt-6 lg:hidden">
                                    <a href="link" className="flex items-center gap-2 text-[#b9ff66] font-medium hover:underline">
                                        <Image src={GreenIcon} alt="icon" width={20} height={20} />
                                        Read
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Section>
        </div>
    );
};

export default FeaturedStory;
