// packages
import { notFound } from 'next/navigation';

// components
import { Back, Markdown } from '@/components/shared';

// utils
import { readFileContent } from '@/utils/content-file-utils';
import { findPostBySlug, getPostsByPath } from '@/libs/actions';

interface Props {
    params: {
        slug: string;
    };
}

export const generateMetadata = ({ params }: Props) => {
    const clientProjects = getPostsByPath('/projects/client-projects');
    const sideProjects = getPostsByPath('/projects/side-projects');
    const project = findPostBySlug(
        [...clientProjects, ...sideProjects],
        params.slug
    );

    if (project === null) notFound();

    return { title: project.name };
};

export default function Page({ params }: Props) {
    const clientProjects = getPostsByPath('/projects/client-projects');
    const sideProjects = getPostsByPath('/projects/side-projects');
    const project = findPostBySlug(
        [...clientProjects, ...sideProjects],
        params.slug
    );

    if (project === null) notFound();

    const source = readFileContent(project.path);

    return (
        <>
            <Back />
            <Markdown source={source} />
        </>
    );
}
