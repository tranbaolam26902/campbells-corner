// components
import { SectionHeader } from '@/components/shared';

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
            <p className='break-words text-justify indent-4'>{content}</p>
        </section>
    );
}
