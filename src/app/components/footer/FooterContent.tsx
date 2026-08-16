import FooterMenu from "./FooterMenu"

export default function FooterContent() {
    return (
        <div className="relative w-full md:-translate-y-100 lg:translate-y-0 md:h-256 lg:h-240 md:aspect-1280/832 md:bg-[#EDEDED] bg-black overflow-hidden">
            <img
                src="/images/background.svg"
                alt="footer-background"
                className="hidden
                            md:flex md:absolute md:object-contain md:w-[100%] md:h-full md:left-0 md:top-0
                            lg:left-0 lg:top-[3.125%] lg:-translate-y-25 lg:translate-x-30 lg:w-6xl lg:h-[103.125%]"
            />
            <img
                src="/images/mob.svg"
                alt="footer"
                className="z-30 md:hidden translate-y-10 h-200" />
            <p
                className="z-30 absolute text-white top-60 left-10 text-[54px]
                           md:top-80 md:left-65 md:text-[64px]
                           lg:top-40 lg:left-122.5 lg:text-[96px]"
            >
                Mehr als
            </p>
            <p
                className="z-30 absolute text-white top-80 left-35 text-[54px]
                           md:left-68 md:top-100 md:text-[64px]
                           lg:top-60 lg:left-134.25 lg:text-[96px]"
            >
                ein Archiv
            </p>

            <FooterMenu />
            <Section />
        </div>
    )
}

const Section = () => {
    return (

        <div className="hidden lg:block lg:absolute inset-0 z-20 pointer-events-none">
            <div className="absolute left-0 w-full bg-black" style={{ top: "7.2%", height: "0.481%" }} />
            <div className="absolute bg-black" style={{ left: "68%", top: "-1.2%", height: "8.6%", width: "0.25%" }} />
            <div className="absolute bg-black" style={{ left: "79%", top: "-1.2%", height: "8.6%", width: "0.25%" }} />
            <div className="absolute bg-black" style={{ left: "90%", top: "-1.2%", height: "8.6%", width: "0.25%" }} />
        </div>
    )
}

