'use client';

// packages
import { PropsWithChildren, useContext, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname } from 'next/navigation';

function FrozenRoute({ children }: PropsWithChildren) {
    // hooks
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {children}
        </LayoutRouterContext.Provider>
    );
}

export default function PageTransition({ children }: PropsWithChildren) {
    // hooks
    const pathname = usePathname();

    // event handlers
    const handleExitComplete = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
        }
    };

    return (
        <AnimatePresence mode='wait' onExitComplete={handleExitComplete}>
            <motion.main
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className='mx-auto my-4 mt-0 flex flex-col gap-y-8 p-4 sm:mt-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl'
            >
                <FrozenRoute>{children}</FrozenRoute>
            </motion.main>
        </AnimatePresence>
    );
}
