import Link from 'next/link';
import { SectionHeader } from '../shared';
import Image from 'next/image';

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
                        />
                        {contact.link ? (
                            <Link href={contact.link} target='_blank'>
                                {contact.text}
                            </Link>
                        ) : (
                            <a href={`mailto:${contact.text}`}>
                                {contact.text}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
