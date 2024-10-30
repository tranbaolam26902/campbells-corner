// packages
import type { Metadata } from 'next';

// components
import {
    AboutSection,
    BioSection,
    ContactSection,
    GreetingSection
} from './components';

// constants
import { TITLE } from '@/constants/home-constants';

// constants

export const metadata: Metadata = {
    title: TITLE
};

export default function Page() {
    return (
        <>
            <GreetingSection />
            <AboutSection />
            <BioSection />
            <ContactSection />
        </>
    );
}
