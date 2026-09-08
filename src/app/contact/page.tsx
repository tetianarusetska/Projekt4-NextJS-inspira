import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Background from "../layoutDesign/Background";
import Contact from "./Contact";

export default function KontaktPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-[#EDEDED]">
            <Background />
            <Header />
            <Contact />
            <Footer />
        </div>
    );
}