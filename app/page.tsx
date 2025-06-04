// pages/index.tsx
 
 import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Hero from '@/components/hero/Hero';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Sponsors from '@/components/Sponsors';
import Team from '@/components/team/Team';
import Testimonials from '@/components/Testimonials';
  
export default function Home() {
  return (
    <div   >
      <Hero />
      <Sponsors/>
      <Services/>
      <CaseStudies/>

      <Process/>
      <Team/>
      <Testimonials/>
      <Contact/>
    
     </div>
  );
}
 