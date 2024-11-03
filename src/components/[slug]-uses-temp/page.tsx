// packages
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// components
import { Back, Markdown } from '@/components';

// utils
import { readFileContent } from '@/utils/content-file-utils';
import { findPostBySlug, getPostsByPath } from '@/libs/actions';

interface Props {
    params: {
        slug: string;
    };
}

export function generateMetadata({ params }: Props): Metadata {
    const posts = getPostsByPath('/uses');
    const post = findPostBySlug(posts, params.slug);

    if (post === null) notFound();

    return {
        title: post.name,
        openGraph: {
            images: post.previewImg
        }
    };
}

export function generateStaticParams() {
    const posts = getPostsByPath('/uses');

    return posts.map((project) => project.slug);
}

export default function Page({ params }: Props) {
    const posts = getPostsByPath('/uses');
    const post = findPostBySlug(posts, params.slug);

    if (post === null) notFound();

    const source = readFileContent(post.path);

    return (
        <>
            <Back />
            <Markdown source={source} />
        </>
    );
}
