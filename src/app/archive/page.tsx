import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import StudioHeader from "../studio/header/StudioHeader";
import StudioBackground from "../layoutDesign/StudioBackground";
import Archive from "./Archive";

// import CabinetHeader from "../studio/header/AltCabinetHeader";
// import FooterIntro from "../components/footer/FooterIntro";
// import Footer from "../components/footer/Footer";
// import Archive from "./Archive";
// import CabinetDividers from "../layoutDesign/AltCabinetDividers";

export default async function ArchivePage() {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <>
            {/* <CabinetHeader />
            <CabinetDividers />
            <Archive />
            <FooterIntro />
            <Footer /> */}

            <StudioHeader />
            <StudioBackground />
            <Archive />

        </>
    );
}