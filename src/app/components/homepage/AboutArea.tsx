import Link from "next/link";

export default function AboutArea() {
    return (
        <div className="md:mt-100 relative z-30 flex flex-col" id="about">

            <div className="hidden 
                            md:flex md:flex-col md:px-15.25">
                <p
                    className="text-left grotesk-xbold text-[64px] leading-[100%] tracking-[1%] uppercase"
                >
                    Die digitale Sammlung deiner<br></br>physischen und digitalen<br></br>Welt.
                </p>

                <p className="mt-16 text-[36px] text-left leading-[100%] tracking-[1%]">
                    <span className="font-[Fayte] text-[36px]">i.nspira</span> gibt allem einen gemeinsamen Ort, was du sammelst — vom Buch im Regal bis zum Bild auf deinem Bildschirm.
                    Sammle physische Objekte und digitale Inhalte an einem Ort und erganze sie mit Fotos, Notizen, Links und personlichen Erinnerungen.
                    So entsteht eine Sammlung, die nicht nur zeigt, was dich interessiert, sondern auch, was dich inspiriert.
                </p>

                <p className="mt-24 grotesk-xbold text-[40px] leading-[110%] tracking-[1%] uppercase">
                    Analog gesammelt. Digital bewahrt. Personlich verbunden.
                </p>
            </div>

            <div className="mt-36 w-full border-t-2 border-[#808080] border-b-2 -translate-y-40 md:translate-y-0">
                <div className="px-6 py-8 ml-10 flex flex-col gap-4">
                    <p className="grotesk-xbold text-[36px] leading-[100%] tracking-[5%] uppercase">
                        N°01, PERSONLICH.
                    </p>
                    <p className="text-[24px] text-left leading-[100%] tracking-[1%]">
                        Deine Sammlung gehort nur dir — mit eigenen Notizen, Zitaten und der Geschichte, wie jedes Objekt zu dir gefunden hat.
                    </p>
                </div>
            </div>

            <div className="w-full border-[#808080] border-b-2 -translate-y-40 md:translate-y-0">
                <div className="ml-10 px-6 py-8 flex flex-col gap-4">
                    <p className="grotesk-xbold text-[36px] leading-[100%] tracking-[5%] uppercase">
                        N°02, DIGITAL.
                    </p>
                    <p className="text-[24px] text-left leading-[100%] tracking-[1%]">
                        Kein physisches Regal, keine Grenzen. Deine Sammlung wachst mit dir,
                        überall zugänglich, immer geordnet.
                    </p>
                </div>
            </div>

            <div className="w-full border-[#808080] border-b-2 -translate-y-40 md:translate-y-0">
                <div className="ml-10 px-6 py-8 flex flex-col gap-4">
                    <p className="grotesk-xbold text-[36px] leading-[100%] tracking-[5%] uppercase">
                        N°03, KURATIERT.
                    </p>
                    <p className="text-[24px] text-left leading-[100%] tracking-[1%]">
                        Kein wahlloses Sammeln. Jedes Objekt bekommt seinen Platz, seine Nummer, seinen Kontext — wie in einem echten Archiv.
                    </p>
                </div>
            </div>

            <div className="hidden md:mt-44 nd:mx-10">

                <p className="grotesk-xbold text-[36px] tracking-[5%]">
                    so funktioniert&apos;s...
                </p>

                <div className="mt-10 w-full h-60 border-dashed border-[#808080] border-2">
                    <div className="grid grid-cols-4 h-full">

                        <div className="flex flex-col gap-4 border-r-2 h-full border-[#808080]">
                            <p className="mt-8 ml-4 grotesk-xbold text-[32px] leading-[100%] uppercase tracking-[5%]">
                                N°01, SAMMLUNG<br></br>WAHLEN
                            </p>
                            <p className="mt-8 ml-4 text-[20px] leading-[110%] tracking-[5%]">
                                Bucher, Musik, Kunstwerke<br></br>
                                oder erstellst eine eigene<br></br>
                                Kategorie.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 border-r-2 h-full border-[#808080]">
                            <p className="mt-8 ml-4 grotesk-xbold text-[32px] leading-[100%] uppercase tracking-[5%]">
                                N°02, Details<br></br>hinzufUgen
                            </p>
                            <p className="mt-8 ml-4 text-[20px] leading-[110%] tracking-[5%]">
                                Titel, Autor, dein Zitat,
                                Notiz — so viel oder so
                                wenig du willst.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 border-r-2 h-full border-[#808080]">
                            <p className="mt-8 ml-4 grotesk-xbold text-[32px] leading-[100%] uppercase tracking-[5%]">
                                N°03, Medien<br></br>hinzufugen
                            </p>
                            <p className="mt-8 ml-4 text-[20px] leading-[110%] tracking-[5%]">
                                Ein Cover, ein Foto — zeig,
                                was bleibt.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="mt-8 ml-4 grotesk-xbold text-[32px] leading-[100%] uppercase tracking-[5%]">
                                N°04, Archivieren
                            </p>
                            <p className="mt-16 ml-4 text-[20px] leading-[110%] tracking-[5%]">
                                Dein Objekt bekommt seine
                                Nummer und seinen Platz in
                                deinem Archiv.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="hidden 
                            md:mt-50 md:mb-40 md:w-full md:flex md:flex-col md:justify-center md:items-center">
                <p className="text-center grotesk-xbold text-[64px] leading-[100%] uppercase tracking-[5%]">
                    Beginne deine Sammlung.
                </p>

                <button
                    className="mt-15 uppercase text-center grotesk-xbold text-[24px] leading-[100%] tracking-[1%] w-75 h-13.5 bg-(--mainColor) text-white"
                >
                    <Link href="/login">Kuratieren</Link>
                </button>
            </div>

        </div>
    )
}
