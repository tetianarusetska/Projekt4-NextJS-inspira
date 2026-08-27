import { prisma } from "../../../../prisma/prisma.client";

export async function getObjectCounts(userId: string) {
    const [
        books, music, magazines, artworks, museums,
        galleries, images, photographs, ideas, quotes, newCollection,
    ] = await Promise.all([
        prisma.book.count({ where: { userId } }),
        prisma.music.count({ where: { userId } }),
        prisma.magazine.count({ where: { userId } }),
        prisma.artwork.count({ where: { userId } }),
        prisma.museum.count({ where: { userId } }),
        prisma.gallery.count({ where: { userId } }),
        prisma.image.count({ where: { userId } }),
        prisma.photograph.count({ where: { userId } }),
        prisma.idea.count({ where: { userId } }),
        prisma.quote.count({ where: { userId } }),
        prisma.newCollection.count({ where: { userId } }),
    ]);

    return {
        books, music, magazines, artworks, museums,
        galleries, images, photographs, ideas, quotes, newCollection,
    } as Record<string, number>;
}