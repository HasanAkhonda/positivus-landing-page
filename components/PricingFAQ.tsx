'use client';

import React from 'react';
import Accordion, { AccordionContentItem } from '../components/ui/Accordion';
import SectionTitle from './SectionTitle';
import Section from './Section';

const pricingFaqData: AccordionContentItem[] = [
    {
        index: 1,
        title: 'Are there any additional fees or charges that may apply?',
        description:
            'Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, etc. We also offer custom packages that can be tailored to meet the specific needs of your business.'
    },
    {
        index: 2,
        title: 'Can I change or cancel my plan at any time?',
        description:
            'Yes, you can change or cancel your plan anytime. Just contact our support team and they will guide you through the process.'
    },
    {
        index: 3,
        title: 'Do you offer a free trial or consultation?',
        description:
            'We offer a free initial consultation to understand your business goals and see how we can help.'
    },
    {
        index: 4,
        title: 'How do you bill and invoice your clients?',
        description:
            'We typically invoice our clients monthly based on the services provided. Customized billing options are also available.'
    },
    {
        index: 5,
        title: 'Are your services guaranteed to deliver results?',
        description:
            'While we cannot guarantee specific outcomes, our strategies are based on data-driven results and industry best practices to maximize your success.'
    },
    {
        index: 6,
        title: 'Do you offer contract-based or monthly retainer-based pricing?',
        description:
            'We offer both options depending on your business needs. You can opt for flexible monthly retainers or long-term contracts for deeper engagement.'
    }
];

const PricingFAQ = () => {
    return (

        <div className='  py-12 container md:py-24'>
                 <Section>
                    <SectionTitle sectionTitle={'Frequently Asked Questions'} description={''} />
                    <Accordion data={pricingFaqData} />
                </Section>
            </div>
            );
};

            export default PricingFAQ;
