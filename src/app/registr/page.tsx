import Footer from "../components/footer/Footer";
import FooterIntro from "../components/footer/FooterIntro";
import Header from "../components/header/Header";
import AuthDividers from "../layoutDesign/AuthDividers";
import Registr from "./Registr";


export default function RegistrPage() {

    return (
        <>
            <Header />
            <AuthDividers />
            
            <Registr />

            <FooterIntro />
            <Footer />
        </>
    )
}