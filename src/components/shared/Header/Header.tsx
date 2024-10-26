// packages
import Link from 'next/link';

// components
import { NavItem } from './NavItem';
import MobileMenu from './MobileMenu';
import { ThemeSwitcher } from '@/components/shared';
// libs
import { NavLink } from '@/libs/definitions';

const navLinks: Array<NavLink> = [
    {
        href: '/',
        name: 'Home'
    },
    {
        href: '/projects',
        name: 'Projects'
    },
    {
        href: '/posts',
        name: 'Posts'
    },
    {
        href: '/uses',
        name: 'Uses'
    }
];

export default function Header() {
    return (
        <header
            aria-hidden='false'
            className='sticky top-0 z-10 bg-white/60 backdrop-blur dark:bg-background-50'
        >
            <nav className='mx-auto flex h-12 items-center justify-between px-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl'>
                <Link
                    href='/'
                    className='hover-opacity select-none font-berkshire-swash text-2xl'
                >
                    campbells
                </Link>

                <ul role='menu' className='hidden gap-x-3 sm:flex'>
                    {navLinks.map((navItem) => (
                        <NavItem
                            key={navItem.name}
                            href={navItem.href}
                            name={navItem.name}
                        />
                    ))}
                </ul>

                <div className='flex items-center gap-x-4'>
                    <ThemeSwitcher />
                    <MobileMenu navLinks={navLinks} />
                </div>
            </nav>
        </header>
    );
}
