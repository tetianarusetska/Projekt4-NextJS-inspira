import { prisma } from "../../../../prisma/prisma.client";

export const collectionModels = {
    books: prisma.book,
    music: prisma.music,
    magazines: prisma.magazine,
    artworks: prisma.artwork,
    museums: prisma.museum,
    galleries: prisma.gallery,
    images: prisma.image,
    photographs: prisma.photograph,
    ideas: prisma.idea,
    quotes: prisma.quote
} as const;

export type CollectionId = keyof typeof collectionModels;

export function isValidCollectionId(id: string): id is CollectionId {
    return id in collectionModels;
}