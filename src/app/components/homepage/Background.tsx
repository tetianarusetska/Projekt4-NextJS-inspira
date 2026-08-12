export default function Background() {
    return (
        <div className="bg-(--bgColor) h-screen w-screen absolute inset-0">
            <div
                className="absolute rounded-full"
                style={{
                    left: 168 - 123.5,
                    top: 654 - 123.5,
                    width: 123.5 * 2,
                    height: 123.5 * 2,
                    border: "3px solid #808080",
                }}
            />
            <div
                className="absolute bg-black"
                style={{ left: 0, top: 600 - 2, width: "100%", height: 4 }}
            />
            <div
                className="absolute bg-black"
                style={{ left: 0, top: 70 - 2, width: "100%", height: 4 }}
            />
            <div
                className="absolute"
                style={{
                    left: 922.5,
                    top: 71.9961,
                    width: 3,
                    height: Math.sqrt((784.466 - 782.5) ** 2 + (867.996 - 71.9961) ** 2), // ≈760.001
                    backgroundColor: "#808080",
                    transformOrigin: "top left",
                    transform: `rotate(${Math.atan2(784.466 - 782.5, 831.996 - 71.9961) * (180 / Math.PI)}deg)`,
                }}
            />
            <div className="absolute bg-black" style={{ left: 1019.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1189.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 1339.5 - 1.5, top: 0, width: 3, height: 72 }} />
            <div className="absolute bg-black" style={{ left: 508.5 - 1.5, top: 602, width: 3, height: 746 - 602 }} />
            <div
                className="absolute"
                style={{ right: 0, top: 221.5 - 1.5, width: 303, height: 3, backgroundColor: "#808080" }}
            />
        </div>
    );
}
