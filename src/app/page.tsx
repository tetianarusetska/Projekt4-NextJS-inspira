"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Header from "./components/header/Header";
import Background from "./components/homepage/Background";
import HeroContent from "./components/homepage/HeroContent";
import CollectionsArea from "./components/homepage/CollectionsArea";
import ExampleCardArea from "./components/homepage/ExampleCardArea";
import AboutArea from "./components/homepage/AboutArea";
import FooterIntro from "./components/footer/FooterIntro";
import Footer from "./components/footer/Footer";

export default function Home() {

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
        <HeroContent />
      </div>

      <CollectionsArea />
      <ExampleCardArea />
      <AboutArea />

      <FooterIntro />
      <Footer />
    </>
  );
}