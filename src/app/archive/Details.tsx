"use client";

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
        <div id="details" className="mb-20 w-full">

            {/* ================= HEADER SECTION ================= */}
            <div className="mt-12 lg:mt-20 flex flex-col gap-4 px-4 md:px-5">
                <p className="font-inter font-black text-2xl lg:text-[32px] leading-none tracking-wider text-black">
                    02 – DETAILS HINZUFÜGEN
                </p>
                <p className="text-lg lg:text-[24px] leading-normal tracking-wide text-neutral-500 max-w-3xl">
                    Füge die wichtigsten Details hinzu.
                </p>
            </div>

            {/* ================= DYNAMIC DETAILS FORM ================= */}
            <form className="mt-12 mx-auto w-full max-w-[836px] border-2 border-[#808080] bg-[#EDEDED]">
                {category.details.map((detail, index) => (
                    <div key={detail.id} className="w-full">
                        <div
                            className={`px-6 md:px-[25px] flex flex-col transition-colors duration-300 hover:bg-neutral-100/50
                                ${index === 0
                                    ? "pt-8 pb-8 md:pt-9 md:pb-10"
                                    : detail.type === "textarea"
                                        ? "pt-10 pb-10 md:pt-12 md:pb-12"
                                        : "pt-10 pb-8 md:pt-12 md:pb-10"
                                }`}
                        >
                            {/* Input Field Label */}
                            <label
                                htmlFor={detail.id}
                                className="grotesk-xbold block text-2xl md:text-[36px] leading-none tracking-wider text-black uppercase"
                            >
                                {detail.label}
                            </label>

                            {/* Dropdown Select Element */}
                            {detail.type === "select" ? (
                                <div className="relative mt-6 w-full">
                                    <select
                                        id={detail.id}
                                        value={formValues[detail.id] ?? ""}
                                        onChange={(e) =>
                                            setFormValues((prev) => ({
                                                ...prev,
                                                [detail.id]: e.target.value,
                                            }))
                                        }
                                        className="w-full border-0 bg-black text-white px-4 py-3 text-lg md:text-[24px] leading-none outline-none appearance-none rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['Grotesk_XBold']"
                                    >
                                        <option value="" disabled className="text-neutral-500">
                                            {detail.placeholder}
                                        </option>
                                        {detail.options?.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white font-bold text-sm">
                                        ▼
                                    </div>
                                </div>
                            ) : detail.type === "textarea" ? (
                                /* Multi-line Text Area Input */
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
                                    className={`mt-6 w-full resize-none border-0 bg-transparent p-0 text-lg md:text-[24px] leading-[1.3] outline-none placeholder:text-[#808080] placeholder:opacity-100 text-black border-b border-transparent focus:border-black transition-colors duration-200
                                        ${detail.font === "kino-40"
                                            ? "font-['Kino40'] text-2xl md:text-[32px] italic tracking-wide leading-relaxed kino-placeholder"
                                            : "font-['Grotesk'] font-medium"
                                        }
                                        ${detail.id === "note"
                                            ? "h-20"
                                            : detail.id === "bestQuote"
                                                ? "h-32"
                                                : "h-24"
                                        }`}
                                />
                            ) : (
                                /* Standard Single-line Input Element */
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
                                    className={`mt-6 w-full border-0 bg-transparent p-0 text-lg md:text-[24px] leading-none outline-none placeholder:text-[#808080] placeholder:opacity-100 text-black border-b border-transparent focus:border-black transition-colors duration-200
                                        ${detail.font === "kino-40"
                                            ? "font-['Kino40'] text-2xl md:text-[32px] italic tracking-wide kino-placeholder"
                                            : "font-['Grotesk'] font-medium"
                                        }`}
                                />
                            )}
                        </div>

                        {/* Flat Swiss Grid Row Divider Line */}
                        {index < category.details.length - 1 && (
                            <div className="h-[2px] w-full bg-[#808080]" />
                        )}
                    </div>
                ))}
            </form>

        </div>
    );
}