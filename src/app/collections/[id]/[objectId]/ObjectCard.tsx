// ObjectCard.tsx
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
        <>
            <div className="relative h-300">
                <div className="absolute bg-[#808080]" style={{ left: 0, top: 140, width: 1470, height: 3 }} />

                <div className="ml-11 mt-15 flex flex-col gap-4">
                    <span className="material-symbols-outlined text-[60px]">
                        {collection.icon}
                    </span>
                    <p className="grotesk-xbold text-[64px] leading-[36%] tracking-[5%]">
                        {collection.name}
                    </p>
                    <p className="mt-16 uppercase grotesk-xbold text-[24px] leading-[29%] tracking-[1%]">
                        Objekt N° {object.id}
                    </p>
                </div>

                <div className="ml-11 mt-20 w-full max-w-301.75 h-148.75 border-[5px] border-black bg-black">
                    <div className="grid grid-cols-1 md:grid-cols-[38%_62%]">

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

                        <div className="ml-12 text-white">
                            <h3 className="mt-10 grotesk-xbold leading-[136%] tracking-[5%] text-[40px]">
                                {getValue("title")}
                            </h3>
                            <p className="grotesk-xbold text-[24px] mt-4 leading-[36%] tracking-[1%] text-[20px]">
                                {collection.code}  –  N°{object.id}
                            </p>

                            <div className="mt-14 flex flex-row flex-row gap-12">
                                {mainDetails.map((detail) => (
                                    <div key={detail.id} className="flex flex-col gap-2">
                                        <p className="text-[24px] text-[#808080] normal-case"> {formatLabel(detail.label)}</p>
                                        <p className="text-[24px]">{getValue(detail.id)}</p>
                                    </div>
                                ))}
                            </div>

                            {hasQuote && (
                                <div>
                                    <p className="mt-8 text-[#808080] text-[24px] normal-case">
                                        Bestes Zitat
                                    </p>
                                    <p className="mt-6 font-['Kino40'] w-[672.95px] text-[32px] leading-[100%]">
                                        “ {getValue("bestQuote")} “
                                    </p>
                                </div>
                            )}

                            {hasNote && (
                                <p className="mt-8 text-[24px]">
                                    {getValue("note")}
                                </p>
                            )}

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

