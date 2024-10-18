// packages
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1
                style={{ fontSize: '1.5rem' }}
                className='text-center font-semibold'
            >
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className='text-center text-xl font-semibold'>{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className='text-center font-semibold'>{children}</h3>
        ),
        p: ({ children }) => (
            <p className='break-words text-justify indent-4'>{children}</p>
        ),
        strong: ({ children }) => (
            <strong className='font-semibold'>{children}</strong>
        ),
        a: (props) => (
            <a
                href={props.href}
                target='_blank'
                style={{
                    textDecoration: 'underline',
                    color: '#024caa',
                    fontWeight: 500
                }}
            >
                {props.children}
            </a>
        ),
        img: (props) => (
            <Image
                src={props.src || ''}
                alt=''
                sizes='100vw'
                width={1926}
                height={1123}
                className='h-auto w-full rounded-lg'
                priority
            />
        ),
        ...components
    };
}
