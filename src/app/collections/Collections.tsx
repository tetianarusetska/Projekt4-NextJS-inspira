import Link from "next/link";
import { collections } from "../data/Collections";
import { CollectionsProps } from "../types/CollectionsProps";

export default function Collections({ counts }: CollectionsProps) {

    const totalObjects = Object.values(counts).reduce((sum, n) => sum + n, 0);

    const totalCollections = Object.keys(collections).length;

    return (
        <div className="relative h-200 lg:h-420 md:h-460 flex flex-col">

            {/* Überschrift */}
            <div className="md:mt-20 hidden md:block">
                <p className="grotesk-xbold absolute left-5.25 md:top-13 lg:top-10.75 text-[64px] leading-[100%] tracking-[1%] text-(--mainColor)">
                    dein personlicher<br />
                    sammlungsraum.
                </p>

                <p className="absolute left-5.25 top-46 text-[36px] leading-[100%] text-(--mainColor)">
                    Personlich . Digital . Kuratiert .
                </p>
            </div>

            {/* Sammlungen, Objekte */}
            <div className="hidden md:absolute md:right-4 md:top-16 lg:right-8.25 lg:top-10.75 md:flex md:flex-col md:items-end md:gap-0">
                <p className="grotesk-xbold text-right text-[48px] leading-[100%] tracking-[1%] text-[#808080]">
                    sammlungen – {totalCollections}
                </p>

                <p className="grotesk-xbold text-right text-[48px] leading-[100%] tracking-[1%] text-[#808080]">
                    objekte – {totalObjects}
                </p>
            </div>

            {/* Sammlungen Karte für Mobile */}
            <div className="grid grid-cols-1 gap-2 md:hidden mt-10">
                {Object.values(collections).map((col) => (
                    <Link
                        key={col.id}
                        href={`/collections/${col.id}`}
                        className="flex h-14 w-full border-[3px] border-black"
                    >
                        <div
                            className="flex flex-1 items-center px-3 text-white"
                            style={{ background: col.color }}
                        >
                            <span className="grotesk-xbold text-[20px] uppercase">
                                {col.name}
                                <sup className="ml-1 text-[10px]">®</sup>
                            </span>
                        </div>

                        <div className="flex w-16 items-center justify-center border-l-[3px]  text-center border-black bg-white">
                            <span className="grotesk-xbold text-[18px]">
                                {counts[col.id] ?? 0} OBJEKTE
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Sammlungen Karte für MD */}
            <div className="hidden md:grid lg:hidden md:grid-cols-3 md:gap-3 md:mt-50 md:ml-3">
                {Object.values(collections).map((col) => (
                    <Link
                        key={col.id}
                        href={`/collections/${col.id}`}
                        className="w-[236.138px] shadow-[6px_6px_6px_0_rgba(0,0,0,0.25)]"
                    >
                        <div
                            className="h-60.5 w-[236.138px] border-[5px] border-black"
                            style={{ background: col.color }}
                        />

                        <div className="relative h-30 w-[236.138px] border-[5px] border-t-0 border-black bg-white">
                            <div className="grotesk-xbold absolute left-2 top-1 text-[26px] uppercase">
                                {col.name}
                                <span className="relative -top-2 ml-1 text-[12px]">
                                    ®
                                </span>
                            </div>

                            <div className="grotesk-xbold absolute left-2 top-8 text-[20px] uppercase">
                               {counts[col.id] ?? 0} OBJEKTE
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Sammlungen Karte für LG */}
            <div className="absolute left-0 top-0 hidden h-[1620px] w-[1280px] lg:block">
                {Object.values(collections).map((col) => (
                    <div
                        key={col.id}
                        className="absolute shadow-[8px_8px_8px_0_rgba(0,0,0,0.25)]"
                        style={{
                            left: col.left,
                            top: col.top,
                        }}
                    >
                        <Link href={`/collections/${col.id}`}>
                            <div
                                className="h-60.5 w-[236.138px] border-[5px] border-black"
                                style={{ background: col.color }}
                            />

                            <div className="relative h-30 w-[236.138px] border-[5px] border-black bg-white">
                                <div className="grotesk-xbold absolute left-3 top-2 text-[36px] uppercase">
                                    {col.name}
                                    <span className="relative -top-2.5 ml-1 text-[16px]">
                                        ®
                                    </span>
                                </div>

                                <div className="grotesk-xbold absolute left-3 top-10 text-[24px] uppercase">
                                    {counts[col.id] ?? 0} OBJEKTE
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}