import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import FooterIntro from "@/app/components/footer/FooterIntro";
import Footer from "@/app/components/footer/Footer";
import CabinetHeader from "@/app/cabinet/header/CabinetHeader";
import { collections } from "@/app/data/Collections";
import CabinetDividers from "@/app/layoutDesign/CabinetDividers";


export default async function ObjectPage({ params }: { params: Promise<{ id: string, objectId: string }> }) {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        redirect("/login");
    }

    const { id, objectId } = await params;

    const collection = collections[id];

    if (!collection) {
        return <div>Collection not found</div>;
    }

    console.log(objectId);

    return (
        <>
            <CabinetHeader />
            <CabinetDividers />

            <FooterIntro />
            <Footer />
        </>
    );
}