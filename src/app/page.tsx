"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Header from "./s_components/Header";
import Background from "./s_components/Background";
import HeroContent from "./s_components/HeroContent";
import CollectionsArea from "./s_components/CollectionsArea";
import ExampleCardArea from "./s_components/ExampleCardArea";
import AboutArea from "./s_components/AboutArea";

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
    </>
  );
}