import { collectionModels, isValidCollectionId } from "./collectionModels"; 

export async function updateObject(
    userId: string,
    collectionId: string,
    objectId: number,
    data: Record<string, unknown>
) {
    if (!isValidCollectionId(collectionId)) {
        throw new Error("Unbekannte Sammlung");
    }

    const model = collectionModels[collectionId] as unknown as {
        updateMany: (args: {
            where: { id: number; userId: string };
            data: Record<string, unknown>;
        }) => Promise<{ count: number }>;
    };

    return model.updateMany({
        where: {
            id: objectId,
            userId,
        },
        data,
    });
}