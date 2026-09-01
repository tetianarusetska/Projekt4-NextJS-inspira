"use client";

import { CollectionsProps } from "../types/CollectionsProps";
import { collections } from "../data/Collections";

interface ExtendedCollectionsProps extends CollectionsProps {
  onNext?: () => void;
}

export default function Collection({ selectedCategory, setSelectedCategory, customCollections, onNext }: ExtendedCollectionsProps) {

  return (
    <div id="collection" className="mb-20 w-full">

      {/* ================= HEADER SECTION ================= */}
      <div className="mt-12 lg:mt-16 flex flex-col gap-4">
        <p className="font-inter font-black text-2xl lg:text-[32px] tracking-wider text-black">
          01 — SAMMLUNG WÄHLEN
        </p>
        <p className="text-lg lg:text-[24px] leading-normal tracking-wide text-neutral-500 max-w-3xl">
          Acht Kategorien, eine Sammlung. Wähle, wo deine <br className="hidden md:block" />
          nächste Inspiration hingehört.
        </p>
      </div>

      {/* ================= GRID: statische Kategorien + "Neue" ================= */}
      <div className="mt-12 w-full border-[3px] border-[#808080] bg-[#808080] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3px]">

        {Object.values(collections).map((collect) => {
          const isActive = selectedCategory === collect.id;

          return (
            <button
              key={collect.id}
              type="button"
              onClick={() => {
                setSelectedCategory(collect.id);
                if (onNext) onNext();
              }}
              className={`group flex flex-col justify-between p-6 h-[200px] w-full text-left outline-none transition-all duration-300 relative
                ${isActive
                  ? "bg-black text-white"
                  : "bg-[#EDEDED] text-black hover:bg-neutral-100"
                }`}
            >
              <div className="w-full">
                <span className={`material-symbols-outlined text-[54px] transition-colors duration-300
                  ${isActive
                    ? "text-white"
                    : "text-[#808080] group-hover:text-black"
                  }`}
                >
                  {collect.icon}
                </span>
              </div>

              <div className="w-full space-y-1">
                <div className={`font-inter font-black text-2xl lg:text-2xl uppercase leading-none tracking-wide transition-colors
                  ${isActive ? "text-white" : "text-black"}`}
                >
                  {collect.name}
                </div>

                <div className={`text-xs font-bold tracking-widest uppercase transition-colors
                  ${isActive ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  {collect.number} — {collect.code}
                </div>
              </div>

              {isActive && (
                <span className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-[#E23B2A] animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* ================= GRID: bestehende eigene Sammlungen ================= */}
      {customCollections.length > 0 && (
        <div className="mt-8 w-full">
          <p className="font-inter font-black text-lg tracking-wider text-neutral-500 uppercase mb-3">
            Oder Objekt zu einer eigenen Sammlung hinzufügen
          </p>

          <div className="w-full border-[3px] border-[#808080] bg-[#808080] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3px]">
            {customCollections.map((collect) => {
              const isActive = selectedCategory === collect.id;

              return (
                <button
                  key={collect.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(collect.id);
                    if (onNext) onNext();
                  }}
                  className={`group flex flex-col justify-between p-6 h-[200px] w-full text-left outline-none transition-all duration-300 relative
                    ${isActive
                      ? "bg-black text-white"
                      : "bg-[#EDEDED] text-black hover:bg-neutral-100"
                    }`}
                >
                  <div className="w-full">
                    <span className={`material-symbols-outlined text-[54px] transition-colors duration-300
                      ${isActive
                        ? "text-white"
                        : "text-[#808080] group-hover:text-black"
                      }`}
                    >
                      folder
                    </span>
                  </div>

                  <div className="w-full space-y-1">
                    <div className={`font-inter font-black text-2xl lg:text-2xl uppercase leading-none tracking-wide transition-colors
                      ${isActive ? "text-white" : "text-black"}`}
                    >
                      {collect.title}
                    </div>

                    <div className={`text-xs font-bold tracking-widest uppercase transition-colors
                      ${isActive ? "text-neutral-400" : "text-neutral-500"}`}
                    >
                      {collect._count?.objects ?? 0} OBJEKTE
                    </div>
                  </div>

                  {isActive && (
                    <span className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-[#E23B2A] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}