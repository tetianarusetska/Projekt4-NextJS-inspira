"use client";

import { useEffect, useState } from "react";
import InspiraCard from "./InspiraCard";

type InspiraItem = {
    collection: string;
    author: string | null;
    title: string;
    year: string | null;
};

export default function InspiraPage() {
    const [items, setItems] = useState<InspiraItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const response = await fetch("/api/favorites");

                if (!response.ok) {
                    throw new Error("Favoriten konnten nicht geladen werden");
                }

                const data = await response.json();

                const normalizedItems = data.groups.flatMap((group: any) =>
                    group.items.map((item: any) => ({
                        collection: group.label,
                        author: item.author,
                        title: item.title,
                        year: item.year,
                    }))
                );

                setItems(normalizedItems);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadFavorites();
    }, []);

    if (loading) {
        return <div className="p-12">Lade i . nspira Karte...</div>;
    }

    return (
        <main className="min-h-screen bg-[#EDEDED] p-8 md:p-12">
            <InspiraCard items={items} />
        </main>
    );
}