// pages/index.tsx
 
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Hero from '@/components/hero/Hero';
import Process from '@/components/Process';
import Services from '@/components/services/Services';
 import Sponsors from '@/components/Sponsors';
import Team from '@/components/team/Team';
import Testimonials from '@/components/Testimonials';
  
export default function Home() {
  return (
    <div className='font-[Grotesk] scroll-smooth'  >
      <Hero />
      <Sponsors/>
      <Services/>
      <Cases/>

      <Process/>
      <Team/>
      <Testimonials/>
      <Contact/>
    
     </div>
  );
}
 