'use client';

// packages
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Back() {
    // hooks
    const router = useRouter();

    // event handlers
    const handleBack = () => {
        router.back();
    };

    return (
        <button
            type='button'
            onClick={handleBack}
            className='hover-opacity flex w-fit items-center gap-x-1'
        >
            <Image
                src='/icons/arrow-left.svg'
                alt='arrow left icon'
                width={18}
                height={18}
                priority
                className='dark:invert'
            />
            <span>Back</span>
        </button>
    );
}
