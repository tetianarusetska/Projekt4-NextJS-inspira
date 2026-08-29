import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import StudioHeader from "../studio/header/StudioHeader";
import StudioBackground from "../layoutDesign/StudioBackground";
import Archive from "./Archive";
import Footer from "../components/footer/Footer";


export default async function ArchivePage() {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <>
            <StudioHeader />
            <StudioBackground />
            <Archive />
            <Footer />
        </>
    );
}