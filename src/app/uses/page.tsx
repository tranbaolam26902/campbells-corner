// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog, SectionHeader } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Uses',
    description: 'Explore my favorite tech gear!'
};

export default function Page() {
    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    message='Excited to share my tech gear insights soon!'
                    arrow='top'
                />
            </section>

            <section>
                <SectionHeader header='Uses' />
            </section>
        </>
    );
}
