import AboutHero from '@/components/AboutHero';
import AwardRecognition from '@/components/AwardRecognition';
import CoreValue from '@/components/CoreValue';
import JoinTeam from '@/components/JoinTeam';
import OurImpactInNumber from '@/components/OurImpactInNumber';
import OurJourney from '@/components/OurJourney';
import QuoteBanner from '@/components/QuoteBanner';

const About = () => {
  return (
    <section >
        <AboutHero/>
        <OurImpactInNumber />
        <OurJourney />
        <CoreValue/>
        <QuoteBanner/>
        <AwardRecognition/>
        <JoinTeam/>
         
     </section>
  );
};

export default About;
