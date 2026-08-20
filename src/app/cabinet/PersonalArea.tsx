import Link from "next/link";
import { collections } from "../data/Collections";
import { PersonalAreaProps } from "../types/PersonalAreaProps";


export default function PersonalArea({ user, counts }: PersonalAreaProps) {

    const displayName = user.name?.trim() || user.email;

    const totalObjects = Object.values(counts).reduce((sum, n) => sum + n, 0);

    const totalCollections = Object.keys(collections).length;

    return (
        <>
            <div className="relative z-10">
                {/* Decorative Text */}
                <p
                    className="absolute leading-17.5 tracking-[1.0px] text-[64px] left-4 top-20
                               md:leading-20.5 md:text-[74px] md:left-8 md:top-20
                               lg:left-10.75 lg:top-35 lg:text-[96px]"
                >
                    Personliches<br></br>Archiv
                </p>
                <p
                    className="md:hidden text-[24px] top-55 left-35 absolute"
                >
                    von {displayName}
                </p>
                <p
                    className="hidden 
                               lg:block lg:absolute lg:left-78 lg:top-75 lg:text-[32px] lg:leading-25 lg:tracking-[0.5px]"
                >
                    Jede Idee beginnt mit einer Inspiration
                </p>
            </div>

            {/* Begrüßung */}
            {/* MD, LG */}
            <div className="flex flex-col relative z-30">
                <p
                    className="text-right absolute left-286 top-16 text-[40px] leading-9.5 tracking-normal"
                >
                    {displayName}
                </p>
                <p
                    className="text-right absolute left-286 top-29 text-[24px] leading-9.5 tracking-normal"
                >
                    SAMMLER SEIT 2026J.
                </p>
            </div>

            {/* BEGRÜßUNG */}
            {/* MOB */}
            <div className="relative z-30 md:mt-35 lg:mt-0 flex flex-col">

                <div className="hidden md:block lg:hidden grotesk-xbold">
                    <p
                        className="absolute left-140 -top-25 text-2xl"
                    >
                        Hallo, {displayName}
                    </p>
                </div>

                <div className="hidden md:block lg:hidden">
                    <p
                        className="absolute left-140 -top-18 text-xl"
                    >
                        SAMMLER SEIT 2026J.
                    </p>
                </div>

                {/* Objekte, Sammlungen */}
                <div>
                    <p
                        className="hidden grotesk-xbold
                                   md:block md:text-right md:absolute md:leading-9.5 md:tracking-normal md:uppercase md:left-155 md:top-5 md:text-[64px]
                                   lg:left-272 lg:top-63.5 lg:text-[96px]"
                    >
                        {totalCollections}
                    </p>
                    <p
                        className="hidden text-right grotesk-xbold
                                   md:block md:absolute md:text-[40px] md:leading-9.5 md:tracking-normal md:uppercase md:left-140 md:top-20
                                   lg:left-250 lg:top-81.75 lg:text-[48px]"
                    >
                        Sammlungen
                    </p>
                </div>
                <div>
                    <p
                        className="hidden text-right grotesk-xbold 
                                   md:block md:absolute md:leading-9.5 md:tracking-normal md:uppercase md:left-155 md:top-45 md:text-[64px]
                                   lg:left-330 lg:top-63.5 lg:text-[96px] 
                        "
                    >
                        {totalObjects}
                    </p>
                    <p
                        className="hidden text-right grotesk-xbold 
                                   md:block md:absolute md:leading-9.5 md:tracking-normal md:uppercase md:left-144 md:top-60 md:text-[40px]
                                   lg:left-318 lg:top-81.75 lg:text-[48px]"
                    >
                        Objekte
                    </p>
                </div>

            </div>

            {/* CTA Buttons */}
            <div className="relative z-10">

                <button
                    className="hidden grotesk-xbold
                    md:block md:uppercase md:absolute md:top-100 md:left-75 md:text-center md:text-[24px] md:tracking-[1px] md:w-48.75 md:h-12.25 md:bg-(--mainColor) md:text-white
                    lg:top-148 lg:left-150"
                >
                    <Link href="/collections">Sammlungen</Link>
                </button>
                <button
                    className="hidden grotesk-xbold 
                    md:block md:uppercase md:absolute md:top-100 md:left-135  md:text-center md:text-[24px] md:w-48.75 md:h-12.25 md:tracking-[1px] md:border-2 md:border-(--mainColor)
                    lg:top-148 lg:left-250"
                >
                    <Link href="/archive">Archivieren</Link>
                </button>

            </div>
        </>
    )
}