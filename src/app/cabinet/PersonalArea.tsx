import Link from "next/link";

export default function PersonalArea() {
    return (
        <>
         <div className="relative z-10">
                <p
                    className="absolute left-10.75 top-35 text-[96px] leading-25.5 tracking-[1.0px]"
                >
                    Personliches<br></br>Archiv
                </p>
                <p
                    className="absolute left-78 top-75 text-[32px] leading-25 tracking-[0.5px]"
                >
                    Jede Idee beginnt mit einer Inspiration
                </p>
            </div>

            <div className="flex flex-col relative z-30">
                <p
                    className="text-right absolute left-288 top-26 text-[40px] leading-9.5 tracking-normal"
                >
                XXX XXXXXXXXX
                </p>
                <p
                    className="text-right absolute left-307 top-40 text-[24px] leading-9.5 tracking-normal"
                >
                SAMMLER SEIT XXXXJ.
                </p>
            </div>

            <div className="relative z-30">

                <div>
                    <p
                        className="text-right grotesk-xbold absolute left-272 top-63.5 text-[96px] leading-9.5 tracking-normal uppercase"
                    >
                        X
                    </p>
                    <p
                        className="text-right grotesk-xbold absolute left-250 top-81.75 text-[48px] leading-9.5 tracking-normal uppercase"
                    >
                        Sammlungen
                    </p>
                </div>
                <div>
                    <p
                        className="text-right grotesk-xbold absolute left-330 top-63.5 text-[96px] leading-9.5 tracking-normal uppercase"
                    >
                        X
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
                    <Link href="/collections">Sammlungen</Link>
                </button>
                <button
                    className="uppercase absolute top-148 left-250  text-center grotesk-xbold text-[24px] w-48.75 h-12.25 tracking-[1px] border-2 border-(--mainColor)"
                >
                    <Link href="/archive">Archivieren</Link>
                </button>
                
            </div>
        </>
    )
}