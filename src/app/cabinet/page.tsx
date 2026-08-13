"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Header from "../components/header/Header";
import Background from "../components/homepage/Background";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import PersonalArea from "./PersonalArea";

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
        <Background />
        <Header />
        <PersonalArea />
      </div>


      <FooterIntro />
      <Footer />
    </>
  );
}