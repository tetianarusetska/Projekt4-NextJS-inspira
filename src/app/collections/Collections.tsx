"use client";

import Link from "next/link";
import { collections } from "../data/Collections";
import { CollectionsProps } from "../types/CollectionsProps";

export default function Collections({ counts, customCollections }: CollectionsProps) {

  const staticObjects = Object.values(counts).reduce((sum, n) => sum + n, 0);
  const customObjects = customCollections.reduce((sum, collection) => sum + (collection._count?.objects ?? 0), 0);
  const totalObjects = staticObjects + customObjects;

  const staticCollections = Object.values(collections).filter((collection) => collection.id !== "customCollection");

  const desktopCollections = staticCollections;

  const customCollectionCards = customCollections.map((collection, index) => ({
    id: collection.id,
    number: `N°${String(staticCollections.length + index + 1).padStart(2, "0")}`,
    code: "Custom",
    name: collection.title,
    icon: "folder",
    count: `${collection._count?.objects ?? 0} OBJEKTE`,
    color: "#172554",
    description: collection.description,
    reason: collection.reason,
    imageUrl: collection.imageUrl,
  })
  );

  const totalCollections = staticCollections.length + customCollections.length;

  const CARD_HEIGHT = 362;
  const desktopContainerHeight = Math.max(...desktopCollections.map((col) => col.top)) + CARD_HEIGHT + 40;

  return (
    <div className="w-full text-black relative selection:bg-black selection:text-[#EDEDED] pb-20">

      {/* ================= HEADER SECTION ================= */}
      <section className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full border-b-[3px] border-black gap-6">
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

        <div className="flex flex-col md:flex-row items-start md:items-center gap-16">

          <Link
            href="/inspira"
            className="group flex items-center gap-2 justify-center border border-black px-6 py-3 bg-black text-[#EDEDED] text-sm font-bold tracking-widest transition-all duration-200 hover:bg-transparent hover:text-black hover:scale-[1.02]"
          >
            <span className="material-symbols-outlined !text-xl">add</span>
            <span className="font-[Fayte] text-2xl">i . nspira</span>KARTE
          </Link>

          <Link
            href="/archive"
            className="hidden lg:flex items-center gap-2 border-[3px] border-black px-6 py-3 bg-black text-white font-inter font-black uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
          >
            <span className="material-symbols-outlined !text-xl">add</span>
            Neue Sammlung
          </Link>

          {/* Total Statistics Block */}
          <div className="text-left md:text-right font-['Grotesk_XBold'] font-black">
            <p className="text-3xl lg:text-[40px] leading-none uppercase tracking-wider grotesk-xbold">
              sammlungen  –  {totalCollections}
            </p>
            <p className="text-3xl lg:text-[40px] leading-none uppercase tracking-wider mt-2 grotesk-xbold">
              objekte  –  {totalObjects}
            </p>
          </div>

        </div>
      </section>

      {/* ================= Sammlungen-Karten - MOBILE & TABLET ================= */}
      <div className="block lg:hidden p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Static collections + NEUE */}
        {desktopCollections.map((col) => (
          <Link
            key={col.id}
            href={
              col.id === "customCollection"
                ? "/archive"
                : `/collections/${col.id}`
            }
            className="flex flex-col border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className="aspect-[4/3] w-full border-b-[4px] border-black"
              style={{ background: col.color }}
            />
            <div className="p-4 bg-white flex flex-col justify-between">
              <div className="font-inter font-black text-2xl uppercase tracking-wider flex items-center">
                {col.name}
                <span className="text-xs ml-1 align-super">®</span>
              </div>
              <div className="grotesk-xbold text-sm uppercase text-neutral-500 mt-1">
                {col.id === "customCollection"
                  ? "NEUE SAMMLUNG"
                  : `${counts[col.id] ?? 0} OBJEKTE`}
              </div>
            </div>
          </Link>
        ))}

        {/* Real custom collections */}
        {customCollectionCards.map((col) => (
          <Link
            key={col.id}
            href={`/collections/${col.id}`}
            className="flex flex-col border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className="aspect-[4/3] w-full border-b-[4px] border-black"
              style={{ background: col.color }}
            />

            <div className="p-4 bg-white flex flex-col justify-between">
              <div className="font-inter font-black text-2xl uppercase tracking-wider">
                {col.name}
              </div>

              <div className="grotesk-xbold text-sm uppercase text-neutral-500 mt-1">
                {col.count}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ================= Sammlungen-Karten DESKTOP LAYOUT ================= */}
      <div
        className="hidden lg:block relative mx-auto w-full max-w-[1436px] -ml-2 -mt-60 z-10"
        style={{ height: desktopContainerHeight }}
      >
        {desktopCollections.map((col) => (
          <div
            key={col.id}
            className="absolute transition-all duration-500 ease-out hover:z-50 group"
            style={{
              left: col.left,
              top: col.top,
            }}
          >
            <Link href={col.id === "customCollection" ? "/archive" : `/collections/${col.id}`}>
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

      {/* ================= Eigene Sammlungen — DESKTOP ================= */}
      {customCollectionCards.length > 0 && (
        <section className="hidden lg:block border-t-[3px] border-black">
          <div className="p-12">
            <p className="grotesk-xbold text-4xl uppercase">
              Eigene Sammlungen
            </p>
          </div>
          <div className="px-12 pb-16 flex flex-wrap gap-x-10 gap-y-16">
            {customCollectionCards.map((col) => (
              <Link key={col.id} href={`/collections/${col.id}`} className="group">
                {/* Swatch Color Block */}
                <div
                  className="h-[242px] w-[236px] border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-3 group-hover:rotate-1"
                  style={{ background: col.color }}
                />

                {/* Label Block */}
                <div className="relative h-[120px] w-[236px] border-x-[5px] border-b-[5px] border-black bg-white p-4 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-3 group-hover:rotate-1">
                  <div>
                    <div className="font-inter text-2xl uppercase font-black pr-2">
                      {col.name}
                    </div>
                  </div>
                  <div className="grotesk-xbold text-md uppercase tracking-wider">
                    {col.count}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
