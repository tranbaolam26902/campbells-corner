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
            href={href}
            className={`rounded px-2 font-semibold underline-offset-4 ${pathname === href ? 'bg-accent-200' : 'hover:underline'}`}
        >
            {name}
        </Link>
    );
}

export function MobileNavItem({ href, name, onClick }: NavItemProps) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`px-4 py-2 text-left font-semibold underline-offset-4 ${pathname === href ? 'bg-accent-200' : 'hover:bg-gray-100'}`}
            onClick={onClick}
        >
            {name}
        </Link>
    );
}
