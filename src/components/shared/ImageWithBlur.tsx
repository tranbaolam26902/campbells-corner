'use server';

// packages
import Image from 'next/image';
import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

interface ImageWithBlurProps {
    src: string;
    alt?: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
}

export default async function ImageWithBlur({
    src,
    alt = '',
    width,
    height,
    priority = false,
    className
}: ImageWithBlurProps) {
    const buffer = await fs.readFile(process.cwd() + `/public${src}`);
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
