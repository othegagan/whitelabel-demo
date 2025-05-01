'use client';

import { Star } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card';

const data = [
    {
        name: 'Chevrolet BOLT EV 2020',
        price: '39',
        image: 'https://fiat.b-cdn.net/L4148583.jpeg',
        features: ['5 Seats', 'Electric']
    },
    {
        name: 'Chevrolet BOLT EV 2019',
        price: '39',
        image: 'https://bundeestorage.blob.core.windows.net/bundeeprodstorage/1474%2F273%2F254cb53b5b504a07a285ac748892658e.jpg',
        features: ['5 Seats', 'Electric']
    },
    {
        name: 'Chevrolet BOLT EV 2017',
        price: '39',
        image: 'https://bundeestorage.blob.core.windows.net/bundeeprodstorage/1474%2F254%2Fa5efbb270644470e850c73ad29c54a49.jpg',
        features: ['5 Seats', 'Electric']
    }
];

export default function FeaturedCars() {
    function redirectToVech() {
        const city = 'Austin, Texas, United States';
        const latitude = '-97.7437';
        const longitude = '30.271129';
        const isAirport = false;
        const isMapSearch = false;
        const zoomLevel = 12;

        const newUrl = `https://white-label-demo-2.vercel.app/vehicles?city=${city}&latitude=${latitude}&longitude=${longitude}&isAirport=${isAirport}&isMapSearch=${isMapSearch}&zoomLevel=${zoomLevel}`;

        window.open(newUrl, '_blank');
    }
    return (
        <section className='py-16'>
            <div className='container'>
                <div className='mb-8 flex items-center justify-between'>
                    <h2 className='font-bold text-3xl'>Featured Vehicles</h2>
                </div>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {data.map((car, index) => (
                        <Card key={index} className='h-fit overflow-hidden p-0 transition-all hover:shadow-lg'>
                            <div className='relative aspect-video h-44'>
                                <img src={car.image || '/placeholder.svg'} alt={car.name} className='size-full object-cover' />
                                <Badge className='absolute top-2 right-2'>New</Badge>
                            </div>
                            <CardHeader className='pb-0'>
                                <div className='flex items-center justify-between'>
                                    <CardTitle>{car.name}</CardTitle>
                                    <div className='flex items-center gap-1'>
                                        <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                                        <span className='font-medium text-sm'>4.8</span>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    {car.features.map((feature, i) => (
                                        <Badge key={i} variant='outline'>
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardFooter className='flex justify-between pt-0 pb-6'>
                                <div>
                                    <span className='font-bold text-2xl'>${car.price}</span>
                                    <span className='text-muted-foreground'>/day</span>
                                </div>
                                <Button onClick={redirectToVech}>Rent Now</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
