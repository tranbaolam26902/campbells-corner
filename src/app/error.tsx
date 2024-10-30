'use client';

// packages
import Link from 'next/link';
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog } from '@/components/index';

// constants
import {
    ERROR_TITLE,
    ERROR_MESSAGE,
    ERROR_TRY_AGAIN_BUTTON_TEXT,
    ERROR_GO_HOME_BUTTON_TEXT
} from '@/constants/global-constants';

export const metadata: Metadata = {
    title: ERROR_TITLE,
    description: ERROR_MESSAGE
};

export default function NotFound({ reset }: { reset: () => void }) {
    // event handlers
    const handleReset = () => {
        reset();
    };

    return (
        <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
            <Avatar />
            <MessageDialog message={ERROR_MESSAGE} arrow='top' />
            <button
                type='button'
                className='rounded bg-secondary-200 px-4 py-2 font-medium hover:bg-secondary-100 hover:transition dark:bg-secondary-base dark:text-background-base dark:hover:bg-secondary-800'
                onClick={handleReset}
            >
                {ERROR_TRY_AGAIN_BUTTON_TEXT}
            </button>
            <span>or</span>
            <Link
                href='/'
                className='rounded bg-primary-100 px-4 py-2 font-medium hover:bg-primary-base hover:transition dark:bg-primary-300 dark:hover:bg-primary-400'
            >
                {ERROR_GO_HOME_BUTTON_TEXT}
            </Link>
        </section>
    );
}
