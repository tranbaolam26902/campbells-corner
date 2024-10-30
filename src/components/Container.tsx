// packages
import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
    return (
        <main className='mx-auto my-4 mt-0 flex flex-col gap-y-8 p-4 sm:mt-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl'>
            {children}
        </main>
    );
}
