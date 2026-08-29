"use client";

import Link from "next/link";
import { collections } from "../data/Collections";
import { CollectionsProps } from "../types/CollectionsProps";

export default function Collections({ counts }: CollectionsProps) {
  
  const totalObjects = Object.values(counts).reduce((sum, n) => sum + n, 0);
  const totalCollections = Object.keys(collections).slice(0, 10).length;

  return (
    <div className="w-full text-black relative selection:bg-black selection:text-[#EDEDED] min-h-screen pb-20">

      {/* ================= HEADER SECTION ================= */}
      <section className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full border-b-[3px] border-black gap-6">
        <div className="space-y-4">
          <span className="text-sm font-bold tracking-widest text-neutral-400 font-inter uppercase block">
            Sammlungen /
          </span>
          <h2 className="text-5xl lg:text-6xl leading-[0.85] tracking-tight uppercase grotesk-xbold font-black">
            Meine<br />Sammlungen
          </h2>
          <p className="text-neutral-500 text-md font-inter font-medium max-w-md">
            Durchsuche deine persönlichen Archive und kuratierten Sammlungen.
          </p>
        </div>

        {/* Total Statistics Block */}
        <div className="text-left md:text-right font-['Grotesk_XBold'] font-black">
          <p className="text-3xl lg:text-[40px] leading-none uppercase tracking-wider grotesk-xbold">
            sammlungen  –  {totalCollections}
          </p>
          <p className="text-3xl lg:text-[40px] leading-none uppercase tracking-wider mt-2 grotesk-xbold">
            objekte  –  {totalObjects}
          </p>
        </div>
      </section>

      {/* ================= Sammlungen-Karten - MOBILE & TABLET  ================= */}
      <div className="block lg:hidden p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.values(collections).map((col) => (
          <Link
            key={col.id}
            href={`/collections/${col.id}`}
            className="flex flex-col border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Color block */}
            <div className="aspect-[4/3] w-full border-b-[4px] border-black" style={{ background: col.color }} />
            {/* Label Block */}
            <div className="p-4 bg-white flex flex-col justify-between">
              <div className="font-inter font-black text-2xl uppercase tracking-wider flex items-center">
                {col.name}
                <span className="text-xs ml-1 align-super">®</span>
              </div>
              <div className="grotesk-xbold text-sm uppercase text-neutral-500 mt-1">
                {counts[col.id] ?? 0} OBJEKTE
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ================= Sammlungen-Karten DESKTOP LAYOUT ================= */}
      <div className="hidden lg:block relative mx-auto w-full -mt-60 z-10">
        {Object.values(collections).slice(0, 10).map((col) => (
          <div
            key={col.id}
            className="absolute transition-all duration-500 ease-out hover:z-50 group"
            style={{
              left: col.left,
              top: col.top,
            }}
          >
            <Link href={`/collections/${col.id}`}>
              {/* Swatch Color Block */}
              <div
                className="h-[242px] w-[236px] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-3 group-hover:rotate-1"
                style={{ background: col.color }}
              />

              {/* Label Block */}
              <div className="relative h-[120px] w-[236px] border-x-[5px] border-b-[5px] border-black bg-white p-4 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-3 group-hover:rotate-1">
                <div>
                  <div className="font-inter text-2xl uppercase font-black  pr-2">
                    {col.name}
                  </div>
                </div>
                <div className="grotesk-xbold text-md uppercase tracking-wider">
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