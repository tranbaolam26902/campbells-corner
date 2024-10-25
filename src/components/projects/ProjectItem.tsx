// packages
import Link from 'next/link';

// libs
import { Post } from '@/libs/definitions';
import { ImageWithBlur } from '@/components/shared';

interface ProjectItemProps {
    project: Post;
}

export default function ProjectItem({ project }: ProjectItemProps) {
    return (
        <li className='text-center'>
            <Link href={`/projects/${project.slug}`}>
                <div className='relative'>
                    <ImageWithBlur
                        src={project.previewImg}
                        alt='thumbnail'
                        width={2560}
                        height={1440}
                        priority
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
