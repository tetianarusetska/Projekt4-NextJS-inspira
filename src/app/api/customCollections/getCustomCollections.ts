import { prisma } from "../../../../prisma/prisma.client";

export async function getCustomCollections(userId: string) {
    return prisma.customCollection.findMany({
        where: { userId },
        include: {
            _count: {
                select: {
                    objects: true,
                },
            },
        },
        orderBy: { createdAt: "asc" }
    });
}