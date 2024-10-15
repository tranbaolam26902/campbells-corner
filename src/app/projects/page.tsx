// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Projects'
};

export default function Page() {
    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    messages={["Check out the work I've been crafting below!"]}
                    arrow='top'
                />
            </section>
            <section>
                <h1 className='text-center font-semibold'>Projects</h1>
            </section>
        </>
    );
}
