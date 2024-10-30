// components
import { SectionHeader } from '@/components/index';

// constants
import { ABOUT_ME } from '@/constants/home-constants';

export default function AboutMeSection() {
    return (
        <section>
            <SectionHeader header='About me' />
            <p className='break-words text-justify indent-8'>{ABOUT_ME}</p>
        </section>
    );
}
