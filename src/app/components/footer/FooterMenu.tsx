import Link from "next/link";
import FooterNavLinks from "./FooterNavLinks";

export default function FooterMenu() {
    return (
        <header className="relative z-30 items-stretch justify-between hidden lg:flex lg:w-full">
            <Link href="/">
                <img
                    src="/images/Logo.svg"
                    alt="i.nspira"
                    className="md:-mt-2 lg:mt-2 lg:ml-2"
                />
            </Link>
            <FooterNavLinks />

        </header>
    )
}