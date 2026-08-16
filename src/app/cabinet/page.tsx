import CabinetHeader from "./header/CabinetHeader";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import PersonalArea from "./PersonalArea";
import CabinetBackground from "./CabinetBackground";

export default function PersonalAreaPage() {

  return (
    <>
      <div className="relative h-screen w-screen">
        <CabinetBackground />
        <CabinetHeader />
        <PersonalArea />
      </div>

      <FooterIntro />
      <Footer />
    </>
  );
}