export default function Datenschutz() {
    return (
        <main className="flex-1 w-full relative z-10">

            {/* ================= SECTION 1: HEADER ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[35vh]">
                {/* Left Column */}
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        PRIVACY / DATENSCHUTZ
                    </span>
                    <div className="mt-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-[64px] leading-[102%] tracking-[1%] font-display uppercase">
                            Datenschutz
                        </h1>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center max-w-full lg:max-w-[90%]">
                    <span className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider mb-3">
                        Erklärung zur Barrierefreiheit & DSGVO
                    </span>
                    <p className="text-sm sm:text-base lg:text-lg font-light text-black font-text leading-relaxed tracking-wide">
                        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten im Rahmen der Nutzung von <span className="font-[Fayte] text-3xl">i . nspira</span>.
                    </p>
                </div>
            </section>

            {/* ================= SECTION 2: VERANTWORTLICHE STELLE ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[25vh]">
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between gap-2 lg:gap-0">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        01 / VERANTWORTLICHER
                    </span>
                    <p className="text-xs text-neutral-400 font-text uppercase font-medium">
                        Verantwortliche Stelle im Sinne der DSGVO
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center space-y-2 sm:space-y-4 bg-white/40">
                    <h3 className="text-lg font-black font-text tracking-tight uppercase text-black">
                        Tetiana Rusetska
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-text">
                        Birkholzweg 38<br />
                        60433 Frankfurt am Main<br />
                        <a href="mailto:rusetskatata@gmail.com" className="underline hover:text-black transition-colors break-all sm:break-normal">
                            rusetskatata@gmail.com
                        </a>
                    </p>
                </div>
            </section>

            {/* ================= SECTION 3: DATENERFASSUNG ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-[35vh]">
                <div className="col-span-5 p-12 border-r border-black flex flex-col justify-between">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        02 / DATENERFASSUNG
                    </span>
                    <p className="text-xs text-neutral-400 font-text uppercase font-medium">
                        Welche Daten wir erheben
                    </p>
                </div>

                <div className="col-span-7 p-12 flex flex-col justify-center space-y-6">
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider">
                            Registrierung und Profil
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-text">
                            Wenn Sie sich auf unserer Plattform registrieren, speichern wir Ihren Namen, Ihre E-Mail-Adresse sowie verschlüsselte Passwörter. Bei einer Anmeldung über Drittanbieter wie Google (Social Login) erfassen wir die vom Anbieter bereitgestellten Authentifizierungsdaten (E-Mail, Name, Profilbild).
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider">
                            Ihre Sammlungen (Nutzerinhalte)
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-text">
                            Sämtliche von Ihnen hochgeladenen Inhalte (Notizen, Zitate, hochgeladene Bilder über Vercel Blob sowie Metadaten zu Büchern, Musik, Magazinen und Kunstwerken) werden in unserer Datenbank gespeichert, um Ihnen das persönliche Archivierungserlebnis zur Verfügung zu stellen.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider">
                            Server-Log-Files
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-text">
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (IP-Adresse, Browsertyp, Betriebssystem, Referrer URL, Uhrzeit der Serveranfrage).
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 4: DATENSICHERHEIT & SERVICES ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[35vh]">
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between gap-2 lg:gap-0">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        03 / INVOLVIERTE DIENSTE
                    </span>
                    <p className="text-xs text-neutral-400 font-text uppercase font-medium">
                        Drittanbieter & Sicherheit
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider">
                            Hosting & Datenbank
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-text">
                            Dieses Webprojekt läuft auf modernen Cloud-Infrastrukturen und nutzt Datenbanken von Neon/PostgreSQL sowie Datei-Hosting über Vercel Blob. Alle Verbindungen werden per SSL/TLS verschlüsselt übertragen.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-neutral-400 font-text uppercase tracking-wider">
                            Cookies & Lokaler Speicher
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed font-text">
                            Wir verwenden ausschließlich technisch notwendige Cookies und Session-Tokens (Better-Auth), um Ihren Anmeldestatus aufrechtzuerhalten. Es findet kein Tracking zu Werbezwecken statt.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 5: NUTZERRECHTE ================= */}
            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[30vh]">
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between gap-2 lg:gap-0">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase">
                        04 / IHRE RECHTE
                    </span>
                    <p className="text-xs text-neutral-400 font-text uppercase font-medium">
                        Rechte gemäß DSGVO
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center space-y-3 sm:space-y-4">
                    <p className="text-xs text-neutral-500 leading-relaxed font-text">
                        Sie haben jederzeit das Recht auf unentgeltliche **Auskunft** über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf **Berichtigung**, **Sperrung** oder **Löschung** dieser Daten. 
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed font-text">
                        Wenden Sie sich dazu oder zu weiteren Fragen zum Thema Datenschutz einfach an die oben angegebene E-Mail-Adresse des Betreibers.
                    </p>
                </div>
            </section>

        </main>
    );
}