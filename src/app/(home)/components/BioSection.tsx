// components
import { SectionHeader } from '@/components';

// constants
import { BIO } from '@/constants/home-constants';

export default function BioSection() {
    return (
        <section>
            <SectionHeader header='Bio' />
            <ul>
                {BIO.map((item, index) => (
                    <li
                        key={index}
                        className='flex gap-x-4 break-words text-justify'
                    >
                        <span>{item.time}</span>
                        <span>{item.info}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
