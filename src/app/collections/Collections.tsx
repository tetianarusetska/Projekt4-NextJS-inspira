import Link from "next/link";
import { collections } from "../data/Collections";

export default function Collections() {
    return (
        <div className="relative h-420 flex flex-col">

            <div className="mt-20">
                <p className="grotesk-xbold absolute left-5.25 top-10.75 text-[64px] leading-[100%] tracking-[1%] text-(--mainColor)">
                    dein personlicher<br />
                    sammlungsraum.
                </p>

                <p className="absolute left-5.25 top-46 text-[36px] leading-[100%] text-(--mainColor)">
                    Personlich . Digital . Kuratiert .
                </p>
            </div>

            <div className="absolute right-8.25 top-10.75 flex flex-col items-end gap-0">
                <p className="grotesk-xbold text-right text-[48px] leading-[100%] tracking-[1%] text-[#808080]">
                    sammlungen – XXX
                </p>

                <p className="grotesk-xbold text-right text-[48px] leading-[100%] tracking-[1%] text-[#808080]">
                    objekte – XXX
                </p>
            </div>

            <div className="absolute left-0 top-0 h-[1620px] w-[1280px]">
                {Object.values(collections).map((col) => (
                    <div
                        key={col.id}
                        className="absolute shadow-[8px_8px_8px_0_rgba(0,0,0,0.25)]"
                        style={{
                            left: col.left,
                            top: col.top,
                        }}
                    >
                        <Link href={`/collections/${col.id}`}>
                            <div
                                className="h-60.5 w-[236.138px] border-[5px] border-black"
                                style={{ background: col.color }}
                            />

                            <div className="relative h-30 w-[236.138px] border-[5px] border-black bg-white">
                                <div className="grotesk-xbold absolute left-3 top-2 text-[36px] uppercase">
                                    {col.name}
                                    <span className='relative -top-2.5 ml-1 text-[16px] bold'>
                                        ®
                                    </span>
                                </div>

                                <div className="grotesk-xbold absolute left-3 top-10 text-[24px] uppercase">
                                    {col.count}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}