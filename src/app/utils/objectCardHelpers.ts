

export function getFieldValue(object: Record<string, unknown>, id: string) {
    const value = object[id];

    if (value instanceof Date) {
        return value.toLocaleDateString("de-DE");
    }

    return value != null ? String(value) : "";
}

export function formatLabel(label: string) {
    const cleaned = label.replace(/^N°\d+,\s*/, "");

    return cleaned
        .toLowerCase()
        .replace(/^\p{L}/u, (char) => char.toUpperCase());
}

export function getEditableDefaults(
    object: Record<string, unknown>,
    fieldIds: string[]
): Record<string, string> {
    
    return Object.fromEntries(
        fieldIds.map((id) => [
            id,
            object[id] instanceof Date
                ? (object[id] as Date).toISOString().split("T")[0]
                : object[id] != null
                    ? String(object[id])
                    : "",
        ])
    );
}