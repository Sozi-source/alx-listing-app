export interface CardProps{
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ButtonProps{
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
}