// types
import { NavLink } from '@/libs/definitions';

export const BRAND_NAME = 'campbells'; // use for site logo

// app routes
export const NAV_LINKS: Array<NavLink> = [
    {
        href: '/',
        name: 'Home'
    },
    {
        href: '/projects',
        name: 'Projects'
    },
    {
        href: '/posts',
        name: 'Posts'
    },
    {
        href: '/uses',
        name: 'Uses'
    }
];

// error.tsx file
export const ERROR_TITLE = 'Error';
export const ERROR_MESSAGE = 'Uh-oh, something went wrong!';
export const ERROR_TRY_AGAIN_BUTTON_TEXT = 'Try again';
export const ERROR_GO_HOME_BUTTON_TEXT = 'Go back to the Homepage 🏠';

// layout.tsx file
export const APP_TITLE_TEMPLATE = '%s - Campbell';
export const APP_DEFAULT_TITLE = "Campbell's corner";
export const APP_MESSAGE = 'Hi, welcome to my space on the internet!';

// not-found.tsx file
export const NOT_FOUND_TITLE = '404 Not found';
export const NOT_FOUND_MESSAGE =
    'Oops, page not found! Looks like you took a wrong turn!';
export const NOT_FOUND_GO_HOME_BUTTON_TEXT = 'Go back to the Homepage 🏠';
