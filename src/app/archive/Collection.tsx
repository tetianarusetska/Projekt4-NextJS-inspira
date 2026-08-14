import { CollectionProps } from "../types/CollectionProps";
import { collections } from "../data/Collections";


export default function Collection({ selectedCategory, setSelectedCategory }: CollectionProps) {


    return (
        <>
            <div id="collection" className="mb-20">

                <div className="mt-20 flex flex-col gap-4 ml-5.25">
                    <p className="grotesk-xbold text-[32px] leading-[100%] tracking-[1%]">01    –    SAMMLUNG WAHLEN</p>
                    <p
                        className="grotesk-xbold text-[64px] leading-[84%] tracking-[1%]"
                    >
                        jedes objekt gehort in<br></br>eine sammlung.
                    </p>
                    <p
                        className="text-[24px] leading-[100%] tracking-[1%]"
                    >
                        Acht Kategorien, eine Sammlung. Wahle, wo deine<br></br>nachste Inspiration hingehort.
                    </p>
                </div>

                <div className="ml-5.25 mt-20 grid h-176.5 w-235.75 grid-cols-4 grid-rows-3">
                    {Object.values(collections).map((collect, index) => {

                        const isActive = selectedCategory === collect.id;
                        const row = Math.floor(index / 4);
                        const col = index % 4;

                        return (
                            <button
                                key={collect.id}
                                type="button"
                                onClick={() => setSelectedCategory(collect.id)}
                                className={`relative flex h-full w-full appearance-none flex-col text-left outline-none transition-colors ${isActive ? "bg-black text-white" : "bg-[#EDEDED] text-black"} ${row === 0 ? "border-t border-[#808080]" : ""} ${col === 0 ? "border-l border-[#808080]" : "border-l border-[#808080]"} ${col === 3 && row < 2 ? "border-r border-[#808080]" : ""} ${row < 2 ? "border-b border-[#808080]" : ""} ${index >= 8 ? "border-b border-[#808080]" : ""} ${index === 10 ? "border-r border-[#808080]" : ""}`}
                            >
                                <span className={`material-symbols-outlined absolute left-6 top-12 text-[60px] ${isActive ? "text-white" : "text-[#808080]"}`}>
                                    {collect.icon}
                                </span>

                                <div className="absolute bottom-6 left-6">
                                    <div className={`grotesk-xbold text-[36px] leading-none ${isActive ? "text-white" : "text-black"}`}>
                                        {collect.name}
                                    </div>

                                    <div className={`mt-3 text-[24px] leading-none ${isActive ? "text-white" : "text-black"}`}>
                                        {collect.number} - {collect.code}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

            </div>

        </>
    )
}