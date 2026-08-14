import { CollectionContentProps } from "@/app/types/CollectionContentProps";

export default function CollectionContent({ collection }: CollectionContentProps) {

    return (
        <div className="mt-20 relative h-420 flex flex-col">
            <span className="mt-20 ml-9 material-symbols-outlined text-[60px]">
                {collection.icon}
            </span>
            <p className="grotesk-xbold">
                {collection.name}
                </p>
            <div className="absolute bg-[#808080]" style={{ left: 0, top: 203, width: 1470, height: 3 }} />
        </div>
    )
}

