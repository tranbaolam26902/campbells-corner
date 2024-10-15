// libs
import { Project } from '@/libs/definitions';

export default function useFetchProjects() {
    const clientProjects: Array<Project> = [
        {
            name: 'Regional Education System',
            slug: 'regional-education-system',
            previewImg: '/images/projects/regional-education-thumbnail.png',
            desc: 'A system that simulates regional lessons through virtual tours'
        },
        {
            name: 'DLU IT Department Website',
            slug: 'dlu-it-department-website',
            previewImg: '/images/projects/dlu-it-department-thumbnail.png',
            desc: 'News & Announcements website'
        }
    ];
    const sideProjects: Array<Project> = [
        {
            name: 'Junie Store',
            slug: 'junie-store',
            previewImg: '/images/projects/junie-store-thumbnail.png',
            desc: 'An e-commerce website for a fashion accessories store'
        },
        {
            name: 'Crypto Currency Swapper',
            slug: 'dlu-it-department-website',
            previewImg: '/images/projects/currency-swapper-thumbnail.png',
            desc: 'Simple crypto currency swap form'
        }
    ];

    return { clientProjects, sideProjects };
}
