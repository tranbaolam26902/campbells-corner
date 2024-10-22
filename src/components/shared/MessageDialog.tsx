'use client';

// hooks
import useAnimatedText from '@/hooks/useAnimatedText';

interface MessageDialogProps {
    message: string;
    arrow?: 'left' | 'top' | 'none';
}

export default function MessageDialog({
    message,
    arrow = 'none'
}: MessageDialogProps) {
    const animatedText = useAnimatedText(message);

    return (
        <div className='relative mx-auto w-fit rounded-lg border border-ebony bg-white px-4 py-2 text-center sm:mx-0 '>
            {arrow === 'left' && (
                <>
                    <span className='absolute right-full hidden -translate-x-px border-x-8 border-y-4 border-transparent border-r-black sm:inline'></span>
                    <span className='absolute right-full hidden translate-x-px border-x-8 border-y-4 border-transparent border-r-white sm:inline'></span>
                </>
            )}
            {arrow === 'top' && (
                <>
                    <span className='absolute bottom-full left-1/2 -translate-y-px border-x-4 border-y-8 border-transparent border-b-black'></span>
                    <span className='absolute bottom-full left-1/2 translate-y-px border-x-4 border-y-8 border-transparent border-b-white'></span>
                </>
            )}
            <span>{animatedText}</span>
        </div>
    );
}
