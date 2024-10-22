// packages
import type { Metadata } from 'next';

// components
import { BioSection, ContactSection, GreetingSection } from '@/components/home';
import { SectionHeader } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Homepage'
};

export default function Page() {
    return (
        <>
            <GreetingSection />
            <section>
                <SectionHeader header='About me' />
                <p className='break-words text-justify indent-8'>
                    I am a software engineer with a passion for building digital
                    products. I have around two years of experience in front-end
                    web development, primarily focusing on React applications. I
                    also concentrate on enhancing the UI/UX of the products I
                    create, ensuring they are not only functional but also
                    intuitive and visually appealing.
                </p>
            </section>
            <BioSection />
            <ContactSection />
        </>
    );
}
