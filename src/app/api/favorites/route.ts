import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getFavorites } from "./getFavorites";

export async function GET() {

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) {
        return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
    }

    try {
        const groups = await getFavorites(session.user.id);
        return NextResponse.json({ groups });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 400 });
    }
}