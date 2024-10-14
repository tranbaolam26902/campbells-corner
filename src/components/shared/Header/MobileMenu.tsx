'use client';

// public
import github from '@/public/images/github.png';

// packages
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// components
import { MobileNavItem } from './NavItem';

// libs
import { NavLink } from '@/libs/definitions';

interface MobileMenuProps {
    navLinks: Array<NavLink>;
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
    // states
    const [showMenu, setShowMenu] = useState<boolean>(false);

    // event handlers
    const handleOpen = () => {
        setShowMenu(true);
        document.body.style.overflow = 'hidden';
    };
    const handleClose = () => {
        setShowMenu(false);
        document.body.style.overflow = '';
    };

    return (
        <div className='relative sm:hidden'>
            <button type='button' onClick={handleOpen}>
                <Image
                    src='/icons/menu.svg'
                    alt='menu'
                    width={24}
                    height={24}
                />
            </button>

            <AnimatePresence>
                {showMenu && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className='fixed left-0 top-0 h-screen w-screen bg-black/20'
                            role='button'
                            onClick={handleClose}
                        ></motion.div>
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className='absolute right-0 top-10 z-10 flex w-40 origin-top flex-col overflow-hidden rounded-lg bg-white py-2'
                        >
                            <button
                                type='button'
                                className='mb-2 flex items-center gap-x-2 px-4 py-2 font-medium hover:bg-gray-100'
                                onClick={handleClose}
                            >
                                <Image
                                    src='/icons/close.svg'
                                    alt='close menu'
                                    width={20}
                                    height={20}
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

                            <Link
                                href='https://github.com/tranbaolam26902'
                                target='_blank'
                                className='px-3 py-2 hover:bg-gray-100'
                            >
                                <Image
                                    src={github}
                                    alt='github profile'
                                    className='h-6 w-auto'
                                />
                            </Link>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
