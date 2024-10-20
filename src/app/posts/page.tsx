// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog, SectionHeader } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Posts',
    description: "Check out the thoughts I've shared!"
};

export default function Page() {
    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    messages={[
                        "I don't have any posts yet,",
                        "but I'll be sharing soon. Stay tuned!"
                    ]}
                    arrow='top'
                />
            </section>

            <section>
                <SectionHeader header='Posts' />
            </section>
        </>
    );
}
