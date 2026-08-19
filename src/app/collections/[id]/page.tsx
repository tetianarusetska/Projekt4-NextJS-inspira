import { collections } from "../../data/Collections";
import FooterIntro from "@/app/components/footer/FooterIntro";
import Footer from "@/app/components/footer/Footer";
import CabinetHeader from "@/app/cabinet/header/CabinetHeader";
import CollectionContent from "./CollectionContent";
import CabinetDividers from "@/app/layoutDesign/CabinetDividers";


export default async function CollectionPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    const collection = collections[id];

    if (!collection) {
        return <div>Sammlung wurde nicht gefunden.</div>;
    }

    return (
        <>
            <CabinetHeader />
            <CabinetDividers />

            <CollectionContent collection={collection} />

            <FooterIntro />
            <Footer />
        </>
    );
}