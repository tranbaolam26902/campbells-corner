// public
import github from '@/public/images/github.png';
import logo from '@/public/images/logo.png';

// packages
import Image from 'next/image';
import Link from 'next/link';

// components
import { NavItem } from './NavItem';
import MobileMenu from './MobileMenu';

// libs
import { NavLink } from '@/libs/definitions';

const navLinks: Array<NavLink> = [
    {
        href: '/',
        name: 'Home'
    },
    {
        href: '/works',
        name: 'Works'
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
        <header className='sticky top-0 bg-white bg-opacity-40 backdrop-blur'>
            <nav className='mx-auto flex h-12 items-center justify-between px-4 py-3 sm:max-w-xl md:max-w-2xl lg:max-w-3xl'>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt='site logo'
                        className='h-6 w-auto'
                        priority
                    />
                </Link>

                <div className='hidden gap-x-4 sm:flex'>
                    {navLinks.map((navItem) => (
                        <NavItem
                            key={navItem.name}
                            href={navItem.href}
                            name={navItem.name}
                        />
                    ))}
                </div>

                <Link
                    href='https://github.com/tranbaolam26902'
                    target='_blank'
                    className='hidden sm:inline'
                >
                    <Image
                        src={github}
                        alt='github profile'
                        className='h-6 w-auto'
                        priority
                    />
                </Link>

                <MobileMenu navLinks={navLinks} />
            </nav>
        </header>
    );
}
