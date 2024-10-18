// utils
import { mapFilesIntoObjects } from '@/utils/content-file-utils';
import { getPostBySlug } from '@/utils/post-utils';

export function useFetchProjects(slug: string = '') {
    const clientProjects = mapFilesIntoObjects('/projects/client-projects');
    const sideProjects = mapFilesIntoObjects('/projects/side-projects');

    const project = getPostBySlug([...clientProjects, ...sideProjects], slug);

    return { clientProjects, sideProjects, project };
}
