// packages
import Link from 'next/link';
import Image from 'next/image';

// components
import { SectionHeader } from '@/components/shared';

interface Contact {
    icon: string;
    text: string;
    link?: string;
}

const contacts: Array<Contact> = [
    {
        icon: '/icons/github.svg',
        text: '@tranbaolam26902',
        link: 'https://github.com/tranbaolam26902'
    },
    {
        icon: '/icons/linkedin.svg',
        text: '@tranbaolam26902',
        link: 'https://linkedin.com/in/tranbaolam26902'
    },
    {
        icon: '/icons/envelop.svg',
        text: 'tranbaolam26902@gmail.com'
    }
];
export default function ContactSection() {
    return (
        <section>
            <SectionHeader header='Find me on' />
            <ul className='flex flex-col gap-y-2'>
                {contacts.map((contact, index) => (
                    <li key={index} className='flex items-center gap-x-2'>
                        <Image
                            src={contact.icon}
                            alt='icon'
                            width={20}
                            height={20}
                            priority
                            className='dark:invert'
                        />
                        {contact.link ? (
                            <Link
                                href={contact.link}
                                target='_blank'
                                className='hover-opacity font-medium'
                            >
                                {contact.text}
                            </Link>
                        ) : (
                            <a
                                href={`mailto:${contact.text}`}
                                className='hover-opacity'
                            >
                                {contact.text}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
