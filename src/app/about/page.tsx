"use client";

import Header from "@/app/components/header/Header";
import Background from "@/app/layoutDesign/Background";
import Footer from "../components/footer/Footer";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-[#EDEDED]">

            <Background />
            <Header />

            <main className="flex-1 w-full relative z-10">

                {/* ================= SECTION 1: MANIFEST (01) ================= */}
                <section className="grid grid-cols-12 w-full border-b border-black min-h-[45vh]">

                    {/* Left Column */}
                    <div className="col-span-5 p-12 border-r border-black flex flex-col justify-between">
                        <span className="text-xs font-bold tracking-widest text-neutral-400 font-text">
                            01 / MANIFEST
                        </span>
                        <div className="mt-8">
                            <h1 className="text-5xl lg:text-[64px] leading-[102%] tracking-[1%] font-display uppercase">
                                Analog gesammelt.<br />Digital bewahrt.<br />Personlich verbunden.
                            </h1>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-7 p-12 flex flex-col justify-center max-w-[85%]">
                        <p className="text-2xl font-light text-black font-text leading-relaxed tracking-wide mb-6">
                            Inspira gibt all den Dingen einen gemeinsamen Ort, die du sammelst — vom Buch im Regal bis zum Bild auf deinem Bildschirm.
                        </p>
                        <p className="text-sm text-neutral-500 font-text leading-relaxed max-w-[90%]">
                            Sammle physische Objekte und digitale Inhalte an einem Ort und ergänze sie mit Fotos, Notizen, Links und persönlichen Erinnerungen. So entsteht eine Sammlung, die nicht nur zeigt, was dich interessiert, sondern auch, was dich inspiriert.
                        </p>
                    </div>
                </section>

                {/* ================= SECTION 2: PHILOSOPHIE (02) ================= */}
                <section className="grid grid-cols-12 w-full border-b border-black min-h-[35vh]">

                    {/* Left Heading */}
                    <div className="col-span-5 p-12 border-r border-black flex flex-col justify-between">
                        <span className="text-xs font-bold tracking-widest text-neutral-400 font-text">
                            02 / PHILOSOPHIE
                        </span>
                        <p className="text-sm text-neutral-400 font-text font-medium uppercase">
                            Drei Säulen unseres Archivs
                        </p>
                    </div>

                    {/* 3 Columns of Philosophy */}
                    <div className="col-span-7 grid grid-cols-3 h-full divide-x divide-black bg-white/40">

                        {/* N°01 PERSÖNLICH */}
                        <div className="p-8 flex flex-col justify-start gap-y-8 h-full min-h-[260px]">
                            <span className="text-sm font-bold text-neutral-400 font-text">N°01</span>
                            <div className="space-y-3">
                                {/* Заменили font-display на font-text (Inter) для идеального отображения "ö" */}
                                <h3 className="text-lg font-black font-text tracking-tight uppercase text-black">
                                    Persönlich
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed font-text">
                                    Deine Sammlung gehört nur dir — mit eigenen Notizen, Zitaten und der Geschichte, wie jedes Objekt zu dir gefunden hat.
                                </p>
                            </div>
                        </div>

                        {/* N°02 DIGITAL */}
                        <div className="p-8 flex flex-col justify-start gap-y-8 h-full min-h-[260px]">
                            <span className="text-sm font-bold text-neutral-400 font-text">N°02</span>
                            <div className="space-y-3">
                                <h3 className="text-lg font-black font-text tracking-tight uppercase text-black">
                                    Digital
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed font-text">
                                    Keine physischen Riegel, keine Grenzen. Deine Sammlung wächst mit dir, überall zugänglich, immer geordnet.
                                </p>
                            </div>
                        </div>

                        {/* N°03 KURATIERT */}
                        <div className="p-8 flex flex-col justify-start gap-y-8 h-full min-h-[260px]">
                            <span className="text-sm font-bold text-neutral-400 font-text">N°03</span>
                            <div className="space-y-3">
                                <h3 className="text-lg font-black font-text tracking-tight uppercase text-black">
                                    Kuratiert
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed font-text">
                                    Kein wahlloses Sammeln. Jedes Objekt bekommt seinen Platz, seine Nummer, seinen Kontext — wie in einem echten Archiv.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ================= SECTION 3: SO FUNKTIONIERT'S (03) ================= */}
                <section className="w-full border-b border-black bg-[#EDEDED] py-12">
                    <div className="px-12 mb-8">
                        <h2 className="text-4xl font-normal font-display lowercase">
                            so funktioniert's...
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 border-t border-b border-black divide-x divide-black bg-white">
                        {[
                            { title: "SAMMLUNG WÄHLEN", desc: "Bücher, Musik, Kunstwerke oder erstelle eine eigene Kategorie." },
                            { title: "DETAILS HINZUFÜGEN", desc: "Titel, Autor, Notizen... gib deinem Objekt Kontext." },
                            { title: "MEDIEN HINZUFÜGEN", desc: "Ein Cover, ein Foto... zeig was bleibt." },
                            { title: "ARCHIVIEREN", desc: "Dein Objekt bekommt seine Nummer und seinen Platz in deinem Archiv." }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-8 flex flex-col justify-start gap-y-6 min-h-[220px] bg-white hover:bg-neutral-50/80 transition-colors duration-300 group cursor-default"
                            >
                                <div className="space-y-2">
                                    <span className="text-sm font-bold text-neutral-400 font-text tracking-widest uppercase block">
                                        N° 0{index + 1}
                                    </span>
                                    <h3 className="text-md font-black font-text tracking-wide uppercase text-black leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed font-text">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= SECTION 4: SHOWCASE (04) ================= */}
                {/* Твоя оригинальная карточка со сплошной цветной плашкой слева и готической цитатой */}
                <section className="grid grid-cols-12 w-full border-b border-black min-h-[50vh] bg-[#EDEDED] py-12 px-12">

                    <div className="col-span-12 flex flex-col space-y-2 mb-8">
                        <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                            BÜCHER / OBJEKT N° 1
                        </span>
                    </div>

                    <div className="col-span-12 flex justify-center">

                        <div className="w-full max-w-4xl border-2 border-black bg-black text-[#EDEDED] grid grid-cols-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">

                            <div className="col-span-5 bg-[#012F38] border-r-2 border-black aspect-[3/4] min-h-[380px] w-full" />

                            <div className="col-span-7 p-8 flex flex-col justify-between h-full bg-[#0B0B0C] text-[#EDEDED]">

                                <div>
                                    <h3 className="text-3xl font-bold font-display text-white tracking-wide uppercase">
                                        Opus Pistorum
                                    </h3>
                                    <span className="text-sm text-neutral-500 font-bold tracking-wider font-text uppercase block mt-1">
                                        Buch — N°1
                                    </span>
                                </div>

                                <div className="grid grid-cols-4 gap-6 border-t border-b border-neutral-800 py-4 my-4 text-left">
                                    <div>
                                        <span className="block text-xs text-neutral-500 tracking-wider font-text">
                                            Autor
                                        </span>
                                        <span className="text-sm text-white font-text mt-1 block">
                                            Henry Miller
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-neutral-500 tracking-wider font-text">
                                            Erscheinungsjahr
                                        </span>
                                        <span className="text-sm text-white font-text mt-1 block">
                                            1947
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-neutral-500 tracking-wider font-text">
                                            Seitenzahl
                                        </span>
                                        <span className="text-sm text-white font-text mt-1 block">
                                            688
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-neutral-500 tracking-wider font-text">
                                            Entdeckt durch
                                        </span>
                                        <span className="text-sm font-bold text-white font-text mt-1 block leading-tight">
                                            Buchladen in Prag
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="block text-[9px] text-neutral-500 font-bold tracking-widest uppercase font-text">
                                        Bestes Zitat
                                    </span>
                                    <p className="text-xl text-neutral-100 leading-normal font-['Kino40'] tracking-wide">
                                        " Wenn die Maschinerie stillsteht, verbreitet sie eine Leere, die noch unheimlicher ist als der Tod. Ich war ein Gespenst, das sich in einem Vakuum bewegte. "
                                    </p>
                                </div>

                                <div className="text-md text-neutral-100 font-text pt-4 border-t border-neutral-800 mt-4 leading-relaxed">
                                    Ich habe es an einem Regentag in Prag gefunden — diese Seite hat mich sofort gepackt. Erinnert mich daran, warum ich lese.
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                {/* ================= SECTION 5: CTA (05) ================= */}
                <section className="grid grid-cols-12 w-full min-h-[30vh]">
                    <div className="col-span-5 p-12 border-r border-black flex flex-col justify-between">
                        <span className="text-xs font-bold tracking-widest text-neutral-400 font-text">
                            05 / START
                        </span>
                        <p className="text-xs text-neutral-400 font-text uppercase">
                            Trete dem Archiv bei
                        </p>
                    </div>

                    <div className="col-span-7 p-12 flex flex-col justify-center space-y-6">
                        <h2 className="text-xl font-text font-display uppercase tracking-tight">
                            Bereit für dein persönliches Archiv?
                        </h2>
                        <p className="text-sm text-neutral-500 max-w-[70%] leading-relaxed font-text">
                            Beginne noch heute damit, deine Inspirationen zu ordnen. Erstelle Sammlungen, füge deine liebsten Artefakte hinzu und baue dein digitales Vermächtnis.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <a
                                href="/registr"
                                className="w-48 py-3 bg-black text-[#EDEDED] text-sm font-black tracking-widest uppercase hover:bg-neutral-800 transition-colors border-2 border-black text-center"
                            >
                                Registrieren
                            </a>
                            <a
                                href="/login"
                                className="w-48 py-3 bg-transparent text-black text-sm font-black tracking-widest uppercase hover:bg-black/5 transition-colors border-2 border-black text-center"
                            >
                                Anmelden
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

        </div>
    );
}