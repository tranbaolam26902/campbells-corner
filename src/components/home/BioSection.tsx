// components
import { SectionHeader } from '@/components/shared';

interface Bio {
    time: string;
    info: string;
}

const bio: Array<Bio> = [
    {
        time: '2002',
        info: 'Born in Dalat City, Vietnam.'
    },
    {
        time: '2024',
        info: 'Completed the Engineer’s Program in Software Engineering at Dalat University.'
    }
];

export default function BioSection() {
    return (
        <section>
            <SectionHeader header='Bio' />
            <ul>
                {bio.map((item, index) => (
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
