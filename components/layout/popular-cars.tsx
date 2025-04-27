import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

export default function PopularCars() {
    return (
        <section id='cars' className='bg-gray-50 py-16'>
            <div className='container'>
                <div className='mb-12 text-center'>
                    <h2 className='mb-4 font-bold text-3xl'>Browse by Car Type</h2>
                    <p className='mx-auto max-w-2xl text-muted-foreground'>
                        Find the perfect vehicle for your needs, from compact cars for city trips to SUVs for family adventures.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {[
                        { name: 'Economy', image: '/placeholder.svg?height=200&width=300', price: '29' },
                        { name: 'SUV', image: '/placeholder.svg?height=200&width=300', price: '49' },
                        { name: 'Luxury', image: '/placeholder.svg?height=200&width=300', price: '89' },
                        { name: 'Electric', image: '/placeholder.svg?height=200&width=300', price: '59' }
                    ].map((car, index) => (
                        <Card key={index} className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative aspect-[4/3]'>
                                <Image src={car.image || '/placeholder.svg'} alt={car.name} fill className='object-cover' />
                            </div>
                            <CardHeader>
                                <CardTitle>{car.name}</CardTitle>
                                <CardDescription>Starting from ${car.price}/day</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Cars
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
