"use client";

import Header from "./s_components/Header";
import Background from "./s_components/Background";
import HeroContent from "./s_components/HeroContent";
import CollectionsArea from "./s_components/CollectionsArea";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-screen">
        <Background />
        <Header />
        <HeroContent />
      </div>
      <div className="relative">
        <CollectionsArea />
      </div>
    </>
  );
}