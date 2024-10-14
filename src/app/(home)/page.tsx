// packages
import type { Metadata } from 'next';

// components
import {
    BioSection,
    GreetingSection,
    IntroduceSection
} from '@/components/home';

export const metadata: Metadata = {
    title: 'Homepage'
};

export default function Page() {
    return (
        <>
            <GreetingSection />
            <IntroduceSection
                header='About me'
                content='I am a software engineer with a passion for building digital products. I have around two years of experience in front-end web development, primarily focusing on React applications. I also concentrate on enhancing the UI/UX of the products I create, ensuring they are not only functional but also intuitive and visually appealing.'
            />
            <BioSection />
            <IntroduceSection
                header='Interests'
                content='Art, Design, Game, Motorcycle, Piano, and Customize “Everything”.'
            />
        </>
    );
}
