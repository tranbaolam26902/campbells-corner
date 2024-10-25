import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            keyframes: {
                loading: {
                    to: {
                        'clip-path': 'inset(0 -1ch 0 0)'
                    }
                }
            },
            animation: {
                loading: 'loading 1s infinite linear alternate'
            },
            fontFamily: {
                futura: ['var(--font-futura)']
            },
            colors: {
                ebony: 'var(--ebony)',
                background: 'var(--background)',
                primary: {
                    50: '#f2fbf4',
                    100: '#d5f6dc',
                    200: '#c2f0cc',
                    300: '#92e3a4',
                    400: '#5bcd76',
                    500: '#35b253',
                    600: '#269340',
                    700: '#217435',
                    800: '#1f5c2e',
                    900: '#1b4c29',
                    950: '#0a2913'
                },
                secondary: {
                    50: '#fef4f2',
                    100: '#fff6e1',
                    200: '#ffd1c8',
                    300: '#ffb7a8',
                    400: '#fd856c',
                    500: '#f55e3e',
                    600: '#e24120',
                    700: '#be3417',
                    800: '#9d2e17',
                    900: '#922c1a',
                    950: '#471308'
                },
                accent: {
                    50: '#fff6ed',
                    100: '#ffead5',
                    200: '#fec99a',
                    300: '#fdb174',
                    400: '#fb853c',
                    500: '#f96416',
                    600: '#ea490c',
                    700: '#c2350c',
                    800: '#9a2b12',
                    900: '#7c2612',
                    950: '#431007'
                }
            }
        }
    },
    plugins: []
};
export default config;
