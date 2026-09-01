import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "../../../../prisma/prisma.client";


export async function GET() {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Nicht angemeldet" },
            { status: 401 }
        );
    }

    const collections = await prisma.customCollection.findMany({
        where: { userId: session.user.id },
        include: {
            _count: {
                select: {
                    objects: true,
                },
            },
        },
        orderBy: { createdAt: "asc"}
    });

    return NextResponse.json(collections);
}


export async function POST(request: Request) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Nicht angemeldet" },
            { status: 401 }
        );
    }

    const body = await request.json();

    const {
        title,
        description,
        reason,
        imageUrl,
    } = body;

    if (!title) {
        return NextResponse.json(
            { error: "Titel ist erforderlich" },
            { status: 400 }
        );
    }

    const collection = await prisma.customCollection.create({
        data: {
            userId: session.user.id,
            title,
            description,
            reason,
            imageUrl,
        },
    });

    return NextResponse.json(collection);
}