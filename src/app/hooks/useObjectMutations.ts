import { useState } from "react";
import { useRouter } from "next/navigation";

export function useObjectMutations(collectionId: string, objectId: number) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Möchtest du dieses Objekt wirklich löschen?"
        );
        if (!confirmed) {
            return;
        }

        try {
            setIsDeleting(true);

            const response = await fetch("/api/objects", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ collectionId, objectId }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Fehler beim Löschen");
            }

            router.push(`/collections/${collectionId}`);
            router.refresh();
        } catch (error) {
            console.error(error);
            alert(
                error instanceof Error
                    ? error.message
                    : "Fehler beim Löschen des Objekts"
            );
        } finally {
            setIsDeleting(false);
        }
    };

    const handleUpdate = async (
        updatedFields: Record<string, unknown>,
        onSuccess: () => void
    ) => {
        try {
            setIsUpdating(true);

            const response = await fetch("/api/objects", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    collectionId,
                    objectId,
                    data: updatedFields,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Fehler beim Aktualisieren");
            }

            onSuccess();
            router.refresh();
        } catch (error) {
            console.error(error);
            alert(
                error instanceof Error
                    ? error.message
                    : "Fehler beim Aktualisieren des Objekts"
            );
        } finally {
            setIsUpdating(false);
        }
    };

    return { isDeleting, isUpdating, handleDelete, handleUpdate };
}