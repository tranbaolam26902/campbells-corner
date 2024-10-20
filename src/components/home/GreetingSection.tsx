// components
import { Avatar, MessageDialog } from '@/components/shared';

export default function GreetingSection() {
    return (
        <section className='items-center gap-x-4 sm:flex md:ml-8 lg:ml-20'>
            <Avatar />
            <div className='mx-auto flex w-fit flex-col sm:mx-0'>
                <h1 className='mb-4 mt-4 text-center text-3xl font-semibold sm:mt-0 sm:text-left'>
                    Tran &#34;Campbell&#34; Bao Lam
                </h1>
                <MessageDialog
                    messages={['Hi, welcome to my space on the internet!']}
                    arrow='left'
                />
            </div>
        </section>
    );
}
