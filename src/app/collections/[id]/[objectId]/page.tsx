
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getObject } from "@/app/api/objects/getObject";
import { collections } from "@/app/data/Collections";
import StudioHeader from "@/app/studio/header/StudioHeader";
import StudioBackground from "@/app/layoutDesign/StudioBackground";
import ObjectCard from "./ObjectCard";

// import FooterIntro from "@/app/components/footer/FooterIntro";
// import Footer from "@/app/components/footer/Footer";
// import CabinetHeader from "@/app/studio/header/AltCabinetHeader";
// import CabinetDividers from "@/app/layoutDesign/AltCabinetDividers";
// import ObjectCard from "./ObjectCard";


export default async function ObjectPage({ params }: { params: Promise<{ id: string, objectId: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        redirect("/login");
    }

    const { id, objectId } = await params;

    const collection = collections[id];

    if (!collection) {
        return <div>Sammlung wurde nicht gefunden.</div>;
    }

    const object = await getObject(session.user.id, id, parseInt(objectId, 10));

    if (!object) {
        return <div>Object wurde nicht gefunden.</div>;
    }

    return (
        <>
            {/* <CabinetHeader />
            <CabinetDividers />

            <ObjectCard collection={collection} object={object} />

            <FooterIntro />
            <Footer /> */}

            <StudioHeader />
            <StudioBackground />
            <ObjectCard collection={collection} object={object} />

        </>
    );
}