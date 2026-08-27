"use client";

import { ObjectCardProps } from "@/app/types/ObjectCardProps";
import { getObjectColor } from "@/app/utils/getObjectColor";

export default function ObjectCard({ collection, object }: ObjectCardProps) {

    const getValue = (id: string) => {
        const value = object[id];

        if (value instanceof Date) {
            return value.toLocaleDateString("de-DE");
        }

        return value != null ? String(value) : "";
    };

    const formatLabel = (label: string) => {
        const cleaned = label.replace(/^N°\d+,\s*/, "");

        return cleaned
            .toLowerCase()
            .replace(/^\p{L}/u, (char) => char.toUpperCase());
    };

    const mainDetails = collection.details.filter(
        (detail) => !["title", "note", "bestQuote"].includes(detail.id)
    );

    const hasQuote = collection.details.some((d) => d.id === "bestQuote");
    const hasNote = collection.details.some((d) => d.id === "note");

    return (
        <div className="relative w-full min-h-screen text-black selection:bg-black selection:text-[#EDEDED] pb-20">

            {/* Header section */}
            <div className="border-b-[3px] border-[#808080] p-8 md:p-12 flex flex-col gap-6">
                <span className="text-sm font-bold tracking-widest text-neutral-400 font-text uppercase block">
                    Objekt /
                </span>
                <div className="flex flex-row items-center gap-2">
                    {collection.icon && (
                        <span className="material-symbols-outlined text-[44px]">
                            {collection.icon}
                        </span>
                    )}
                    <p className="font-text font-bold text-4xl lg:text-[42px] uppercase leading-none">
                        {collection.name}
                    </p>
                </div>
            </div>

            {/* Core Card Block */}
            <div className="mx-auto mt-20 w-full max-w-301.75 h-148.75 border-[5px] border-black bg-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-[38%_62%]">

                    {/* Image Block */}
                    <div
                        className="h-146 w-116.25 overflow-hidden"
                        style={{ background: getObjectColor(object.id) }}
                    >
                        {object.imageUrl && (
                            <img
                                src={object.imageUrl}
                                alt={getValue("title")}
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>

                    {/* Text Details Block */}
                    <div className="ml-12 text-white flex flex-col justify-between h-full">
                        <div>
                            <h3 className="mt-10 font-inter font-black text-[32px]">
                                {getValue("title")}
                            </h3>
                            <p className="grotesk-xbold text-[24px] mt-4 leading-[36%] tracking-[1%] text-[20px]">
                                {collection.code}  –  N°{object.id}
                            </p>

                            {/* Dynamically populated details */}
                            <div className="mt-14 flex flex-row gap-12">
                                {mainDetails.map((detail) => (
                                    <div key={detail.id} className="flex flex-col gap-2">
                                        <p className="text-md font-inter text-[#808080] normal-case">
                                            {formatLabel(detail.label)}
                                        </p>
                                        <p className="text-md font-inter">{getValue(detail.id)}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Quote Block */}
                            {hasQuote && getValue("bestQuote") && (
                                <div>
                                    <p className="mt-16 text-[#808080] text-md font-inter normal-case">
                                        Bestes Zitat
                                    </p>
                                    <p className="mt-4 font-['Kino40'] w-[672.95px] text-[28px] leading-[100%]">
                                        “ {getValue("bestQuote")} “
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Optional Note field */}
                        {hasNote && getValue("note") && (
                            <p className="font-inter text-xl mb-12">
                                {getValue("note")}
                            </p>
                        )}

                    </div>
                </div>
            </div>
            
        </div>
    );
}