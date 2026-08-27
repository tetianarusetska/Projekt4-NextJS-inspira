import { prisma } from "../../../../prisma/prisma.client";

export async function getObject(userId: string, collectionId: string, objectId: number) {

    switch (collectionId) {

        case "books":
            return prisma.book.findFirst({ where: { id: objectId, userId } });

        case "music":
            return prisma.music.findFirst({ where: { id: objectId, userId } });

         case "magazines":
            return prisma.magazine.findFirst({ where: { id: objectId, userId } });

        case "artworks":
            return prisma.artwork.findFirst({ where: { id: objectId, userId } });

        case "museums":
            return prisma.museum.findFirst({ where: { id: objectId, userId } });

        case "galleries":
            return prisma.gallery.findFirst({ where: { id: objectId, userId } });

        case "images":
            return prisma.image.findFirst({ where: { id: objectId, userId } });

        case "photographs":
            return prisma.photograph.findFirst({ where: { id: objectId, userId } });

        case "ideas":
            return prisma.idea.findFirst({ where: { id: objectId, userId } });

        case "quotes":
            return prisma.quote.findFirst({ where: { id: objectId, userId } });

        case "newCollection":
            return prisma.newCollection.findFirst({ where: { id: objectId, userId } });

        default:
            throw new Error("Unbekannte Sammlung");
    }
}