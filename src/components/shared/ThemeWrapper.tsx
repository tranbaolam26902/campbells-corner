'use client';

// packages
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

export default function ThemeWrapper({ children }: PropsWithChildren) {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
        </ThemeProvider>
    );
}
