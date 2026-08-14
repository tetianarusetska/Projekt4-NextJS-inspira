import { CollectionObject } from "../types/CollectionObject";
import { objectColors } from "./ObjectColors";

export function createObjects(
    collectionName: string,
    count = 36
): CollectionObject[] {
    return Array.from({ length: count }, (_, index) => ({
        id: index + 1,
        name: `${collectionName} Objekt ${index + 1}`,
        color: objectColors[index % objectColors.length],
    }));
}