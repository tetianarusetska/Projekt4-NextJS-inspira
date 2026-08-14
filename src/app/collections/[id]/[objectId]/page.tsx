import FooterIntro from "@/app/components/footer/FooterIntro";
import Footer from "@/app/components/footer/Footer";
import CabinetHeader from "@/app/cabinet/header/CabinetHeader";
import { createObjects } from "@/app/data/MockObjects";
import ObjectCard from "./ObjectCard";
import { collections } from "@/app/data/Collections";


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

            <div
                className="absolute bg-black"
                style={{ left: 0, top: 70 - 2, width: "100%", height: 4 }}
            />
            <div className="absolute bg-black" style={{ left: 865.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1006.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1177.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1325.5 - 1.5, top: 0, width: 3, height: 72 }} />

            <ObjectCard  object={object} collection={collection} />
            <FooterIntro />
            <Footer />
        </>
    );
}