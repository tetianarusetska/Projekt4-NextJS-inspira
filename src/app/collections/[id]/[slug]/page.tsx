import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getObject } from "@/app/api/objects/getObject";
import { collections } from "@/app/data/Collections";
import { prisma } from "../../../../../prisma/prisma.client";
import { slugify } from "@/app/utils/slugify";
import { Collection } from "@/app/types/Collection";

import StudioHeader from "@/app/studio/header/StudioHeader";
import StudioBackground from "@/app/layoutDesign/StudioBackground";
import ObjectCard from "./ObjectCard";
import Footer from "@/app/components/footer/Footer";


export default async function ObjectPage({ params }: { params: Promise<{ id: string, slug: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) redirect("/login");

    const { id, slug } = await params;

    const staticCollection = collections[id];

    if (staticCollection) {
        const object = await getObject(session.user.id, id, slug);

        if (!object) return <div>Object wurde nicht gefunden.</div>;

        return (
            <>
                <StudioHeader />
                <StudioBackground />
                <ObjectCard collection={staticCollection} object={object} />
                <Footer />
            </>
        );
    }

    const customCollection = await prisma.customCollection.findFirst({
        where: { id, userId: session.user.id },
        include: { objects: true },
    });

    if (!customCollection) return <div>Sammlung wurde nicht gefunden.</div>;

    const object = customCollection.objects.find((o) => slugify(o.title) === slug);

    if (!object) return <div>Object wurde nicht gefunden.</div>;

    const adaptedCollection: Collection = {
        id: customCollection.id,
        number: "N°",
        code: "Custom",
        name: customCollection.title,
        icon: "folder",
        count: `${customCollection.objects.length}`,
        color: "#172554",
        left: 0,
        top: 0,
        isCustom: true,
        details: [
            { id: "title", label: "N°01, TITEL", type: "text" },
            { id: "description", label: "N°02, BESCHREIBUNG", type: "textarea" },
            { id: "note", label: "N°03, NOTIZ", type: "textarea" },
        ],
    };

    return (
        <>
            <StudioHeader />
            <StudioBackground />
            <ObjectCard collection={adaptedCollection} object={object} />
            <Footer />
        </>
    );
}