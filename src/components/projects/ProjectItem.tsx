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
                <Image
                    src={project.previewImg}
                    alt=''
                    width={1926}
                    height={1123}
                    priority
                    className='rounded-md object-cover shadow'
                />
                <h2 className='mt-2 font-medium'>{project.name}</h2>
            </Link>
        </li>
    );
}
