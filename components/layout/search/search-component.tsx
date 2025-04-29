'use client';

import { getCurrentDatePlusHours, getCurrentTimeRounded } from '@/lib/utils';
import { addDays, differenceInMinutes, format, isToday } from 'date-fns';
import { useQueryState } from 'nuqs';
import { toast } from 'sonner';
import { Button } from '../../ui/button';
import { AddressCombobox } from './address-combo-box';
import SearchCalendar from './date-range';
import TimeSelect from './time-select';

export default function SearchComponent() {
    const [startDateQuery, setStartDateQuery] = useQueryState('startDate', {
        defaultValue: format(getCurrentDatePlusHours(3) || new Date(), 'yyyy-MM-dd'),
        history: 'replace'
    });
    const [endDateQuery, setEndDateQuery] = useQueryState('endDate', {
        defaultValue: format(addDays(getCurrentDatePlusHours(3) || new Date(), 2), 'yyyy-MM-dd'),
        history: 'replace'
    });

    const [startTimeQuery, setStartTimeQuery] = useQueryState('startTime', {
        defaultValue: getCurrentTimeRounded() || '10:00:00',
        history: 'replace'
    });

    const [endTimeQuery, setEndTimeQuery] = useQueryState('endTime', {
        defaultValue: getCurrentTimeRounded() || '10:00:00',
        history: 'replace'
    });

    const [_city, setCity] = useQueryState('city', { defaultValue: 'Austin, Texas, United States' });
    const [_latitude, settLatitude] = useQueryState('latitude', { defaultValue: '-97.7437', history: 'replace' });
    const [_longitude, setLongitude] = useQueryState('longitude', { defaultValue: '30.271129', history: 'replace' });
    const [_isAirport, setIsAirport] = useQueryState('isAirport', { defaultValue: 'false', history: 'replace' });

    const todayDate = new Date(`${startDateQuery}T${startTimeQuery}`);

    const redirectToVech = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const city = queryParams.get('city') || 'Austin, Texas, United States';
        const latitude = queryParams.get('latitude') || '-97.7437';
        const longitude = queryParams.get('longitude') || '30.271129';
        const startDate = queryParams.get('startDate') || startDateQuery;
        const endDate = queryParams.get('endDate') || endDateQuery;
        const startTime = queryParams.get('startTime') || startTimeQuery;
        const endTime = queryParams.get('endTime') || endTimeQuery;
        const isAirport = queryParams.get('isAirport') || false;
        const isMapSearch = queryParams.get('isMapSearch') || false;
        const zoomLevel = queryParams.get('zoomLevel') || 12;

        const fullStartDate = `${startDate}T${startTime}`;
        const fullEndDate = `${endDate}T${endTime}`;

        const diff = differenceInMinutes(new Date(fullEndDate), new Date(fullStartDate));

        if (diff <= 0) {
            const startTimeFormatted = format(new Date(fullStartDate), 'hh:mm a');
            const endTimeFormatted = format(new Date(fullEndDate), 'hh:mm a');
            const startDateFormatted = format(new Date(fullStartDate), 'PPP');
            const endDateFormatted = format(new Date(fullEndDate), 'PPP');
            toast.error(
                `Drop off date (${endDateFormatted}, ${endTimeFormatted}) cannot be earlier than start date (${startDateFormatted}, ${startTimeFormatted}).`
            );
            return;
        }

        const newUrl = `https://white-label-demo-2.vercel.app/vehicles?city=${city}&latitude=${latitude}&longitude=${longitude}&startDate=${startDate}&endDate=${endDate}&startTime=${startTime}&endTime=${endTime}&isAirport=${isAirport}&isMapSearch=${isMapSearch}&zoomLevel=${zoomLevel}`;

        window.open(newUrl, '_blank');
    };

    function setLoacationDetails(value: any) {
        setCity(value.fullAddress);
        settLatitude(value.longitude);
        setLongitude(value.latitude);
        setIsAirport(value.isAirport);
    }
    return (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-12'>
            <div className='col-span-2 space-y-2 md:col-span-6 lg:col-span-3'>
                <label htmlFor='location' className='font-medium text-sm'>
                    Pick-up Location
                </label>
                <AddressCombobox locationDetails='' setLocationDetails={setLoacationDetails} />
            </div>

            <div className='col-span-2 md:col-span-6 lg:col-span-3'>
                <label htmlFor='pickupDate' className='font-medium text-sm'>
                    Pick-up Date
                </label>
                <SearchCalendar
                    startDate={startDateQuery}
                    setStartDate={setStartDateQuery}
                    endDate={endDateQuery}
                    setEndDate={setEndDateQuery}
                />
            </div>

            <div className='col-span-1 space-y-2 md:col-span-4 lg:col-span-2'>
                <TimeSelect
                    label='Pickup Time'
                    onChange={setStartTimeQuery}
                    defaultValue={startTimeQuery}
                    disableLimitTime={isToday(todayDate) && isToday(new Date()) ? getCurrentTimeRounded() : null}
                    className='md:w-full'
                    variant='md'
                />
            </div>

            <div className='col-span-1 space-y-2 md:col-span-4 lg:col-span-2'>
                <TimeSelect label='Drop Time' onChange={setEndTimeQuery} defaultValue={endTimeQuery} className='md:w-full' variant='md' />
            </div>

            <div className='col-span-2 md:col-span-3 lg:col-span-2'>
                <div className='flex h-full w-full items-end justify-end'>
                    <Button className='w-full' onClick={redirectToVech}>
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}
