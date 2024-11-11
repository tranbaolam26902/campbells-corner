// packages
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';

// styles
import './globals.css';

// components
import {
    Header,
    Footer,
    PageTransition,
    ScrollToTop,
    ThemeWrapper
} from '@/components';

// constants
import {
    APP_TITLE_TEMPLATE,
    APP_DEFAULT_TITLE,
    APP_MESSAGE
} from '@/constants/global-constants';

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
        template: APP_TITLE_TEMPLATE,
        default: APP_DEFAULT_TITLE
    },
    description: APP_MESSAGE,
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
                    <PageTransition>{children}</PageTransition>
                    <Footer />
                    <ScrollToTop />
                </ThemeWrapper>
                <SpeedInsights />
            </body>
        </html>
    );
}
