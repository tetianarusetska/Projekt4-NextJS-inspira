"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import CabinetHeader from "../cabinet/header/CabinetHeader";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import Archive from "./Archive";

export default function ArchivePage() {

    useEffect(() => {

        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);


    return (
        <>

            <CabinetHeader />
            
            <div
                className="absolute bg-black"
                style={{ left: 0, top: 70 - 2, width: "100%", height: 4 }}
            />
            <div className="absolute bg-black" style={{ left: 865.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1006.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1177.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1328.5 - 1.5, top: 0, width: 3, height: 72 }} />

            <Archive />

            <FooterIntro />
            <Footer />
        </>
    );
}