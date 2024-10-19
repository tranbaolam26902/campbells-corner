'use client';

// packages
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollToTop() {
    // states
    const [showButton, setShowButton] = useState<boolean>(false);

    // event handlers
    const handleDisplayButton = () => {
        if (window.scrollY > 100) setShowButton(true);
        else setShowButton(false);
    };
    const handleScrollToTop = () => {
        if (typeof window !== undefined)
            window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // side effects
    useEffect(() => {
        window.addEventListener('scroll', handleDisplayButton);

        return () => {
            window.removeEventListener('scroll', handleDisplayButton);
        };
    }, []);

    return (
        <AnimatePresence>
            {showButton && (
                <motion.button
                    initial={{ y: 32, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 32, opacity: 0 }}
                    type='button'
                    title='Scroll to top'
                    className='fixed bottom-4 right-4 aspect-square rounded-md border border-ebony bg-white p-2'
                    onClick={handleScrollToTop}
                >
                    <Image
                        src='/icons/arrow-up.svg'
                        alt='arrow up icon'
                        width={24}
                        height={24}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
