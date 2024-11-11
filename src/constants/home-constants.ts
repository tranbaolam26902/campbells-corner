// types
import { Bio, Contact } from '@/libs/definitions';

export const TITLE = 'Homepage';
export const NAME = 'Tran "Campbell" Bao Lam';
export const MESSAGE = 'Hi, welcome to my space on the internet!';
export const ABOUT_ME =
    'I am a Software Engineer with a passion for creating high-quality digital products. With over two years of experience specializing in front-end web development, I primarily work with React to build dynamic, user-centric applications. I am committed to delivering seamless and visually engaging user experiences, consistently prioritizing both functionality and intuitive design. My focus on UI/UX ensures that the products I develop are not only technically robust but also accessible and enjoyable for users.';
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
