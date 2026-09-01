import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getObjects } from "@/app/api/objects/getObjects";
import { collections } from "../../data/Collections";
import { prisma } from "../../../../prisma/prisma.client";
import { Collection } from "@/app/types/Collection";

import StudioHeader from "@/app/studio/header/StudioHeader";
import CollectionContent from "./CollectionContent";
import StudioBackground from "@/app/layoutDesign/StudioBackground";
import Footer from "@/app/components/footer/Footer";


export default async function CollectionPage({ params }: { params: Promise<{ id: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) {
        redirect("/login");
    }

    const { id } = await params;

    const staticCollection = collections[id];

    if (staticCollection) {
        const objects = await getObjects(session.user.id, id);

        return (
            <>
                <main>
                    <StudioHeader />
                    <StudioBackground />
                    <CollectionContent
                        collection={staticCollection}
                        objects={objects}
                    />
                </main>
                <Footer />
            </>
        );
    }

    const customCollection = await prisma.customCollection.findFirst({
        where: { id, userId: session.user.id },
        include: {
            objects: {
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
    });

    if (!customCollection) {
        return <div>Sammlung wurde nicht gefunden.</div>;
    }

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
            <main>
                <StudioHeader />
                <StudioBackground />
                <CollectionContent
                    collection={adaptedCollection}
                    objects={customCollection.objects}
                />
            </main>
            <Footer />
        </>
    );
}