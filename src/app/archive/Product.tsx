"use client";

import { collections } from "../data/Collections";
import { ProductProps } from "../types/ProductProps";
import { Collection } from "../types/Collection";
import { useProductSave } from "../hooks/useProductSave";

export default function Product({ selectedCategory, values, image, counts, customCollections }: ProductProps) {

    const staticCollectionData = collections[selectedCategory];
    const existingCustomCollection = customCollections.find((c) => c.id === selectedCategory);

    const collection: Collection | null = staticCollectionData
        ? selectedCategory === "customCollection"
            ? {
                ...staticCollectionData,
                name: values.title || staticCollectionData.name,
                color: "#172554",
            }
            : staticCollectionData
        : existingCustomCollection
            ? {
                id: existingCustomCollection.id,
                number: "N°",
                code: "Custom",
                name: existingCustomCollection.title,
                icon: "folder",
                count: "",
                color: "#172554",
                left: 0,
                top: 0,
                isCustom: true,
                details: [
                    { id: "title", label: "N°01, TITEL", type: "text" },
                    { id: "description", label: "N°02, BESCHREIBUNG", type: "textarea" },
                    { id: "note", label: "N°03, NOTIZ", type: "textarea" },
                ],
            }
            : null;

    const isCreatingCollection = selectedCategory === "customCollection";

    const { isSaving, error, objectId, handleSave } = useProductSave(
        selectedCategory,
        values,
        image,
        customCollections
    );

    if (!collection) {
        return null;
    }

    const currentCount = existingCustomCollection
        ? existingCustomCollection._count?.objects ?? 0
        : counts[selectedCategory] ?? 0;

    const predictedNumber = currentCount + 1;

    const getDetailValue = (id: string) => {
        const detail = collection.details.find((item) => item.id === id);
        return values[id] || detail?.placeholder || "";
    };

    return (
        <div id="product" className="mb-20">

            {/* Überschrift */}
            <div className="mt-10 flex flex-col gap-4">
                <p className="font-inter font-black text-[32px] leading-[100%] tracking-[1%]">
                    04    –    VORSCHAU
                </p>

                {/* <p className="font-inter  text-[24px] leading-[84%]">
                    Ein letzter Blick.
                </p> */}

                <p className="font-inter  text-[24px] leading-[100%]">
                    Überprüfe deine Angaben. Dann ist<br></br>dein Objekt bereit fur dein Archiv.
                </p>
            </div>

            {/* Vorschau */}
            <div>
                {/* Ausgewählte Sammlung */}
                <div className="mt-10 flex w-full max-w-210 h-104 gap-6 border-dashed border-[#808080] border-2 p-6">

                    <div className="h-full flex-1">

                        <div
                            className="h-60.5 w-[236.138px] border-[5px] border-black"
                            style={{ background: collection.color }}
                        />
                        <div className="relative h-30 w-[236.138px] border-[5px] border-black bg-white">
                            <div className="font-inter font-black absolute left-3 top-2 text-2xl uppercase">
                                {collection.name}
                            </div>
                            <div className="grotesk-xbold text-sm text-neutral-500 mt-1 absolute left-3 top-16 text-[24px] uppercase">
                                {currentCount} OBJEKTE
                            </div>

                        </div>
                    </div>

                    {/* Generierte Karte von Objekt */}
                    <div className="h-full flex-1">
                        <div className="gap-2 text-center h-90.5 w-[236.138px] border-[5px] border-black flex flex-col justify-center items-center">
                            {!isCreatingCollection && (
                                <>
                                    <p className="text-[24px]">
                                        {getDetailValue("title")}
                                    </p>
                                    <p className="text-[18px]">
                                        {getDetailValue("discovered_by")}
                                    </p>
                                    <p className="text-[18px]">
                                        "{getDetailValue("note")}"
                                    </p>
                                    <p className="font-['Kino40'] text-[24px]">
                                        {new Date().toLocaleDateString("de-DE", {
                                            month: "2-digit",
                                            year: "numeric",
                                        })}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    
                    {/* Hinzugefügte Media */}
                    <div className="h-full flex-1">
                        <div className="h-90.5 w-[236.138px] border-[5px] border-black overflow-hidden">
                            {image && (
                                <img
                                    src={image}
                                    alt="Hochgeladenes Bild"
                                    className="h-full w-full object-cover"
                                />
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* CTA Button  */}
            <div className="mt-10 w-210 h-50 border-[#808080] border-2 flex flex-row justify-between items-center">
                <div>
                    <p className="grotesk-xbold text-[36px] uppercase tracking-[5%] mt-9 ml-7">Wird gespeichert als</p>
                    <p className="grotesk-xbold text-[36px] uppercase tracking-[5%] mb-5 ml-7">N°{objectId ?? predictedNumber} — {collection.code}</p>                </div>
                <div>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="mt-9 mr-9 grotesk-xbold block  text-white bg-black uppercase text-center text-[32px] w-60.25 h-15.5 tracking-[1px] border-2 border-(--mainColor)"
                    >
                        {isSaving ? "..." : "Speichern"}
                    </button>
                    {error && (
                        <p className="mt-2 text-[16px] text-black">{error}</p>
                    )}
                </div>
            </div>

        </div>
    )
}