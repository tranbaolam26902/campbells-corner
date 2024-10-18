import { MDXProps } from 'mdx/types';

export interface NavLink {
    href: string;
    name: string;
}

export interface Post {
    name: string;
    slug: string;
    path: string;
    previewImg: string;
}

export interface MDXContentDictionary {
    [key: string]: (props: MDXProps) => JSX.Element;
}
