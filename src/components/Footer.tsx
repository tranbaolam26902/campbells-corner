// packages
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='mb-8 text-center text-base'>
            <p>
                &copy; {new Date().getFullYear()} Tran Bao Lam. All Rights
                Reserved.
            </p>
            <p>
                <span>Inspired by&nbsp;</span>
                <Link href='https://craftz.dog' target='_blank'>
                    Takuya Matsuyama&apos;s website.
                </Link>
            </p>
        </footer>
    );
}
