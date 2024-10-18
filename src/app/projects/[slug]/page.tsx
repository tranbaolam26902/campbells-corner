// packages
import { notFound } from 'next/navigation';

// contents
import { projects } from '@/content/index';

// libs
import { getProjectBySlug } from '@/libs/data';

export default function Page({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);

    if (project === null) notFound();

    const Content = projects[project.slug];

    if (!Content) notFound();

    return <Content />;
}
