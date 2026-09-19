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
        <div id="product" className="mb-10 lg:mb-20">

            {/* Überschrift */}
            <div className="mt-6 sm:mt-10 flex flex-col gap-2 sm:gap-4">
                <p className="font-inter font-black text-xl sm:text-2xl lg:text-[32px] leading-tight tracking-[1%]">
                    04    –    VORSCHAU
                </p>

                {/* <p className="font-inter  text-[24px] leading-[84%]">
                    Ein letzter Blick.
                </p> */}

                <p className="font-inter text-base sm:text-lg lg:text-[24px] leading-snug">
                    Überprüfe deine Angaben. Dann ist<br className="hidden sm:inline" />dein Objekt bereit fur dein Archiv.
                </p>
            </div>

            {/* Vorschau */}
            <div>
                {/* Ausgewählte Sammlung */}
                <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row w-full max-w-[840px] h-auto lg:h-104 gap-4 sm:gap-6 border-dashed border-[#808080] border-2 p-3 sm:p-6">

                    <div className="h-full flex-1">

                        <div
                            className="h-40 sm:h-60.5 w-full max-w-[236px] border-[3px] sm:border-[5px] border-black"
                            style={{ background: collection.color }}
                        />
                        <div className="relative h-24 sm:h-30 w-full max-w-[236px] border-[3px] sm:border-[5px] border-black bg-white p-3 flex flex-col justify-between">
                            <div className="font-inter font-black text-base sm:text-xl lg:text-2xl uppercase leading-tight truncate">
                                {collection.name}
                            </div>
                            <div className="grotesk-xbold text-xs sm:text-base lg:text-[20px] text-neutral-500 uppercase leading-none pb-1">
                                {currentCount} OBJEKTE
                            </div>

                        </div>
                    </div>

                    {/* Generierte Karte von Objekt */}
                    <div className="h-full flex-1">
                        <div className="gap-2 text-center h-64 sm:h-90.5 w-full max-w-[236px] border-[3px] sm:border-[5px] border-black flex flex-col justify-center items-center p-4">
                            {!isCreatingCollection && (
                                <>
                                    <p className="text-base sm:text-lg lg:text-[24px] font-bold break-words">
                                        {getDetailValue("title")}
                                    </p>
                                    <p className="text-xs sm:text-sm lg:text-[18px] break-words">
                                        {getDetailValue("discovered_by")}
                                    </p>
                                    <p className="text-xs sm:text-sm lg:text-[18px] break-words">
                                        "{getDetailValue("note")}"
                                    </p>
                                    <p className="font-['Kino40'] text-base sm:text-lg lg:text-[24px]">
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
                        <div className="h-64 sm:h-90.5 w-full max-w-[236px] border-[3px] sm:border-[5px] border-black overflow-hidden">
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
            <div className="mt-6 sm:mt-10 w-full max-w-[840px] h-auto lg:h-50 border-[#808080] border-2 flex flex-col sm:flex-row justify-between items-stretch sm:items-center p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 bg-white">
                <div>
                    <p className="grotesk-xbold text-xs sm:text-lg lg:text-[24px] uppercase tracking-wider text-neutral-400">Wird gespeichert als</p>
                    <p className="grotesk-xbold text-base sm:text-2xl lg:text-[32px] uppercase tracking-wider text-black">N°{objectId ?? predictedNumber} — {collection.code}</p>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="grotesk-xbold text-white bg-black uppercase text-center text-sm sm:text-xl lg:text-[28px] w-full sm:w-60 h-12 sm:h-15.5 tracking-[1px] border-2 border-black hover:bg-white hover:text-black transition-all cursor-pointer active:scale-[0.98] shrink-0"
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