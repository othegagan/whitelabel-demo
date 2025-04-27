import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-foreground text-background'>
            <div className='container py-12'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
                    <div>
                        <h3 className='mb-4 font-bold text-lg text-white'>DriveEasy</h3>
                        <p className='mb-4'>Making car rentals simple, affordable, and convenient for everyone.</p>
                        <div className='flex gap-4'>
                            <Link href='#' className='hover:text-white'>
                                <Facebook className='h-5 w-5' />
                                <span className='sr-only'>Facebook</span>
                            </Link>
                            <Link href='#' className='hover:text-white'>
                                <Twitter className='h-5 w-5' />
                                <span className='sr-only'>Twitter</span>
                            </Link>
                            <Link href='#' className='hover:text-white'>
                                <Instagram className='h-5 w-5' />
                                <span className='sr-only'>Instagram</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className='mb-4 font-bold text-lg text-white'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='#' className='hover:text-white'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='hover:text-white'>
                                    Cars
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='hover:text-white'>
                                    Locations
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='hover:text-white'>
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='mb-4 font-bold text-lg text-white'>Support</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='#' className='hover:text-white'>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='hover:text-white'>
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='hover:text-white'>
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='hover:text-white'>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='mb-4 font-bold text-lg text-white'>Contact</h3>
                        <address className='not-italic'>
                            <p>123 Rental Street</p>
                            <p>New York, NY 10001</p>
                            <p className='mt-2'>info@driveeasy.com</p>
                            <p>+1 (555) 123-4567</p>
                        </address>
                    </div>
                </div>

                <div className='mt-8 border-gray-800 border-t pt-8 text-center text-sm'>
                    <p>&copy; {new Date().getFullYear()} DriveEasy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
