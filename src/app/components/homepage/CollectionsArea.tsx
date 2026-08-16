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
            <div className="relative z-10 w-full h-[532px] mt-15 
                            md:-mt-30 md:ml-4 md:h-[832px]
                            lg:ml-0 lg:mt-43 lg:w-[1280px]" 
                            id="discover">

                <p
                    className="block text-center grotesk-xbold  leading-[100%] tracking-[1%] uppercase text-[48px]
                               md:text-left  md:ml-4
                               lg:text-[64px] lg:top-13 lg:left-15.25 lg:absolute lg:ml-0"
                >
                    01.Alles, was dich<br></br>inspiriert.
                </p>
                <div className="-translate-y-50 translate-x-15
                                md:-translate-y-30 md:translate-x-0
                                lg:translate-y-0 lg:translate-x-0">

                    {
                        cards.map((card, index) => (
                            <div
                                key={card.name}
                                className={`absolute shadow-[8px_8px_8px_0_rgba(0,0,0,0.25)] ${index === 0
                                        ? "block"
                                        : index < 3
                                            ? "hidden md:block"
                                            : "hidden lg:block"
                                    }`}
                                style={{ left: card.left, top: card.top }}
                            >

                                <div className="w-[236.138px] h-60.5 border-[5px] border-black" style={{ background: card.color }} />

                                <div className="relative w-[236.138px] h-30 bg-white border-[5px] border-black">

                                    <div className="grotesk-xbold absolute left-3 top-2 text-[36px] uppercase">
                                        {card.name}
                                        <span className='relative -top-2.5 ml-1 text-[16px] bold'>
                                            ®
                                        </span>
                                    </div>

                                    <div className="grotesk-xbold absolute left-3 top-10 text-[24px] uppercase">
                                        {card.count}
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}