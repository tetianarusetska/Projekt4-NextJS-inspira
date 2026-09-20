export default function Impressum() {
    return (
        <main className="flex-1 w-full relative z-10">

            {/* ================= SECTION 1: HEADER ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[35vh]">
                {/* Left Column */}
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        LEGAL / RECHTLICH
                    </span>
                    <div className="mt-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:text-[64px] leading-[102%] tracking-[1%] font-display uppercase">
                            Impressum
                        </h1>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center max-w-full lg:max-w-[90%]">
                    <span className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider mb-3">
                        Angaben gemäß § 5 DDG
                    </span>
                    <p className="text-sm sm:text-base lg:text-lg font-light text-black font-text leading-relaxed tracking-wide">
                        <span className="font-[Fayte] text-xl sm:text-2xl lg:text-3xl">i . nspira</span> ist ein persönliches digitales Archivierungs- und Inspirationsprojekt. Die Anwendung ermöglicht es Nutzerinnen und Nutzern, persönliche Sammlungen anzulegen, Inhalte zu speichern, zu bearbeiten und mit eigenen Bildern, Notizen und weiteren Informationen zu ergänzen.
                    </p>
                </div>
            </section>

            {/* ================= SECTION 2: BETREIBER ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[25vh]">
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between gap-2 lg:gap-0">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        01 / BETREIBER
                    </span>
                    <p className="text-xs text-neutral-400 font-text uppercase font-medium">
                        Anbieterkennzeichnung
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center space-y-2 sm:space-y-4 bg-white/40">
                    <h3 className="text-lg font-black font-text tracking-tight uppercase text-black">
                        Tetiana Rusetska
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-text">
                        Birkholzweg 38<br />
                        60433 Frankfurt am Main
                    </p>
                </div>
            </section>

            {/* ================= SECTION 3: KONTAKT ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[25vh]">
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between gap-2 lg:gap-0">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        02 / KONTAKT
                    </span>
                    <p className="text-xs text-neutral-400 font-text uppercase font-medium">
                        Verbindung aufnehmen
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center space-y-2 sm:space-y-4 bg-white/40">
                    <h3 className="text-lg font-black font-text tracking-tight uppercase text-black">
                        E-Mail-Adresse
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-text">
                        <a 
                            href="mailto:rusetskatata@gmail.com" 
                            className="underline hover:text-black transition-colors"
                        >
                            rusetskatata@gmail.com
                        </a>
                    </p>
                    <p className="text-xs text-neutral-400 font-text leading-relaxed max-w-[80%]">
                        Eine telefonische Kontaktaufnahme ist derzeit nicht vorgesehen. Für Anfragen bitte die oben genannte E-Mail-Adresse verwenden.
                    </p>
                </div>
            </section>

            {/* ================= SECTION 4: VERANTWORTLICH ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[25vh]">
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between gap-2 lg:gap-0">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        03 / VERANTWORTLICH
                    </span>
                    <p className="text-xs text-neutral-400 font-text uppercase font-medium">
                        Für den Inhalt nach § 18 Abs. 2 MStV
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center space-y-2 sm:space-y-4 bg-white/40">
                    <h3 className="text-lg font-black font-text tracking-tight uppercase text-black">
                        Tetiana Rusetska
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-text">
                        Birkholzweg 38<br />
                        60433 Frankfurt am Main
                    </p>
                </div>
            </section>

            {/* ================= SECTION 5: DISCLAIMER & LEGAL ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[40vh]">
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between gap-2 lg:gap-0">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        04 / LEGAL DISCLAIMER
                    </span>
                    <p className="text-xs text-neutral-400 font-text uppercase font-medium">
                        Rechtliche Hinweise
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6 sm:space-y-8">
                    {/* Haftung für Inhalte */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider">
                            Haftung für Inhalte
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-text">
                            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß den allgemeinen gesetzlichen Vorschriften für eigene Inhalte auf dieser Website verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht jedoch nur nach Maßgabe der gesetzlichen Vorschriften.
                        </p>
                    </div>

                    {/* Haftung für Links */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider">
                            Haftung für externe Links
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-text">
                            Diese Website kann Verweise auf externe Websites oder Quellen enthalten. Auf deren Inhalte besteht kein Einfluss. Für die Inhalte externer Websites ist stets der jeweilige Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Eine permanente Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                        </p>
                    </div>

                    {/* Urheberrecht */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider">
                            Urheberrecht
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-text">
                            Die auf dieser Website erstellten bzw. verwendeten Inhalte unterliegen, soweit gesetzlich geschützt, dem jeweils geltenden Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung geschützter Inhalte außerhalb der gesetzlichen Grenzen bedarf der Zustimmung des jeweiligen Rechteinhabers. Soweit Inhalte Dritter verwendet werden, verbleiben die jeweiligen Rechte bei den entsprechenden Urheberinnen, Urhebern oder Rechteinhabern.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}