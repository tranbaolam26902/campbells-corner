// packages
import { notFound } from 'next/navigation';

// components
import { Markdown } from '@/components/shared';

// hooks
import { useFetchProjects } from '@/hooks/useFetchProjects';

// utils
import { readFileContent } from '@/utils/content-file-utils';

interface Props {
    params: {
        slug: string;
    };
}

export default function Page({ params }: Props) {
    const { project } = useFetchProjects(params.slug);

    if (project === null) notFound();

    const source = readFileContent(project.path);

    return <Markdown source={source} />;
}
