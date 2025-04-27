import Link from 'next/link';
import { Button } from '../ui/button';

export default function Navbar() {
    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-16 items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 font-bold text-xl'>
                        <span className='text-primary'>Drive</span>
                        <span>Easy</span>
                    </Link>
                </div>
                <nav className='hidden gap-6 md:flex'>
                    <Link href='#cars' className='font-medium text-sm hover:text-primary'>
                        Cars
                    </Link>
                    <Link href='#locations' className='font-medium text-sm hover:text-primary'>
                        Locations
                    </Link>
                    <Link href='#how-it-works' className='font-medium text-sm hover:text-primary'>
                        How It Works
                    </Link>
                    <Link href='#faqs' className='font-medium text-sm hover:text-primary'>
                        FAQs
                    </Link>
                </nav>
                <div className='flex items-center gap-4'>
                    <Button variant='ghost' className='hidden md:flex'>
                        Sign In
                    </Button>
                    <Button>Register</Button>
                </div>
            </div>
        </header>
    );
}
