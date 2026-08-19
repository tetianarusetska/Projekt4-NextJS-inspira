import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import CabinetHeader from "../cabinet/header/CabinetHeader";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import Archive from "./Archive";
import CabinetDividers from "../layoutDesign/CabinetDividers";

export default async function ArchivePage() {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        redirect("/login");
    }

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