export interface ProductProps {
    selectedCategory: string;
    values: Record<string, string>;
    image: string | null;
    counts: Record<string, number>;
}