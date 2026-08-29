import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

import { getObjectCounts } from "../api/objects/getObjectCounts";

import Studio from "./Studio";
import StudioBackground from "../layoutDesign/StudioBackground";
import StudioHeader from "./header/StudioHeader";
import Footer from "../components/footer/Footer";

export default async function StudioPage() {

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login");
  }

  const counts = await getObjectCounts(session.user.id);

  return (
    <>
      <main className="relative h-screen w-screen overflow-hidden">
        <StudioBackground />
        <div className="relative z-10 flex flex-col h-full w-full">
          <StudioHeader />
          <Studio user={session.user} counts={counts} />
        </div>
      </main>
      <Footer />
    </>
  );
}