'use client';

// packages
import Link from 'next/link';
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Error',
    description: 'Uh-oh, something went wrong!'
};

export default function NotFound({ reset }: { reset: () => void }) {
    // event handlers
    const handleReset = () => {
        reset();
    };

    return (
        <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
            <Avatar />
            <MessageDialog
                messages={['Uh-oh, something went wrong!']}
                arrow='top'
            />
            <button
                type='button'
                className='rounded bg-secondary-300 px-4 py-2 font-medium hover:bg-secondary-200'
                onClick={handleReset}
            >
                Try again
            </button>
            <span>or</span>
            <Link
                href='/'
                className='rounded bg-primary-200 px-4 py-2 font-medium hover:bg-primary-100'
            >
                Go back to the Homepage 🏠
            </Link>
        </section>
    );
}
