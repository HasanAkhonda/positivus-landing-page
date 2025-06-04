'use client';

import React from 'react';
import Form from '@/components/ui/Form';
import SectionTitle from '@/components/SectionTitle';
import Section from './Section'; 

export default function Contact() {
  return (
    <section id="contact" className="container scroll-mt-32">
    <Section >
      <div className="mb-[140px] relative">
        <SectionTitle
          sectionTitle="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <Form />
      </div>
    </Section>
    </section>
  );
}
