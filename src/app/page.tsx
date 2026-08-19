import Header from "./components/header/Header";
import Background from "@/app/layoutDesign/Background";
import HeroContent from "./components/homepage/HeroContent";
import CollectionsArea from "./components/homepage/CollectionsArea";
import ExampleCardArea from "./components/homepage/ExampleCardArea";
import AboutArea from "./components/homepage/AboutArea";
import FooterIntro from "./components/footer/FooterIntro";
import Footer from "./components/footer/Footer";

export default function Home() {

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