// components
import SectionHeader from './SectionHeader';

interface IntroduceSectionProps {
    header: string;
    content?: string;
}

export default function IntroduceSection({
    header = '',
    content = ''
}: IntroduceSectionProps) {
    return (
        <section>
            <SectionHeader header={header} />
            <p className='break-words text-justify'>{content}</p>
        </section>
    );
}
