import Link from "next/link";

export default function Registr() {
    return (
        <>
            <div className="relative w-screen h-screen flex justify-center items-center">
                <div>
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
                <div className="w-125 h-200 bg-white rounded-2xl mt-20">
                    <div className="mt-10 flex flex-row justify-between border-b-2 border-[#EDEDED] py-2">
                        <p
                            className="grotesk-xbold text-[24px] leading-[100%] tracking-[1%] uppercase ml-30"
                        >
                            Anmelden
                        </p>
                        <p
                            className="grotesk-xbold text-[24px] leading-[100%] tracking-[1%] uppercase mr-30 border-b-2"
                        >
                            Registrieren
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-10 text-left ml-25">
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
                    <form className="mt-15 flex flex-col gap-6 items-center">
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
                                type="text"
                                className="border-b-2 border-[#636161] w-75 text-[20px]"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label
                                htmlFor="name"
                                className="grotesk-xbold text-[20px] leading-[100%] tracking-[1%] uppercase text-[#636161]"
                            >
                                Email
                            </label>
                            <input
                                id="name"
                                placeholder="test@gmail.com"
                                type="text"
                                className="border-b-2 border-[#636161] w-75 text-[20px]"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label
                                htmlFor="name"
                                className="grotesk-xbold text-[20px] leading-[100%] tracking-[1%] uppercase text-[#636161]"
                            >
                                Passwort
                            </label>
                            <input
                                id="name"
                                placeholder="Mindestens 8 Zeichen"
                                type="password"
                                className="border-b-2 border-[#636161] w-75 text-[20px]"
                            />
                        </div>
                        <div className="mt-5 flex flex-col gap-4">
                            <button
                                className="uppercase text-center grotesk-xbold text-[20px] leading-[100%] tracking-[1%] w-75 h-13.5 bg-(--mainColor) text-white"
                            >
                                Konto erstellen
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