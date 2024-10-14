// packages
import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <main
            className={`mx-auto my-4 mt-0 flex flex-col gap-y-8 p-4 sm:mt-4 sm:max-w-lg md:px-0`}
        >
            {children}
        </main>
    );
}
