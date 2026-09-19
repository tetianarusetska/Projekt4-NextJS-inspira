"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  
  const pathname = usePathname();

  const navLinks = [
    { href: "/archive", label: "OBJEKTE" },
    { href: "/studio", label: "STUDIO" },
    { href: "/about", label: "ÜBER UNS" },
  ];

  return (
    <header className="grid grid-cols-12 w-full border-b border-black h-16 lg:h-18 items-stretch text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider">

      {/* Brand Logo  */}
      <div className="col-span-4 sm:col-span-5 flex items-center px-3 sm:px-6 lg:px-8 border-r border-black">
        <Link href="/" className="font-['Fayte'] text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">
          i . nspira
        </Link>
      </div>

      {/* Navigation & Action Menu */}
      <div className="col-span-8 sm:col-span-7 grid grid-cols-4 h-full">

        {navLinks.map((link, idx) => (
          <div
            key={idx}
            className="border-r border-black flex items-center justify-center transition-colors hover:bg-black hover:text-white"
          >
            <Link href={link.href} className="w-full h-full flex items-center justify-center text-center px-1 sm:px-2 leading-none">
              {link.label}
            </Link>
          </div>
        ))}

        {/* Action Button (login) */}
        <div className="flex items-center justify-center bg-white transition-colors hover:bg-black hover:text-white">
          <Link href="/login" className="w-full h-full flex items-center justify-center text-center px-1 sm:px-2 leading-none">
            LOGIN
          </Link>
        </div>

      </div>
    </header>
  );
}