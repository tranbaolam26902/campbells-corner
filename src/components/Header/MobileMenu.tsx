'use client';

// packages
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

// components
import { MobileNavItem } from './NavItem';
import Modal from '../Modal'; // cannot use import alias

// types
import { NavLink } from '@/libs/definitions';

interface MobileMenuProps {
    navLinks: Array<NavLink>;
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
    // states
    const [showMenu, setShowMenu] = useState(false);

    // event handlers
    const handleOpen = () => {
        setShowMenu(true);
    };
    const handleClose = useCallback(() => {
        setShowMenu(false);
    }, []);

    return (
        <div className='relative sm:hidden'>
            <button
                type='button'
                className='my-auto block'
                onClick={handleOpen}
            >
                <Image
                    src='/icons/menu.svg'
                    alt='menu icon'
                    width={32}
                    height={32}
                    priority
                    className='hover-opacity dark:invert'
                />
            </button>

            <Modal show={showMenu} place='sibling' onClose={handleClose}>
                <motion.nav
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className='absolute right-0 top-10 flex w-40 origin-top flex-col overflow-hidden rounded-lg bg-white py-2 dark:bg-background-200'
                >
                    <button
                        type='button'
                        className='mb-2 flex items-center gap-x-2 px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-background-300'
                        onClick={handleClose}
                    >
                        <Image
                            src='/icons/close.svg'
                            alt='close icon'
                            width={20}
                            height={20}
                            priority
                            className='dark:invert'
                        />
                        <span>Close</span>
                    </button>

                    {navLinks.map((navLink) => (
                        <MobileNavItem
                            key={navLink.name}
                            href={navLink.href}
                            name={navLink.name}
                            onClick={handleClose}
                        />
                    ))}
                </motion.nav>
            </Modal>
        </div>
    );
}
