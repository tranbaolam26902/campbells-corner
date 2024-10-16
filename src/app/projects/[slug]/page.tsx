// packages
import { notFound } from 'next/navigation';

// components
import { SectionHeader } from '@/components/shared';

// libs
import { getProjectBySlug } from '@/libs/data';

export default function Page({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);

    if (project === null) notFound();

    return (
        <>
            <SectionHeader header={project.name} />
        </>
    );
}
