import { useState } from "react";
import { useRouter } from "next/navigation";
import { CustomCollection } from "@/app/types/CustomCollection";

export function useProductSave(
    selectedCategory: string,
    values: Record<string, string>,
    image: string | null,
    customCollections: CustomCollection[]
) {
    const router = useRouter();

    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [objectId, setObjectId] = useState<number | null>(null);

    const existingCustomCollection = customCollections.find((c) => c.id === selectedCategory);

    async function handleSave() {
        setIsSaving(true);
        setError(null);

        try {
            if (selectedCategory === "customCollection") {

                const response = await fetch("/api/customCollections", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title: values.title,
                        description: values.description,
                        reason: values.reason,
                        imageUrl: image,
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.error || "Fehler beim Erstellen der Sammlung"
                    );
                }

                router.push(`/collections/${data.id}`);
                router.refresh();

                return;
            }

            if (existingCustomCollection) {

                const response = await fetch(`/api/customCollections/${existingCustomCollection.id}/objects`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title: values.title,
                        description: values.description,
                        note: values.note,
                        imageUrl: image,
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Fehler beim Speichern");
                }

                setObjectId(data.id);

                router.push(`/collections/${existingCustomCollection.id}`);
                router.refresh();

                return;
            }

            const res = await fetch("/api/objects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    collectionId: selectedCategory,
                    values,
                    imageUrl: image,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Fehler beim Speichern");
            }

            const data = await res.json();
            setObjectId(data.id);

            router.push(`/collections/${selectedCategory}`);
            router.refresh();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Fehler beim Speichern");
        } finally {
            setIsSaving(false);
        }
    }

    return { isSaving, error, objectId, handleSave };
}