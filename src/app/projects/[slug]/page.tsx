// packages
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// components
import { Back, Markdown } from '@/components';

// constants
import { DYNAMIC_PROJECT_METADATA_DESCRIPTION } from '@/constants/projects-constants';

// utils
import { readFileContent } from '@/utils/content-file-utils';
import { findPostBySlug, getPostsByPath } from '@/libs/actions';

interface Props {
    params: {
        slug: string;
    };
}

export function generateMetadata({ params }: Props): Metadata {
    const clientProjects = getPostsByPath('/projects/client-projects');
    const sideProjects = getPostsByPath('/projects/side-projects');
    const project = findPostBySlug(
        [...clientProjects, ...sideProjects],
        params.slug
    );

    if (project === null) notFound();

    return {
        title: project.name,
        description: DYNAMIC_PROJECT_METADATA_DESCRIPTION + project.name,
        openGraph: {
            images: project.previewImg
        }
    };
}

export function generateStaticParams() {
    const clientProjects = getPostsByPath('/projects/client-projects');
    const sideProjects = getPostsByPath('/projects/side-projects');

    return [...clientProjects, ...sideProjects].map((project) => project.slug);
}

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
