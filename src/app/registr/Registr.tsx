"use client";

import Link from "next/link";
import { useState, type SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Registr() {

    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleRegister(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const { error } = await authClient.signUp.email({ name, email, password });

        setLoading(false);

        if (error) {
            setError(error.message || "Registrierung fehlgeschlagen.");
            return;
        }

        router.push("/cabinet");
    }

    async function handleGoogleSignup() {
        await authClient.signIn.social({ provider: "google", callbackURL: "/cabinet" });
    }

    return (
        <>
            <div className="relative md:w-full md:h-full flex justify-center items-center">

                <div className="hidden lg:block">
                    <p
                        className="grotesk-xbold text-[64px] leading-[100%] tracking-[1%] absolute left-8 top-21"
                    >
                        mach deine<br></br>sammlung<br></br>personlich.
                    </p>
                    <p
                        className="text-[36px] leading-[100%] tracking-[0%] left-8 absolute top-77.5"
                    >
                        Halte fest, was bleibt.
                    </p>
                </div>

                <div className="w-125 h-200 bg-white rounded-2xl mt-20 mb-10">

                    <div className="mt-10 flex flex-row gap-25 md:gap-0 md:justify-between border-b-2 border-[#EDEDED] py-2">
                        <button
                            className="grotesk-xbold text-[24px] leading-[100%] tracking-[1%] uppercase ml-12 md:ml-30"
                        >
                            <Link href="/login">Anmelden</Link>
                        </button>
                        <button
                            className="grotesk-xbold text-[24px] leading-[100%] tracking-[1%] uppercase  mr-2 md:mr-30 border-b-2"
                        >
                            <Link href="/login">Registrieren</Link>
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 mt-10 text-left md:ml-25 ml-10">
                        <p
                            className="grotesk-xbold text-[36px] leading-[100%] tracking-[1%] uppercase"
                        >
                            Deine digitale Welt.
                        </p>
                        <p
                            className="text-[20px] leading-[100%] tracking-[0%]"
                        >
                            Starte deine digitale Sammlung.
                        </p>
                    </div>

                    <form onSubmit={handleRegister} className="mt-15 flex flex-col gap-6 items-center">

                        <div className="flex flex-col gap-4">
                            <label
                                htmlFor="name"
                                className="grotesk-xbold text-[20px] leading-[100%] tracking-[1%] uppercase text-[#636161]"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                placeholder="Ihr Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                type="text"
                                className="border-b-2 border-[#636161] w-75 text-[20px]"
                            />
                        </div>

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
                                placeholder="Mindestens 8 Zeichen"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength={8}
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
                                type="submit"
                                disabled={loading}
                                className="uppercase text-center grotesk-xbold text-[20px] leading-[100%] tracking-[1%] w-75 h-13.5 bg-(--mainColor) text-white"
                            >
                                {loading ? "..." : "Konto erstellen"}
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
                                type="button"
                                onClick={handleGoogleSignup}
                                className="uppercase text-center grotesk-xbold text-[20px] leading-[100%] tracking-[1%] w-75 h-13.5 bg-white border-2 border-[#EDEDED]"
                            >
                                Weiter mit Google
                            </button>

                        </div>
                        <p className="mt-5 text-[16px] text-center text-[#636161]">Bereits ein Konto? <Link href="login" className="underline text-(--mainColor)">Anmelden</Link></p>
                    </form>

                </div>
            </div>
        </>
    )
}