"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
    { href: "/#discover", label: "ENTDECKEN", width: 165 },
    { href: "/#about", label: "UBER INSPIRA", width: 150 },
    { href: "/login", label: "LOGIN", width: 142 },
];

export default function HeaderNavLinks() {
    const pathname = usePathname();

    return (
        <nav className="md:flex lg:ml-221 md:ml-30 hidden" style={{ height: 72 }}>
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