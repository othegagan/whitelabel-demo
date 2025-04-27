import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Drive Easy | Premium Car Rental Services',
    description: 'Drive Easy offers premium car rental services at affordable prices. Book your ride today!',
    keywords: 'car rental, premium cars, affordable rental, Drive Easy'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning className='scroll-smooth'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className='flex min-h-screen flex-col'>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
