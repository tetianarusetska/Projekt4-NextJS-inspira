"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
    { href: "/impressum", label: "IMPRESSUM", width: 170 },
    { href: "/datenschutz", label: "DATENSCHUTZ", width: 150 },
    { href: "/kontakt", label: "KONTAKT", width: 140.5 },
];

export default function FooterNavLinks() {

    const pathname = usePathname();

    return (
        <nav className="flex z-3 mr-2 lg:h-[72px]" >
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

