"use client";

import { useState, type SyntheticEvent } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ name, email, message });
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <main className="flex-1 w-full relative z-10">

            <section className="grid grid-cols-12 w-full border-b border-black min-h-0 lg:min-h-[calc(100vh-72px)] items-stretch">
                
                {/* ================= LEFT COLUMN ================= */}
                <div className="col-span-12 lg:col-span-5 p-4 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between min-h-0 lg:min-h-[400px] gap-6 lg:gap-0">
                    <div>
                        <span className="text-xs font-bold tracking-widest text-neutral-400 font-text uppercase block">
                            GET IN TOUCH / KONTAKT
                        </span>
                    </div>

                    <div className="my-auto pt-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-[64px] lg:text-5xl leading-[102%] tracking-[1%] font-display uppercase mb-4 sm:mb-6">
                            Verbindung<br />Aufnehmen.
                        </h1>
                        <p className="text-xs sm:text-sm text-neutral-500 font-text leading-relaxed max-w-full lg:max-w-[90%]">
                            Haben Sie Fragen zu <span className="font-[Fayte] text-xl text-black">i . nspira</span>, Anregungen zum Projekt oder möchten Sie Feedback hinterlassen? Nutzen Sie einfach das Kontaktformular oder schreiben Sie mir direkt per E-Mail.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-neutral-400 tracking-wider uppercase font-text">
                            Direkte E-Mail
                        </p>
                        <p className="text-sm text-black font-text font-medium">
                            <a href="mailto:rusetskatata@gmail.com" className="underline hover:text-neutral-600 transition-colors break-all sm:break-normal">
                                rusetskatata@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* ================= RIGHT COLUMN (CONTACT FORM) ================= */}
                <div className="col-span-12 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex items-center justify-center bg-white/30">
                    <div className="w-full max-w-[500px] bg-[#EDEDED] border-2 border-black p-5 sm:p-8 md:p-10 shadow-[5px\_5px\_0px\_0px\_rgba(0,0,0,1)] sm:shadow-[8px\_8px\_0px\_0px\_rgba(0,0,0,1)] relative">
                        
                        <div className="mb-5 sm:mb-8 space-y-1">
                            <span className="text-[10px] font-black text-neutral-400 tracking-widest uppercase block font-text">
                                NACHRICHT SENDEN
                            </span>
                            <h2 className="text-xl font-black tracking-tight uppercase text-black font-text">
                                Kontaktformular
                            </h2>
                        </div>

                        {sent ? (
                            <div className="p-4 sm:p-6 bg-black text-[#EDEDED] border border-black flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
                                <span className="material-symbols-outlined !text-4xl text-neutral-400">
                                    check_circle
                                </span>
                                <div className="space-y-1">
                                    <p className="text-sm font-black tracking-wider uppercase font-text">
                                        Vielen Dank!
                                    </p>
                                    <p className="text-xs text-neutral-400 font-text">
                                        Ihre Nachricht wurde erfolgreich übermittelt.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setSent(false)} 
                                    className="text-[10px] font-bold tracking-widest uppercase underline text-white hover:text-neutral-300 pt-2 block"
                                >
                                    Neue Nachricht schreiben
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                {/* Name Input */}
                                <div className="space-y-1">
                                    <label className="block text-[9px] font-black text-neutral-400 tracking-widest uppercase font-text">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ihr Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-transparent border-b border-black/20 focus:border-black py-2.5 text-sm font-medium text-black outline-none transition-all duration-200 font-text placeholder:text-neutral-400"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="space-y-1">
                                    <label className="block text-[9px] font-black text-neutral-400 tracking-widest uppercase font-text">
                                        E-Mail-Adresse
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="beispiel@domain.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent border-b border-black/20 focus:border-black py-2.5 text-sm font-medium text-black outline-none transition-all duration-200 font-text placeholder:text-neutral-400"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="space-y-1">
                                    <label className="block text-[9px] font-black text-neutral-400 tracking-widest uppercase font-text">
                                        Nachricht
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Schreiben Sie Ihre Nachricht hier..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-transparent border-b border-black/20 focus:border-black py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-black outline-none transition-all duration-200 font-text placeholder:text-neutral-400 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 sm:py-4 bg-black text-[#EDEDED] text-[10px] sm:text-xs font-black tracking-widest uppercase hover:bg-neutral-800 hover:scale-[1.01] active:scale-[0.99] transition-all border border-black cursor-pointer font-text"
                                >
                                    Absenden
                                </button>
                            </form>
                        )}
                        
                    </div>
                </div>

            </section>

        </main>
    );
}