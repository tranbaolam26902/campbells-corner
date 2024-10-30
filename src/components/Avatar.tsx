// public
import avatar from '@public/images/avatar.svg';

// packages
import Image from 'next/image';

export default function Avatar() {
    return (
        <div className='mx-auto h-fit w-fit shrink-0 rounded-full border-8 border-white bg-gradient-to-br from-primary-base to-accent-base px-4 py-3 dark:border-background-400 sm:mx-0'>
            <Image src={avatar} alt='avatar' priority />
        </div>
    );
}
