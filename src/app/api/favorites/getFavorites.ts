import { prisma } from "../../../../prisma/prisma.client";
import { collectionModels, CollectionId } from "../objects/collectionModels";
import { collections } from "@/app/data/Collections";

export type FavoriteItem = {
    id: number;
    title: string;
    author: string | null;
    year: string | null;
    imageUrl: string | null;
};

export type FavoriteGroup = {
    id: string;
    label: string;
    items: FavoriteItem[];
};

export async function getFavorites(userId: string): Promise<FavoriteGroup[]> {

    // 1) Statische Sammlungen
    const staticGroups = await Promise.all(

        (Object.keys(collectionModels) as CollectionId[]).map(async (collectionId) => {

            const model = collectionModels[collectionId] as unknown as {
                findMany: (args: {
                    where: { userId: string; isFavorite: boolean };
                    orderBy: { createdAt: "desc" };
                    take: number;
                }) => Promise<any[]>;
            };

            const items = await model.findMany({
                where: { userId, isFavorite: true },
                orderBy: { createdAt: "desc" },
                take: 2,
            });

            return {
                id: collectionId,
                label: collections[collectionId]?.name ?? collectionId.toUpperCase(),
                items: items.map((item) => ({
                    id: item.id,
                    title: item.title,
                    author:
                        item.author ??
                        item.artist ??
                        item.creator ??
                        item.photographer ??
                        null,
                    year: item.year ? String(item.year) : null,
                    imageUrl: item.imageUrl,
                })),
            };
        })
    );

    // 2) Eigene Sammlungen
    const customFavorites = await prisma.customCollectionObject.findMany({
        where: {
            isFavorite: true,
            collection: { userId },
        },
        orderBy: { createdAt: "asc" },
        include: { collection: { select: { id: true, title: true } } },
    });

    const customGroupsMap = new Map<string, FavoriteGroup>();
    for (const item of customFavorites) {
        const groupId = item.collection.id;
        if (!customGroupsMap.has(groupId)) {
            customGroupsMap.set(groupId, {
                id: groupId,
                label: item.collection.title,
                items: [],
            });
        }
        const group = customGroupsMap.get(groupId)!;
        if (group.items.length < 2) {
            group.items.push({
                id: item.id,
                title: item.title,
                author: null,
                year: null,
                imageUrl: item.imageUrl,
            });
        }
    }

    // Mit mindestens 1 Favoriten zurückgeben
    return [...staticGroups, ...customGroupsMap.values()].filter(
        (group) => group.items.length > 0
    );
}