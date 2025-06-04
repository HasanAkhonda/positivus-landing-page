import Cases from '@/components/Cases'
import FeaturedStory from '@/components/FeaturedStory'
import JoinTeam from '@/components/JoinTeam'
import ServiceHero from '@/components/ServiceHero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'


const page = () => {
    return (
        <div>
            <ServiceHero />
            <FeaturedStory />
            <Testimonials />
            <Cases />
            <Services />
            <JoinTeam />

        </div>
    )
}

export default page
