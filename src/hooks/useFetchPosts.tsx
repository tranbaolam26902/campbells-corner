// utils
import { mapFilesIntoObjects } from '@/utils/content-file-utils';
import { getPostBySlug } from '@/utils/post-utils';

export default function useFetchPosts(url: string, slug: string = '') {
    const posts = mapFilesIntoObjects(url);
    const post = getPostBySlug(posts, slug);

    return { posts, post };
}
