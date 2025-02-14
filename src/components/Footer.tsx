'use client';

// packages
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
    // states
    const [currentYear, setCurrentYear] = useState<number>(
        new Date().getFullYear()
    );

    // side effects
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className='mb-8 text-center text-base'>
            <p>&copy; {currentYear} Tran Bao Lam. All Rights Reserved.</p>
            <p>
                <span>Inspired by&nbsp;</span>
                <Link href='https://craftz.dog' target='_blank'>
                    Takuya Matsuyama&apos;s website.
                </Link>
            </p>
        </footer>
    );
}
