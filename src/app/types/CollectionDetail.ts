export interface CollectionDetail {
    id: string;
    label: string;
    type: "text" | "number" | "textarea" | "select";
    placeholder?: string;
    options?: string[];
    font?: string;
}