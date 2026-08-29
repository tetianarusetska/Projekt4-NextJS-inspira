

export default function AboutArea() {
  return (
    <section id="about" className="grid grid-cols-12 w-full border-t border-black bg-[#EDEDED]">

      {/* ================= LEFT SIDE  ================= */}
      <div className="col-span-5 flex flex-col justify-between p-12 border-r border-black min-h-[500px]">
        {/* Überschrift */}
        <div className="space-y-4">
          <span className="text-sm font-bold tracking-widest text-neutral-400 font-text uppercase">
            02 / PHILOSOPHIE
          </span>
          <h2 className="text-4xl lg:text-5xl font-black leading-[0.85] tracking-tight uppercase font-display">
            Analog gesammelt.<br />Digital bewahrt.<br />Persönlich verbunden.
          </h2>
        </div>

        {/* Über i.nspira */}
        <div className="mt-12 lg:mt-20 space-y-6">
          <p className="text-xl lg:text-2xl font-bold leading-tight font-text text-black">
            i.nspira gibt allem einen gemeinsamen Ort, was du sammelst — vom Buch im Regal bis zum Bild auf deinem Bildschirm.
          </p>
          <p className="text-neutral-500 font-text text-sm max-w-[95%] font-medium leading-relaxed">
            Sammle physische Objekte und digitale Inhalte an einem Ort und ergänze sie mit Fotos, Notizen, Links und persönlichen Erinnerungen. So entsteht eine Sammlung, die nicht nur zeigt, was dich interessiert, sondern auch, wer du bist.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="col-span-7 grid grid-cols-4 h-full">

        {/* N°01 / PERSÖNLICH */}
        <div className="border-r border-black flex flex-col justify-between p-6 h-full min-h-[500px]">
          <span className="text-xs font-bold text-neutral-400 font-text">N°01</span>
          <div className="space-y-3 mt-auto">
            <h3 className="text-lg font-black tracking-wider uppercase font-display leading-none">
              PERSÖNLICH.
            </h3>
            <p className="text-xs text-neutral-600 font-text leading-relaxed">
              Deine Sammlung gehört nur dir — mit eigenen Notizen, Zitaten und der Geschichte, wie jedes Objekt zu dir gefunden hat.
            </p>
          </div>
        </div>

        {/* N°02 / DIGITAL */}
        <div className="border-r border-black flex flex-col justify-between p-6 h-full min-h-[500px]">
          <span className="text-xs font-bold text-neutral-400 font-text">N°02</span>
          <div className="space-y-3 mt-auto">
            <h3 className="text-lg font-black tracking-wider uppercase font-display leading-none">
              DIGITAL.
            </h3>
            <p className="text-xs text-neutral-600 font-text leading-relaxed">
              Kein physisches Regal, keine Grenzen. Deine Sammlung wächst mit dir, ist überall sicher verschlüsselt und sofort griffbereit.
            </p>
          </div>
        </div>

        {/* N°03 / KURATIERT */}
        <div className="border-r border-black flex flex-col justify-between p-6 h-full min-h-[500px]">
          <span className="text-xs font-bold text-neutral-400 font-text">N°03</span>
          <div className="space-y-3 mt-auto">
            <h3 className="text-lg font-black tracking-wider uppercase font-display leading-none">
              KURATIERT.
            </h3>
            <p className="text-xs text-neutral-600 font-text leading-relaxed">
              Kein wahlloses Chaos. Jedes Objekt bekommt seinen festen Platz, seine eindeutige Nummer und seinen vollen emotionalen Kontext.
            </p>
          </div>
        </div>

        {/* N°04 / ANFANGEN */}
        <div className="flex flex-col justify-between p-6 h-full min-h-[500px] bg-black text-white group cursor-pointer overflow-hidden relative">
          <span className="text-xs font-bold text-neutral-500 font-text">N°04</span>

          <div className="absolute inset-0 opacity-[0.05] grid grid-cols-4 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-r border-white h-full" />
            ))}
          </div>

          <div className="space-y-4 mt-auto z-10 transition-transform duration-300 group-hover:-translate-y-2">
            <h3 className="text-lg font-black tracking-wider uppercase font-display leading-none">
              BEREIT?
            </h3>
            <p className="text-xs text-neutral-400 font-text leading-relaxed">
              Starte jetzt dein persönliches Archiv und halte fest, was dich bewegt.
            </p>
            <div className="inline-block border border-white text-white font-text text-[10px] font-bold tracking-widest uppercase py-2.5 px-3.5 hover:bg-white hover:text-black transition-colors duration-300">
              registrieren
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}