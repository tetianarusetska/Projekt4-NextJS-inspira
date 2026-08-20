# Inspira (i.nspira) — Mehr als ein Archiv

> **„Analog gesammelt. Digital bewahrt. Persönlich verbunden.“**

---

## 1. Projektbeschreibung / Kernidee

### Was ist Inspira?
**Inspira** (*i.nspira*) ist eine webbasierte Plattform zur persönlichen Kuration, Katalogisierung und Archivierung von Inspirationen aus der analogen und digitalen Welt. Die Anwendung fungiert als individueller, ästhetisch gestalteter Sammlungsraum, in dem Bücher, Musik, Kunstwerke, Ausstellungen, Fotografien, Zitate und Ideen strukturiert festgehalten werden.

### Welches Problem löst die Anwendung?
Im Alltag begegnen uns unzählige inspirierende Eindrücke – ein Satz in einem Buch, ein Gemälde in einer Galerie, ein Plattencover oder ein spontaner Gedanke. Häufig gehen diese Momente verloren, weil sie über unzählige Notiz-Apps, Fotospeicher, Lesezeichen oder Notizbücher verstreut sind. Inspira überwindet diese Fragmentierung und bietet ein einheitliches, kuratiertes Zuhause für alle Arten von Inspiration.

### Was ist die Grundidee?
Jedes Objekt erhält wie in einem realen Museums- oder Verlagsarchiv einen festen Platz, eine Identifikationsnummer (z. B. *N°01*), Metadaten, persönliche Notizen und visuelle Medien. Die Grundidee stützt sich auf drei Säulen:
- **Persönlich:** Jedes Objekt wird mit individuellem Kontext versehen (Notizen, persönliche Zitate, Fundort/Herkunft).
- **Digital:** Ortsunabhängig zugänglich, skalierbar und jederzeit geordnet.
- **Kuratiert:** Klare Kategorien und strukturierte Eingabemasken statt beliebigem Datenmüll.

### Für wen ist Inspira gedacht?
Inspira richtet sich an Kreative, Designer, Kunst- und Kulturliebhaber, Sammler, Autoren und alle Menschen, die ihre physischen und digitalen Entdeckungen strukturiert und visuell ansprechend archivieren möchten.

### Welche zentrale Funktion steht im Mittelpunkt?
Das Herzstück der Anwendung ist der **vierstufige Archivierungs-Assistent (`/archive`)**, der den Nutzer Schritt für Schritt durch das Anlegen eines neuen Objekts führt:
1. **Sammlung wählen:** Auswahl aus 11 vordefinierten bzw. konfigurierbaren Kategorien.
2. **Details hinzufügen:** Kategoriespezifische Metadaten erfassen (Titel, Autor, Jahr, Notizen, Zitate etc.).
3. **Medien hinzufügen:** Hochladen visueller Nachweise (Cover, Fotos, Dokumente).
4. **Vorschau & Speichern:** Überprüfung der Archivkarte und persistente Speicherung im persönlichen Sammlungsraum.

---

## 2. Technologien

Im Repository werden ausschließlich folgende Technologien eingesetzt:

### Frontend
- **Framework:** [Next.js](https://nextjs.org/) (Version 16.3.0) mit App Router
- **UI-Bibliothek:** [React](https://react.dev/) (Version 19.2.8) & React DOM
- **Programmiersprache:** [TypeScript](https://www.typescriptlang.org/) (Version ^5)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Version ^4) mit `@tailwindcss/postcss`
- **Typografie & Icons:** 
  - `material-symbols` (Google Material Symbols Outlined)
  - `lucide-react`
  - Lokale Custom Webfonts (u. a. *Test Founders Grotesk*, *Test Die Grotesk*, *Fayte*, *Kino40*, *Geograph*, *Untitled Sans*, *Made Soulmaze*)
- **Animation & UX:** [Lenis](https://lenis.darkroom.engineering/) (Smooth Scrolling)

### Backend & API
- **Server Runtime:** Next.js Route Handlers (`/api/auth/*`, `/api/objects`, `/api/upload`) & Server Components
- **Authentifizierung:** [Better-Auth](https://www.better-auth.com/) (Version ^1.7.0)
  - Email & Passwort (gesichert via `argon2`)
  - Google OAuth Provider (`authClient.signIn.social`)
  - Session-Management über Server-Header (`auth.api.getSession`)
- **Cloud-Speicher:** `@vercel/blob` (Client-Uploads und Server-Token-Generierung für Bilder bis 10 MB)

### Datenbank & ORM
- **Datenbank:** [PostgreSQL](https://www.postgresql.org/) (v15 im Docker-Container bzw. Neon PostgreSQL bei Vercel-Deployments)
- **ORM:** [Prisma ORM](https://www.prisma.io/) (Version ^7.9.1)
  - `@prisma/client` (Generierter Client im Verzeichnis `prisma/client`)
  - `@prisma/adapter-pg` (PostgreSQL Driver Adapter mit Node `pg`)
  - `@prisma/adapter-neon` (Neon Serverless PostgreSQL Adapter)
- **Containerisierung:** Docker & Docker Compose (`Dockerfile.dev`, `docker-compose.yml`)

---

## 3. Voraussetzungen

Um das Projekt lokal auszuführen, werden folgende Werkzeuge benötigt:

1. **Node.js:** Version `20.x` oder `24.x` (passend zum Node 24 Alpine Docker-Image)
2. **Paketmanager:** `npm` (im Lieferumfang von Node.js enthalten)
3. **Docker & Docker Compose:** Für das lokale Ausführen der PostgreSQL-Datenbank (oder alternativ ein externer PostgreSQL-Server bzw. Neon-Account)
4. **Git:** Zum Klonen des Repositories

---

## 4. Projekt starten

Folge diesen Schritten, um das Projekt lokal aufzusetzen und zu starten:

### Schritt 1: Repository klonen und Abhängigkeiten installieren
```bash
# In das Projektverzeichnis wechseln
cd inspira

# Node-Dependencies installieren
npm install
```

### Schritt 2: Umgebungsvariablen anlegen
Erstelle eine Datei `.env` im Hauptverzeichnis des Projekts (neben `package.json`):

```env
# Lokale PostgreSQL-Verbindung (falls Docker genutzt wird):
DATABASE_URL="postgresql://admin:1234@localhost:5432/prisma_inspira"

# Better-Auth Konfiguration
BETTER_AUTH_SECRET="ein-sicherer-geheimer-schluessel-mindestens-32-zeichen"
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth (Optional für Google Login)
GOOGLE_CLIENT_ID="deine-google-client-id"
GOOGLE_CLIENT_SECRET="deine-google-client-secret"

# Vercel Blob Token (Für Bild-Uploads)
BLOB_READ_WRITE_TOKEN="dein-vercel-blob-token"
```

> **Hinweis zur Docker-Umgebung:** Die Datei `.env.docker` ist im Repository bereits vorhanden und definiert Standardwerte für den Datenbank-Container (`POSTGRES_USER=admin`, `POSTGRES_PASSWORD=1234`, `POSTGRES_DB=prisma_inspira`).

### Schritt 3: Datenbank starten (via Docker)
Starte die PostgreSQL-Datenbank im Hintergrund:
```bash
docker compose up -d postgres
```

### Schritt 4: Prisma vorbereiten (Client generieren & Migration anwenden)
Führe die Migrationen aus und generiere den Prisma Client:
```bash
# Datenbankstruktur mit Migrationen aktualisieren
npx prisma migrate dev

# Prisma Client erzeugen
npx prisma generate
```

### Schritt 5: Entwicklungsserver starten
Starte die Next.js-Anwendung im Entwicklungsmodus:
```bash
npm run dev
```

Die Anwendung ist anschließend unter **[http://localhost:3000](http://localhost:3000)** erreichbar.

---

### Alternative: Vollständiger Start im Docker-Container
Falls die gesamte Anwendung inklusive Next.js und PostgreSQL im Container laufen soll:
```bash
docker compose up --build
```
- Web-App: `http://localhost:3000`
- Prisma Studio / Exponierter Port: `http://localhost:5555`

---

## 5. Aktueller Projektstand

| Bereich | Status | Details |
|---|---|---|
| **Landing Page & Präsentation** | ✅ Umgesetzt | Startseite (`/`) mit animiertem Header, Hero-Bereich, Sammlungs-Vorschau, Beispiel-Karte (`ExampleCardArea`), About-Bereich und responsivem Layout mit Lenis Smooth-Scrolling. |
| **Authentifizierung (Better-Auth)** | ✅ Umgesetzt | Registrierung (`/registr`) und Login (`/login`) mit Email/Passwort und Google OAuth UI. Session-Verifikation in API-Endpunkten und serverseitigen Pages (`auth.api.getSession`). |
| **Route Protection (Auth Guards)** | ✅ Umgesetzt | Nicht authentifizierte Nutzer werden beim Aufruf von `/cabinet`, `/collections`, `/collections/[id]`, `/collections/[id]/[objectId]` und `/archive` direkt auf `/login` weitergeleitet. |
| **Archivierungs-Flow (`/archive`)** | ✅ Umgesetzt | 4-Schritte-Formular: 1. Kategorie wählen (`Collection.tsx`), 2. Formular-Felder ausfüllen (`Details.tsx`), 3. Bild-Upload via Vercel Blob (`Media.tsx`), 4. Vorschau & `POST /api/objects` (`Product.tsx`). |
| **Backend-API (`POST /api/objects`)** | ✅ Umgesetzt | Vollständige Speicherung aller 11 Sammlungsarten (`saveObject.ts`) in die jeweiligen Prisma-Modelle (`Book`, `Music`, `Magazine`, `Artwork`, `Museum`, `Gallery`, `Image`, `Photograph`, `Idea`, `Quote`, `NewCollection`). |
| **Media Upload API (`POST /api/upload`)** | ✅ Umgesetzt | `@vercel/blob`-Handler mit Validierung für Dateitypen (`image/jpeg`, `image/png`, `image/webp`) und max. 10 MB Dateigröße. |
| **Prisma Datenbankschema** | ✅ Umgesetzt | 15 Tabellen definiert (`User`, `Session`, `Account`, `Verification` sowie 11 Entitäten für Sammlungen) inkl. Migration `01_fix_fields`. |
| **Sammlungs-Katalog (`/collections`)** | ✅ Umgesetzt | Übersicht aller 11 Kategorien mit spezifischen Farbcodes, Icons und responsivem Grid/Listen-Layout. |
| **Persönlicher Bereich (`/cabinet`)** | 🟡 Teilweise umgesetzt | Zeigt Benutzername bzw. E-Mail aus der Session an. Sammlungs- und Objektstatistiken ("X", "XXXXJ.") sind jedoch noch statische Platzhalter. |
| **Kategorie-Objektliste (`/collections/[id]`)** | 🟡 Teilweise umgesetzt | Filter-UI und Paginierungsleiste vorhanden. Nutzt jedoch einen fehlerhaften Import `@/app/data/MockObjects` statt echter DB-Abfragen. |
| **Objekt-Detailansicht (`/collections/[id]/[objectId]`)** | 🟡 Teilweise umgesetzt | Route existiert, bindet aber die Komponente `ObjectCard.tsx` noch nicht ein. `ObjectCard.tsx` enthält statische Dummy-Daten ("OPUS PISTORUM"). |
| **Logout & Benutzerverwaltung** | 🔴 Noch offen | Im Navigationsmenü des geschützten Bereichs (`CabinetNavLinks.tsx`) existiert nur ein Link zu `/login` statt einer echten Abmelde-Funktion. |
| **Aktivitäts-Seite (`/activity`)** | 🔴 Noch offen | In `CabinetNavLinks.tsx` verlinkt, aber keine Page unter `src/app/activity` vorhanden (führt zu 404). |
| **Dynamische Filter & Suche** | 🔴 Noch offen | Filter-Buttons ("Neuste", "A–Z", "N°", "aufsteigend") in `CollectionContent.tsx` besitzen noch keine Interaktionslogik. |
| **Bearbeiten / Löschen von Objekten** | 🔴 Noch offen | Keine Update- oder Delete-Endpunkte bzw. UI-Elemente für bestehende Objekte implementiert. |

---

## 6. Datenfluss

Die Anwendung trennt klar zwischen öffentlichen Präsentationsseiten, geschützten Benutzerbereichen und asynchronen API-Operationen.

### 1. Authentifizierungs-Fluss
```
Benutzer (Browser)
  │
  ├──> Formular-Eingabe (Login / Registrierung)
  │      │
  │      └──> authClient (Better-Auth React SDK)
  │             │
  │             └──> POST /api/auth/* (Next.js Handler)
  │                    │
  │                    └──> Prisma Adapter ──> PostgreSQL ("User", "Account", "Session")
```

### 2. Archivierungs- & Upload-Fluss
```
Benutzer wählt Kategorie & füllt Details aus (/archive)
  │
  ├──> Medien-Upload (Media.tsx):
  │      │
  │      ├──> POST /api/upload (Token-Anfrage) ──> @vercel/blob
  │      └──> Bild-Datei direkt zu Vercel Blob Storage ──> Rückgabe der Image-URL
  │
  └──> Speichern (Product.tsx):
         │
         └──> POST /api/objects { collectionId, values, imageUrl }
                │
                ├──> Session-Prüfung (auth.api.getSession)
                ├──> saveObject(userId, collectionId, values, imageUrl)
                ├──> Prisma Model Create (z. B. prisma.book.create) ──> PostgreSQL
                └──> revalidatePath(/collections/[id]) ──> Redirect zu Sammlung
```

### Mermaid-Architekturdiagramm

```mermaid
flowchart TD
    subgraph Client["Frontend (Next.js Client Components)"]
        Landing["Startseite (/)"]
        AuthUI["Login / Registrierung (/login, /registr)"]
        Cabinet["Persönlicher Bereich (/cabinet)"]
        CollectionsView["Sammlungen (/collections, /collections/[id])"]
        ArchiveWizard["Archivierungs-Assistent (/archive)"]
    end

    subgraph API["Backend API (Next.js Route Handlers)"]
        AuthRoute["/api/auth/[...all]"]
        UploadRoute["/api/upload"]
        ObjectsRoute["/api/objects"]
    end

    subgraph Services["Externe Dienste & Speicherung"]
        VercelBlob["Vercel Blob Storage (Bilder)"]
        PrismaORM["Prisma Client & Adapter"]
        PostgresDB[("PostgreSQL Datenbank")]
    end

    AuthUI -->|Better-Auth Client| AuthRoute
    AuthRoute --> PrismaORM
    
    ArchiveWizard -->|Bild hochladen| UploadRoute
    UploadRoute --> VercelBlob
    VercelBlob -.->|Image URL| ArchiveWizard

    ArchiveWizard -->|Objektdaten & Image URL| ObjectsRoute
    ObjectsRoute -->|Session Check & saveObject| PrismaORM
    
    Cabinet -->|Server Session| PrismaORM
    CollectionsView -->|Server Session| PrismaORM
    
    PrismaORM --> PostgresDB
```

---

## 7. Projektstruktur

```
inspira/
├── Dockerfile.dev                    # Docker-Image Konfiguration für die Entwicklung (Node 24 Alpine)
├── docker-compose.yml                # Multi-Container-Setup (Next.js App + PostgreSQL 15)
├── eslint.config.mjs                 # ESLint Konfiguration (Next.js Core Web Vitals)
├── next.config.ts                    # Next.js Konfiguration
├── package.json                      # Projektabhängigkeiten und Skripte
├── postcss.config.mjs                # PostCSS Konfiguration für Tailwind CSS v4
├── prisma.config.ts                  # Prisma Konfiguration (Schema-Pfad, Migrations, Datasource)
├── tsconfig.json                     # TypeScript Compiler-Konfiguration & Pfad-Aliase (@/*)
│
├── prisma/
│   ├── schema.prisma                 # Datenbankschema (User, Auth, 11 Sammlungs-Modelle)
│   ├── client.ts                     # Prisma-Instanziierung mit Neon/PG-Adaptern
│   ├── migrations/                   # SQL-Migrationsdateien (01_fix_fields)
│   └── client/                       # Generierter Prisma Client Code
│
├── public/
│   ├── fonts/                        # Lokale Schriftarten (Grotesk, Kino40, Fayte, etc.)
│   └── images/                       # Statische Vektor- und Bildressourcen (Logo.svg, etc.)
│
└── src/
    ├── lib/
    │   ├── auth.ts                   # Better-Auth Server-Konfiguration (Prisma Adapter, Google OAuth)
    │   └── auth-client.ts            # Better-Auth React Client (`authClient`)
    │
    └── app/
        ├── layout.tsx                # Root-Layout mit Schriftarten und SmoothScroll
        ├── globals.css               # Globale CSS-Stile, Font-Faces und Farbschemata
        ├── page.tsx                  # Öffentliche Landing Page
        │
        ├── api/                      # Backend API-Routen
        │   ├── auth/[...all]/route.ts# Better-Auth Endpunkt
        │   ├── upload/route.ts       # Vercel Blob Upload Handler
        │   └── objects/
        │       ├── route.ts          # POST-Endpunkt zum Speichern von Objekten
        │       └── saveObject.ts     # Mapping-Logik für 11 Kategorien auf Prisma-Modelle
        │
        ├── login/ & registr/         # Authentifizierungsseiten & Anmeldeformulare
        ├── cabinet/                  # Persönlicher Benutzerbereich (/cabinet)
        │   ├── page.tsx              # Server Component mit Auth-Guard
        │   ├── PersonalArea.tsx      # Benutzerübersicht
        │   └── header/               # Cabinet-spezifischer Header & Navigation
        │
        ├── collections/              # Sammlungsseiten
        │   ├── page.tsx              # Übersicht aller 11 Sammlungen
        │   ├── Collections.tsx       # Grid- und Kacheldarstellung der Kategorien
        │   └── [id]/                 # Dynamische Kategorieansicht
        │       ├── page.tsx          # Kategorie-Server Component
        │       ├── CollectionContent.tsx # Kachel- und Paginierungsansicht
        │       └── [objectId]/       # Einzelobjektansicht
        │           ├── page.tsx      # Objekt-Detail Server Component
        │           └── ObjectCard.tsx# Detail-Archivkarte für ein Objekt
        │
        ├── archive/                  # 4-stufiger Archivierungs-Assistent (/archive)
        │   ├── Archive.tsx           # State Machine für die 4 Schritte
        │   ├── Collection.tsx        # Schritt 1: Kategorie-Auswahl
        │   ├── Details.tsx           # Schritt 2: Dynamische Metadaten-Eingabefelder
        │   ├── Media.tsx             # Schritt 3: Bildauswahl und Vercel Blob Upload
        │   └── Product.tsx           # Schritt 4: Archivkarten-Vorschau & Speichern
        │
        ├── components/               # Wiederverwendbare UI-Komponenten
        │   ├── header/               # Öffentlicher Header & Navigation
        │   ├── footer/               # Footer-Komponenten & Impressum-Links
        │   ├── homepage/             # Sektionen der Startseite (Hero, About, etc.)
        │   └── SmoothScroll.tsx      # Lenis Smooth-Scrolling Wrapper
        │
        ├── layoutDesign/             # Dekorative Hintergrund- und Linienraster
        ├── data/
        │   ├── Collections.ts        # Metadaten, Farbwerte & Eingabefelder der 11 Kategorien
        │   └── ObjectColors.ts       # Farbpaletten für generierte Objektkarten
        │
        ├── types/                    # TypeScript Interfaces & Typdefinitionen
        └── utils/
            └── getObjectColor.ts     # Utility zur deterministischen Farbzuweisung
```

---

## 8. Nächste Schritte

Basierend auf dem aktuellen Entwicklungsstand des Repositories empfiehlt sich folgende Roadmap:

### 🔴 Wichtig (Priorität 1 – Unbedingt fertigstellen)
1. **Fehlendes MockObjects-Modul / DB-Anbindung in `CollectionContent.tsx` beheben:**
   - Den fehlerhaften Import `@/app/data/MockObjects` entfernen.
   - Die Objekte der gewählten Sammlung stattdessen direkt per Prisma-Abfrage oder API aus der Datenbank laden.
2. **Detailseite für Einzelobjekte vervollständigen (`/collections/[id]/[objectId]`):**
   - In `[objectId]/page.tsx` die `ObjectCard`-Komponente einbinden.
   - `ObjectCard.tsx` so anpassen, dass die tatsächlichen Objektdaten aus der Datenbank dynamisch gerendert werden (anstatt der statischen "OPUS PISTORUM"-Daten).
3. **Abmeldefunktion (Logout) im Cabinet-Header einbauen:**
   - In `CabinetNavLinks.tsx` den Link zu `/login` durch einen funktionsfähigen Logout-Button mit `authClient.signOut()` ersetzen.

### 🟡 Danach (Priorität 2 – Funktionale Vervollständigung)
4. **Dynamische Zähler & Benutzerstatistiken:**
   - In `PersonalArea.tsx` und `Collections.tsx` die Platzhalter `"XXX OBJEKTE"` bzw. `"X"` durch echte Datenbank-Zählungen (`prisma[model].count({ where: { userId } })`) ersetzen.
5. **Aktivitäts-Seite (`/activity`) anlegen:**
   - Entweder eine Chronik der zuletzt hinzugefügten Inspirationen unter `src/app/activity/page.tsx` bereitstellen oder den Navigationslink entfernen.
6. **Filter & Sortierung implementieren:**
   - Die UI-Optionen in `CollectionContent.tsx` ("Neuste", "A–Z", "N°", "aufsteigend") funktional mit dem State bzw. URL-Suchparametern verknüpfen.
7. **Lösch- und Bearbeitungsfunktionen:**
   - API-Routen `DELETE /api/objects/[id]` und `PUT /api/objects/[id]` sowie entsprechende Aktionen in der Objekt-Detailansicht ergänzen.

### 🟢 Später (Priorität 3 – Erweiterungen & Komfort)
8. **Volltextsuche:**
   - Sammlungsübergreifende Suchleiste zur schnellen Auffindung von Zitaten, Notizen, Autoren und Titeln.
   - Tags und Schlagwörter zur flexiblen Verknüpfung von Objekten über Kategorien hinweg.
9. **Benutzerdefinierte Sammlungen:**
   - Dynamisches Anlegen völlig neuer Kategorien durch den Nutzer mit flexiblen Feldern (über das `NewCollection`-Modell hinaus).
10. **Export- & Sharing-Funktionen:**
    - Export des persönlichen Archivs als PDF oder JSON sowie Freigabe-Links für kuratierte Sammlungen.

---

## 9. Bekannte Probleme

1. **Fehlendes Modul `MockObjects.ts` (Build-Fehler TS2307):**
   - In `src/app/collections/[id]/CollectionContent.tsx` wird `import { createObjects } from "@/app/data/MockObjects";` aufgerufen, die Datei existiert jedoch nicht im Verzeichnis `src/app/data/`. Dies verhindert einen erfolgreichen TypeScript-Build (`tsc --noEmit`).
2. **Fehlendes Seed-Skript & Abhängigkeit:**
   - `prisma.config.ts` verweist auf `seed: "tsx prisma/prisma.seed.ts"`. Die Datei `prisma.seed.ts` existiert nicht im Verzeichnis `prisma/` und das Paket `tsx` ist nicht in den `devDependencies` installiert.
3. **Unvollständige Einzelobjekt-Ansicht:**
   - `src/app/collections/[id]/[objectId]/page.tsx` nimmt zwar `objectId` entgegen und loggt diesen in die Konsole, rendert jedoch keine Inhalte und lädt keine Daten.
4. **Hardcodierte Daten in `ObjectCard.tsx`:**
   - Die Komponente `src/app/collections/[id]/[objectId]/ObjectCard.tsx` ignoriert die übergebenen `object`-Props und zeigt statische Texte an.
5. **Fehlende Zielseite für Navigationslink `/activity`:**
   - `src/app/cabinet/header/CabinetNavLinks.tsx` enthält einen Link zu `/activity`, für den keine entsprechende Route existiert (führt zu HTTP 404).
6. **Login-Link statt Logout im authentifizierten Zustand:**
   - Im geschützten Cabinet-Header wird weiterhin `/login` als Navigationspunkt aufgeführt, anstatt eine Abmeldung anzubieten.

---

## 10. Projektziel

Das finale Ziel von **Inspira** ist es, eine digitale Zuflucht für persönliche Gedanken, kulturelle Entdeckungen und kreative Inspirationen zu schaffen. 

Die Plattform soll das haptische und strukturierte Gefühl eines klassischen Archivs oder Katalogs mit den Vorteilen einer modernen Webanwendung verbinden:
- Nutzer können innerhalb von Sekunden neue Fundstücke mit wenigen Klicks kategorisieren, mit Zitaten oder Gedanken versehen und durch visuelle Medien unvergesslich machen.
- Jedes Objekt wird dauerhaft und sicher in der Cloud gespeichert.
- Die eigene Sammlung wächst mit den Jahren zu einer individuellen Enzyklopädie des persönlichen Geschmacks heran – geordnet, ästhetisch und jederzeit griffbereit.

