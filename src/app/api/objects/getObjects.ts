import { prisma } from "../../../../prisma/client";

export async function getObjects(userId: string, collectionId: string) {

    switch (collectionId) {

        case "books":
            return prisma.book.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "music":
            return prisma.music.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "magazines":
            return prisma.magazine.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "artworks":
            return prisma.artwork.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "museums":
            return prisma.museum.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "galleries":
            return prisma.gallery.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "images":
            return prisma.image.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "photographs":
            return prisma.photograph.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "ideas":
            return prisma.idea.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "quotes":
            return prisma.quote.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });

        case "newCollection":
            return prisma.newCollection.findMany({ where: { userId }, orderBy: { createdAt: "asc" } });


        default:
            throw new Error("Unbekannte Sammlung");
    }
}