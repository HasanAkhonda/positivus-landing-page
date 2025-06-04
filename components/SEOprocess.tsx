import React from 'react'
import Section from './Section'
import SectionTitle from './SectionTitle'

const processes = [
    {
        id: 1,
        title: "Website Audit & Analysis",
        description: "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities."
    },
    {
        id: 2,
        title: "Keyword Research & Strategy",
        description: "Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic."
    },
    {
        id: 3,
        title: "On-Page Optimization",
        description: "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain. authority and search rankings."
    },
    {
        id: 4,
        title: "Content Creation & Optimization",
        description: "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain. authority and search rankings."
    },
    {
        id: 5,
        title: "Link Building",
        description: "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain. authority and search rankings."
    },
    {
        id: 6,
        title: "Monitoring & Reporting",
        description: "We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results."
    },

]

const SEOprocess = () => {
    return (
        <div className='  pt-12 pb-12 md:pb-24 container'>
            <Section >
                <SectionTitle sectionTitle={'How we Work: SEO Process'} description={'Cur step-by-step 550 process ensure yat website ranks higher, attracts more traffic, and trives lasting results'}/>
                <div className='flex flex-col gap-10'>
                    {processes.map((process, id) => (
                        <div className='flex bg-[#f3f3f3] rounded-[55px] p-10 gap-10'>
                            {/* logo */}
                            <div className="flex items-center p-5  ">
                                <span className="hidden sm:block sm:text-6xl text-black">0{process.id}</span>
                            </div>
                            {/* process content */}
                            <div className='flex flex-col gap-6'>
                                <span className="text-xl sm:text-2xl font-semibold text-black">{process.title}</span>
                                <p className="  text-black   mt-1 max-w-full    text-base">
                                    {process.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

        </div>
    )
}

export default SEOprocess
