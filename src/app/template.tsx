'use client';

// packages
import { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Template({ children }: PropsWithChildren) {
    return (
        <AnimatePresence>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={`mx-auto my-4 mt-0 flex flex-col gap-y-8 p-4 sm:mt-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl`}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
