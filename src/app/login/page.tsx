import Footer from "../components/footer/Footer";
import FooterIntro from "../components/footer/FooterIntro";
import Header from "../components/header/Header";
import AuthDividers from "../layoutDesign/AuthDividers";
import Login from "./Login";


export default function LoginPage() {

    return (
        <>
            <Header />
            <AuthDividers />
            
            <Login />

            <FooterIntro />
            <Footer />

        </>
    )
}