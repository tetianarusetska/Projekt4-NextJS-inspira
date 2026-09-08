"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "../../../prisma/prisma.client";

export type UpdateNameState = {
    error: string | null;
    success: boolean;
};

export async function updateUserNameAction(
    _prevState: UpdateNameState,
    formData: FormData
): Promise<UpdateNameState> {

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) {
        return { error: "Nicht angemeldet", success: false };
    }

    const name = formData.get("name");
    if (typeof name !== "string" || !name.trim()) {
        return { error: "Name darf nicht leer sein", success: false };
    }

    try {
        await prisma.user.update({
            where: { id: session.user.id },
            data: { name: name.trim() },
        });

        revalidatePath("/studio");
        return { error: null, success: true };

    } catch (error) {
        console.error(error);
        return { error: "Fehler beim Speichern", success: false };
    }
}