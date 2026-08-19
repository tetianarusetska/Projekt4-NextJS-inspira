export interface CollectionDetail {
    id: string;
    label: string;
    type: "text" | "number" | "textarea" | "select" | "date";
    placeholder?: string;
    options?: string[];
    font?: string;
}