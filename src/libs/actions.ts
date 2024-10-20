// libs
import { Post } from './definitions';

// utils
import { mapFilesIntoPosts } from '@/utils/content-file-utils';

/**
 * Retrieves Post objects from files inside a directory by its path.
 *
 * @param {string} path - The relative path of the directory.
 * @return {Array<Post>} An array of Post objects representing the files.
 */
export const getPostsByPath = (path: string): Array<Post> => {
    return mapFilesIntoPosts(path);
};

/**
 * Finds a Post object inside an array of Post objects by its slug.
 *
 * @param {Array<Post>} posts - The array of Post objects to search through.
 * @param {string} slug - The slug of the Post object to find.
 * @returns {Post | null} The Post object if found; otherwise, returns null.
 */
export const findPostBySlug = (
    posts: Array<Post>,
    slug: string
): Post | null => {
    return posts.find((post) => post.slug === slug) || null;
};
