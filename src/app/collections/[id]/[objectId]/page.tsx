import FooterIntro from "@/app/components/footer/FooterIntro";
import Footer from "@/app/components/footer/Footer";
import CabinetHeader from "@/app/cabinet/header/CabinetHeader";
import { createObjects } from "@/app/data/MockObjects";
import ObjectCard from "./ObjectCard";
import { collections } from "@/app/data/Collections";
import CabinetDividers from "@/app/layoutDesign/CabinetDividers";


export default async function ObjectPage({ params }: { params: Promise<{ id: string,  objectId: string }> }) {

    const { id, objectId } = await params;

    const collection = collections[id];

    if (!collection) {
        return <div>Collection not found</div>;
    }

    const objects = createObjects(
        collection.id,
        collection.name,
        36
    );

    const object = objects.find(
        (item) => String(item.id) === objectId
    );

    if (!object) {
        return <div>Object not found</div>;
    }

    return (
        <>
            <CabinetHeader />
            <CabinetDividers />

            <ObjectCard  object={object} collection={collection} />
            <FooterIntro />
            <Footer />
        </>
    );
}