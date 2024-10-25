// packages
import Link from 'next/link';
import Image from 'next/image';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getPlaiceholder } from 'plaiceholder';

// libs
import { Post } from '@/libs/definitions';

interface ProjectItemProps {
    project: Post;
}

export default async function ProjectItem({ project }: ProjectItemProps) {
    const buffer = await fs.readFile(
        path.join(process.cwd(), '/public', project.previewImg)
    );
    const { base64 } = await getPlaiceholder(buffer);

    return (
        <li className='text-center'>
            <Link href={`/projects/${project.slug}`}>
                <div className='relative'>
                    <Image
                        src={project.previewImg}
                        alt='thumbnail'
                        width={2560}
                        height={1440}
                        priority
                        placeholder='blur'
                        blurDataURL={base64}
                        className='rounded-lg'
                    />
                    <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 text-3xl font-bold uppercase leading-10 text-white drop-shadow-md'>
                        {project.name}
                    </div>
                </div>
                <h3 className='mt-2 text-xl font-medium'>{project.name}</h3>
            </Link>
        </li>
    );
}
