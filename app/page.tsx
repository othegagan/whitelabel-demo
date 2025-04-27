import Faqs from '@/components/layout/faqs';
import FeaturedCars from '@/components/layout/featured-cars';
import HeroSection from '@/components/layout/hero';
import HowItWorks from '@/components/layout/how-it-works';
import PopularCars from '@/components/layout/popular-cars';
import Testimonials from '@/components/layout/testimonials';

export default function Home() {
    return (
        <main className='flex-1'>
            <HeroSection />
            <PopularCars />
            <FeaturedCars />
            <HowItWorks />
            <Testimonials />
            <Faqs />
        </main>
    );
}
