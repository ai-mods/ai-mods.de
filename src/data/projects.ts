import fusionLanding from "../assets/project-fusion-landing.png";
import opcomBanner from "../assets/opcom-banner.png";
import wombachHomepage from "../assets/wombach-homepage.png";

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
  wide?: boolean;
};

export type ListedProject = {
  number: string;
  title: string;
  url: string;
  description: LocalizedText;
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
      de: "AI-Agent-Harness & Workspace: eine Full-Stack-Umgebung, in der Agents Aufgaben planen und ausführen. Routinen und zeitgesteuerte Impulse verketten Chat, Mail, Planner und Tracker zu Workflows. Agent-Code läuft dabei sicher in der Sandbox, getrennt vom Trust-Core. Lokale Models und Multi-User-Setups werden unterstützt.",
      en: "AI agent harness & workspace: a full-stack environment where agents plan and execute tasks. Routines and scheduled impulses chain chat, mail, planner and tracker into workflows. Agent code runs safely in a sandbox, separated from the trusted core. Local models and multi-user setups are supported.",
    },
    tags: "typescript · react · python · postgresql · docker · claude",
    wide: true,
    stats: [
      { value: "2", label: { de: "Plattformen", en: "platforms" } },
      { value: "9", label: { de: "AI-Provider", en: "AI providers" } },
      {
        value: "6+",
        label: { de: "integrierte Module", en: "integrated modules" },
      },
    ],
    image: {
      src: fusionLanding,
      alt: {
        de: "Project Fusion Landing Page (Your Compass. Your Agents. One Team.) mit gestapelten Workspace-Screens",
        en: "Project Fusion landing page (Your compass. Your agents. One team.) with stacked workspace screens",
      },
    },
  },
  {
    title: "OPCOM",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2651774379",
    status: {
      label: { de: "released", en: "released" },
      variant: "neutral",
    },
    description: {
      de: "Modifikation für Arma 3. Intuitives UI zum Personalisieren von Szenarien, Missionen und Gameplay im Steam Workshop.",
      en: "Modification for Arma 3. Intuitive UI for customizing scenarios, missions, and gameplay in the Steam Workshop.",
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
  {
    title: "wombach.de",
    url: "https://wombach.de",
    status: {
      label: { de: "live", en: "live" },
      variant: "neutral",
    },
    description: {
      de: "Redesign und Relaunch der Homepage für mein Heimatdorf, vom Konzept bis zur Umsetzung.",
      en: "Redesign and relaunch of the website for my home village: from concept to build.",
    },
    tags: "astro · web · cms",
    image: {
      src: wombachHomepage,
      alt: {
        de: "wombach.de: Startseite der Dorf-Homepage",
        en: "wombach.de: homepage of the village website",
      },
    },
    highlights: [
      {
        de: "Interaktiver Dorfkalender: filterbar & abonnierbar",
        en: "Interactive village calendar: filterable & subscribable",
      },
      {
        de: "Halbjahresplaner im Querformat zum Selbst-Zusammenstellen",
        en: "Customizable half-year planner in landscape format",
      },
      {
        de: "Vereine, Stammtische, Kirche & Gewerbe an einem Ort",
        en: "Clubs, socials, church & local businesses in one place",
      },
    ],
  },
];

export const listed: ListedProject[] = [
  {
    number: "04",
    title: "discogs-plugin",
    url: "https://github.com/ai-mods/discogs-plugin",
    description: {
      de: "MCP-Server für die Discogs-API: Releases suchen, Vinyl-Sammlung und Wantlist verwalten.",
      en: "MCP server for the Discogs API: search releases, manage your vinyl collection and wantlist.",
    },
    meta: "mcp · typescript",
    status: "released",
  },
  {
    number: "05",
    title: "webradio-plugin",
    url: "https://github.com/ai-mods/webradio-plugin",
    description: {
      de: "MCP-Server für die Radio-Browser-API: Internetradio-Sender weltweit suchen und entdecken.",
      en: "MCP server for the Radio Browser API: search and discover internet radio stations worldwide.",
    },
    meta: "mcp · node",
    status: "released",
  },
  {
    number: "06",
    title: "tablet-toggle",
    url: "https://github.com/ai-mods/tablet-toggle",
    description: {
      de: "Windows-Tray-Utility zum Umschalten zwischen Laptop- und Tablet-Modus auf Convertibles.",
      en: "A lightweight Windows tray utility that toggles between laptop and tablet mode on convertibles.",
    },
    meta: "powershell · windows",
    status: "released",
  },
];
