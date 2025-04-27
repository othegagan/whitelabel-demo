import { CheckCircle, Clock, Search } from 'lucide-react';

export default function HowItWorks() {
    return (
        <section id='how-it-works' className='bg-gray-50 py-16'>
            <div className='container'>
                <div className='mb-12 text-center'>
                    <h2 className='mb-4 font-bold text-3xl'>How It Works</h2>
                    <p className='mx-auto max-w-2xl text-muted-foreground'>
                        Renting a car with us is quick and easy. Follow these simple steps to get on the road.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                    {[
                        {
                            title: 'Choose Your Car',
                            description: 'Browse our extensive fleet and select the perfect vehicle for your journey.',
                            icon: Search
                        },
                        {
                            title: 'Book & Pay Online',
                            description: 'Secure your reservation with our easy online booking system and payment process.',
                            icon: Clock
                        },
                        {
                            title: 'Enjoy Your Ride',
                            description: 'Pick up your car at the designated location and enjoy your journey with peace of mind.',
                            icon: CheckCircle
                        }
                    ].map((step, index) => (
                        <div key={index} className='flex flex-col items-center text-center'>
                            <div className='mb-4 rounded-full bg-primary/10 p-4'>
                                <step.icon className='h-8 w-8 text-primary' />
                            </div>
                            <h3 className='mb-2 font-bold text-xl'>{step.title}</h3>
                            <p className='text-muted-foreground'>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
