import { CollectionObject } from "@/app/types/CollectionObject";

interface ObjectCardProps {
    object: CollectionObject;
}

export default function ObjectCard({ object }: ObjectCardProps) {
    return (
        <div
            className="shadow-[8px_8px_8px_0_rgba(0,0,0,0.25)]"
        >
            {/* COLOR */}
            <div
                className="h-60.5 w-[236.138px] border-[5px] border-black"
                style={{
                    backgroundColor: object.color,
                }}
            />

            {/* INFO */}
            <div className="relative h-30 w-[236.138px] border-[5px] border-black bg-white">

                <div className="grotesk-xbold absolute left-3 top-2 text-[36px] uppercase">
                    {object.name}

                    <span className="relative -top-2.5 ml-1 text-[16px]">
                        ®
                    </span>
                </div>

                <div className="grotesk-xbold absolute left-3 top-10 text-[24px] uppercase">
                    N°{String(object.id).padStart(2, "0")}
                </div>

            </div>
        </div>
    );
}