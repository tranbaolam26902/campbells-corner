// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog, SectionHeader } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Uses'
};

export default function Page() {
    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    messages={[
                        "I'm currently updating my tech gear list,",
                        "stay tuned for what's coming!"
                    ]}
                    arrow='top'
                />
            </section>

            <section>
                <SectionHeader header='Uses' />
            </section>
        </>
    );
}
