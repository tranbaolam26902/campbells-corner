'use client';

// packages
import { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Template({ children }: PropsWithChildren) {
    return (
        <AnimatePresence>
            <motion.main
                role='main'
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`mx-auto my-4 mt-0 flex flex-col gap-y-8 p-4 sm:mt-4 sm:max-w-lg md:px-0`}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
