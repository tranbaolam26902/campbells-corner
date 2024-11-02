// types
import { Bio, Contact } from '@/libs/definitions';

export const TITLE = 'Homepage';
export const NAME = 'Tran "Campbell" Bao Lam';
export const MESSAGE = 'Hi, welcome to my space on the internet!';
export const ABOUT_ME =
    'I am a software engineer with a passion for building digital products. I have around two years of experience in front-end web development, primarily focusing on React applications. I also concentrate on enhancing the UI/UX of the products I create, ensuring they are not only functional but also intuitive and visually appealing.';
export const BIO: Array<Bio> = [
    {
        time: '2002',
        info: 'Born in Dalat City, Vietnam'
    },
    {
        time: '2024',
        info: "Completed the Engineer's Program in Software Engineering at Dalat University"
    }
];
export const CONTACT: Array<Contact> = [
    {
        icon: '/icons/github.svg',
        text: '@tranbaolam26902',
        link: 'https://github.com/tranbaolam26902'
    },
    {
        icon: '/icons/linkedin.svg',
        text: '@tranbaolam26902',
        link: 'https://linkedin.com/in/tranbaolam26902'
    },
    {
        icon: '/icons/envelop.svg',
        text: 'tranbaolam26902@gmail.com'
    }
];
