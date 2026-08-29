"use client";

import { useEffect, useMemo, useState } from "react";
import { slugify } from "@/app/utils/slugify";
import { CollectionContentProps } from "@/app/types/CollectionContentProps";
import { getObjectColor } from "@/app/utils/getObjectColor";
import Link from "next/link";


type SortBy = "newest" | "az";
type SortDirection = "asc" | "desc";

export default function CollectionContent({ collection, objects }: CollectionContentProps) {

  const objectsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("newest");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, sortDirection]);

  const sortedObjects = useMemo(() => {
    const sorted = [...objects].sort((a, b) => {
      switch (sortBy) {
        case "az":
          return a.title.localeCompare(b.title, "de");
        case "newest":
        default:
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
    });

    return sortDirection === "asc" ? sorted : sorted.reverse();
  }, [objects, sortBy, sortDirection]);

  const totalPages = Math.ceil(sortedObjects.length / objectsPerPage) || 1;
  const startIndex = (currentPage - 1) * objectsPerPage;
  const currentObjects = sortedObjects.slice(startIndex, startIndex + objectsPerPage);

  const handleSortByClick = (value: SortBy) => {
    setSortBy(value);
  };

  const toggleSortDirection = () => {
    setSortDirection((dir) => (dir === "asc" ? "desc" : "asc"));
  };

  const sortButtonClass = (isActive: boolean) =>
    `transition-colors border-b pb-0.5 ${isActive
      ? "border-black text-black font-black"
      : "border-transparent text-neutral-600 hover:text-black hover:border-black"
    }`;

  return (
    <div className="w-full text-black min-h-screen flex flex-col justify-between selection:bg-black selection:text-white pb-12">
      <div>

        {/* Header Section */}
        <section className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end w-full border-b-[3px] border-neutral-400 pb-8 gap-6">
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-neutral-400 font-text uppercase block">
              Sammlung /
            </span>
            <div className="flex items-center gap-3">
              {collection.icon && (
                <span className="material-symbols-outlined text-[44px]">
                  {collection.icon}
                </span>
              )}
              <p className="font-text font-bold text-4xl lg:text-[42px] uppercase leading-none">
                {collection.name}
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-neutral-800 font-text">
                Meine Objekte
              </h2>
              <p className="text-neutral-500 text-sm font-medium">
                Durchsuche deine persönlichen Objekte.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 font-inter">
            <p className="text-md md:text-right text-neutral-500 leading-normal">
              N°01 — {sortedObjects.length} Objekte <br />
              <span className="text-md text-neutral-400">zuletzt aktualisiert heute</span>
            </p>
            <div className="uppercase flex flex-wrap gap-4 text-md font-bold tracking-wider">
              <button
                type="button"
                onClick={() => handleSortByClick("newest")}
                className={sortButtonClass(sortBy === "newest")}
              >
                Neuste
              </button>
              <button
                type="button"
                onClick={() => handleSortByClick("az")}
                className={sortButtonClass(sortBy === "az")}
              >
                A–Z
              </button>
              <button
                type="button"
                onClick={toggleSortDirection}
                className="hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5 font-black text-black"
              >
                {sortDirection === "asc" ? "aufsteigend" : "absteigend"}
              </button>
            </div>
          </div>
        </section>

        {/* Grid Karte */}
        <div className="p-8 md:p-12">
          {sortedObjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-xl text-neutral-400 font-medium">
                Noch keine Objekte in dieser Sammlung.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
              {currentObjects.map((object) => (
                <div
                  key={object.id}
                  className="group w-full max-w-[240px] bg-white border-[5px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 ease-out"
                >
                  <Link href={`/collections/${collection.id}/${slugify(object.title)}`}>

                    {/* Swatch Color Block */}
                    <div
                      className="aspect-[3/4] w-full border-b-[5px] border-black overflow-hidden"
                      style={{ background: getObjectColor(object.id) }}
                    >
                      {object.imageUrl && (
                        <img
                          src={object.imageUrl}
                          alt={object.title}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>

                    {/* Bottom Label Plate */}
                    <div className="p-3 bg-black text-white flex flex-col justify-between h-[80px] font-inet font-black border-t-[5px] border-black">
                      <p className="text-lg uppercase tracking-wide truncate leading-tight">
                        {object.title}
                      </p>
                      <div className="flex justify-between items-center text-[11px] text-neutral-400 font-bold mt-1">
                        <span>Objekt</span>
                        <span>N°{String(object.id).padStart(2, "0")}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Pagination Controls */}
      {sortedObjects.length > 0 && (
        <div className="p-8 md:p-12 border-t border-black/10 flex justify-end items-center gap-6 text-xl font-['Grotesk_XBold'] font-black">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
            className={`transition-opacity ${currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:scale-110"}`}
          >
            ←
          </button>

          <span className="tracking-widest">
            {startIndex + 1}–{Math.min(startIndex + objectsPerPage, sortedObjects.length)}
          </span>

          <span className="text-neutral-300">/</span>

          <span className="text-neutral-400">{sortedObjects.length}</span>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => page + 1)}
            className={`transition-opacity ${currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:scale-110"}`}
          >
            →
          </button>
        </div>
      )}

    </div>
  );
}