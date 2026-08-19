import CabinetHeader from "../cabinet/header/CabinetHeader";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import Collections from "./Collections"
import CabinetDividers from "../layoutDesign/CabinetDividers";

export default function CollectionsPage() {

    return (
        <>
            <CabinetHeader />
            <CabinetDividers />

            <Collections />

            <FooterIntro />
            <Footer />
        </>
    );
}