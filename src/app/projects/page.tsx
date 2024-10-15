// packages
import type { Metadata } from 'next';

// components
import { ProjectItem } from '@/components/projects';
import { Avatar, MessageDialog } from '@/components/shared';

// hooks
import useFetchProjects from '@/hooks/useFetchProjects';

// libs
import { Project } from '@/libs/definitions';

export const metadata: Metadata = {
    title: 'Projects'
};

export default function Page() {
    const { clientProjects, sideProjects } = useFetchProjects();

    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    messages={["Check out the work I've been crafting below!"]}
                    arrow='top'
                />
            </section>

            <section>
                <h1 className='mb-4 text-center font-semibold'>
                    Client projects
                </h1>
                <ul className='grid gap-4 sm:grid-cols-2'>
                    {clientProjects.map((project: Project) => (
                        <ProjectItem key={project.slug} project={project} />
                    ))}
                </ul>
            </section>

            <section>
                <h1 className='mb-4 text-center font-semibold'>
                    Side projects
                </h1>
                <ul className='grid gap-4 sm:grid-cols-2'>
                    {sideProjects.map((project) => (
                        <ProjectItem key={project.slug} project={project} />
                    ))}
                </ul>
            </section>
        </>
    );
}
