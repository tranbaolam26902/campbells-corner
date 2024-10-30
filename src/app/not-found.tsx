// packages
import type { Metadata } from 'next';
import Link from 'next/link';

// components
import { Avatar, MessageDialog } from '@/components/index';

// constants
import {
    NOT_FOUND_TITLE,
    NOT_FOUND_MESSAGE,
    NOT_FOUND_GO_HOME_BUTTON_TEXT
} from '@/constants/global-constants';

export const metadata: Metadata = {
    title: NOT_FOUND_TITLE,
    description: NOT_FOUND_MESSAGE
};

export default function NotFound() {
    return (
        <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
            <Avatar />
            <MessageDialog
                message='Oops, page not found! Looks like you took a wrong turn!'
                arrow='top'
            />
            <Link
                href='/'
                className='rounded bg-primary-100 px-4 py-2 font-medium hover:bg-primary-base hover:transition dark:bg-primary-300 dark:hover:bg-primary-400'
            >
                {NOT_FOUND_GO_HOME_BUTTON_TEXT}
            </Link>
        </section>
    );
}
