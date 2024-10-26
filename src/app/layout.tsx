// packages
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// styles
import './globals.css';

// components
import {
    Header,
    Footer,
    ScrollToTop,
    Container,
    ThemeWrapper
} from '@/components/shared';

const berkshireSwashFont = localFont({
    src: './fonts/BerkshireSwash.ttf',
    weight: '400',
    style: 'normal',
    variable: '--font-berkshire-swash'
});
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
    metadataBase: new URL('https://campbells-corner.vercel.app'),
    title: {
        template: '%s - Campbell',
        default: "Campbell's corner"
    },
    description: 'Hi, welcome to my space on the internet!',
    openGraph: {
        images: '/images/opengraph.png'
    }
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body
                className={`${futuraFont.variable} ${berkshireSwashFont.variable} antialiased`}
                suppressHydrationWarning
            >
                <ThemeWrapper>
                    <Header />
                    <Container>{children}</Container>
                    <Footer />
                    <ScrollToTop />
                </ThemeWrapper>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
