"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import CabinetHeader from "./header/CabinetHeader";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import PersonalArea from "./PersonalArea";
import CabinetBackground from "./CabinetBackground";

export default function PersonalAreaPage() {

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
      <div className="relative h-screen w-screen">
        <CabinetBackground />
        <CabinetHeader />
        <PersonalArea />
      </div>


      <FooterIntro />
      <Footer />
    </>
  );
}