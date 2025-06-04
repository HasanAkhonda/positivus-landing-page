 import UseCase from '@/components/UseCase'
import FeaturedStory from '@/components/FeaturedStory'
import JoinTeam from '@/components/JoinTeam'
import SearchOptimization from '@/components/SearchOptimization'
import ServiceHero from '@/components/ServiceHero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CaseStudies from '@/components/CaseStudies'


const page = () => {
    return (
        <div>
            <ServiceHero />
            <SearchOptimization />
            <UseCase/>
            <CaseStudies />
            <Testimonials />
            <Services />
            <JoinTeam />

        </div>
    )
}

export default page
