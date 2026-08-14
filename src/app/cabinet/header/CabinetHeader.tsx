import Link from "next/link";
import CabinetNavLinks from "./CabinetNavLinks";

export default function CabinetHeader() {
    return (
        <header className="relative z-10 flex items-stretch justify-between w-full">

            <Link href="/">
                <img
                    src="/images/Logo.svg"
                    alt="i.nspira"
                    className="mt-2 ml-2"
                />
            </Link>
            <CabinetNavLinks />

        </header>
    );
}