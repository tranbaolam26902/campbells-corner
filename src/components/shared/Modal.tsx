'use client';

// packages
import { ReactNode, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
    show: boolean;
    place?: 'children' | 'sibling';
    center?: boolean;
    children: ReactNode;
    onClose: () => void;
}

const Modal = ({
    show,
    place = 'children',
    center = false,
    children,
    onClose
}: ModalProps) => {
    // methods
    const enablePageScroll = () => {
        document.body.style.overflow = '';
    };
    const disablePageScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    // event handlers
    const handleClose = useCallback(() => {
        onClose();
        (document.activeElement as HTMLElement).blur(); // prevent focus on the opener after closing modal
    }, [onClose]);
    const handleKeydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        },
        [handleClose]
    );

    // side effects
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [handleClose, handleKeydown]);
    useEffect(() => {
        if (show) disablePageScroll();
        else enablePageScroll();

        return disablePageScroll;
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <>
                    <motion.div
                        role='button'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`fixed left-0 top-0 h-screen w-screen bg-black/40 ${center ? 'flex items-center justify-center' : ''}`}
                        onClick={handleClose}
                    >
                        {place === 'children' && <>{children}</>}
                    </motion.div>
                    {place === 'sibling' && <>{children}</>}
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
