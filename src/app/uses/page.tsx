// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog } from '@/components/shared';

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
                        'Curious about the tech gear I use?',
                        'Check back soon for detailed reviews and insights!'
                    ]}
                />
            </section>
            <section>
                <h1 className='text-center font-semibold'>Uses</h1>
            </section>
        </>
    );
}
