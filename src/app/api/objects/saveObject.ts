import { prisma } from "../../../../prisma/prisma.client";

export async function saveObject(
    userId: string,
    collectionId: string,
    values: Record<string, string>,
    imageUrl: string | null
) {
    switch (collectionId) {

        case "books":
            return prisma.book.create({
                data: {
                    userId,
                    title: values.title,
                    author: values.author,
                    year: values.year,
                    pages: parseInt(values.pages, 10),
                    discovered_by: values.discovered_by,
                    note: values.note,
                    bestQuote: values.bestQuote,
                    imageUrl,
                },
            });

        case "music":
            return prisma.music.create({
                data: {
                    userId,
                    format: values.format,
                    title: values.title,
                    author: values.author,
                    year: values.year,
                    discovered_by: values.discovered_by,
                    note: values.note,
                    bestQuote: values.bestQuote,
                    imageUrl,
                },
            });

        case "magazines":
            return prisma.magazine.create({
                data: {
                    userId,
                    title: values.title,
                    issue: values.issue,
                    date: values.date,
                    discovered_by: values.discovered_by,
                    note: values.note,
                    bestQuote: values.bestQuote,
                    imageUrl,
                },
            });

        case "artworks":
            return prisma.artwork.create({
                data: {
                    userId,
                    format: values.format,
                    title: values.title,
                    author: values.author,
                    year: values.year,
                    technique: values.technique,
                    dimensions: values.dimensions,
                    discovered_by: values.discovered_by,
                    note: values.note,
                    imageUrl,
                },
            });

        case "museums":
            return prisma.museum.create({
                data: {
                    userId,
                    title: values.title,
                    city: values.city,
                    exhibition: values.exhibition,
                    date: new Date(values.date),
                    discovered_by: values.discovered_by,
                    note: values.note,
                    imageUrl,
                },
            });

        case "galleries":
            return prisma.gallery.create({
                data: {
                    userId,
                    title: values.title,
                    city: values.city,
                    exhibition: values.exhibition,
                    artist: values.artist,
                    date: new Date(values.date),
                    note: values.note,
                    imageUrl,
                },
            });

        case "images":
            return prisma.image.create({
                data: {
                    userId,
                    title: values.title,
                    creator: values.creator,
                    year: parseInt(values.year, 10),
                    source: values.source,
                    discovered_by: values.discovered_by,
                    note: values.note,
                    imageUrl,
                },
            });

        case "photographs":
            return prisma.photograph.create({
                data: {
                    userId,
                    photographer: values.photographer,
                    title: values.title,
                    location: values.location,
                    source: values.source,
                    note: values.note,
                    imageUrl,
                },
            });

        case "ideas":
            return prisma.idea.create({
                data: {
                    userId,
                    title: values.title,
                    category: values.category,
                    inspiration: values.inspiration,
                    description: values.description,
                    next_step: values.next_step,
                    imageUrl,
                },
            });

        case "quotes":
            return prisma.quote.create({
                data: {
                    userId,
                    title: values.title,
                    author: values.author,
                    source: values.source,
                    year: parseInt(values.year, 10),
                    context: values.context,
                    imageUrl,
                },
            });


        case "newCollection":
            return prisma.newCollection.create({
                data: {
                    userId,
                    title: values.title,
                    description: values.description,
                    reason: values.reason,
                    imageUrl,
                },
            });

        default:
            throw new Error("Unbekannte Sammlung");
    }
}