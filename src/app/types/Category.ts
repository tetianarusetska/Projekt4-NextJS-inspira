export interface Detail {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: string[];
    font?: string;
}

export interface Category {
    id: string;
    number: string;
    code: string;
    label: string;
    icon: string;
    details: Detail[];
}