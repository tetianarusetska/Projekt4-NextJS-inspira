import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import { getObjectCounts } from "../api/objects/getObjectCounts";

import CabinetHeader from "./header/CabinetHeader";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import PersonalArea from "./PersonalArea";
import CabinetBackground from "../layoutDesign/CabinetBackground";

export default async function PersonalAreaPage() {

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login");
  }

  const counts = await getObjectCounts(session.user.id);

  return (
    <>
      <div className="relative h-screen w-screen">
        <CabinetBackground />
        <CabinetHeader />
        <PersonalArea user={session.user} counts={counts} />
      </div>

      <FooterIntro />
      <Footer />
    </>
  );
}