import Link from "next/link";


export default function Footer() {
    return (
        <>
            {/* ================= FOOTER ================= */}
            <footer className="border-t border-black py-4 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-12 bg-[#EDEDED] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 z-10">

                <nav className="flex gap-4 sm:gap-6 flex-row flex-wrap justify-center sm:justify-start">
                    <Link
                        href="/impressum"
                        className="text-[10px] font-bold text-neutral-400 tracking-wider font-text uppercase hover:text-black transition-colors"
                    >
                        Impressum
                    </Link>
                    <Link
                        href="/datenschutz"
                        className="text-[10px] font-bold text-neutral-400 tracking-wider font-text uppercase hover:text-black transition-colors"
                    >
                        Datenschutz
                    </Link>
                    <Link
                        href="/contact"
                        className="text-[10px] font-bold text-neutral-400 tracking-wider font-text uppercase hover:text-black transition-colors"
                    >
                        Kontakt
                    </Link>
                </nav>

                <span className="text-[9px] sm:text-[10px] font-bold text-neutral-400 tracking-wider font-text uppercase text-center sm:text-right">
                    © {new Date().getFullYear()} I . NSPIRA. ALLE RECHTE VORBEHALTEN.
                </span>

            </footer>
        </>
    )
}