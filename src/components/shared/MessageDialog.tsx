interface MessageDialogProps {
    message: string;
}

export default function MessageDialog({ message }: MessageDialogProps) {
    return (
        <div className='mx-auto flex w-fit animate-typewriter justify-center rounded-lg border border-ebony bg-white px-4 py-2 font-medium sm:mx-0'>
            <h4 className='text-nowrap animate-cursor overflow-hidden text-center'>
                {message}
            </h4>
        </div>
    );
}
