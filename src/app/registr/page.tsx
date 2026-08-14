import Footer from "../components/footer/Footer";
import FooterIntro from "../components/footer/FooterIntro";
import Header from "../components/header/Header";
import Registr from "./Registr";


export default function RegistrPage() {

    return (
        <>
            <Header />
            <div
                className="absolute bg-black"
                style={{ left: 0, top: 70 - 2, width: "100%", height: 4 }}
            />
            <div className="absolute bg-black" style={{ left: 1019.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1189.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1339.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <Registr />

            <FooterIntro />
            <Footer />
        </>
    )
}