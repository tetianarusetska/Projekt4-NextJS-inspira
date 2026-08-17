import { CollectionDetail } from "./CollectionDetail";

export interface Collection {
    id: string;
    number: string;
    code: string;
    name: string;
    icon: string;

    count: string;
    color: string;
    left: number;
    top: number;

    details: CollectionDetail[];
}