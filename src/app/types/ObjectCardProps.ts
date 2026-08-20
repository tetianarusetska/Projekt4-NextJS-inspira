import { Collection } from "./Collection";

export interface ObjectCardProps {

    collection: Collection;

    object: {
        id: number;
        imageUrl: string | null;
        [key: string]: unknown;
    };
}