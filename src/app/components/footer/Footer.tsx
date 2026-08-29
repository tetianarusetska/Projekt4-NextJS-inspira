import Link from "next/link";


export default function Footer() {
    return (
        <>
            {/* ================= FOOTER ================= */}
            <footer className="border-t border-black py-8 px-12 bg-[#EDEDED] flex justify-between items-center z-10">

                <nav className="flex gap-6 flex-row">
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
                        href="/kontakt"
                        className="text-[10px] font-bold text-neutral-400 tracking-wider font-text uppercase hover:text-black transition-colors"
                    >
                        Kontakt
                    </Link>
                </nav>

                <span className="text-[10px] font-bold text-neutral-400 tracking-wider font-text uppercase">
                    © {new Date().getFullYear()} I . NSPIRA. ALLE RECHTE VORBEHALTEN.
                </span>

            </footer>
        </>
    )
}