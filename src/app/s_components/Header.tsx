import NavLinks from "../cl_components/NavLinks";


export default function Header() {
    return (
        <header className="relative z-10 flex items-stretch justify-between w-full">

            <img
                src="/images/Logo.svg"
                alt="i.nspira"
                className="mt-2 ml-2"
            />
            <NavLinks />

        </header>
    );
}