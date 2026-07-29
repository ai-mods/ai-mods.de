import fusionBanner from "../assets/project-fusion-banner.png";
import opcomBanner from "../assets/opcom-banner.png";

export type LocalizedText = { de: string; en: string };

export type FeaturedImage =
  { src: ImageMetadata; alt: LocalizedText } | { placeholder: LocalizedText };

export type FeaturedProject = {
  title: string;
  url: string;
  status: { label: LocalizedText; variant: "accent" | "neutral" };
  description: LocalizedText;
  tags: string;
  image?: FeaturedImage;
  stats?: { value: string; label: LocalizedText }[];
  highlights?: LocalizedText[];
};

export type ListedProject = {
  number: string;
  title: string;
  url: string;
  problem: LocalizedText;
  solution: LocalizedText;
  meta: string;
  status: string;
};

export const featured: FeaturedProject[] = [
  {
    title: "Project Fusion",
    url: "https://project-fusion.de",
    status: {
      label: { de: "in entwicklung", en: "in development" },
      variant: "accent",
    },
    description: {
      de: "AI-Agent-Workspace: Meine Spielwiese und Labor in Form einer Full-Stack-Umgebung. Gestartet, um die Möglichkeiten von Claude Code zu entdecken. Herausgekommen ist eine Productivity-App mit eigenem Harness, Sandboxing und Trust-Core. So habe ich das Arbeiten mit KI vertieft und verstehe am selbst gebauten Harness, worauf es bei Tooling und Sicherheit ankommt.",
      en: "AI agent workspace: my playground and lab in the shape of a full-stack environment. Started out to explore what Claude Code can do. What came out of it is a productivity app with its own harness, sandboxing and trust core. That deepened how I work with AI, and the harness I built shows me what matters in tooling and security.",
    },
    tags: "typescript · react · python · postgresql · docker · claude",
    stats: [
      { value: "2", label: { de: "Plattformen", en: "platforms" } },
      { value: "9", label: { de: "AI-Provider", en: "AI providers" } },
      {
        value: "6+",
        label: { de: "integrierte Module", en: "integrated modules" },
      },
    ],
    image: {
      src: fusionBanner,
      alt: {
        de: "Project Fusion Banner: Your Compass. Your Agents. One Team. Early Access coming soon",
        en: "Project Fusion banner: Your Compass. Your Agents. One Team. Early access coming soon",
      },
    },
  },
  {
    title: "Operations Command",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2651774379",
    status: {
      label: { de: "released", en: "released" },
      variant: "neutral",
    },
    description: {
      de: "Modifikation für Arma 3: Das Erstellen von Missionen erfordert meist ein wenig Erfahrung im Coden und viel Aufwand im Spiele-Editor. OPCOM löst das mit einem intuitiven UI und einer bis dahin einmaligen UX in Arma 3. Wirklich jeder kann sich mit wenigen Klicks ein eigenes Szenario erstellen und während dem Spielen fortlaufend anpassen.",
      en: "Modification for Arma 3: building missions usually takes some coding experience and a lot of work in the game editor. OPCOM solves that with an intuitive UI and a UX unmatched in Arma 3 at the time. Anyone can put together their own scenario in a few clicks and keep adjusting it while playing.",
    },
    tags: "sqf · fsm · steam workshop",
    image: {
      src: opcomBanner,
      alt: {
        de: "OPCOM (Operations Command): Squad & Support Update, Banner mit Soldaten-Silhouetten",
        en: "OPCOM (Operations Command): Squad & Support update, banner with soldier silhouettes",
      },
    },
    stats: [
      { value: "40k+", label: { de: "Nutzer", en: "users" } },
      { value: "1.923", label: { de: "Bewertungen", en: "ratings" } },
      {
        value: "98%",
        label: { de: "positive Bewertungen", en: "positive ratings" },
      },
    ],
  },
];

export const listed: ListedProject[] = [
  {
    number: "03",
    title: "wombach.de",
    url: "https://wombach.de",
    problem: {
      de: "23 Jahre altes Design, historisch gewachsene Struktur, hoher Pflegeaufwand.",
      en: "A 23-year-old design, a grown structure and high maintenance effort.",
    },
    solution: {
      de: "Redesign vom Konzept bis zur Umsetzung, inkl. interaktivem Dorfkalender.",
      en: "Redesign from concept to build, incl. an interactive village calendar.",
    },
    meta: "astro · web · cms",
    status: "live",
  },
  {
    number: "04",
    title: "discogs-plugin",
    url: "https://github.com/ai-mods/discogs-plugin",
    problem: {
      de: "Aufwendige Suche nach neuen Platten-Releases, Wantlist-Pflege.",
      en: "Time-consuming hunt for new vinyl releases, wantlist upkeep.",
    },
    solution: {
      de: "MCP-Server für Discogs: KI sucht Releases, verwaltet Sammlung und Wantlist.",
      en: "MCP server for Discogs: AI finds releases, manages collection and wantlist.",
    },
    meta: "mcp · typescript",
    status: "released",
  },
  {
    number: "05",
    title: "webradio-plugin",
    url: "https://github.com/ai-mods/webradio-plugin",
    problem: {
      de: "Sender suchen hieß raus aus Claude Cowork und rein in die Browser-Suche.",
      en: "Finding a station meant leaving Claude Cowork for a browser search.",
    },
    solution: {
      de: "MCP-Server für Radio-Browser-API: KI sucht und präsentiert Sender weltweit.",
      en: "MCP server for Radio Browser API: AI finds and presents stations worldwide.",
    },
    meta: "mcp · node",
    status: "released",
  },
  {
    number: "06",
    title: "tablet-toggle",
    url: "https://github.com/ai-mods/tablet-toggle",
    problem: {
      de: "Mit Tastatur wechselte mein 2-in-1 nicht in den Desktop-Modus.",
      en: "Attaching the keyboard did not switch my 2-in-1 to desktop mode.",
    },
    solution: {
      de: "Windows-Tray-Utility zum Umschalten zwischen Laptop- und Tablet-Modus.",
      en: "A Windows tray utility that toggles between laptop and tablet mode.",
    },
    meta: "powershell · windows",
    status: "released",
  },
];
