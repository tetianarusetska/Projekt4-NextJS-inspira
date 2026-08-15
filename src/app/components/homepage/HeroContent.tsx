import Link from "next/link";

export default function HeroContent() {
    return (
        <>
            <div className="relative z-10">
                <p
                    className="absolute leading-25.5 tracking-[1.0px] text-[64px] left-8 top-20
                    lg:left-10.75 lg:top-35 lg:text-[96px]
                    "
                >
                    Mehr als ein<br></br>Archiv
                </p>
                <p
                    className="hidden lg:absolute lg:left-78 lg:top-75 lg:text-[32px] lg:leading-25 lg:tracking-[0.5px]"
                >
                    Jede Idee beginnt mit einer Inspiration
                </p>
            </div>

            <div className="relative z-10">
                <p
                    className="text-right grotesk-xbold absolute left-295 top-6 text-[48px] leading-9.5 tracking-normal uppercase"
                >
                    Dein<br></br>personlicher<br></br>Sammlungsraum
                </p>
            </div>

            <div className="relative z-10">

                <div>
                    <p
                        className="text-right grotesk-xbold absolute left-266 top-63.5 text-[96px] leading-9.5 tracking-normal uppercase"
                    >
                        10
                    </p>
                    <p
                        className="text-right grotesk-xbold absolute left-250 top-81.75 text-[48px] leading-9.5 tracking-normal uppercase"
                    >
                        Sammlungen
                    </p>
                </div>
                <div>
                    <p
                        className="text-right grotesk-xbold absolute left-315 top-63.5 text-[96px] leading-9.5 tracking-normal uppercase"
                    >
                        11272
                    </p>
                    <p
                        className="text-right grotesk-xbold absolute left-318 top-81.75 text-[48px] leading-9.5 tracking-normal uppercase"
                    >
                        Objekte
                    </p>
                </div>

            </div>

            <div className="relative z-10">

                <button 
                    className="uppercase absolute top-148 left-150 text-center grotesk-xbold text-[24px] tracking-[1px] w-48.75 h-12.25 bg-(--mainColor) text-white"
                >
                    <Link href="/login">Sammlungen</Link>
                </button>
                <button
                    className="uppercase absolute top-148 left-250  text-center grotesk-xbold text-[24px] w-48.75 h-12.25 tracking-[1px] border-2 border-(--mainColor)"
                >
                    <Link href="/login">Archivieren</Link>
                </button>
                
            </div>
        </>
    );
}