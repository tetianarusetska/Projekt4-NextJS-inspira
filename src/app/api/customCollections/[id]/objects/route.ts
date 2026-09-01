import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "../../../../../../prisma/prisma.client";


export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Nicht angemeldet" },
            { status: 401 }
        );
    }

    const { id } = await params;

    const body = await request.json();

    const collection =
        await prisma.customCollection.findFirst({
            where: {
                id,
                userId: session.user.id,
            },
        });

    if (!collection) {
        return NextResponse.json(
            { error: "Sammlung wurde nicht gefunden" },
            { status: 404 }
        );
    }

    const object =
        await prisma.customCollectionObject.create({
            data: {
                collectionId: id,
                title: body.title,
                description: body.description,
                note: body.note,
                imageUrl: body.imageUrl,
            },
        });

    revalidatePath(`/collections/${id}`);

    return NextResponse.json(object);
}


export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Nicht angemeldet" },
            { status: 401 }
        );
    }

    const { id } = await params;

    let body: { objectId?: unknown; data?: unknown };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: "Ungültiger Request-Body" },
            { status: 400 }
        );
    }

    const { objectId, data } = body;

    const numericObjectId = Number(objectId);
    if (!Number.isInteger(numericObjectId) || numericObjectId <= 0) {
        return NextResponse.json(
            { error: "Ungültige objectId" },
            { status: 400 }
        );
    }

    if (
        typeof data !== "object" ||
        data === null ||
        Array.isArray(data) ||
        Object.keys(data).length === 0
    ) {
        return NextResponse.json(
            { error: "data ist erforderlich und darf nicht leer sein" },
            { status: 400 }
        );
    }

    const collection = await prisma.customCollection.findFirst({
        where: { id, userId: session.user.id },
    });

    if (!collection) {
        return NextResponse.json(
            { error: "Sammlung wurde nicht gefunden" },
            { status: 404 }
        );
    }

    const { id: _ignoredId, collectionId: _ignoredCollectionId, ...safeData } = data as Record<string, unknown>;

    try {
        const result = await prisma.customCollectionObject.updateMany({
            where: { id: numericObjectId, collectionId: id },
            data: safeData,
        });

        if (result.count === 0) {
            return NextResponse.json(
                { error: "Objekt nicht gefunden" },
                { status: 404 }
            );
        }

        revalidatePath(`/collections/${id}`);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Fehler beim Aktualisieren des Objekts:", error);
        return NextResponse.json(
            { error: "Fehler beim Aktualisieren des Objekts" },
            { status: 500 }
        );
    }
}


export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Nicht angemeldet" },
            { status: 401 }
        );
    }

    const { id } = await params;

    let body: { objectId?: unknown };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: "Ungültiger Request-Body" },
            { status: 400 }
        );
    }

    const numericObjectId = Number(body.objectId);
    if (!Number.isInteger(numericObjectId) || numericObjectId <= 0) {
        return NextResponse.json(
            { error: "Ungültige objectId" },
            { status: 400 }
        );
    }

    const collection = await prisma.customCollection.findFirst({
        where: { id, userId: session.user.id },
    });

    if (!collection) {
        return NextResponse.json(
            { error: "Sammlung wurde nicht gefunden" },
            { status: 404 }
        );
    }

    try {
        const result = await prisma.customCollectionObject.deleteMany({
            where: { id: numericObjectId, collectionId: id },
        });

        if (result.count === 0) {
            return NextResponse.json(
                { error: "Objekt nicht gefunden" },
                { status: 404 }
            );
        }

        revalidatePath(`/collections/${id}`);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Fehler beim Löschen des Objekts:", error);
        return NextResponse.json(
            { error: "Fehler beim Löschen des Objekts" },
            { status: 500 }
        );
    }
}