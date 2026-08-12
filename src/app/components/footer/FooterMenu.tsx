import FooterNavLinks from "./FooterNavLinks";

export default function FooterMenu() {
    return (
        <header className="relative z-30 flex items-stretch justify-between w-full">

            <img
                src="/images/Logo.svg"
                alt="i.nspira"
                className="mt-2 ml-2"
            />
            <FooterNavLinks />

        </header>
    )
}