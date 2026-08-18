import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import CabinetHeader from "./header/CabinetHeader";
import FooterIntro from "../components/footer/FooterIntro";
import Footer from "../components/footer/Footer";
import PersonalArea from "./PersonalArea";
import CabinetBackground from "./CabinetBackground";

export default async function PersonalAreaPage() {

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <>
      <div className="relative h-screen w-screen">
        <CabinetBackground />
        <CabinetHeader />
        <PersonalArea user={session.user} />
      </div>

      <FooterIntro />
      <Footer />
    </>
  );
}