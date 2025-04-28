import { Button } from '../ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

const data = [
    {
        name: 'Economy',
        image: 'https://www.usnews.com/object/image/00000191-d833-d3d1-a5ff-de3321a60001/large-62162-2025elantra.jpg?update-time=1725909114831&size=responsive640',
        price: '29'
    },
    {
        name: 'SUV',
        image: 'https://www.topgear.com/sites/default/files/2024/02/2023-GMC-Yukon-Denali-Ultimate-exteriorx3000.jpg',
        price: '49'
    },
    { name: 'Luxury', image: 'https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg', price: '89' },
    { name: 'Electric', image: 'https://www.kbb.com/wp-content/uploads/2024/04/2024-tesla-model-y-red-driving-front-3qtr.jpg', price: '59' }
];

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
                    {data.map((car, index) => (
                        <Card key={index} className='h-fit overflow-hidden p-0 transition-all hover:shadow-lg'>
                            <div className='relative aspect-[16/9] h-44'>
                                <img src={car.image || '/placeholder.svg'} alt={car.name} className='size-full object-cover' />
                            </div>
                            <CardHeader>
                                <CardTitle>{car.name}</CardTitle>
                                <CardDescription>Starting from ${car.price}/day</CardDescription>
                            </CardHeader>
                            <CardFooter className='pb-6'>
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
