import Link from "next/link";
import { collections } from "../data/Collections";
import { PersonalAreaProps } from "../types/PersonalAreaProps";
import EditNameForm from "./EditNameForm";

export default function Studio({ user, counts }: PersonalAreaProps) {
    
    const displayName = user.name?.trim() || user.email;
    const totalObjects = Object.values(counts).reduce((sum, n) => sum + n, 0);
    const totalCollections = Object.values(collections).filter((collection) => collection.id !== "customCollection").length;


    return (
        <div className="grid grid-cols-12 w-full min-h-[calc(100vh-72px)] text-black relative selection:bg-black selection:text-[#EDEDED] overflow-hidden">

            {/* ================= LEFT SIDE ================= */}
            <section className="relative z-10 col-span-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-black p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between min-h-0 lg:min-h-[calc(100vh-50px)] bg-white/10 backdrop-blur-[1px] gap-6 lg:gap-0">

                <div>
                    <span className="text-sm font-bold tracking-widest text-neutral-400 font-text uppercase block">
                        Studio / Persönlicher Bereich
                    </span>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-8 my-auto">

                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.9] lg:leading-[0.85] tracking-tight uppercase font-inter">
                            Persönliches<br />Archiv
                        </h2>
                        <p className="text-neutral-500 font-medium">
                            Jede Idee beginnt mit einer Inspiration.
                        </p>
                    </div>

                    <div className="space-y-2 pt-6 border-t border-black">
                        <EditNameForm initialName={displayName} />
                        {/* <p className="text-2xl font-black uppercase font-text">
                            {displayName}
                        </p> */}
                        <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider">
                            Sammler seit 2026
                        </p>
                    </div>

                </div>

            </section>

            {/* ================= RIGHT SIDE (col-span-7) ================= */}
            <section className="relative z-10 col-span-12 lg:col-span-7 flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 lg:p-12 min-h-0 lg:min-h-[calc(100vh-72px)] bg-white/5">

                <div className="flex flex-col items-center w-full max-w-xl">

                    <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 w-full justify-items-center items-start mt-6 sm:mt-12 lg:mt-24">

                        <Link
                            href="/collections"
                            className="border border-black bg-white/40 backdrop-blur-[2px] w-full aspect-square max-w-[200px] p-3 sm:p-4 md:p-6 flex flex-col justify-between group transition-colors duration-300 hover:bg-black hover:text-[#EDEDED]"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-sm font-bold tracking-widest text-neutral-400 group-hover:text-neutral-500 uppercase">
                                    Sektion
                                </span>

                                <span className="material-symbols-outlined !text-2xl text-black group-hover:text-white transition-colors">
                                    splitscreen
                                </span>
                            </div>

                            <div className="space-y-1">
                                <span className="text-5xl md:text-6xl font-black font-display leading-none tracking-tighter block transition-transform group-hover:translate-x-1 duration-300">
                                    {totalCollections}
                                </span>

                                <h3 className="text-sm font-bold uppercase tracking-wider block">
                                    Sammlungen
                                </h3>
                            </div>
                        </Link>

                        <Link
                            href="/archive"
                            className="border border-black bg-white/40 backdrop-blur-[2px] w-full aspect-square max-w-[200px] p-3 sm:p-4 md:p-6 flex flex-col justify-between group transition-colors duration-300 hover:bg-black hover:text-[#EDEDED]"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-sm font-bold tracking-widest text-neutral-400 group-hover:text-neutral-500 uppercase">
                                    Element
                                </span>

                                <span className="material-symbols-outlined !text-3xl text-black group-hover:text-white transition-colors">
                                    layers
                                </span>
                            </div>

                            <div className="space-y-1">
                                <span className="text-5xl md:text-6xl font-black font-display leading-none tracking-tighter block transition-transform group-hover:translate-x-1 duration-300">
                                    {totalObjects}
                                </span>

                                <h3 className="text-sm font-bold uppercase tracking-wider block">
                                    Objekte
                                </h3>
                            </div>
                        </Link>

                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full mt-8 sm:mt-16 lg:mt-32">
                        <Link
                            href="/collections"
                            className="flex items-center justify-center border border-black py-3 sm:py-4 bg-black text-[#EDEDED] text-[10px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest uppercase transition-all duration-200 hover:bg-transparent hover:text-black hover:scale-[1.02]"
                        >
                            SAMMLUNGEN
                        </Link>
                        <Link
                            href="/archive"
                            className="flex items-center justify-center border border-black bg-white text-black py-3 sm:py-4 text-[10px] sm:text-xs md:text-sm tracking-wider sm:tracking-widest font-bold uppercase transition-all duration-200 hover:bg-black hover:text-[#EDEDED] hover:scale-[1.02]"
                        >
                            ARCHIVIEREN
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    );
}