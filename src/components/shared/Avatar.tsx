// public
import avatar from '@/public/images/notion-avatar.svg';

// packages
import Image from 'next/image';

export default function Avatar() {
    return (
        <div className='mx-auto w-fit rounded-full border-8 border-white bg-secondary-200 px-4 py-3 sm:mx-0'>
            <Image src={avatar} alt='avatar' priority />
        </div>
    );
}
