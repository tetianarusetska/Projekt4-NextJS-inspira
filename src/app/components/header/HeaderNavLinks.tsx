"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
    { href: "/discover", label: "ENTDECKEN", width: 170 },
    { href: "/about", label: "UBER INSPIRA", width: 150 },
    { href: "/login", label: "LOGIN", width: 140.5 },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="flex ml-221" style={{ height: 72 }}>
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