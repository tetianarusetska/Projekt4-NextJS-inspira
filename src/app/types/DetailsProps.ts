import { CustomCollection } from "./CustomCollection";

export interface DetailsProps {
    selectedCategory: string;
    formValues: Record<string, string>;
    setFormValues: React.Dispatch<
        React.SetStateAction<Record<string, string>>
    >;
    customCollections: CustomCollection[];
}
