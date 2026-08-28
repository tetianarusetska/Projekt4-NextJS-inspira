import { useState } from "react";
import { getEditableDefaults } from "@/app/utils/objectCardHelpers";

export function useEditableFields(
    object: Record<string, unknown>,
    fieldIds: string[]
) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValues, setEditedValues] = useState<Record<string, string>>(
        () => getEditableDefaults(object, fieldIds)
    );

    const handleFieldChange = (id: string, value: string) => {
        setEditedValues((prev) => ({ ...prev, [id]: value }));
    };

    const handleCancelEdit = () => {
        setEditedValues(getEditableDefaults(object, fieldIds));
        setIsEditing(false);
    };

    return {
        isEditing,
        setIsEditing,
        editedValues,
        handleFieldChange,
        handleCancelEdit,
    };
}