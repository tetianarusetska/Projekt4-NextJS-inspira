import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getObject } from "@/app/api/objects/getObject";
import { collections } from "@/app/data/Collections";

import StudioHeader from "@/app/studio/header/StudioHeader";
import StudioBackground from "@/app/layoutDesign/StudioBackground";
import ObjectCard from "./ObjectCard";
import Footer from "@/app/components/footer/Footer";


export default async function ObjectPage({ params }: { params: Promise<{ id: string, slug: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) redirect("/login");

    const { id, slug } = await params;

    const collection = collections[id];

    if (!collection) return <div>Sammlung wurde nicht gefunden.</div>;

    const object = await getObject(session.user.id, id, slug);
    
    if (!object) return <div>Object wurde nicht gefunden.</div>;

    return (
        <>
            <StudioHeader />
            <StudioBackground />
            <ObjectCard collection={collection} object={object} />
            <Footer />
        </>
    );
}