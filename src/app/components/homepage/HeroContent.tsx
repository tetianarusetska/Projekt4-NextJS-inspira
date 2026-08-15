import Link from "next/link";

export default function HeroContent() {
    return (
        <>
            <div className="relative z-10">
                <p
                    className="absolute leading-17.5 tracking-[1.0px] text-[64px] left-8 top-20
                               md:leading-20.5 md:text-[74px]
                               lg:left-10.75 lg:top-35 lg:text-[96px]"
                >
                    Mehr als ein<br></br>Archiv
                </p>
                <p
                    className="hidden 
                               lg:block lg:absolute lg:left-78 lg:top-75 lg:text-[32px] lg:leading-25 lg:tracking-[0.5px]"
                >
                    Jede Idee beginnt mit einer Inspiration
                </p>

                <button
                    className="absolute top-100 left-8 uppercase text-center grotesk-xbold text-[32px] w-60.25 h-15.5 leading-[102%] tracking-[1%] bg-(--mainColor) text-white
                               md:hidden"
                >
                    <Link href="/login">Kuratieren</Link>
                </button>
            </div>

            <div className="relative z-10">
                <p
                    className="hidden grotesk-xbold
                               lg:block lg:text-right lg:absolute lg:left-295 lg:top-6 lg:text-[48px] lg:leading-9.5 lg:tracking-normal lg:uppercase"
                >
                    Dein<br></br>personlicher<br></br>Sammlungsraum
                </p>
            </div>

            <div className="relative z-10 mt-20">

                <div>
                    <p
                        className="hidden grotesk-xbold
                        md:block md:text-right md:absolute md:leading-9.5 md:tracking-normal md:uppercase md:left-155 md:top-5 md:text-[64px]
                        lg:left-266 lg:top-63.5 lg:text-[96px]"
                    >
                        10
                    </p>
                    <p
                        className="hidden text-right grotesk-xbold
                        md:block md:absolute md:text-[40px] md:leading-9.5 md:tracking-normal md:uppercase md:left-140 md:top-20
                        lg:left-250 lg:top-81.75 lg:text-[48px]"
                    >
                        Sammlungen
                    </p>
                </div>
                <div className="mt-10">
                    <p
                        className="hidden text-right grotesk-xbold 
                        md:block md:absolute md:leading-9.5 md:tracking-normal md:uppercase md:left-148 md:top-45 md:text-[64px]
                        lg:left-315 lg:top-63.5 lg:text-[96px] 
                        "
                    >
                        11272
                    </p>
                    <p
                        className="hidden text-right grotesk-xbold 
                        md:block md:absolute md:leading-9.5 md:tracking-normal md:uppercase md:left-147 md:top-60 md:text-[40px]
                        lg:left-318 lg:top-81.75 lg:text-[48px]"
                    >
                        Objekte
                    </p>
                </div>

            </div>

            <div className="relative z-10">

                <button
                    className="hidden grotesk-xbold
                    md:block md:uppercase md:absolute md:top-110 md:left-75 md:text-center md:text-[24px] md:tracking-[1px] md:w-48.75 md:h-12.25 md:bg-(--mainColor) md:text-white
                    lg:top-148 lg:left-150"
                >
                    <Link href="/login">Sammlungen</Link>
                </button>
                <button
                    className="hidden grotesk-xbold 
                    md:block md:uppercase md:absolute md:top-110 md:left-135  md:text-center md:text-[24px] md:w-48.75 md:h-12.25 md:tracking-[1px] md:border-2 md:border-(--mainColor)
                    lg:top-148 lg:left-250"
                >
                    <Link href="/login">Archivieren</Link>
                </button>

            </div>
        </>
    );
}