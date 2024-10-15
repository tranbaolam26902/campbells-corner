// packages
import type { Metadata } from 'next';

// components
import { ProjectItem } from '@/components/projects';
import { Avatar, MessageDialog, SectionHeader } from '@/components/shared';

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

            <div className='flex flex-col gap-y-16'>
                <section>
                    <SectionHeader header='Client projects' />
                    <ul className='mt-4 grid gap-x-4 gap-y-8 sm:grid-cols-2'>
                        {clientProjects.map((project: Project) => (
                            <ProjectItem key={project.slug} project={project} />
                        ))}
                    </ul>
                </section>

                <section>
                    <SectionHeader header='Side projects' />
                    <ul className='mt-4 grid gap-x-4 gap-y-8 sm:grid-cols-2'>
                        {sideProjects.map((project) => (
                            <ProjectItem key={project.slug} project={project} />
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}
