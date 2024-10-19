// packages
import Link from 'next/link';
import Image from 'next/image';

// libs
import { Post } from '@/libs/definitions';

interface ProjectItemProps {
    project: Post;
}

export default function ProjectItem({ project }: ProjectItemProps) {
    return (
        <li className='text-center'>
            <Link href={`/projects/${project.slug}`}>
                <div className='relative overflow-hidden rounded-md'>
                    <Image
                        src={project.previewImg}
                        alt='thumbnail'
                        width={2560}
                        height={1440}
                        priority
                        className='object-cover shadow'
                    />
                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-3xl font-bold uppercase leading-10 text-white drop-shadow-md'>
                        {project.name}
                    </div>
                </div>
                <h2 className='mt-2 font-medium'>{project.name}</h2>
            </Link>
        </li>
    );
}
