"use client";

import Link from "next/link";
import { useState, type SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const { error } = await authClient.signIn.email({ email, password });

        setLoading(false);

        if (error) {
            setError(error.message || "Anmeldung fehlgeschlagen.");
            return;
        }

        router.push("/cabinet");
    }

    async function handleGoogleLogin() {
        await authClient.signIn.social({ provider: "google", callbackURL: "/cabinet" });
    }

    return (
        <>
            <div className="relative md:w-full md:h-full flex justify-center items-center">

                <div className="hidden lg:block">
                    <p
                        className="grotesk-xbold text-[64px] leading-[100%] tracking-[1%] absolute left-8 top-21"
                    >
                        kehre zuruck zu<br></br>deiner<br></br>sammlung.
                    </p>
                    <p
                        className="text-[36px] leading-[100%] tracking-[0%] left-8 absolute top-77.5"
                    >
                        Alles, was dich bewegt,<br></br>bleibt hier.
                    </p>
                </div>

                <div className="w-95 md:w-125 h-200 bg-white rounded-2xl mt-20 mb-10">
                    <div className="mt-10 flex flex-row gap-25 md:gap-0 md:justify-between border-b-2 border-[#EDEDED] py-2">
                        <button
                            className="grotesk-xbold text-[24px] leading-[100%] tracking-[1%] uppercase ml-12 md:ml-30 border-b-2"
                        >
                            <Link href="/login">Anmelden</Link>
                        </button>
                        <button
                            className="grotesk-xbold text-[24px] leading-[100%] tracking-[1%] uppercase mr-2 md:mr-30"
                        >
                            <Link href="/registr">Registrieren</Link>
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 mt-10 text-left md:ml-25 ml-10">
                        <p
                            className="grotesk-xbold text-[36px] text-left md:ml-0 md:text-left leading-[100%] tracking-[1%] uppercase ml-1"
                        >
                            Deine digitale Welt.
                        </p>
                        <p
                            className="text-[20px] leading-[100%] tracking-[0%] md:ml-0 md:mt-0 mt-5 ml-1"
                        >
                            Melde dich an, um deine Sammlung zu offnen.
                        </p>
                    </div>

                    <p
                        className="mt-10 ml-10 md:ml-25 grotesk-xbold text-[36px] leading-[100%] tracking-[1%] uppercase text-[#808080]"
                    >
                        Wilkommen zuruck...
                    </p>

                    <form onSubmit={handleLogin} className="mt-15 flex flex-col gap-6 items-center">

                        <div className="flex flex-col gap-4">
                            <label
                                htmlFor="email"
                                className="grotesk-xbold text-[20px] leading-[100%] tracking-[1%] uppercase text-[#636161]"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="test@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                type="text"
                                className="border-b-2 border-[#636161] w-75 text-[20px]"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label
                                htmlFor="password"
                                className="grotesk-xbold text-[20px] leading-[100%] tracking-[1%] uppercase text-[#636161]"
                            >
                                Passwort
                            </label>
                            <input
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                type="password"
                                className="border-b-2 border-[#636161] w-75 text-[20px]"
                            />
                        </div>

                        {error && (
                            <p className="text-black text-[14px] text-center w-75">{error}</p>
                        )}

                        <div className="mt-5 flex flex-col gap-4">

                            <button
                                disabled={loading}
                                type="submit"
                                className="uppercase text-center grotesk-xbold text-[20px] leading-[100%] tracking-[1%] w-75 h-13.5 bg-(--mainColor) text-white"
                            >
                                {loading ? "..." : "Anmelden"}
                            </button>

                            <div className="flex flex-row gap-4 items-center">
                                <div className="bg-[#636161]" style={{ width: 125, height: 2 }} />
                                <p
                                    className="align-center grotesk-xbold text-[14px] leading-[100%] tracking-[1%] uppercase text-[#636161]"
                                >
                                    Oder
                                </p>
                                <div className="bg-[#636161]" style={{ width: 125, height: 2 }} />
                            </div>

                            <button
                                onClick={handleGoogleLogin}
                                type="button"
                                className="uppercase text-center grotesk-xbold text-[20px] leading-[100%] tracking-[1%] w-75 h-13.5 bg-white border-2 border-[#EDEDED]"
                            >
                                Weiter mit Google
                            </button>

                        </div>
                        <p className="mt-5 text-[16px] text-center text-[#636161]">Noch kein Konto? <Link href="registr" className="underline text-(--mainColor)">Jetzt regestrieren</Link></p>
                    </form>

                </div>
            </div>
        </>
    )
}