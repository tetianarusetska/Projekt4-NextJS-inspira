import { CollectionContentProps } from "@/app/types/CollectionContentProps";
import { createObjects } from "@/app/data/MockObjects";
import Link from "next/link";


export default function CollectionContent({ collection }: CollectionContentProps) {

    const objects = createObjects(collection.name, 36);

    return (
        <>
            <div className="relative h-420">
                <div className="absolute bg-[#808080]" style={{ left: 0, top: 140, width: 1470, height: 3 }} />

                <div className="ml-11 mt-15 flex flex-col gap-4">
                    <span className="material-symbols-outlined text-[60px]">
                        {collection.icon}
                    </span>
                    <p className="grotesk-xbold text-[64px] leading-[36%] tracking-[5%]">
                        {collection.name}
                    </p>
                    <p className="mt-16 uppercase grotesk-xbold text-[24px] leading-[29%] tracking-[1%]">
                        XX objekte in dieser sammlung
                    </p>
                </div>

                <div>
                    <p className="mr-11 -mt-30 text-[24px] leading-[100%] tracking-[1%] text-right">
                        N°01 — 39 Objekte<br></br>zuletzt aktualisiert heute
                    </p>
                    <div className="uppercase flex flex-row gap-8 text-[20px] justify-end mt-13 mr-11">
                        <p>Neuste</p>
                        <p>A–Z</p>
                        <p>N°</p>
                        <p>aufsteigend</p>
                    </div>
                </div>

                <div className="mt-20 ml-11 grid w-7xl grid-cols-5 gap-x-28 gap-y-8">
                    {objects.slice(0, 10).map((object) => (
                        <div
                            key={object.id}
                            className="shadow-[8px_8px_8px_0_rgba(0,0,0,0.25)] w-59.75 h-97.25"
                        >
                            <Link href={`/objects/${object.id}`}>
                                <div
                                    className="h-80 w-59.75 border-[5px] border-black"
                                    style={{ background: object.color }}
                                />

                                <div className="relative h-17.25 w-59.75 border-[5px] border-black bg-black text-white">
                                    <div className="ml-2 text-[24px]">
                                        {object.name}
                                    </div>
                                    <div className="-mt-2 ml-2 grotesk-xbold text-[20px] uppercase">
                                        N°{String(object.id).padStart(2, "0")}
                                    </div>
                                </div>

                            </Link>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

