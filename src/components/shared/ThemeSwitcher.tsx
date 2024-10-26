'use client';

// packages
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function ThemeSwitcher() {
    // states
    const [isMounted, setIsMounted] = useState(false);

    // hooks
    const { resolvedTheme, setTheme } = useTheme();

    // event handlers
    const handleSwitchTheme = () => {
        if (resolvedTheme === 'light') setTheme('dark');
        else setTheme('light');
    };

    // side effects
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className='h-[2.125rem] w-[3.625rem]'></div>; // prevent layout shift

    return (
        <motion.div
            role='button'
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`relative flex select-none items-center gap-x-2 rounded-full px-1 py-1.5 transition-colors ${resolvedTheme === 'light' ? 'bg-orange-200' : 'bg-gray-600'}`}
            onClick={handleSwitchTheme}
        >
            <Image
                src='/icons/moon.svg'
                alt='moon icon'
                width={20}
                height={20}
                priority
            />
            <Image
                src='/icons/sun.svg'
                alt='sun icon'
                width={20}
                height={20}
                priority
            />
            <span
                className={`absolute h-6 w-6 rounded-full bg-white transition ${resolvedTheme === 'light' ? '' : 'translate-x-full'}`}
            ></span>
        </motion.div>
    );
}
