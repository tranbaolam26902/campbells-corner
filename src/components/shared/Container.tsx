// packages
import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <main className={`mx-auto p-4 sm:my-4 sm:max-w-lg md:px-0`}>
            {children}
        </main>
    );
}
