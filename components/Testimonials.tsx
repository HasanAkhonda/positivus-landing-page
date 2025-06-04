'use client';

import SectionTitle from './SectionTitle'; // Adjust path if needed
import SwiperSlider from './SwiperSlider'; // Adjust path if needed
import Section from './Section'; // Wrap section layout

export default function Testimonials() {
  return (
    <section id="testimonials" className='container scroll-mt-32'  >
    <Section>
      <div className="mt-20 ">
        <SectionTitle
          sectionTitle="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <div className="rounded-[45px] bg-dark mb-[150px] text-gray">
          <SwiperSlider />
        </div>
      </div>
    </Section>
    </section>
  );
}
