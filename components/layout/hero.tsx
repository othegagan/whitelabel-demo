import Image from 'next/image';
import { Suspense } from 'react';
import SearchComponent from './search/search-component';

export default function HeroSection() {
    return (
        <section className='relative'>
            <div className='absolute inset-0 z-0'>
                <Image
                    src='https://travelcrs.com/_next/image?url=%2Fhero-section.png&w=3840&q=75'
                    alt='Car rental hero image'
                    fill
                    className='object-cover object-bottom brightness-[0.5]'
                    priority
                />
            </div>
            <div className='container relative z-10 flex flex-col items-center py-24 md:py-32'>
                <div className='flex max-w-3xl flex-col items-center justify-center space-y-4 text-white'>
                    <h1 className='text-center font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl'>
                        Find Your Perfect Ride for Any Journey
                    </h1>
                    <p className='text-center text-lg md:text-xl'>
                        Rent the car of your dreams with our easy booking process and competitive rates.
                    </p>
                </div>

                {/* Search Form */}
                <div className='mt-8 max-w-7xl rounded-lg bg-white p-4 shadow-lg md:mt-12 '>
                    <Suspense fallback={<div>Loading...</div>}>
                        <SearchComponent />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
