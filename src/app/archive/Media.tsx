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
        <div id="media" className="relative z-10 mb-20">

            {/* Überschrift */}
            <div className="flex flex-col gap-4 mt-10">
                <p className="font-inter font-black text-[32px] leading-[100%] tracking-[1%]">
                    03    –    MEDIEN HINZUFÜGEN
                </p>

                {/* <p className="grotesk-xbold text-[64px] leading-[84%]">
                    zeig, was bleibt.
                </p> */}

                <p className="text-[24px] leading-[100%]">
                    Füge die wichtigsten Details hinzu.
                </p>
            </div>

            {/* Media hinzufügen */}
            <label className="mt-20  flex h-70 w-250 cursor-pointer items-center justify-center border-2 border-dashed border-[#808080]">

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                />

                {isUploading ? (
                    <span className="text-[24px]">Wird hochgeladen...</span>
                ) : image ? (
                    <img
                        src={image}
                        alt="Hochgeladenes Bild"
                        className="h-full w-full object-contain"
                    />
                ) : (
                    <span className="text-[24px]">
                        Bild hierher ziehen oder klicken zum Hochladen
                    </span>
                )}

            </label>

            {error && (
                <p className="ml-5.25 mt-2 text-[16px] text-red-600">{error}</p>
            )}

        </div>
    )
}

