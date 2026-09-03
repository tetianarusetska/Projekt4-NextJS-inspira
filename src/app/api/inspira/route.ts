import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getFavorites } from "@/app/api/favorites/getFavorites";
import React from "react";
import path from "path";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    pdf,
} from "@react-pdf/renderer";


Font.register({
    family: "Fayte",
    src: path.join(
        process.cwd(),
        "public/fonts/fayte-font/faytetest-regular.otf"
    ),
});

const styles = StyleSheet.create({
    page: {
        padding: 14,
        backgroundColor: "#000000",
    },

    card: {
        backgroundColor: "#EDEDED",
        padding: 28,
    },

    header: {
        borderBottomWidth: 3,
        borderBottomColor: "#000000",
        paddingBottom: 24,
    },

    logo: {
        fontFamily: "Fayte",
        fontSize: 34,
    },

    subtitle: {
        marginTop: 8,
        fontSize: 9,
        fontWeight: 900,
        letterSpacing: 3,
    },

    personal: {
        marginTop: 8,
        fontSize: 7,
        fontWeight: 700,
        letterSpacing: 2,
    },

    content: {
        marginTop: 22,
    },

    group: {
        marginBottom: 16,
    },

    collection: {
        marginBottom: 6,
        fontSize: 8,
        fontWeight: 900,
        letterSpacing: 2,
    },

    item: {
        borderBottomWidth: 1,
        borderBottomColor: "#999999",
        paddingBottom: 5,
        marginBottom: 5,
        fontSize: 11,
        lineHeight: 1.2,
    },

    footer: {
        marginTop: 18,
        paddingTop: 12,
        borderTopWidth: 3,
        borderTopColor: "#000000",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    footerText: {
        fontSize: 7,
        fontWeight: 900,
        letterSpacing: 2,
    },
});


export async function GET() {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return NextResponse.json(
            { error: "Nicht angemeldet" },
            { status: 401 }
        );
    }

    try {
        const groups = await getFavorites(session.user.id);

        const document = React.createElement(
            Document,
            null,
            React.createElement(
                Page,
                { size: "A4", style: styles.page },
                React.createElement(
                    View,
                    { style: styles.card },

                    React.createElement(
                        View,
                        { style: styles.header },

                        React.createElement(
                            Text,
                            { style: styles.logo },
                            "i . nspira"
                        ),

                        React.createElement(
                            Text,
                            { style: styles.subtitle },
                            "KARTE"
                        ),

                        React.createElement(
                            Text,
                            { style: styles.personal },
                            "PERSÖNLICHE AUSWAHL"
                        )
                    ),

                    React.createElement(
                        View,
                        { style: styles.content },

                        ...groups.map((group) =>
                            React.createElement(
                                View,
                                {
                                    key: group.id,
                                    style: styles.group,
                                },

                                React.createElement(
                                    Text,
                                    { style: styles.collection },
                                    group.label
                                ),

                                ...group.items.map((item) =>
                                    React.createElement(
                                        Text,
                                        {
                                            key: item.id,
                                            style: styles.item,
                                        },
                                        [
                                            item.author ? `${item.author} — ` : "",
                                            `"${item.title}"`,
                                            item.year ? `, ${item.year}` : "",
                                        ].join("")
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    View,
                    { style: styles.footer },

                    React.createElement(
                        Text,
                        { style: styles.footerText },
                        "i . nspira"
                    ),

                    React.createElement(
                        Text,
                        { style: styles.footerText },
                        `${groups.reduce(
                            (sum, group) => sum + group.items.length,
                            0
                        )} OBJEKTE`
                    )
                )
            )
        );

        const buffer = await pdf(document).toBuffer();

        const chunks: Uint8Array[] = [];

        for await (const chunk of buffer) {
            chunks.push(
                typeof chunk === "string"
                    ? new TextEncoder().encode(chunk)
                    : chunk
            );
        }

        const pdfBuffer = Buffer.concat(chunks);

        return new NextResponse(pdfBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="i-nspira-karte.pdf"',
            },
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "PDF konnte nicht erstellt werden" },
            { status: 500 }
        );
    }
}