# i . nspira

i.nspira ist ein digitales Archiv für persönliche Sammlungen wie Bücher, Musik, Zeitschriften, Kunstwerke, Museen, Galerien, Fotografien, Ideen und Zitate.

Das Ziel besteht darin, verstreute physische Notizen und Sammlungen durch ein strukturiertes und durchsuchbares digitales Archiv zu ersetzen.

## Tech-Stack

- **Next.js 16** – React-Framework mit App Router und Server Components
- **TypeScript** – Typsicherheit
- **Prisma 7** – ORM, Typgenerierung und Datenbankmigrationen
- **PostgreSQL** – relationale Datenbank
- **Neon** – Cloud-PostgreSQL-Datenbank für die Produktion
- **Better Auth** – Authentifizierung und Sitzungsverwaltung
- **Docker** – reproduzierbare lokale Entwicklungsumgebung
- **Vercel** – Deployment und Hosting
- **Tailwind CSS** – Styling

## Architektur

```text
User
  ↓
Next.js / React
  ↓
API Routes
  ↓
Better Auth + Business Logic
  ↓
Prisma ORM
  ↓
PostgreSQL / Neon
```

Docker wird für die lokale Entwicklung verwendet, während Vercel und Neon in der Produktionsumgebung eingesetzt werden.

## Authentifizierung & Sicherheit

Better Auth übernimmt die Authentifizierung und Sitzungsverwaltung.

Geschützte Anfragen prüfen die aktuelle Sitzung und verwenden:

```ts
session.user.id
```

zur Identifizierung des Benutzers.

Auch die Datenbankabfragen werden nach userId gefiltert. Dadurch wird sichergestellt, dass Benutzer ausschließlich auf ihre eigenen Objekte zugreifen und diese bearbeiten können.

## CRUD API

Die zentrale Objekt-API befindet sich unter:

```text
/api/objects
```

Sie unterstützt die wichtigsten CRUD-Operationen:

- **CREATE** – ein neues Objekt erstellen
- **READ** – Objekte abrufen
- **UPDATE** – ein Objekt aktualisieren
- **DELETE** – ein Objekt löschen

Nach Änderungen wird `revalidatePath()` verwendet, damit die angezeigten Daten aktuell bleiben.

## Datenbank

Als Datenbank wird PostgreSQL verwendet, der Zugriff erfolgt über Prisma.

Das Projekt enthält relationale Modelle für die Authentifizierung sowie für verschiedene Sammlungstypen. Fremdschlüssel und kaskadierende Löschvorgänge gewährleisten die referenzielle Integrität der Daten.

Die Datenbankmigrationen befinden sich unter:

```text
prisma/migrations/
```

Initiale bzw. Demo-Daten können über das Prisma-Seed-Skript erstellt werden.

## Lokale Entwicklung

Abhängigkeiten installieren:

```bash
npm install
```

Die Entwicklungsumgebung mit Docker starten:

```bash
docker compose up
```

Die Anwendung ist anschließend unter folgender Adresse erreichbar:

```text
http://localhost:3000
```

## Produktion

Die Anwendung wird mit **Vercel** bereitgestellt.

Die Produktionsdatenbank wird auf Neon PostgreSQL gehostet. Vercel übernimmt das Hosting und Deployment der Anwendung, während Neon die Cloud-Datenbank bereitstellt.

## Projektstruktur

```text
src/
├── app/
│   ├── api/
│   ├── actions/
│   ├── components/
│   ├── hooks/
│   └── lib/
│
prisma/
├── schema.prisma
├── migrations/
└── prisma.seed.ts

Dockerfile.dev
docker-compose.yml
```

## Autorin

**Tetiana Rusetska**

Projekt: **i.nspira**
