import Header from "./components/header/Header";
import Background from "@/app/layoutDesign/Background";
import HeroContent from "./components/homepage/HeroContent";
import AboutArea from "./components/homepage/AboutArea";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <main className="relative h-screen w-screen overflow-hidden bg-[#EDEDED]">
        <Background />
        <div className="relative z-10 flex flex-col h-full w-full">
          <Header />
          <HeroContent />
        </div>
        <AboutArea />
      </main>
      <Footer />
    </>
  );
}