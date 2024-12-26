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
                        className='grid grid-cols-[112px,auto,1fr] gap-x-2 break-words text-justify'
                    >
                        <span className='text-end'>{item.time}</span>
                        <span>-</span>
                        <span className='break-words'>{item.info}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
