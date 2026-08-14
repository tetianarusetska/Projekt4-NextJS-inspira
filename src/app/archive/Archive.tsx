"use client";

import { useState } from "react";
import Collection from "./Collection";
import Details from "./Details";
import Media from "./Media";
import Product from "./Product";

const steps = [
    { id: "collection", label: "01    ·    SAMMLUNG" },
    { id: "details", label: "02    ·    DETAILS" },
    { id: "media", label: "03    ·    MEDIA" },
    { id: "product", label: "04    ·    VORSCHAU" },
];

export default function Archive() {

    const [selectedCategory, setSelectedCategory] = useState("bucher");
    const [activeStep, setActiveStep] = useState("collection");

    return (
        <div className="relative flex flex-col">

            <div>
                <p className="grotesk-xbold absolute left-5.25 top-10.75 text-[64px] leading-[100%] tracking-[1%]">
                    mach den letzten<br />
                    schritt.
                </p>

                <p className="absolute left-5.25 top-46 text-[36px] leading-[100%]">
                    Bewahre, was dich bewegt.
                </p>
            </div>

            <div className="mx-auto mt-70 flex h-13.75 w-275 border-[3px] border-[#808080]">
                {steps.map((step) => {
                    const isActive = activeStep === step.id;

                    return (
                        <button
                            key={step.id}
                            type="button"
                            onClick={() => setActiveStep(step.id)}
                            className={`flex h-full w-69.5 items-center justify-center text-[24px] grotesk-xbold transition-colors ${isActive
                                    ? "bg-black text-white"
                                    : "text-black hover:bg-black hover:text-white"
                                }`}
                        >
                            {step.label}
                        </button>
                    );
                })}
            </div>
            
            {activeStep === "collection" && (
                <Collection
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            )}

            {activeStep === "details" && (
                <Details selectedCategory={selectedCategory} />
            )}

            {activeStep === "media" && <Media />}
            {activeStep === "product" && <Product />}
        </div>
    );
}