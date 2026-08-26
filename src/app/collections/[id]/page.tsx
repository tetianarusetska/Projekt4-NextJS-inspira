import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getObjects } from "@/app/api/objects/getObjects";
import { collections } from "../../data/Collections";

// import FooterIntro from "@/app/components/footer/FooterIntro";
// import Footer from "@/app/components/footer/Footer";
// import CabinetHeader from "@/app/studio/header/AltCabinetHeader";
// import CollectionContent from "./AltCollectionContent";
// import CabinetDividers from "@/app/layoutDesign/AltCabinetDividers";
import StudioHeader from "@/app/studio/header/StudioHeader";
import CollectionContent from "./CollectionContent";
import StudioBackground from "@/app/layoutDesign/StudioBackground";


export default async function CollectionPage({ params }: { params: Promise<{ id: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        redirect("/login");
    }

    const { id } = await params;

    const collection = collections[id];

    if (!collection) {
        return <div>Sammlung wurde nicht gefunden.</div>;
    }

    const objects = await getObjects(session.user.id, id);

    return (
        <>
            {/* <CabinetHeader />
            <CabinetDividers />

            <CollectionContent collection={collection} objects={objects} />

            <FooterIntro />
            <Footer /> */}

            <StudioHeader />
            <StudioBackground />
            <CollectionContent collection={collection} objects={objects} />

        </>
    );
}

