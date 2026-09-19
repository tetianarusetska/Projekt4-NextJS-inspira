"use client";

export default function HeroContent() {
  const pantoneCards = [
    { color: "bg-[#012F38]", title: "FORSCHUNG", subtitle: "N°01" },
    { color: "bg-[#D72638]", title: "DIGITALISIERUNG", subtitle: "N°02" },
    { color: "bg-[#131937]", title: "VERNETZUNG", subtitle: "N°03" },
    { color: "bg-[#000000]", title: "ZUKUNFT", subtitle: "N°04" }
  ];

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 flex-1 w-full min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] overflow-x-hidden">

      {/* ================= LEFT SIDE ================= */}
      <div className="col-span-12 lg:col-span-5 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 min-h-max lg:h-full gap-8 lg:gap-0">

        {/* Main Hero Header */}
        <div className="mt-4 sm:mt-8 lg:mt-16 space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[84px] font-black leading-[0.9] lg:leading-[0.85] tracking-[1%] grotesk-xbold uppercase">
            Mehr als<br />ein Archiv.
          </h1>
          <p className="text-neutral-500 font-['Inter'] text-xs sm:text-sm max-w-full sm:max-w-[90%] lg:max-w-[80%] font-medium tracking-wide">
            Dein persönlicher Sammlungsraum zur Digitalisierung, Vernetzung und Zukunft deiner Inspirationen.
          </p>
        </div>

        {/* Boxes mit Zählen */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-auto">
          <div className="border border-black p-2 sm:p-3 md:p-4 flex flex-col justify-between aspect-square">
            <span className="text-lg sm:text-2xl md:text-3xl font-black grotesk-xbold truncate">11 272+</span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-500 uppercase leading-none">Objekte</span>
          </div>
          <div className="border border-black p-2 sm:p-3 md:p-4 flex flex-col justify-between aspect-square">
            <span className="text-lg sm:text-2xl md:text-3xl font-black grotesk-xbold truncate">800</span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-500 uppercase leading-none">Benutzer</span>
          </div>
          <div className="border border-black p-2 sm:p-3 md:p-4 flex flex-col justify-between aspect-square">
            <span className="text-lg sm:text-2xl md:text-3xl font-black grotesk-xbold truncate">24/7</span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-500 uppercase leading-none">Zugriff</span>
          </div>
        </div>
      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 h-auto lg:h-full relative p-4 sm:p-6 lg:p-0 gap-4 lg:gap-0">

        
       <div className="absolute inset-0 grid grid-rows-6 pointer-events-none opacity-[0.03]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-b border-black w-full h-full" />
          ))}
        </div>

        {/* Pantone Columns */}
        {pantoneCards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center p-2 sm:p-4 lg:p-6 h-full relative group transition-colors duration-300 hover:bg-black/5"
          >
            {/* Pantone Card Container */}
            <div className="relative z-10 bg-white border-2 border-black flex flex-col overflow-hidden shadow-[4px\_4px\_0px\_0px\_rgba(0,0,0,1)] transition-all duration-500 ease-out group-hover:-translate-y-2 lg:group-hover:-translate-y-6 group-hover:shadow-[8px\_8px\_0px\_0px\_rgba(0,0,0,1)]">
              {/* Color Block */}
              <div className={`aspect-[3/4] w-full ${card.color} border-b-2 border-black`} />
              {/* Card Label */}
              <div className="p-2 sm:p-3 md:p-4 text-left font-text bg-white">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black tracking-wider text-black uppercase leading-tight mb-1 font-display break-words">
                  {card.title}
                </p>
                <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-neutral-400 font-bold">
                  <span>PANTONE</span>
                  <span>{card.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}