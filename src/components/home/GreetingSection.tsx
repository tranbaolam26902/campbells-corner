// components
import { Avatar, MessageDialog } from '@/components/shared';

export default function GreetingSection() {
    return (
        <section className='gap-x-4 sm:flex sm:items-center md:mx-auto md:-translate-x-14'>
            <Avatar />
            <div className='flex flex-col'>
                <h1 className='mb-4 mt-4 text-center text-3xl font-semibold sm:mt-0 sm:text-left'>
                    Tran &#34;Campbell&#34; Bao Lam
                </h1>
                <MessageDialog
                    message='Hi, welcome to my space on the internet!'
                    arrow='left'
                />
            </div>
        </section>
    );
}
