// packages
import Link from 'next/link';
import Image from 'next/image';

// libs
import { Project } from '@/libs/definitions';

interface ProjectItemProps {
    project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
    return (
        <li className='text-center'>
            <Link href={`/projects/${project.slug}`}>
                <Image
                    src={project.previewImg}
                    alt={project.name}
                    width={1926}
                    height={1123}
                    priority
                    className='rounded-md object-cover'
                />
                <h2 className='mt-2 font-medium'>{project.name}</h2>
            </Link>
            {project.desc && <p>{project.desc}</p>}
        </li>
    );
}
