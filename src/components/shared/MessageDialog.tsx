interface MessageDialogProps {
    message: string;
}

export default function MessageDialog({ message }: MessageDialogProps) {
    return (
        <div className='mx-auto w-fit rounded-lg border border-ebony bg-white px-4 py-2 font-semibold sm:mx-0'>
            <h4>{message}</h4>
        </div>
    );
}
