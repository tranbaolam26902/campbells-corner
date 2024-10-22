// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog, SectionHeader } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Posts',
    description: "See the thoughts I've shared!"
};

export default function Page() {
    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    message="Stay tuned, I'll have posts up here soon!"
                    arrow='top'
                />
            </section>

            <section>
                <SectionHeader header='Posts' />
            </section>
        </>
    );
}
