"use client";

import Link from "next/link";
import { useState, type SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Background from "../layoutDesign/Background";
import Header from "../components/header/Header";

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

        router.push("/studio");
    }

    async function handleGoogleSignup() {
        await authClient.signIn.social({ provider: "google", callbackURL: "/studio" });
    }

    return (
        <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#EDEDED] selection:bg-black selection:text-[#EDEDED]">
            <Background />
            <Header />

            <main className="flex-1 grid grid-cols-12 w-full h-[calc(100vh-72px)] relative z-10 items-center">

                {/* LEFT COLUMN */}
                <div className="col-span-5 px-12 h-full border-r border-black/10 flex flex-col justify-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter leading-[1.05] text-black font-text">
                            Mach deine Sammlung persönlich.
                        </h1>
                        <p className="text-md text-neutral-500 font-medium tracking-wide font-text">
                            Halte fest, was bleibt.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-span-7 flex items-center justify-center h-full">
                    <div className="w-full max-w-[420px] bg-white border border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl relative">

                        {/* Header Tabs */}
                        <div className="flex border-b border-neutral-200 pb-3 mb-6">
                            <Link
                                href="/login"
                                className="flex-1 text-center text-xs font-bold tracking-widest uppercase pb-2 text-neutral-400 hover:text-black transition-colors font-text"
                            >
                                Anmelden
                            </Link>
                            <span className="flex-1 text-center text-xs font-black tracking-widest uppercase pb-2 border-b-2 border-black text-black cursor-default font-text">
                                Registrieren
                            </span>
                        </div>

                        {/* Subtitle & Header Inside */}
                        <div className="mb-6 space-y-1">
                            <p className="text-[10px] font-black text-neutral-400 tracking-wider uppercase font-text">
                                Deine digitale Welt.
                            </p>
                            <p className="text-xs text-neutral-500 font-text">
                                Starte deine digitale Sammlung.
                            </p>
                        </div>

                        {/* Error Message Box */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-medium rounded font-text">
                                {error}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleRegister} className="space-y-5">
                            {/* Name */}
                            <div className="space-y-1">
                                <label className="block text-[9px] font-black text-neutral-400 tracking-widest uppercase font-text">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ihr Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-neutral-50/50 border-b border-neutral-200 focus:border-black focus:bg-white px-3 py-2 text-xs font-medium text-black outline-none transition-all duration-200 font-text"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className="block text-[9px] font-black text-neutral-400 tracking-widest uppercase font-text">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="test@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-neutral-50/50 border-b border-neutral-200 focus:border-black focus:bg-white px-3 py-2 text-xs font-medium text-black outline-none transition-all duration-200 font-text"
                                />
                            </div>

                            {/* Password */}
                            <div className="space-y-1">
                                <label className="block text-[9px] font-black text-neutral-400 tracking-widest uppercase font-text">
                                    Passwort
                                </label>
                                <input
                                    type="password"
                                    required
                                    placeholder="Mindestens 8 Zeichen"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-neutral-50/50 border-b border-neutral-200 focus:border-black focus:bg-white px-3 py-2 text-xs font-medium text-black outline-none transition-all duration-200 font-text"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-black text-[#EDEDED] text-xs font-black tracking-widest uppercase hover:bg-neutral-800 transition-colors border border-black cursor-pointer disabled:bg-neutral-400 disabled:border-neutral-400 font-text"
                            >
                                {loading ? "Wird registriert..." : "Konto erstellen"}
                            </button>
                        </form>

                        {/* OR Separator */}
                        <div className="relative my-6 flex items-center justify-center">
                            <div className="absolute inset-x-0 h-[1px] bg-neutral-100" />
                            <span className="relative bg-white px-3 text-[10px] font-bold text-neutral-400 tracking-wider font-text uppercase z-10">
                                oder
                            </span>
                        </div>

                        {/* Google Sign-In */}
                        <button
                            onClick={handleGoogleSignup}
                            className="w-full py-3 bg-transparent text-black text-xs font-black tracking-widest uppercase hover:bg-black/5 transition-colors border border-black cursor-pointer flex items-center justify-center gap-2 font-text"
                        >
                            {/* Minimal SVG Google Logo */}
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                />
                            </svg>
                            Weiter mit Google
                        </button>

                        {/* Card Footer Link */}
                        <div className="text-center mt-6">
                            <Link
                                href="/login"
                                className="text-xs font-medium text-neutral-400 hover:text-black underline transition-colors font-text"
                            >
                                Bereits ein Konto? Anmelden
                            </Link>
                        </div>

                    </div>
                </div>

            </main>

            {/* FOOTER */}
            <footer className="border-t border-black py-6 px-12 bg-[#EDEDED] flex justify-between items-center z-10">
                <span className="text-[10px] font-bold text-neutral-400 tracking-wider font-text uppercase">
                    © {new Date().getFullYear()} I . NSPIRA. ALLE RECHTE VORBEHALTEN.
                </span>
            </footer>

        </div>
    );
}