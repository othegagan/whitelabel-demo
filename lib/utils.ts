import { type ClassValue, clsx } from 'clsx';
import { addMinutes, format, startOfHour } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getCurrentDatePlusHours(hours: number) {
    const now = new Date();
    now.setHours(now.getHours() + hours);
    return now;
}

export function getCurrentTimeRounded() {
    const now = new Date();
    const nextHour = addMinutes(startOfHour(now), 60 * 3);
    const roundedTime = format(nextHour, 'HH:mm:ss');
    return roundedTime;
}
