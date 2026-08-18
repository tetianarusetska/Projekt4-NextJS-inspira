export default function Media({ image, setImage }: MediaProps) {

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setImage(imageUrl);
    };

    return (
        <div id="media" className="mb-20">

            <div className="mt-20 ml-5.25 flex flex-col gap-4">
                <p className="grotesk-xbold text-[32px] leading-[100%] tracking-[1%]">
                    03    –    MEDIEN HINZUFUGEN
                </p>

                <p className="grotesk-xbold text-[64px] leading-[84%]">
                    zeig, was bleibt.
                </p>

                <p className="text-[24px] leading-[100%]">
                    Fuge die wichtigsten Details hinzu.
                </p>
            </div>

            <label className="mt-20 ml-5.25 flex h-35.75 w-209 cursor-pointer items-center justify-center border-2 border-dashed border-[#808080]">

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                />

                {image ? (
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

        </div>
    )
}