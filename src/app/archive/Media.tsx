"use client";

import { useState } from "react";
import { upload } from "@vercel/blob/client";
import { MediaProps } from "../types/MediaProps";

export default function Media({ image, setImage }: MediaProps) {

    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        setError(null);

        try {
            const blob = await upload(file.name, file, {
                access: "public",
                handleUploadUrl: "/api/upload",
            });

            setImage(blob.url);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Fehler beim Hochladen");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div id="media" className="relative z-10 mb-10 lg:mb-20">

            {/* Überschrift */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-6 sm:mt-10">
                <p className="font-inter font-black text-xl sm:text-2xl lg:text-[32px] leading-tight tracking-[1%]">
                    03    –    MEDIEN HINZUFÜGEN
                </p>

                {/* <p className="grotesk-xbold text-[64px] leading-[84%]">
                    zeig, was bleibt.
                </p> */}

                <p className="text-base sm:text-lg lg:text-[24px] leading-tight">
                    Füge die wichtigsten Details hinzu.
                </p>
            </div>

            {/* Media hinzufügen */}
            <label className="mt-8 sm:mt-12 lg:mt-20 flex h-48 sm:h-64 lg:h-70 w-full max-w-[1000px] cursor-pointer items-center justify-center border-2 border-dashed border-[#808080] p-4 text-center">

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                />

                {isUploading ? (
                    <span className="text-xs sm:text-base lg:text-[24px] font-medium leading-snug">Wird hochgeladen...</span>
                ) : image ? (
                    <img
                        src={image}
                        alt="Hochgeladenes Bild"
                        className="h-full w-full object-contain"
                    />
                ) : (
                    <span className="text-xs sm:text-base lg:text-[24px] font-medium leading-snug">
                        Bild hierher ziehen oder klicken zum Hochladen
                    </span>
                )}

            </label>

            {error && (
                <p className="ml-0 sm:ml-5.25 mt-2 text-xs sm:text-[16px] text-red-600">{error}</p>
            )}

        </div>
    )
}

