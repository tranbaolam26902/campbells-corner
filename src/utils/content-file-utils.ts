// packages
import fs from 'fs';

// libs
import { Post } from '@/libs/definitions';

/**
 * Extracts the index from a given file name.
 * File name structure: [index].[file-name].[extension]
 *
 * @param {string} fileName - The name of the file, including its extension.
 * @returns {string} - The file index.
 */
export function getFileIndex(fileName: string): string {
    return fileName.split('.')[0];
}

/**
 * Extracts the file name without extension.
 * File name structure: [index].[file-name].[extension]
 *
 * @param {string} fileName - The name of the file, including its index and extension.
 * @returns {string} The file name without extension.
 */
export function getFileName(fileName: string): string {
    return fileName.split('.')[1];
}

/**
 * Converts a hyphenated file name into a human-readable name
 * by capitalizing the first letter of each word and replacing
 * hyphens with spaces.
 *
 * @param {string} fileName - The hyphenated file name to convert.
 * @returns {string} - The converted human-readable name.
 */
export function convertFileNameIntoName(fileName: string): string {
    return fileName
        .split('-')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Maps files from a specified directory into an array of Post objects.
 *
 * This function reads the files in the given directory and converts each
 * file name into a Post object containing the name, slug, path, and
 * a preview image path. The file name is expected to follow a specific
 * format to derive the name and slug.
 *
 * @param {string} url - The relative URL of the directory containing the files.
 * @returns {Array<Post>} - An array of Post objects representing the files.
 */
export function mapFilesIntoObjects(url: string): Array<Post> {
    const postItems = fs
        .readdirSync(process.cwd() + '/content' + url)
        .map((file) => {
            const fileName = getFileName(file);
            const name = convertFileNameIntoName(fileName);
            const path = process.cwd() + `/content${url}/${file}`;

            return {
                name,
                slug: fileName,
                path,
                previewImg: `/images${url}/${fileName.toLowerCase()}-thumbnail.png`
            };
        });

    return postItems;
}

/**
 * Reads the content of a file located at the specified URL.
 *
 * This function synchronously reads the file and returns its content
 * as a string. It expects the URL to be a valid path to an existing
 * file. If the file cannot be read, it will throw an error.
 *
 * @param {string} url - The path to the file to read.
 * @returns {string} - The content of the file as a UTF-8 encoded string.
 */
export function readFileContent(url: string): string {
    return fs.readFileSync(url, { encoding: 'utf8' });
}
