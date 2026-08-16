import FooterMenu from "./FooterMenu"

export default function FooterContent() {
    return (
        <div className="relative w-full aspect-1280/832 bg-[#EDEDED] overflow-hidden">
            <img
                src="/images/background.png"
                alt="footer-background"
                className="object-contain w-screen h-screen
                           lg:absolute lg:left-0 lg:top-0 lg:top-[3.125%] lg:h-[103.125%] lg:-translate-y-25 lg:translate-x-30 lg:w-6xl lg:h-158"
                style={{ top: "3.125%", height: "103.125%" }}
            />
            <p className="absolute top-35 left-122.5 text-[96px] text-white">Mehr als</p>
            <p className="absolute top-60 left-134.25 text-[96px] text-white">ein Archiv</p>
            <FooterMenu />
            <Section />
        </div>
    )
}

const Section = () => {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute left-0 w-full bg-black" style={{ top: "7.2%", height: "0.481%" }} />
            <div className="absolute bg-black" style={{ left: "68%", top: "-1.2%", height: "8.6%", width: "0.25%" }} />
            <div className="absolute bg-black" style={{ left: "79%", top: "-1.2%", height: "8.6%", width: "0.25%" }} />
            <div className="absolute bg-black" style={{ left: "90%", top: "-1.2%", height: "8.6%", width: "0.25%" }} />
        </div>
    )
}