// packages
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// styles
import './globals.css';

// components
import { Header, Footer, ScrollToTop } from '@/components/shared';

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
    metadataBase: new URL('https://campbells-corver.vercel.app'),
    title: {
        template: '%s - Campbell',
        default: "Campbell's corner"
    },
    description: "Welcome to Campbell's corner of the internet!",
    openGraph: {
        images: '/images/avatar.svg'
    }
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${futuraFont.variable} antialiased`}>
                <NextTopLoader color='#ffd1c8' showSpinner={false} />
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
