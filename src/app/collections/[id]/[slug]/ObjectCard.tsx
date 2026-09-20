"use client"

import { ObjectCardProps } from "@/app/types/ObjectCardProps";
import { getObjectColor } from "@/app/utils/getObjectColor";
import { getFieldValue, formatLabel } from "@/app/utils/objectCardHelpers";
import { useEditableFields } from "@/app/hooks/useEditableFields";
import { useObjectMutations } from "@/app/hooks/useObjectMutations";

export default function ObjectCard({ collection, object }: ObjectCardProps) {

    const editableFieldIds = collection.details.map((d) => d.id);

    const {
        isEditing,
        setIsEditing,
        editedValues,
        handleFieldChange,
        handleCancelEdit,
    } = useEditableFields(object, editableFieldIds);

    const { isDeleting, isUpdating, handleDelete, handleUpdate } =
        useObjectMutations(collection.id, object.id, collection.isCustom ?? false);

    const getValue = (id: string) => getFieldValue(object, id);

    const mainDetails = collection.details.filter(
        (detail) => !["title", "note", "bestQuote"].includes(detail.id)
    );

    const hasQuote = collection.details.some((d) => d.id === "bestQuote");
    const hasNote = collection.details.some((d) => d.id === "note");

    return (
        <div className="relative w-full min-h-screen text-black selection:bg-black selection:text-[#EDEDED] pb-20">

            {/* Header section */}
            <div className="border-b-[3px] border-[#808080] p-4 sm:p-6 md:p-12 flex flex-col gap-3 sm:gap-6">
                <span className="text-sm font-bold tracking-widest text-neutral-400 font-text uppercase block">
                    Objekt /
                </span>
                <div className="flex flex-row items-center gap-2">
                    {collection.icon && (
                        <span className="material-symbols-outlined text-[44px]">
                            {collection.icon}
                        </span>
                    )}
                    <p className="font-text font-bold text-2xl sm:text-3xl lg:text-[42px] uppercase leading-none break-words">
                        {collection.name}
                    </p>
                </div>
            </div>

            {/* Core Card Block */}
            <div className="mx-auto mt-6 sm:mt-12 lg:mt-20 w-full max-w-[1323px] h-auto lg:h-[595px] border-[3px] sm:border-[5px] border-black bg-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-[38%_62%] h-full">

                    {/* Image Block */}
                    <div
                        className="h-64 sm:h-80 md:h-96 lg:h-full w-full overflow-hidden"
                        style={{ background: getObjectColor(object.id) }}
                    >
                        {object.imageUrl && (
                            <img
                                src={object.imageUrl}
                                alt={getValue("title")}
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>

                    {/* Text Details Block */}
                    <div className="p-4 sm:p-6 lg:p-8 lg:pl-12 text-white flex flex-col justify-between h-full min-h-0">
                        <div>
                            {isEditing ? (
                                <input
                                    value={editedValues["title"] ?? ""}
                                    onChange={(e) => handleFieldChange("title", e.target.value)}
                                    className="mt-2 sm:mt-4 lg:mt-6 bg-transparent border-b border-white font-inter font-black text-xl sm:text-2xl lg:text-[32px] w-full focus:outline-none"
                                />
                            ) : (
                                <h3 className="mt-2 sm:mt-4 lg:mt-6 font-inter font-black text-xl sm:text-2xl lg:text-[32px] break-words leading-tight">
                                    {getValue("title")}
                                </h3>
                            )}

                            <p className="grotesk-xbold text-base sm:text-xl lg:text-[24px] mt-2 sm:mt-3 leading-snug tracking-[1%]">
                                {collection.code}  –  N°{object.id}
                            </p>

                            {/* Details */}
                            <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-row gap-4 sm:gap-8 lg:gap-10 flex-wrap">
                                {mainDetails.map((detail) => (
                                    <div key={detail.id} className="flex flex-col gap-1 sm:gap-2">
                                        <p className="text-xs sm:text-sm font-inter text-[#808080] normal-case">
                                            {formatLabel(detail.label)}
                                        </p>
                                        {isEditing ? (
                                            <input
                                                value={editedValues[detail.id] ?? ""}
                                                onChange={(e) =>
                                                    handleFieldChange(detail.id, e.target.value)
                                                }
                                                className="bg-transparent border-b border-white text-sm sm:text-base font-inter focus:outline-none w-28 sm:w-32"
                                            />
                                        ) : (
                                            <p className="text-sm sm:text-base font-inter font-medium">
                                                {getValue(detail.id)}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Quote Block */}
                            {hasQuote && (isEditing || getValue("bestQuote")) && (
                                <div>
                                    <p className="mt-4 lg:mt-5 text-[#808080] text-xs sm:text-sm font-inter normal-case">
                                        Bestes Zitat
                                    </p>
                                    {isEditing ? (
                                        <textarea
                                            value={editedValues["bestQuote"] ?? ""}
                                            onChange={(e) =>
                                                handleFieldChange("bestQuote", e.target.value)
                                            }
                                            className="mt-1 sm:mt-2 bg-transparent border-b border-white font-inter w-full text-base sm:text-lg lg:text-2xl leading-snug focus:outline-none resize-none"
                                            rows={2}
                                        />
                                    ) : (
                                        <p className="mt-1 sm:mt-2 font-inter italic w-full text-sm sm:text-base lg:text-lg leading-snug break-words">
                                            {getValue("bestQuote")}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Optional Note field */}
                        {hasNote && (isEditing || getValue("note")) && (
                            isEditing ? (
                                <textarea
                                    value={editedValues["note"] ?? ""}
                                    onChange={(e) => handleFieldChange("note", e.target.value)}
                                    className="font-inter text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 mb-2 lg:mb-4 w-full bg-transparent border-b border-white focus:outline-none resize-none"
                                    rows={2}
                                />
                            ) : (
                                <p className="font-inter text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 mb-2 lg:mb-4 break-words text-neutral-300">
                                    {getValue("note")}
                                </p>
                            )
                        )}

                    </div>
                </div>
            </div>

            {/* CRUD Buttons */}
            <div className="mx-auto grid grid-cols-2 gap-3 sm:gap-8 lg:gap-16 mt-8 lg:mt-12 w-full max-w-xs sm:max-w-md lg:max-w-[640px] px-4 sm:px-0">

                {isEditing ? (
                    <>
                        <button
                            onClick={() => handleUpdate(editedValues, () => setIsEditing(false))}
                            disabled={isUpdating}
                            className="flex items-center justify-center border border-black py-3 sm:py-4 bg-black text-[#EDEDED] text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider sm:tracking-widest uppercase transition-all duration-200 hover:bg-transparent hover:text-black hover:scale-[1.02] cursor-pointer"
                        >
                            {isUpdating ? "SPEICHERN..." : "SPEICHERN"}
                        </button>
                        <button
                            onClick={handleCancelEdit}
                            disabled={isUpdating}
                            className="flex items-center justify-center border border-black py-3 sm:py-4 bg-white text-black text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider sm:tracking-widest uppercase transition-all duration-200 hover:bg-black hover:text-[#EDEDED] hover:scale-[1.02] cursor-pointer"
                        >
                            ABBRECHEN
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center justify-center border border-black py-3 sm:py-4 bg-black text-[#EDEDED] text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider sm:tracking-widest uppercase transition-all duration-200 hover:bg-transparent hover:text-black hover:scale-[1.02] cursor-pointer"
                        >
                            BEARBEITEN
                        </button>
                        <button
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="flex items-center justify-center border border-black py-3 sm:py-4 bg-white text-black text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider sm:tracking-widest uppercase transition-all duration-200 hover:bg-black hover:text-[#EDEDED] hover:scale-[1.02] cursor-pointer"
                        >
                            {isDeleting ? "LÖSCHEN..." : "LÖSCHEN"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
