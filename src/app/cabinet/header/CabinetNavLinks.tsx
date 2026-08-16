"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
    { href: "/collections", label: "SAMMLUNGEN", width: 142 },
    { href: "/archive", label: "ARCHIVIEREN", width: 170 },
    { href: "/activity", label: "AKTIVITAT", width: 150 },
    { href: "/login", label: "LOGIN", width: 144 },
];

export default function CabinetNavLinks() {
    const pathname = usePathname();

    return (
        <nav className="md:flex hidden" style={{ height: 72 }}>
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    style={{ width: link.width }}
                    className={`flex items-center justify-center transition-colors hover:bg-black hover:text-white grotesk-xbold text-[24px] ${pathname === link.href ? "bg-black text-white" : ""
                        }`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}