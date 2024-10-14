interface SectionHeaderProps {
    header: string;
}

export default function SectionHeader({ header }: SectionHeaderProps) {
    return <h2 className='mb-2 text-center text-lg font-semibold'>{header}</h2>;
}
