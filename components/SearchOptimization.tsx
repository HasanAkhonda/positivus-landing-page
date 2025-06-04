'use client';
import Section from './Section';
import Card from './ui/card';

const stats = [
    { value: '200%', label: 'Increase in organic traffic' },
    { value: '150%', label: 'Rise in online sales' },
    { value: '75%', label: 'Reduction in cost-per-click (CPC)' },
    { value: '300%', label: 'Improvement in conversion rate' },
];

const SearchOptimization = () => {
    return (
        <div className="container pb-12 lg:pt-6 ">
            <Section>
                <Card  >
                    <div className='flex bg-black rounded-[45px]'>
                        {/* logo */}
                        <div className='flex pt-8 pl-10 sm:pt-12 sm:pl-12 '>
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
                                        <h3 className="flex flex-col ">
                                            <span className='hidden w-fit sm:inline bg-[#b9ff66] text-black text-sm sm:text-2xl px-3 py-1 rounded-md font-semibold'>Search engine</span>
                                            <span className='hidden w-fit sm:inline bg-[#b9ff66] text-black text-sm sm:text-2xl px-3 py-1 rounded-md font-semibold'>optimization</span>
                                        </h3>
                                    </h3>
                                </div>
                            </div>
                            {/* RIGHT GRID */}
                            <div className="flex-3 flex flex-col items-start lg:items-end gap-6">
                                <div className="flex flex-col  gap-8  ">
                                    <h2 className=" inline sm:hidden text-xl font-semibold">
                                        Search engine optimization
                                    </h2>
                                    <p>
                                        SEO is the process of improving your website's visibility on search engines like Google. By optimizing your content and site structure, we help your business rank higher in search results, driving more organic traffic and potential customers.
                                    </p>
                                    <button
                                        className='w-full py-3 sm:py-5 px-5 rounded-lg font-medium transition border border-black text-black bg-white hover:bg-[#b9ff66] hover:scale-105 hover:text-white'
                                    >
                                        Boost My Rankings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Section>
        </div>
    )
}

export default SearchOptimization
