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
            className={`px-2 font-medium underline-offset-4 transition-all duration-700 hover:underline ${pathname === href ? 'underline' : ''}`}
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
            className={`px-4 py-2 text-left font-medium underline-offset-4 hover:bg-gray-100 ${pathname === href ? 'underline' : ''}`}
            onClick={onClick}
        >
            {name}
        </Link>
    );
}
