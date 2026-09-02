import { useState } from "react";
import { useRouter } from "next/navigation";

export function useObjectMutations(collectionId: string, objectId: number, isCustom: boolean = false) {

    const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const router = useRouter();

    const endpoint = isCustom
        ? `/api/customCollections/${collectionId}/objects`
        : "/api/objects";

    const buildBody = (extra: Record<string, unknown>) =>
        isCustom
            ? JSON.stringify({ objectId, ...extra })
            : JSON.stringify({ collectionId, objectId, ...extra });

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Möchtest du dieses Objekt wirklich löschen?"
        );
        if (!confirmed) {
            return;
        }

        try {
            setIsDeleting(true);

            const response = await fetch(endpoint, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: buildBody({}),
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

            const response = await fetch(endpoint, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: buildBody({ data: updatedFields }),
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

    const handleToggleFavorite = async (
        currentValue: boolean,
        onOptimisticUpdate: (value: boolean) => void
    ) => {
        const nextValue = !currentValue;
        onOptimisticUpdate(nextValue);

        try {
            const response = await fetch(endpoint, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: buildBody({ data: { isFavorite: nextValue } }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Fehler beim Aktualisieren");
            }
        } catch (error) {
            console.error(error);
            onOptimisticUpdate(currentValue);
            alert(
                error instanceof Error
                    ? error.message
                    : "Fehler beim Speichern des Favoriten"
            );
        }
    };

    return { isDeleting, isUpdating, handleDelete, handleUpdate, handleToggleFavorite };
}