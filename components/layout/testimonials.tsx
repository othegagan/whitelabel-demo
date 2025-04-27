import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function Testimonials() {
    return (
        <section className='py-16'>
            <div className='container'>
                <div className='mb-12 text-center'>
                    <h2 className='mb-4 font-bold text-3xl'>What Our Customers Say</h2>
                    <p className='mx-auto max-w-2xl text-muted-foreground'>
                        Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    {[
                        {
                            name: 'Sarah Johnson',
                            location: 'New York',
                            quote: 'The booking process was incredibly smooth, and the car was in perfect condition. Will definitely use this service again!'
                        },
                        {
                            name: 'Michael Chen',
                            location: 'San Francisco',
                            quote: 'Great selection of vehicles and competitive prices. The customer service was exceptional when I needed to extend my rental.'
                        },
                        {
                            name: 'Emma Williams',
                            location: 'Chicago',
                            quote: "I've rented from several companies before, but this was by far the best experience. Clean cars and no hidden fees!"
                        }
                    ].map((testimonial, index) => (
                        <Card key={index} className='h-full'>
                            <CardHeader>
                                <div className='mb-2 flex items-center gap-2'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                                    ))}
                                </div>
                                <CardTitle className='text-lg'>{testimonial.name}</CardTitle>
                                <CardDescription>{testimonial.location}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='italic'>"{testimonial.quote}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
