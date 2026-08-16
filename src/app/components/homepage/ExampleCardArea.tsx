import Link from "next/link";

export default function ExampleCardArea() {
    return (
        <>
            <div className="relative z-10 h-screen w-screen mt-8 
                            md:mt-0 md:-translate-y-20
                            lg:mt-13 lg:translate-y-0">

                <div className="flex flex-col gap-13.75 items-center justify-center">

                    <p
                        className="mt-20 text-center grotesk-xbold text-[48px] leading-[102%] tracking-[1%] uppercase
                                   md:mt-0
                                   lg:text-[64px]"
                    >
                        02.KURATIERE DEINE WELT.
                    </p>
                    <p
                        className="text-[20px] text-center
                                   md:text-[24px]
                                   lg:text-[32px] lg:tracking-[3%] lg:text-center "
                    >
                        Organisiere deine Inspirationen, entdecke Verbindungen zwischen deinen<br></br>
                        Interessen und baue eine digitale Sammlung deiner eigenen Welt auf.
                    </p>
                    <button
                        className="uppercase text-center grotesk-xbold text-[32px] leading-[102%] tracking-[1%] w-60.25 h-15.5 bg-(--mainColor) text-white"
                    >
                        <Link href="/login">Kuratieren</Link>
                    </button>

                </div>

                <div className="hidden 
                                md:block md:mx-auto md:mt-30 md:border-[5px] md:border-black md:bg-black
                                lg:w-full lg:max-w-301.75 lg:h-148.75">

                    <div className="grid grid-cols-1 lg:grid-cols-[38%_62%]">
                        
                        <div className="md:h-100 lg:h-146 md:w-189.5 lg:w-116.25 bg-[#012F38]" />

                        <div className="md:ml-8 lg:ml-12 text-white">

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