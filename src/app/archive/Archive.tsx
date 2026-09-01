"use client";

import { useState } from "react";

import Collection from "./Collection";
import Details from "./Details";
import Media from "./Media";
import Product from "./Product";
import { ArchiveProps } from "../types/ArchiveProps";

const steps = [
    { id: "collection", label: "01", fullLabel: "01  ·  SAMMLUNG" },
    { id: "details", label: "02", fullLabel: "02  ·  DETAILS" },
    { id: "media", label: "03", fullLabel: "03  ·  MEDIA" },
    { id: "product", label: "04", fullLabel: "04  ·  VORSCHAU" },
];

export default function Archive({ counts, customCollections }: ArchiveProps) {

    const [selectedCategory, setSelectedCategory] = useState("books");
    const [activeStep, setActiveStep] = useState("collection");
    const [formValues, setFormValues] = useState<Record<string, string>>({});
    const [image, setImage] = useState<string | null>(null);

    return (
        <div className="relative flex flex-col min-h-screen w-full  text-black selection:bg-black selection:text-white pb-24">

            <div className="px-6 md:px-12 mt-12 lg:mt-20 flex flex-col gap-2">
                <p className="font-text font-bold text-3xl lg:text-[44px] leading-none">
                    Mach den letzten Schritt.
                </p>
                <p className="font-text font-bold text-xl lg:text-[28px] text-neutral-500">
                    Bewahre, was dich bewegt!
                </p>
            </div>

            <div className="px-6 md:px-12 mt-12 w-full">
                <div className="mx-auto flex h-[55px] w-full max-w-[1100px] border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">

                    {steps.map((step) => {

                        const isActive = activeStep === step.id;

                        return (
                            <button
                                key={step.id}
                                type="button"
                                onClick={() => setActiveStep(step.id)}
                                className={`flex-1 h-full flex items-center justify-center text-sm md:text-xl grotesk-xbold font-black tracking-wider transition-colors border-r-[3px] last:border-r-0 border-black
                                    ${isActive
                                        ? "bg-black text-white"
                                        : "text-black hover:bg-black hover:text-white"
                                    }`}
                            >
                                <span className="block md:hidden">{step.label}</span>
                                <span className="hidden md:block">{step.fullLabel}</span>
                            </button>
                        );
                    })}
                </div>
            </div>


            <main className="px-6 md:px-12 mt-12 mx-auto w-full max-w-[1100px]">

                {activeStep === "collection" && (
                    <Collection
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        customCollections={customCollections}
                        onNext={() => setActiveStep("details")}
                        counts={counts}
                    />
                )}


                {activeStep === "details" && (
                    <Details
                        selectedCategory={selectedCategory}
                        formValues={formValues}
                        setFormValues={setFormValues}
                        customCollections={customCollections}
                    />
                )}

                {activeStep === "media" && (
                    <Media
                        image={image}
                        setImage={setImage}
                    />
                )}

                {activeStep === "product" && (
                    <Product
                        selectedCategory={selectedCategory}
                        values={formValues}
                        image={image}
                        counts={counts}
                        customCollections={customCollections}
                    />
                )}

            </main>
        </div>
    );
}