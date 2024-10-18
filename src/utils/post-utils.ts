// libs
import { Post } from '@/libs/definitions';

/**
 * Retrieves a Post from the array of posts by its slug.
 *
 * @param {Array<Post>} posts - The array of Post objects to search through.
 * @param {string} slug - The slug of the Post to find.
 * @returns {Post | null} - Returns the Post if found; otherwise, returns null.
 */
export function getPostBySlug(posts: Array<Post>, slug: string): Post | null {
    return posts.find((post) => post.slug === slug) || null;
}
