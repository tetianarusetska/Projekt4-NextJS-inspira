
export interface PersonalAreaProps {
    user: {
        name?: string | null;
        email: string;
    };

    counts: Record<string, number>;
}