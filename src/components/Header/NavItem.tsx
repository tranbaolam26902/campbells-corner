'use client';

// packages
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
    href: string;
    name: string;
    onClick?: () => void;
}

export function NavItem({ href, name }: NavItemProps) {
    const pathname = usePathname();

    return (
        <Link
            role='menuitem'
            href={href}
            className={`rounded px-2.5 py-0.5 font-medium underline-offset-4 ${pathname === href ? 'bg-secondary-100 dark:bg-secondary-base dark:text-background-base' : 'hover:underline'}`}
        >
            {name}
        </Link>
    );
}

export function MobileNavItem({ href, name, onClick }: NavItemProps) {
    const pathname = usePathname();

    return (
        <Link
            role='menuitem'
            href={href}
            className={`px-4 py-2 text-left font-medium underline-offset-4 ${pathname === href ? 'bg-secondary-100 dark:bg-secondary-base dark:text-background-base' : 'hover:bg-gray-100 dark:hover:bg-background-300'}`}
            onClick={onClick}
        >
            {name}
        </Link>
    );
}
