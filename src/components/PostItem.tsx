'use server';

// packages
import Link from 'next/link';
import Image from 'next/image';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getPlaiceholder } from 'plaiceholder';

// types
import { Post } from '@/libs/definitions';

interface PostItem {
    post: Post;
    route: string;
    overlay?: boolean;
}

export default async function PostItem({
    post,
    route,
    overlay = false
}: PostItem) {
    const buffer = await fs.readFile(path.resolve('public' + post.previewImg));
    const { base64 } = await getPlaiceholder(buffer);

    return (
        <li className='text-center'>
            <Link href={`/${route}/${post.slug}`}>
                <div className='relative'>
                    <Image
                        src={post.previewImg}
                        alt='thumbnail'
                        width={2560}
                        height={1440}
                        priority
                        placeholder='blur'
                        blurDataURL={base64}
                        className='rounded-lg'
                    />
                    {overlay && (
                        <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 text-3xl font-bold uppercase leading-10 text-white drop-shadow-md'>
                            {post.name}
                        </div>
                    )}
                </div>
                <h3 className='mt-2 text-xl font-medium'>{post.name}</h3>
            </Link>
        </li>
    );
}
