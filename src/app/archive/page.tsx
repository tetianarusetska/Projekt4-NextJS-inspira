import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import { getObjectCounts } from "../api/objects/getObjectCounts";

import StudioHeader from "../studio/header/StudioHeader";
import StudioBackground from "../layoutDesign/StudioBackground";
import Archive from "./Archive";
import Footer from "../components/footer/Footer";
import { getCustomCollections } from "../api/customCollections/getCustomCollections";


export default async function ArchivePage() {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        redirect("/login");
    }

    const counts = await getObjectCounts(session.user.id);

    const customCollections = await getCustomCollections(session.user.id);

    return (
        <>
            <StudioHeader />
            <StudioBackground />
            <Archive counts={counts} customCollections={customCollections} />
            <Footer />
        </>
    );
}