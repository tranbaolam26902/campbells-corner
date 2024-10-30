export interface NavLink {
    href: string;
    name: string;
}

export interface Bio {
    time: string;
    info: string;
}

export interface Contact {
    icon: string;
    text: string;
    link?: string;
}

export interface Post {
    name: string;
    slug: string;
    path: string;
    previewImg: string;
}
