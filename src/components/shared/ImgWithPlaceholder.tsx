'use server';

// packages
import Image from 'next/image';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getPlaiceholder } from 'plaiceholder';

interface ImgWithPlaceholderProps {
    src: string;
    alt?: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
}

export default async function ImgWithPlaceholder({
    src,
    alt = '',
    width,
    height,
    priority = false,
    className
}: ImgWithPlaceholderProps) {
    const buffer = await fs.readFile(path.resolve('public' + src));
    const { base64 } = await getPlaiceholder(buffer);

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            placeholder='blur'
            blurDataURL={base64}
            className={className}
        />
    );
}
