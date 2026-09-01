export interface CustomCollection {
    id: string;
    title: string;
    description: string;
    reason: string;
    imageUrl: string | null;
    createdAt: Date;
    _count?: {
        objects: number;
    };
}