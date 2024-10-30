'use server';

// packages
import Link from 'next/link';
import Image from 'next/image';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getPlaiceholder } from 'plaiceholder';

// types
import { Post } from '@/libs/definitions';

interface PostItemProps {
    post: Post;
    route: string;
}

export default async function PostItem({ post, route }: PostItemProps) {
    const buffer = await fs.readFile(path.resolve('public' + post.previewImg));
    const { base64 } = await getPlaiceholder(buffer);

    return (
        <li className='text-center'>
            <Link href={`/${route}/${post.slug}`}>
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
                <h3 className='mt-2 text-xl font-medium'>{post.name}</h3>
            </Link>
        </li>
    );
}
