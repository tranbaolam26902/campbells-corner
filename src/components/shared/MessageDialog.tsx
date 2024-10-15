interface MessageDialogProps {
    messages: Array<string>;
}

export default function MessageDialog({ messages }: MessageDialogProps) {
    return (
        <div className='mx-auto flex w-fit animate-typewriter flex-col justify-center rounded-lg border border-ebony bg-white px-4 py-2 font-medium sm:mx-0'>
            {messages.map((message) => (
                <span
                    key={message}
                    className='text-nowrap animate-cursor overflow-hidden text-center'
                >
                    {message}
                </span>
            ))}
        </div>
    );
}
