import { collections } from "../data/Collections";
import { DetailsProps } from "../types/DetailsProps";

export default function Details({ selectedCategory, formValues, setFormValues }: DetailsProps) {

    const category = Object.values(collections).find(
        (item) => item.id === selectedCategory
    );

    if (!category) {
        return null;
    }

    return (
        <div id="details" className="mb-20">
            
            {/* Übershcrift */}
            <div className="mt-20 ml-5.25 flex flex-col gap-4">
                <p className="grotesk-xbold text-[32px] leading-[100%] tracking-[1%]">
                    02 – DETAILS HINZUFUGEN
                </p>

                <p className="grotesk-xbold text-[64px] leading-[84%]">
                    gib deinem objekt<br />
                    kontext.
                </p>

                <p className="text-[24px] leading-[100%]">
                    Fuge die wichtigsten Details hinzu.
                </p>
            </div>

            {/* Detail hinzufügen */}
            <form className="mt-20 ml-5.25 w-209 border-2 border-[#808080]">
                {category.details.map((detail, index) => (
                    <div key={detail.id}>
                        <div
                            className={`px-6.25 ${index === 0
                                ? "pt-9 pb-10"
                                : detail.type === "textarea"
                                    ? "pt-12 pb-12"
                                    : "pt-12 pb-10"
                                }`}
                        >
                            <label
                                htmlFor={detail.id}
                                className="grotesk-xbold block text-[36px] leading-none tracking-[5%]"
                            >
                                {detail.label}
                            </label>

                            {detail.type === "select" ? (
                                <select
                                    id={detail.id}
                                    value={formValues[detail.id] ?? ""}
                                    onChange={(e) =>
                                        setFormValues((prev) => ({
                                            ...prev,
                                            [detail.id]: e.target.value,
                                        }))
                                    }
                                    className="mt-6 w-full border-0 bg-black text-white p-0 text-[24px] leading-none outline-none"
                                >
                                    <option value="" disabled>
                                        {detail.placeholder}
                                    </option>

                                    {detail.options?.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : detail.type === "textarea" ? (
                                <textarea
                                    id={detail.id}
                                    placeholder={detail.placeholder}
                                    value={formValues[detail.id] ?? ""}
                                    onChange={(e) =>
                                        setFormValues((prev) => ({
                                            ...prev,
                                            [detail.id]: e.target.value,
                                        }))
                                    }
                                    className={`mt-6 w-full resize-none border-0 bg-transparent p-0 text-[24px] leading-[1.2] outline-none placeholder:text-[#808080] placeholder:opacity-100 ${detail.font === "kino-40"
                                        ? "kino-placeholder"
                                        : ""
                                        } ${detail.id === "note"
                                            ? "h-20"
                                            : detail.id === "bestQuote"
                                                ? "h-32"
                                                : "h-24"
                                        }`}
                                />
                            ) : (
                                <input
                                    type={detail.type}
                                    id={detail.id}
                                    placeholder={detail.placeholder}
                                    value={formValues[detail.id] ?? ""}
                                    onChange={(e) =>
                                        setFormValues((prev) => ({
                                            ...prev,
                                            [detail.id]: e.target.value,
                                        }))
                                    }
                                    className={`mt-6 w-full border-0 bg-transparent p-0 text-[24px] leading-none outline-none placeholder:text-[#808080] placeholder:opacity-100 ${detail.font === "kino-40"
                                        ? "kino-placeholder"
                                        : ""
                                        }`}
                                />
                            )}
                        </div>

                        {index < category.details.length - 1 && (
                            <div className="h-px w-full bg-[#808080]" />
                        )}
                    </div>
                ))}
            </form>

        </div>
    );
}