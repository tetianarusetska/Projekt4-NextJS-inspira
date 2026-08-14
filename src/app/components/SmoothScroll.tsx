"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis();

        let rafId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        const handleAnchorClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            const link = target.closest("a");

            if (!link) return;

            const href = link.getAttribute("href");

            if (!href || !href.startsWith("#")) return;

            const id = href.substring(1);
            const element = document.getElementById(id);

            if (!element) return;

            event.preventDefault();

            lenis.scrollTo(element, {
                offset: 0,
                duration: 1.2,
            });
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
        };
    }, []);

    return null;
}