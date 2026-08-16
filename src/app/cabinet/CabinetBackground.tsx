export default function CabinetBackground() {

     return (
        <div className="bg-(--bgColor) h-screen w-screen absolute inset-0">

            {/* circle */}
            <div
                className="absolute rounded-full w-61.75 h-61.75 left-[30.5px] top-[390.5px] border-[3px] border-[#808080]
                md:left-[44.5px] md:top-[390.5px]
                lg:left-[44.5px] lg:top-[530.5px]
                "
            />

            {/* horizontal lines */}
            <div
                className="absolute bg-black w-full h-1 left-0 top-[398px]
                md: left-0 top-[558px]
                lg:left-0 lg:top-[598px]
                "
            />
            <div
                className="absolute bg-black w-full h-1 left-0 top-[68px]
                "
            />

            {/* vertical lines */}
            <div
                className="hidden
                           md:block md:absolute md:w-[3px]  md:h-[760.001px]  md:bg-[#808080] md:origin-top-left md:rotate-[0.147deg] md:left-[520px] md:top-[72px]
                           lg:left-[922.5px] lg:top-[71.9961px]"
            />

            <div className="hidden 
                            md:block md:absolute md:bg-black md:top-0 md:w-[3px] h-[72px] md:left-[320px]
                            lg:left-[1176px]
                            "
            />

            <div className="hidden 
                            md:block md:absolute md:bg-black md:left-[460px] md:top-0 w-[3px] h-[72px]
                            lg:left-[1011px]
                            "
            />
            <div
                className="hidden
                           md:block md:absolute md:bg-black md:top-0, md:w-[3px] md:h-[72px] md:left-[638px]
                           lg:left-[1328px]
            "
            />
            <div
                className="hidden
                           md:block md:absolute md:bg-black md:top-0, md:w-[3px] md:h-[72px] md:left-[150px]
                           lg:left-[860px]
            "
            />

            {/* bottom vertical */}
            <div
                className="hidden
                           lg:w-[3px] lg:h-[144px] lg:absolute lg:bg-black  lg:block lg:top-[602px] lg:left-[427px]
            "
            />

            {/* right horizontal */}
            <div
                className="hidden 
                           lg:absolute lg:h-[3px] lg:w-[333px] lg:top-[180px] lg:right-0 lg:bg-[#808080] lg:block
                "
            />
        </div>
    );
}


