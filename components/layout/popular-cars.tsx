import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const data = [
    { name: 'Electric', image: 'https://fiat.b-cdn.net/HT500861.jpeg', subtext: 'Starting from $29/day' },
    {
        name: 'Economy',
        image: 'https://fiat.b-cdn.net/HT647920.jpeg',
        subtext: 'Starting from $29/day'
    },
    {
        name: 'SUV',
        image: 'https://www.topgear.com/sites/default/files/2024/02/2023-GMC-Yukon-Denali-Ultimate-exteriorx3000.jpg',
        subtext: 'Comming soon'
    },
    {
        name: 'Luxury',
        image: 'https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg',
        subtext: 'Comming soon'
    }
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
                        <Card key={index} className='h-fit overflow-hidden p-0 pb-4 transition-all hover:shadow-lg'>
                            <div className='relative aspect-[16/9] h-44'>
                                <img src={car.image || '/placeholder.svg'} alt={car.name} className='size-full object-cover' />
                            </div>
                            <CardHeader>
                                <CardTitle>{car.name}</CardTitle>
                                <CardDescription>{car.subtext}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
