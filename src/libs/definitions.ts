import { MDXProps } from 'mdx/types';

export interface NavLink {
    href: string;
    name: string;
}

export interface Project {
    name: string;
    slug: string;
    previewImg: string;
    desc?: string;
}

export interface MDXContentDictionary {
    [key: string]: (props: MDXProps) => JSX.Element;
}
