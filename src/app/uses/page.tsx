// packages
import type { Metadata } from 'next';

// components
import {
    Avatar,
    MessageDialog,
    // PostItem,
    SectionHeader
} from '@/components';

// constants
import { EMPTY_MESSAGE, MESSAGE, TITLE } from '@/constants/uses-constants';

// libs
// import { getPostsByPath } from '@/libs/actions';
// import { Post } from '@/libs/definitions';

export const metadata: Metadata = {
    title: TITLE,
    description: MESSAGE
};

export default function Page() {
    // const posts = getPostsByPath('/uses');

    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    // message={posts.length > 0 ? MESSAGE : EMPTY_MESSAGE}
                    message={EMPTY_MESSAGE}
                    arrow='top'
                />
            </section>

            <section>
                <SectionHeader header='Uses' />
                {/* <ul className='mt-4 grid gap-x-4 gap-y-8 sm:grid-cols-2'> */}
                {/*     {posts.map((post: Post) => ( */}
                {/*         <PostItem key={post.slug} post={post} route='uses' /> */}
                {/*     ))} */}
                {/* </ul> */}
            </section>
        </>
    );
}
