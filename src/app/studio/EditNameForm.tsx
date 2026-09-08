"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { updateUserNameAction, UpdateNameState } from "@/app/actions/profile";

const initialState: UpdateNameState = { error: null, success: false };

function SaveButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="text-xs font-bold uppercase tracking-wider underline"
        >
            {pending ? "..." : "Speichern"}
        </button>
    );
}

export default function EditNameForm({ initialName }: { initialName: string }) {
    const [isEditing, setIsEditing] = useState(false);
    const [state, formAction] = useActionState(updateUserNameAction, initialState);

    useEffect(() => {
        if (state.success) {
            setIsEditing(false);
        }
    }, [state.success]);

    if (!isEditing) {
        return (
            <div className="flex items-center gap-3">
                <p className="text-2xl font-black uppercase font-text">{initialName}</p>
                <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-black"
                >
                    Bearbeiten
                </button>
            </div>
        );
    }

    return (
        <form action={formAction} className="flex items-center gap-3">
            <input
                name="name"
                defaultValue={initialName}
                autoFocus
                className="bg-transparent border-b border-black text-2xl font-black uppercase font-text outline-none"
            />
            <SaveButton />
            {state.error && <p className="text-xs text-red-600">{state.error}</p>}
        </form>
    );
}