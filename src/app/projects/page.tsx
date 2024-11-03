// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog, PostItem, SectionHeader } from '@/components';

// constants
import { EMPTY_MESSAGE, MESSAGE, TITLE } from '@/constants/projects-constants';

// libs
import { getPostsByPath } from '@/libs/actions';
import { Post } from '@/libs/definitions';

export const metadata: Metadata = {
    title: TITLE,
    description: MESSAGE
};

export default function Page() {
    const clientProjects = getPostsByPath('/projects/client-projects');
    const sideProjects = getPostsByPath('/projects/side-projects');

    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    message={
                        [...clientProjects, ...sideProjects].length > 0
                            ? MESSAGE
                            : EMPTY_MESSAGE
                    }
                    arrow='top'
                />
            </section>

            <div className='flex flex-col gap-y-16'>
                <section>
                    <SectionHeader header='Client projects' />
                    <ul className='mt-4 grid gap-x-4 gap-y-8 sm:grid-cols-2'>
                        {clientProjects.map((project: Post) => (
                            <PostItem
                                key={project.slug}
                                post={project}
                                route='projects'
                                overlay
                            />
                        ))}
                    </ul>
                </section>

                <section>
                    <SectionHeader header='Side projects' />
                    <ul className='mt-4 grid gap-x-4 gap-y-8 sm:grid-cols-2'>
                        {sideProjects.map((project: Post) => (
                            <PostItem
                                key={project.slug}
                                post={project}
                                route='projects'
                                overlay
                            />
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}
