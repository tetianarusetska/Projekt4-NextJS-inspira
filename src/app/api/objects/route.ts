import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { saveObject } from "./saveObject";
import { revalidatePath } from "next/cache";

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