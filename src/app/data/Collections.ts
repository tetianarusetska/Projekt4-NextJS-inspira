import { Collection } from "../types/Collection";

export const collections: Record<string, Collection> = {
    books: {
        id: "books",
        number: "N°01",
        code: "Buch",
        name: "BÜCHER",
        icon: "menu_book",

        count: "XXX OBJEKTE",
        color: "#012F38",
        left: 40,
        top: 350,

        details: [
            {
                id: "title",
                label: "N°01, TITEL",
                type: "text",
                placeholder: '“Sexus”',
            },
            {
                id: "author",
                label: "N°02, AUTOR",
                type: "text",
                placeholder: "Henry Miller",
            },
            {
                id: "year",
                label: "N°03, ERSCHEINUNGSJAHR",
                type: "text",
                placeholder: "1947",
            },
            {
                id: "pages",
                label: "N°04, SEITENZAHL",
                type: "number",
                placeholder: "688",
            },
            {
                id: "discovered_by",
                label: "N°05, ENTDECKT DURCH",
                type: "text",
                placeholder: "Buchladen in Prag",
            },
            {
                id: "note",
                label: "N°06, NOTIZ",
                type: "textarea",
                placeholder: "Ich habe es an einem Regentag in Prag gefunden — die erste Seite hat mich sofort gepackt. Erinnert mich daran, warum ich lese.",
            },
            {
                id: "bestQuote",
                label: "N°07, BESTES ZITAT",
                type: "textarea",
                placeholder: "„Wenn die Maschinerie stillsteht, verbreitet sie eine Leere, die noch unheimlicher ist als der Tod. Ich war ein Gespenst, das sich in einem Vakuum bewegte.“",
                font: "kino-40",
            },
        ],
    },

    music: {
        id: "music",
        number: "N°02",
        code: "Mus",
        name: "MUSIK",
        icon: "library_music",

        count: "XXX OBJEKTE",
        color: "#015C42",
        left: 323,
        top: 395,

        details: [
            {
                id: "format",
                label: "N°01, FORMAT",
                type: "select",
                options: [
                    "Physisch",
                    "Digital",
                ],
            },
            {
                id: "title",
                label: "N°02, TITEL",
                type: "text",
                placeholder: `"Nothing Compares 2 U"`,
            },
            {
                id: "author",
                label: "N°03, AUTOR",
                type: "text",
                placeholder: "Sinéad O'Connor",
            },
            {
                id: "year",
                label: "N°04, ERSCHEINUNGSJAHR",
                type: "text",
                placeholder: "1990",
            },
            {
                id: "discovered_by",
                label: "N°05, ENTDECKT DURCH",
                type: "text",
                placeholder: "Mein Cousin Egor und seine Frau Kasya.",
            },
            {
                id: "note",
                label: "N°06, NOTIZ",
                type: "textarea",
                placeholder: "Zuerst war ich von der Musik beeindruckt. Dann war ich von den Persönlichkeiten beeindruckt.",
            },
            {
                id: "bestQuote",
                label: "N°07, BESTES ZITAT",
                type: "textarea",
                placeholder: "„Cause nothing compares, nothing compares to you.“",
                font: "kino-40",
            },
        ],
    },

    magazines: {
        id: "magazines",
        number: "N°03",
        code: "Mag",
        name: "MAGAZINE",
        icon: "text_fields",

        count: "XXX OBJEKTE",
        color: "#0688B8",
        left: 610,
        top: 303,

        details: [
            {
                id: "title",
                label: "N°01, TITEL",
                type: "text",
                placeholder: "RAY",
            },
            {
                id: "issue",
                label: "N°02, AUSGABE",
                type: "text",
                placeholder: "N° 24",
            },
            {
                id: "date",
                label: "N°03, DATUM",
                type: "text",
                placeholder: "September 1985",
            },
            {
                id: "discovered_by",
                label: "N°04, ENTDECKT DURCH",
                type: "text",
                placeholder: 'Eines Tages fand meine Großmutter auf der Straße neben den kostenlosen Büchern „RAY“.',
            },
            {
                id: "note",
                label: "N°05, NOTIZ",
                type: "textarea",
                placeholder: "Nichts kommt an die Schönheit dieses Filmmagazins heran.",
            },
            {
                id: "bestQuote",
                label: "N°06, BESTES ZITAT",
                type: "textarea",
                placeholder: "„Fotografie ist eine Liebesaffäre mit dem Leben.“",
                font: "kino-40",
            },
        ],
    },

    artworks: {
        id: "artworks",
        number: "N°04",
        code: "Kun",
        name: "KUNSTWERKE",
        icon: "format_paint",

        count: "XXX OBJEKTE",
        color: "#CF2F23",
        left: 905,
        top: 420,

        details: [
            {
                id: "format",
                label: "N°01, FORMAT",
                type: "select",
                options: [
                    "Physisch",
                    "Digital",
                ],
            },
            {
                id: "title",
                label: "N°02, TITEL",
                type: "text",
                placeholder: `"Guernica"`,
            },
            {
                id: "author",
                label: "N°03, AUTOR",
                type: "text",
                placeholder: "Pablo Picasso",
            },
            {
                id: "year",
                label: "N°04, ERSCHEINUNGSJAHR",
                type: "text",
                placeholder: "1937",
            },
            {
                id: "technique",
                label: "N°05, TECHNIK",
                type: "text",
                placeholder: "Öl auf Leinwand",
            },
            {
                id: "dimensions",
                label: "N°06, MAẞE",
                type: "text",
                placeholder: "349,3 × 776,6 cm",
            },
            {
                id: "discovered_by",
                label: "N°07, ENTDECKT DURCH",
                type: "text",
                placeholder: "Ausstellung",
            },
            {
                id: "note",
                label: "N°08, NOTIZ",
                type: "textarea",
                placeholder: "Was mich an diesem Werk bewegt...",
            },
        ],
    },

    museums: {
        id: "museums",
        number: "N°05",
        code: "Mue",
        name: "MUSEEN",
        icon: "home",

        count: "XXX OBJEKTE",
        color: "#000000",
        left: 1200,
        top: 347,

        details: [
            {
                id: "title",
                label: "N°01, TITEL",
                type: "text",
                placeholder: "Museum Ludwig",
            },
            {
                id: "city",
                label: "N°02, ORT",
                type: "text",
                placeholder: "Köln",
            },
            {
                id: "exhibition",
                label: "N°03, AUSSTELLUNG",
                type: "text",
                placeholder: "Andy Warhol",
            },
            {
                id: "date",
                label: "N°04, DATUM",
                type: "date",
                placeholder: "12.08.2025",
            },
            {
                id: "discovered_by",
                label: "N°05, ENTDECKT DURCH",
                type: "text",
                placeholder: "Reise nach Köln",
            },
            {
                id: "note",
                label: "N°06, NOTIZ",
                type: "textarea",
                placeholder: "Was ich aus diesem Besuch mitnehme...",
            },
        ],
    },

    galleries: {
        id: "galleries",
        number: "N°06",
        code: "Gal",
        name: "GALERIEN",
        icon: "contact_page",

        count: "XXX OBJEKTE",
        color: "#EDC225",
        left: 40,
        top: 821,

        details: [
            {
                id: "title",
                label: "N°01, TITEL",
                type: "text",
                placeholder: "Galerie Max Hetzler",
            },
            {
                id: "city",
                label: "N°02, ORT",
                type: "text",
                placeholder: "Berlin",
            },
            {
                id: "artist",
                label: "N°03, KÜNSTLER",
                type: "text",
                placeholder: "Albert Oehlen",
            },
            {
                id: "exhibition",
                label: "N°04, AUSSTELLUNG",
                type: "text",
                placeholder: "Neue Arbeiten",
            },
            {
                id: "date",
                label: "N°05, DATUM",
                type: "date",
                placeholder: "03.06.2025",
            },
            {
                id: "note",
                label: "N°06, NOTIZ",
                type: "textarea",
                placeholder: "Was mir besonders aufgefallen ist...",
            },
        ],
    },

    images: {
        id: "images",
        number: "N°07",
        code: "Bil",
        name: "BILDER",
        icon: "image",

        count: "XXX OBJEKTE",
        color: "#D72638",
        left: 323,
        top: 873,

        details: [
            {
                id: "title",
                label: "N°01, TITEL",
                type: "text",
                placeholder: "Untitled",
            },
            {
                id: "creator",
                label: "N°02, URHEBER",
                type: "text",
                placeholder: "Name des Künstlers",
            },
            {
                id: "year",
                label: "N°03, JAHR",
                type: "number",
                placeholder: "2024",
            },
            {
                id: "source",
                label: "N°04, QUELLE",
                type: "text",
                placeholder: "Archiv / Ausstellung / Internet",
            },
            {
                id: "discovered_by",
                label: "N°05, ENTDECKT DURCH",
                type: "text",
                placeholder: "Buch / Ausstellung / Zufall",
            },
            {
                id: "note",
                label: "N°06, NOTIZ",
                type: "textarea",
                placeholder: "Warum ich dieses Bild behalten möchte...",
            },
        ],
    },

    photographs: {
        id: "photographs",
        number: "N°08",
        code: "Fot",
        name: "FOTOGRAFIEN",
        icon: "photo_camera",

        count: "XXX OBJEKTE",
        color: "#34544C",
        left: 610,
        top: 782,

        details: [
            {
                id: "photographer",
                label: "N°01, FOTOGRAF",
                type: "text",
                placeholder: "Nan Goldin",
            },
            {
                id: "title",
                label: "N°02, TITEL",
                type: "text",
                placeholder: `"The Ballad of Sexual Dependency", 1986`,
            },
            {
                id: "location",
                label: "N°03, ORT",
                type: "text",
                placeholder: "New York",
            },
            {
                id: "source",
                label: "N°04, QUELLE",
                type: "text",
                placeholder: "Museum / Buch / Archiv",
            },
            {
                id: "note",
                label: "N°05, NOTIZ",
                type: "textarea",
                placeholder: "Was diese Fotografie für mich festhält...",
            },
        ],
    },

    ideas: {
        id: "ideas",
        number: "N°09",
        code: "Ide",
        name: "IDEEN",
        icon: "account_tree",

        count: "XXX OBJEKTE",
        color: "#C49A3A",
        left: 905,
        top: 912,

        details: [
            {
                id: "title",
                label: "N°01, TITEL",
                type: "text",
                placeholder: "Ein Archiv für verlorene Dinge",
            },
            {
                id: "category",
                label: "N°02, ART",
                type: "select",
                options: [
                    "Projekt",
                    "Konzept",
                    "Frage",
                    "Gedanke",
                ],
            },
            {
                id: "inspiration",
                label: "N°03, INSPIRATION",
                type: "text",
                placeholder: "Woher die Idee kam",
            },
            {
                id: "description",
                label: "N°04, BESCHREIBUNG",
                type: "textarea",
                placeholder: "Beschreibe die Idee...",
            },
            {
                id: "next_step",
                label: "N°05, NÄCHSTER SCHRITT",
                type: "text",
                placeholder: "Recherche beginnen",
            },
        ],
    },

    quotes: {
        id: "quotes",
        number: "N°10",
        code: "Zit",
        name: "ZITATE",
        icon: "chat_bubble_outline",

        count: "XXX OBJEKTE",
        color: "#13322C",
        left: 1200,
        top: 810,

        details: [
            {
                id: "title",
                label: "N°01, TITEL",
                type: "textarea",
                placeholder: "Das Zitat...",
            },
            {
                id: "author",
                label: "N°02, AUTOR",
                type: "text",
                placeholder: "Virginia Woolf",
            },
            {
                id: "source",
                label: "N°03, QUELLE",
                type: "text",
                placeholder: "A Room of One's Own",
            },
            {
                id: "year",
                label: "N°04, JAHR",
                type: "number",
                placeholder: "1929",
            },
            {
                id: "context",
                label: "N°05, KONTEXT",
                type: "textarea",
                placeholder: "Wann oder warum ich dieses Zitat gefunden habe...",
            },
        ],
    },

    newCollection: {
        id: "newCollection",
        number: "N°11",
        code: "Neue",
        name: "NEUE",
        icon: "add",

        count: "XXX OBJEKTE",
        color: "#131937",
        left: 620,
        top: 1220,

        details: [
            {
                id: "title",
                label: "N°01, TITEL",
                type: "text",
                placeholder: "Name der neuen Sammlung",
            },
            {
                id: "description",
                label: "N°02, BESCHREIBUNG",
                type: "textarea",
                placeholder: "Worum geht es in dieser Sammlung?",
            },
            {
                id: "reason",
                label: "N°03, WARUM",
                type: "textarea",
                placeholder: "Warum möchte ich diese Sammlung anlegen?",
            },
        ],
    },
};