import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import { getObjectCounts } from "../api/objects/getObjectCounts";

import Collections from "./Collections"
import StudioHeader from "../studio/header/StudioHeader";
import StudioBackground from "../layoutDesign/StudioBackground";
import Footer from "../components/footer/Footer";

export default async function CollectionsPage() {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
        redirect("/login");
    }

    const counts = await getObjectCounts(session.user.id);

    return (
        <>
            <div className="min-h-screen flex flex-col">
            <main className="relative w-screen flex-1">
                <StudioBackground />
                <div className="relative z-10 flex flex-col w-full">
                    <StudioHeader />
                    <Collections counts={counts} />
                </div>
            </main>
            <Footer />
        </div>
        </>

    );
}