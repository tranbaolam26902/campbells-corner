// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Posts'
};

export default function Page() {
    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    messages={[
                        'Looks like I haven’t posted anything yet.',
                        'But I can’t wait to share my thoughts with you soon! Stay tuned!'
                    ]}
                />
            </section>
            <section>
                <h1 className='text-center font-semibold'>Posts</h1>
            </section>
        </>
    );
}
