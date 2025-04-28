'use client';

import { Button } from '@/components/ui/extension/button';
import {
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHeader,
    CalendarHeaderCell,
    CalendarHeading,
    RangeCalendar
} from '@/components/ui/extension/calendar';
import { DatePickerContent, DateRangePicker } from '@/components/ui/extension/date-picker';
import { cn } from '@/lib/utils';
import { getLocalTimeZone, parseDate, today } from '@internationalized/date';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { useState } from 'react';
import { Group } from 'react-aria-components';
import { useMediaQuery } from 'react-responsive';

interface SearchCalendarProps {
    setStartDate: (date: any) => void;
    setEndDate: (date: any) => void;
    startDate: string;
    endDate: string;
}

export default function SearchCalendar({ setStartDate, setEndDate, startDate, endDate }: SearchCalendarProps) {
    const [dates, setDates] = useState<any>({
        start: parseDate(startDate),
        end: parseDate(endDate)
    });

    function onDateSelect(item: any) {
        setDates(item);
        setStartDate(format(item.start.toDate(getLocalTimeZone()), 'yyyy-MM-dd'));
        setEndDate(format(item.end.toDate(getLocalTimeZone()), 'yyyy-MM-dd'));
    }

    const isTabletOrLarger = useMediaQuery({ query: '(min-width: 768px)' });

    // Check if the current time is above 9PM and if so, add an extra day to the minimum date
    const isPast9PM = new Date().getHours() >= 21;
    const minValueDate = today(getLocalTimeZone()).add({ days: isPast9PM ? 1 : 0 });

    return (
        <>
            <DateRangePicker aria-label='Select Date' shouldCloseOnSelect={true}>
                <Group>
                    <Button
                        variant='outline'
                        className={cn(
                            'flex w-full cursor-pointer items-center justify-start rounded-md border px-3 py-2 text-left font-normal text-sm shadow-none',
                            !dates && 'text-muted-foreground'
                        )}>
                        {dates?.end ? (
                            <div className='flex w-full items-center justify-between'>
                                <div className='flex w-full items-center justify-start'>
                                    <CalendarIcon className='mr-1 size-4' /> {format(dates.start.toDate(getLocalTimeZone()), 'LLL dd, y')}
                                </div>
                                -
                                <div className='flex w-full items-center justify-end'>
                                    <CalendarIcon className='mr-1 size-4' /> {format(dates.end.toDate(getLocalTimeZone()), 'LLL dd, y')}
                                </div>
                            </div>
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </Group>

                <DatePickerContent>
                    <RangeCalendar
                        className={'w-fit select-none'}
                        aria-label='Date range (uncontrolled)'
                        value={dates}
                        onChange={(value) => onDateSelect(value)}
                        visibleDuration={{ months: isTabletOrLarger ? 2 : 1 }}
                        pageBehavior='visible'
                        minValue={minValueDate}>
                        <CalendarHeading />
                        <div className='hidden gap-6 overflow-auto md:flex'>
                            <CalendarGrid>
                                <CalendarGridHeader>{(day: any) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</CalendarGridHeader>
                                <CalendarGridBody>{(date: any) => <CalendarCell date={date} />}</CalendarGridBody>
                            </CalendarGrid>
                            <CalendarGrid offset={{ months: 1 }}>
                                <CalendarGridHeader>{(day: any) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</CalendarGridHeader>
                                <CalendarGridBody>{(date: any) => <CalendarCell date={date} />}</CalendarGridBody>
                            </CalendarGrid>
                        </div>
                        <div className='flex gap-6 overflow-auto md:hidden'>
                            <CalendarGrid>
                                <CalendarGridHeader>{(day: any) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</CalendarGridHeader>
                                <CalendarGridBody>{(date: any) => <CalendarCell date={date} />}</CalendarGridBody>
                            </CalendarGrid>
                        </div>
                    </RangeCalendar>
                </DatePickerContent>
            </DateRangePicker>
        </>
    );
}
