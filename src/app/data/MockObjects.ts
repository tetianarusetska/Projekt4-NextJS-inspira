import { CollectionObject } from "../types/CollectionObject";
import { objectColors } from "./ObjectColors";

export function createObjects(
    collectionId: string,
    collectionName: string,
    count = 36
): CollectionObject[] {
    return Array.from({ length: count }, (_, index) => ({
        id: index + 1,
        collectionId,
        name: `${collectionName} Objekt ${index + 1}`,
        color: objectColors[index % objectColors.length],
    }));
}