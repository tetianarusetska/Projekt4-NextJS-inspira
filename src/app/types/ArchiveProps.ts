import { CustomCollection } from "./CustomCollection";

export interface ArchiveProps {
    counts: Record<string, number>;
    customCollections: CustomCollection[];
    initialCollectionId?: string;
}