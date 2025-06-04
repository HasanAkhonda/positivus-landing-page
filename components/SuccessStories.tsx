import React from 'react'
import BoxGrid from '@/components/ui/BoxGrid';
import icon from '@/assets/icon6.svg';
import SectionTitle from './SectionTitle';
import Section from './Section';

const InsightGrid = Array(6).fill({
    title: "E-Commerce fashion Brands",
    desc: "We implemented tailored SEO strategy that boosted organic search rankings, leading to a 150% rise in online sales within six months.",
});
const SuccessStories = () => {
    return (
        <div className='container py-12 md:py-24'>
            <Section>
                 <SectionTitle sectionTitle={'All Success Stories'} description={'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'}/>
                 <BoxGrid
                    items={InsightGrid}
                    icon={icon}
                    linkText="Service Info"
                    linkHref="/page-here"
                />
            </Section>

        </div>
    )
}

export default SuccessStories
