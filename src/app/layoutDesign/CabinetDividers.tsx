export default function CabinetDividers() {
    return (
        <>
        {/* NAV, Linien */}
            <div className="absolute bg-black" style={{ left: 0, top: 70 - 2, width: "100%", height: 4 }} />
            <div className="absolute bg-black" style={{ left: 864, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1005, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1176, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1324, top: 0, width: 3, height: 72 }} />
        </>
    );
}