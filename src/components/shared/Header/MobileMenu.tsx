'use client';

// public
import github from '@/public/images/github.png';

// packages
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

// components
import { Modal } from '@/components/shared';
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
    };
    const handleClose = useCallback(() => {
        setShowMenu(false);
    }, []);

    return (
        <div className='relative sm:hidden'>
            <button type='button' onClick={handleOpen}>
                <Image
                    src='/icons/menu.svg'
                    alt='menu icon'
                    width={24}
                    height={24}
                />
            </button>

            <Modal show={showMenu} place='sibling' onClose={handleClose}>
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
                            alt='close icon'
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
                            alt='github logo'
                            className='h-6 w-auto'
                        />
                    </Link>
                </motion.nav>
            </Modal>
        </div>
    );
}
