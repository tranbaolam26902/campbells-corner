interface MessageDialogProps {
    messages: Array<string>;
    arrow?: 'left' | 'top' | 'none';
}

export default function MessageDialog({
    messages,
    arrow = 'none'
}: MessageDialogProps) {
    return (
        <div className='relative mx-auto flex w-fit animate-typewriter flex-col justify-center rounded-lg border border-ebony bg-white px-4 py-2 font-medium sm:mx-0'>
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
            {messages.map((message) => (
                <span
                    key={message}
                    className='text-nowrap overflow-hidden text-center'
                >
                    {message}
                </span>
            ))}
        </div>
    );
}
