'use client';

import { CalendarIcon, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export default function HeroSection() {
    const [pickupDate, setPickupDate] = useState<Date>(new Date());
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    return (
        <section className='relative'>
            <div className='absolute inset-0 z-0'>
                <Image
                    src='https://travelcrs.com/_next/image?url=%2Fhero-section.png&w=3840&q=75'
                    alt='Car rental hero image'
                    fill
                    className='object-cover object-bottom brightness-[0.7]'
                    priority
                />
            </div>
            <div className='container relative z-10 py-24 md:py-32'>
                <div className='max-w-3xl space-y-4 text-white'>
                    <h1 className='font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl'>Find Your Perfect Ride for Any Journey</h1>
                    <p className='text-lg md:text-xl'>Rent the car of your dreams with our easy booking process and competitive rates.</p>
                </div>

                {/* Search Form */}
                <div className='mt-8 max-w-4xl rounded-lg bg-white p-4 shadow-lg md:mt-12 md:p-6'>
                    <div className='grid gap-4 md:grid-cols-4'>
                        <div className='space-y-2 md:col-span-1'>
                            <label htmlFor='location' className='font-medium text-sm'>
                                Pick-up Location
                            </label>
                            <div className='relative'>
                                <MapPin className='-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground' />
                                <Input id='location' placeholder='City, Airport, etc.' className='pl-9' />
                            </div>
                        </div>

                        <div className='space-y-2 md:col-span-1'>
                            <label htmlFor='pickupDate' className='font-medium text-sm'>
                                Pick-up Date
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant='outline'
                                        className={cn(
                                            'w-full justify-start text-left font-normal',
                                            !pickupDate && 'text-muted-foreground'
                                        )}>
                                        <CalendarIcon className='mr-2 h-4 w-4' />
                                        {pickupDate ? format(pickupDate, 'PPP') : 'Select date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-auto p-0'>
                                    <Calendar mode='single' selected={pickupDate} onSelect={setPickupDate} initialFocus />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className='space-y-2 md:col-span-1'>
                            <label htmlFor='returnDate' className='font-medium text-sm'>
                                Return Date
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant='outline'
                                        className={cn(
                                            'w-full justify-start text-left font-normal',
                                            !returnDate && 'text-muted-foreground'
                                        )}>
                                        <CalendarIcon className='mr-2 h-4 w-4' />
                                        {returnDate ? format(returnDate, 'PPP') : 'Select date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-auto p-0'>
                                    <Calendar mode='single' selected={returnDate} onSelect={setReturnDate} initialFocus />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className='flex items-end md:col-span-1'>
                            <Button className='w-full gap-2'>
                                <Search className='h-4 w-4' />
                                Search Cars
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
