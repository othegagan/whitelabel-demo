import { Star } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card';
export default function FeaturedCars() {
    return (
        <section className='py-16'>
            <div className='container'>
                <div className='mb-8 flex items-center justify-between'>
                    <h2 className='font-bold text-3xl'>Featured Vehicles</h2>
                    <Button variant='outline'>View All Cars</Button>
                </div>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {[
                        {
                            name: 'Toyota Camry',
                            type: 'Sedan',
                            price: '45',
                            image: '/placeholder.svg?height=200&width=300',
                            features: ['5 Seats', 'Automatic', 'Hybrid']
                        },
                        {
                            name: 'Honda CR-V',
                            type: 'SUV',
                            price: '65',
                            image: '/placeholder.svg?height=200&width=300',
                            features: ['5 Seats', 'Automatic', 'AWD']
                        },
                        {
                            name: 'Tesla Model 3',
                            type: 'Electric',
                            price: '85',
                            image: '/placeholder.svg?height=200&width=300',
                            features: ['5 Seats', 'Autopilot', 'Electric']
                        }
                    ].map((car, index) => (
                        <Card key={index} className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative aspect-video'>
                                <Image src={car.image || '/placeholder.svg'} alt={car.name} fill className='object-cover' />
                                <Badge className='absolute top-2 right-2'>{car.type}</Badge>
                            </div>
                            <CardHeader>
                                <div className='flex items-center justify-between'>
                                    <CardTitle>{car.name}</CardTitle>
                                    <div className='flex items-center gap-1'>
                                        <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                                        <span className='font-medium text-sm'>4.8</span>
                                    </div>
                                </div>
                                <div className='mt-2 flex gap-2'>
                                    {car.features.map((feature, i) => (
                                        <Badge key={i} variant='outline'>
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardFooter className='flex justify-between'>
                                <div>
                                    <span className='font-bold text-2xl'>${car.price}</span>
                                    <span className='text-muted-foreground'>/day</span>
                                </div>
                                <Button>Rent Now</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
