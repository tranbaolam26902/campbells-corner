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
                        width={592}
                        height={333}
                        sizes='(min-width: 1040px) 360px, (min-width: 780px) 312px, (min-width: 640px) 264px, (min-width: 420px) 360px, 92vw'
                        priority
                        placeholder='blur'
                        blurDataURL={base64}
                        className='rounded-lg shadow'
                    />
                    {overlay && (
                        <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 text-3xl font-bold uppercase leading-10 text-white drop-shadow-md sm:text-xl md:text-2xl lg:text-3xl'>
                            {post.name}
                        </div>
                    )}
                </div>
                <h3 className='mt-2 text-xl font-medium'>{post.name}</h3>
            </Link>
        </li>
    );
}
