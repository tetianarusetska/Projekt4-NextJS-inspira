import { collections } from "../../data/Collections";
import FooterIntro from "@/app/components/footer/FooterIntro";
import Footer from "@/app/components/footer/Footer";
import CabinetHeader from "@/app/cabinet/header/CabinetHeader";
import CollectionContent from "./CollectionContent";


export default async function CollectionPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    const collection = collections[id];

    if (!collection) {
        return <div>Collection not found</div>;
    }

    return (
        <>
            <CabinetHeader />

            <div
                className="absolute bg-black"
                style={{ left: 0, top: 70 - 2, width: "100%", height: 4 }}
            />
            <div className="absolute bg-black" style={{ left: 865.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1006.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1177.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1325.5 - 1.5, top: 0, width: 3, height: 72 }} />

            <CollectionContent collection={collection} />

            <FooterIntro />
            <Footer />
        </>
    );
}