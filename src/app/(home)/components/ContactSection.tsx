// packages
import Link from 'next/link';
import Image from 'next/image';

// components
import { SectionHeader } from '@/components/index';

// constants
import { CONTACT } from '@/constants/home-constants';

export default function ContactSection() {
    return (
        <section>
            <SectionHeader header='Find me on' />
            <ul className='flex flex-col gap-y-2'>
                {CONTACT.map((contact, index) => (
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
