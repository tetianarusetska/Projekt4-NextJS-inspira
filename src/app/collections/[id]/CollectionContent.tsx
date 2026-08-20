"use client";

import { useState } from "react";
import { CollectionContentProps } from "@/app/types/CollectionContentProps";
import { getObjectColor } from "@/app/utils/getObjectColor";
import Link from "next/link";


export default function CollectionContent({ collection, objects }: CollectionContentProps) {

    const objectsPerPage = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(objects.length / objectsPerPage) || 1;

    const startIndex = (currentPage - 1) * objectsPerPage;

    const currentObjects = objects.slice(
        startIndex,
        startIndex + objectsPerPage
    );

    return (
        <>
            <div className="relative lg:h-420 md:700">
                <div className="absolute bg-[#808080]" style={{ left: 0, top: 140, width: 1470, height: 3 }} />

                {/* Titel von Sammlung */}
                <div className="ml-11 mt-15 flex flex-col gap-4">
                    <span className="material-symbols-outlined text-[60px]">
                        {collection.icon}
                    </span>
                    <p className="grotesk-xbold text-[64px] leading-[36%] tracking-[5%]">
                        {collection.name}
                    </p>
                    <p className="mt-16 uppercase grotesk-xbold text-[24px] leading-[29%] tracking-[1%]">
                        {objects.length} objekte in dieser sammlung
                    </p>
                </div>

                {/* Filter */}
                <div>
                    <p className="hidden md:block md:mr-11 md:-mt-30 md:text-[24px] md:leading-[100%] md:tracking-[1%] md:text-right">
                        N°01 — {objects.length} Objekte<br></br>zuletzt aktualisiert heute
                    </p>
                    <div className="hidden md:uppercase md:flex md:flex-row md:gap-8 md:text-[20px] md:justify-end md:mt-13 md:mr-11">
                        <p>Neuste</p>
                        <p>A–Z</p>
                        <p>N°</p>
                        <p>aufsteigend</p>
                    </div>
                </div>

                {objects.length === 0 ? (
                    <p className="mt-20 ml-11 text-[24px] text-[#808080]">
                        Noch keine Objekte in dieser Sammlung.
                    </p>
                ) : (
                    <>
                        {/* Objekt Karte für LG */}
                        <div className="hidden lg:mt-20 lg:ml-11 lg:grid lg:w-7xl lg:grid-cols-5 lg:gap-x-28 lg:gap-y-8">
                            {currentObjects.map((object) => (
                                <div
                                    key={object.id}
                                    className="shadow-[8px_8px_8px_0_rgba(0,0,0,0.25)] w-59.75 h-97.25"
                                >
                                    <Link href={`/collections/${collection.id}/${object.id}`}>
                                        <div
                                            className="h-80 w-59.75 border-[5px] border-black"
                                            style={{ background: getObjectColor(object.id) }}
                                        />

                                        <div className="relative h-17.25 w-59.75 border-[5px] border-black bg-black text-white">
                                            <div className="ml-2 text-[24px]">
                                                {object.title}
                                            </div>
                                            <div className="-mt-2 ml-2 grotesk-xbold text-[20px] uppercase">
                                                N°{String(object.id).padStart(2, "0")}
                                            </div>
                                        </div>

                                    </Link>

                                </div>
                            ))}
                        </div>

                        {/* Objekt Karte für Mobile */}
                        <div className="mt-20 grid grid-cols-1 gap-2 px-3 md:hidden">
                            {currentObjects.map((object) => (
                                <Link
                                    key={object.id}
                                    href={`/collections/${collection.id}/${object.id}`}
                                    className="flex h-14 w-full border-[3px] border-black"
                                >
                                    <div
                                        className="flex flex-1 items-center px-3"
                                        style={{ background: getObjectColor(object.id) }}
                                    >
                                        <span className="grotesk-xbold text-[20px] uppercase text-white">
                                            {object.title}
                                        </span>
                                    </div>

                                    <div className="flex w-20 items-center justify-center border-l-[3px] border-black bg-black">
                                        <span className="grotesk-xbold text-[18px] uppercase text-white">
                                            N°{String(object.id).padStart(2, "0")}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Objekt Karte für MD */}
                        <div className="hidden md:grid lg:hidden md:mt-10 md:ml-3 md:grid-cols-3 md:gap-3">
                            {currentObjects.map((object) => (
                                <div
                                    key={object.id}
                                    className="h-[364px] w-[236.138px] shadow-[6px_6px_6px_0_rgba(0,0,0,0.25)]"
                                >
                                    <Link href={`/collections/${collection.id}/${object.id}`}>
                                        <div
                                            className="h-60.5 w-[236.138px] border-[5px] border-black"
                                            style={{ background: getObjectColor(object.id) }}
                                        />

                                        <div className="relative h-30 w-[236.138px] border-x-[5px] border-b-[5px] border-black bg-black text-white">
                                            <div className="grotesk-xbold absolute left-2 top-1 text-[26px] uppercase">
                                                {object.title}
                                            </div>

                                            <div className="grotesk-xbold absolute left-2 top-8 text-[20px] uppercase">
                                                N°{String(object.id).padStart(2, "0")}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 mb-10 md:mb-20 lg:mb-0 mr-11 flex justify-end items-center gap-6 text-[24px] grotesk-xbold">
                            <button
                                type="button"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((page) => page - 1)}
                                className={currentPage === 1 ? "opacity-30" : ""}
                            >
                                ←
                            </button>

                            <span>
                                {startIndex + 1}–{Math.min(startIndex + objectsPerPage, objects.length)}
                            </span>

                            <span>/</span>

                            <span>{objects.length}</span>

                            <button
                                type="button"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((page) => page + 1)}
                                className={currentPage === totalPages ? "opacity-30" : ""}
                            >
                                →
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
