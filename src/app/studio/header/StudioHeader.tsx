"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function StudioHeader() {

    const pathname = usePathname();
    const router = useRouter();


    const navLinks = [
        { href: "/studio", label: "STUDIO" },
        { href: "/collections", label: "SAMMLUNGEN" },
        { href: "/archive", label: "ARCHIVIEREN" },
    ];


    const handleLogout = async () => {
        try {
            await authClient.signOut();
            router.push("/login");
            router.refresh();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <header className="grid grid-cols-12 w-full border-b border-black h-16 lg:h-18 items-stretch text-[8px] min-[390px]:text-[9px] sm:text-xs lg:text-sm font-bold tracking-tighter sm:tracking-wider bg-[#EDEDED]">

            {/* Logo */}
            <div className="col-span-4 sm:col-span-5 flex items-center px-3 sm:px-6 lg:px-8 border-r border-black">
                <Link href="/" className="font-['Fayte'] text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">
                    i . nspira
                </Link>
            </div>

            {/* Navigation */}
            <div className="col-span-8 sm:col-span-7 grid grid-cols-4 h-full">

                {navLinks.map((link, idx) => {
                   
                    const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

                    return (
                        <div
                            key={idx}
                            className={`border-r border-black flex items-center justify-center transition-colors hover:bg-black hover:text-white ${isActive ? "bg-black text-white" : ""
                                }`}
                        >
                            <Link href={link.href} className="w-full h-full flex items-center justify-center text-center px-0.5 sm:px-2 leading-none truncate">
                                {link.label}
                            </Link>
                        </div>
                    );
                })}

                {/* LOGOUT */}
                <div className="flex items-center justify-center bg-white transition-colors hover:bg-black hover:text-white">
                    <button
                        onClick={handleLogout}
                        className="w-full h-full flex items-center justify-center text-center px-0 sm:px-2 cursor-pointer font-bold text-[8px] min-[390px]:text-[9px] sm:text-xs lg:text-sm tracking-tighter sm:tracking-wider leading-none"
                    >
                        LOGOUT
                    </button>
                </div>

            </div>
        </header>
    );
}
