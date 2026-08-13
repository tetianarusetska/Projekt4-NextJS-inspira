export default function CollectionsArea() {

    const cards = [
        { name: "BUCHER", count: "2087 OBJEKTE", color: "#012F38", top: 252.5, left: 5.5 },
        { name: "MUSIK", count: "3201 OBJEKTE", color: "#015C42", top: 208.5, left: 250.5 },
        { name: "MAGAZINE", count: "787 OBJEKTE", color: "#0688B8", top: 310.5, left: 494.5 },
        { name: "BILDER", count: "4000 OBJEKTE", color: "#D72638", top: 233.5, left: 737.5 },
        { name: "ZITATE", count: "1090 OBJEKTE", color: "#13322C", top: 276.5, left: 982.5 },
        { name: "MUSEEN", count: "999 OBJEKTE", color: "#000000", top: 158.5, left: 1228.5 }
    ];

    return (
        <>
            <div className="relative z-10 mt-43" style={{ height: 832, width: 1280 }} id="discover">

                <p
                    className="text-left grotesk-xbold absolute left-15.25 top-13 text-[64px] leading-[100%] tracking-[1%] uppercase"
                >
                    01.Alles, was dich<br></br>inspiriert.
                </p>

                {
                    cards.map((card) => (
                        <div key={card.name} className="absolute shadow-[8px_8px_8px_0_rgba(0,0,0,0.25)]" style={{ left: card.left, top: card.top }}>

                            <div className="w-[236.138px] h-60.5 border-[5px] border-black" style={{ background: card.color }} />

                            <div className="relative w-[236.138px] h-30 bg-white border-[5px] border-black">

                                <div className="grotesk-xbold absolute left-3 top-2x text-[36px] uppercase">
                                    {card.name} ®
                                </div>

                                <div className="grotesk-xbold absolute left-3 top-10 text-[24px] uppercase">
                                    {card.count}
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}