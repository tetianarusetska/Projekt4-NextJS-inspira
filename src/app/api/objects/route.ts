import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

import { saveObject } from "./saveObject";
import { deleteObject } from "./deleteObject";
import { updateObject } from "./updateObject";
import { isValidCollectionId } from "./collectionModels";


// CREATE Func
export async function POST(request: Request) {

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) {
        return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
    }

    const { collectionId, values, imageUrl } = await request.json();
    try {
        const object = await saveObject(session.user.id, collectionId, values, imageUrl);

        revalidatePath(`/collections/${collectionId}`);

        return NextResponse.json(object);

    } catch (error) {

        return NextResponse.json({ error: (error as Error).message }, { status: 400 });
        
    }
}

// DELETE Func
export async function DELETE(request: Request) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session?.user) {
        return NextResponse.json(
            { error: "Nicht angemeldet" },
            { status: 401 }
        );
    }

    let body: { collectionId?: unknown; objectId?: unknown };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: "Ungültiger Request-Body" },
            { status: 400 }
        );
    }

    const { collectionId, objectId } = body;
    if (typeof collectionId !== "string" || !collectionId) {
        return NextResponse.json(
            { error: "collectionId ist erforderlich" },
            { status: 400 }
        );
    }
    if (!isValidCollectionId(collectionId)) {
        return NextResponse.json(
            { error: "Unbekannte Sammlung" },
            { status: 400 }
        );
    }

    const id = Number(objectId);
    if (!Number.isInteger(id) || id <= 0) {
        return NextResponse.json(
            { error: "Ungültige objectId" },
            { status: 400 }
        );
    }
    try {
        const result = await deleteObject(session.user.id, collectionId, id);

        if (result.count === 0) {
            return NextResponse.json(
                { error: "Objekt nicht gefunden" },
                { status: 404 }
            );
        }

        revalidatePath(`/collections/${collectionId}`);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Fehler beim Löschen des Objekts:", error);

        return NextResponse.json(
            { error: "Fehler beim Löschen des Objekts" },
            { status: 500 }
        );
    }
}


// UPDATE Func
export async function PATCH(request: Request) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Nicht angemeldet" },
            { status: 401 }
        );
    }

    let body: { collectionId?: unknown; objectId?: unknown; data?: unknown };

    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: "Ungültiger Request-Body" },
            { status: 400 }
        );
    }

    const { collectionId, objectId, data } = body;

    if (typeof collectionId !== "string" || !collectionId) {
        return NextResponse.json(
            { error: "collectionId ist erforderlich" },
            { status: 400 }
        );
    }

    if (!isValidCollectionId(collectionId)) {
        return NextResponse.json(
            { error: "Unbekannte Sammlung" },
            { status: 400 }
        );
    }

    const id = Number(objectId);
    if (!Number.isInteger(id) || id <= 0) {
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

    
    const { userId: _ignoredUserId, id: _ignoredId, ...safeData } = data as Record<string, unknown>;

    try {
        const result = await updateObject(session.user.id, collectionId, id, safeData);

        if (result.count === 0) {
            return NextResponse.json(
                { error: "Objekt nicht gefunden" },
                { status: 404 }
            );
        }

        revalidatePath(`/collections/${collectionId}`);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Fehler beim Aktualisieren des Objekts:", error);

        return NextResponse.json(
            { error: "Fehler beim Aktualisieren des Objekts" },
            { status: 500 }
        );
    }
}