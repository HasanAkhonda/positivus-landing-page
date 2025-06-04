 import UseCase from '@/components/UseCase'
import FeaturedStory from '@/components/FeaturedStory'
import JoinTeam from '@/components/JoinTeam'
import SearchOptimization from '@/components/SearchOptimization'
import ServiceHero from '@/components/ServiceHero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CaseStudies from '@/components/CaseStudies'
import OtherServices from '@/components/OtherServices'
import ElevateRanking from '@/components/ElevateRanking'
import SEOprocess from '@/components/SEOprocess'


const page = () => {
    return (
        <div>
            <ServiceHero />
            <SearchOptimization />
            <SEOprocess/>
            <UseCase/>
             <OtherServices />
            <ElevateRanking/>

        </div>
    )
}

export default page
