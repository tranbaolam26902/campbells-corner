// packages
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';

// styles
import './globals.css';

// components
import { Header, Footer } from '@/components/shared';

const futuraFont = localFont({
    src: [
        {
            path: './fonts/FuturaLight.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './fonts/FuturaBook.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/FuturaMedium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/FuturaDemi.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/FuturaBold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/FuturaExtraBold.ttf',
            weight: '800',
            style: 'normal'
        },
        {
            path: './fonts/FuturaHeavy.ttf',
            weight: '900',
            style: 'normal'
        }
    ],
    variable: '--font-futura'
});

export const metadata: Metadata = {
    title: {
        template: 'Campbell - %s',
        default: "Campbell's corner"
    },
    description: "Welcome to Campbell's corner of the internet!"
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${futuraFont.variable} antialiased`}>
                <NextTopLoader color='#92e3a4' height={4} showSpinner={false} />
                <Header />
                {children}
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}
