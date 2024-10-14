'use client';

// packages
import { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Template({ children }: PropsWithChildren) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
