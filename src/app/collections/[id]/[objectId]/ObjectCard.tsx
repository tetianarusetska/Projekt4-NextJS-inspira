import { ObjectCardProps } from "@/app/types/ObjectCardProps";


export default function ObjectCard({ collection, object }: ObjectCardProps) {
    return (
        <>
            <div className="relative h-300">
                <div className="absolute bg-[#808080]" style={{ left: 0, top: 140, width: 1470, height: 3 }} />

                {/* Objekt Titel */}
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

                {/* Obkjekt Karte */}
                <div className="ml-11 mt-20 w-full max-w-301.75 h-148.75 border-[5px] border-black bg-black">
                    <div className="grid grid-cols-1 md:grid-cols-[38%_62%]">

                        <div className="h-146 w-116.25 bg-[#012F38]" />

                        <div className="ml-12 text-white">
                            <h3 className="mt-10 grotesk-xbold leading-[136%] tracking-[5%] text-[40px]">
                                OPUS PISTORUM
                            </h3>
                            <p className="grotesk-xbold mt-4 leading-[36%] tracking-[1%] text-[20px]">
                                BUCH  –  N°32
                            </p>
                            <div className="mt-14 flex flex-row gap-12">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[24px] text-[#808080]">Autor</p>
                                    <p className="text-[24px]">Henry Miller</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[24px] text-[#808080]">Erscheinungsjahr</p>
                                    <p className="text-center text-[24px]">1947</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[24px] text-[#808080]">Seitenzahl</p>
                                    <p className="text-center text-[24px]">688</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[24px] text-[#808080]">Entdeckt durch</p>
                                    <p className="text-[24px]">Buchladen in Prag</p>
                                </div>
                            </div>
                            <div>
                                <p className="mt-8 text-[#808080] text-[24px]">
                                    Bestes Zitat
                                </p>
                                <p className="mt-6 font-['Kino40'] w-[672.95px] h-27.75 text-[32px] leading-[100%]">
                                    “ Wenn die Maschinerie stillstehst, verbreitet sie eine Leere,
                                    die noch unheimlicher ist als der Tod. Ich war
                                    ein Gespenst, das sich in einem Vakuum bewegte. “
                                </p>
                            </div>
                            <p className="mt-3 text-[24px]">
                                Ich habe es an einem Regentag in Prag gefunden — die erste
                                Seite hat mich sofort gepackt.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}