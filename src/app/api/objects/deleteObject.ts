import { collectionModels, isValidCollectionId } from "./collectionModels";

export async function deleteObject( userId: string, collectionId: string, objectId: number ) {
    if (!isValidCollectionId(collectionId)) {
        throw new Error("Unbekannte Sammlung");
    }

    const model = collectionModels[collectionId] as unknown as {
        deleteMany: (args: {
            where: { id: number; userId: string };
        }) => Promise<{ count: number }>;
    };

    return model.deleteMany({
        where: {
            id: objectId,
            userId,
        },
    });
}