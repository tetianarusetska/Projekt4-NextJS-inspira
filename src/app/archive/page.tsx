import CabinetHeader from "../cabinet/header/CabinetHeader";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import Archive from "./Archive";
import CabinetDividers from "../layoutDesign/CabinetDividers";

export default function ArchivePage() {

    return (
        <>

            <CabinetHeader />
            <CabinetDividers />

            <Archive />

            <FooterIntro />
            <Footer />
        </>
    );
}