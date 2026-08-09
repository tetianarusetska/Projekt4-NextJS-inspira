"use client";

import Header from "./s_components/Header";
import Background from "./s_components/Background";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Background />
      <Header />
    </div>
  );
}