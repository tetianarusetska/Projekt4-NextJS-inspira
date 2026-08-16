import Footer from "../components/footer/Footer";
import FooterIntro from "../components/footer/FooterIntro";
import Header from "../components/header/Header";
import Registr from "./Registr";


export default function RegistrPage() {

    return (
        <>
            <Header />
            
            <div className="absolute left-0 top-[68px] h-[4px] w-full bg-black" />
            <div className="hidden md:absolute md:block md:left-80 lg:left-[1018px] md:top-0 md:h-[72px] md:w-[3px] md:bg-black" />
            <div className="hidden md:absolute md:block md:left-115 lg:left-[1188px] md:top-0 md:h-[72px] md:w-[3px] md:bg-black" />
            <div className="hidden md:absolute md:block md:left-156 lg:left-[1338px] md:top-0 md:h-[72px] md:w-[3px] md:bg-black" />
            
            <Registr />

            <FooterIntro />
            <Footer />
        </>
    )
}