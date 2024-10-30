interface MessageDialogProps {
    message: string;
    arrow?: 'left' | 'top' | 'none';
}

export default function MessageDialog({
    message,
    arrow = 'none'
}: MessageDialogProps) {
    return (
        <div className='dark:bg-secondary relative mx-auto w-fit rounded-lg border border-text-base bg-white px-4 py-2 text-center dark:bg-background-200 sm:mx-0 '>
            {arrow === 'left' && (
                <>
                    <span className='absolute right-full hidden -translate-x-px border-x-8 border-y-4 border-transparent border-r-black dark:border-r-text-base sm:inline'></span>
                    <span className='absolute right-full hidden translate-x-px border-x-8 border-y-4 border-transparent border-r-white dark:border-r-background-200 sm:inline'></span>
                </>
            )}
            {arrow === 'top' && (
                <>
                    <span className='absolute bottom-full left-1/2 -translate-y-px border-x-4 border-y-8 border-transparent border-b-black dark:border-b-text-base'></span>
                    <span className='absolute bottom-full left-1/2 translate-y-px border-x-4 border-y-8 border-transparent border-b-white dark:border-b-background-200'></span>
                </>
            )}
            <span>{message}</span>
        </div>
    );
}
