import "dotenv/config";
import { prisma } from "./prisma.client";
import {
    books, vinyl, tracks, magazines, artworks,
    museums, galleries, photographs, ideas, quotes,
} from "./seedData";

const USER_EMAIL = process.env.SEED_USER_EMAIL;

if (!USER_EMAIL) {
    throw new Error("SEED_USER_EMAIL ist nicht gesetzt.");
}

if (process.env.VERCEL_ENV === "production") {
    console.log("Automatisches Seeding ist für diese Umgebung deaktiviert.");
    process.exit(0);
}

const withUser = <T extends object>(items: T[], userId: string) =>
    items.map((item) => ({ ...item, userId }));

async function seed() {
    const user = await prisma.user.findUnique({ where: { email: USER_EMAIL } });

    if (!user) {
        throw new Error(`Benutzer mit der E-Mail-Adresse "${USER_EMAIL}" wurde nicht gefunden.`);
    }

    const existingSeed = await prisma.book.findFirst({
        where: { userId: user.id, title: "Lolita", author: "Vladimir Nabokov" },
    });

    if (existingSeed) {
        console.log("Seed wurde bereits angewendet. Überspringe.");
        return;
    }

    await prisma.book.createMany({ data: withUser(books, user.id) });
    await prisma.music.createMany({ data: withUser(vinyl, user.id) });
    await prisma.music.createMany({ data: withUser(tracks, user.id) });
    await prisma.magazine.createMany({ data: withUser(magazines, user.id) });
    await prisma.artwork.createMany({ data: withUser(artworks, user.id) });
    await prisma.museum.createMany({ data: withUser(museums, user.id) });
    await prisma.gallery.createMany({ data: withUser(galleries, user.id) });
    await prisma.photograph.createMany({ data: withUser(photographs, user.id) });
    await prisma.idea.createMany({ data: withUser(ideas, user.id) });
    await prisma.quote.createMany({ data: withUser(quotes, user.id) });

    console.log("Seed erfolgreich abgeschlossen.");
}

seed()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });