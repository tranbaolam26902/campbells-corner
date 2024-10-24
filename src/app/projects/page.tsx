// packages
import type { Metadata } from 'next';

// components
import { ProjectItem } from '@/components/projects';
import { Avatar, MessageDialog, SectionHeader } from '@/components/shared';

// libs
import { getPostsByPath } from '@/libs/actions';
import { Post } from '@/libs/definitions';

export const metadata: Metadata = {
    title: 'Projects',
    description: "Check out the work I've been crafting!"
};

export default function Page() {
    const clientProjects = getPostsByPath('/projects/client-projects');
    const sideProjects = getPostsByPath('/projects/side-projects');

    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    message="Check out the work I've been crafting!"
                    arrow='top'
                />
            </section>

            <div className='flex flex-col gap-y-16'>
                <section>
                    <SectionHeader header='Client projects' />
                    <ul className='mt-4 grid gap-x-4 gap-y-8 sm:grid-cols-2'>
                        {clientProjects.map((project: Post) => (
                            <ProjectItem key={project.slug} project={project} />
                        ))}
                    </ul>
                </section>

                <section>
                    <SectionHeader header='Side projects' />
                    <ul className='mt-4 grid gap-x-4 gap-y-8 sm:grid-cols-2'>
                        {sideProjects.map((project: Post) => (
                            <ProjectItem key={project.slug} project={project} />
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}
