import type { LocalizedText } from "./projects";

export type WorkItem = {
  number: string;
  title: LocalizedText;
  /** Only for entries that fixed something. `shaped` describes responsibility
   *  and therefore carries a plain description without labels. */
  problem?: LocalizedText;
  solution: LocalizedText;
  /** Only for entries with verifiable figures. Entries without stay plain. */
  stats?: { value: string; label: LocalizedText }[];
  meta: string;
  period: LocalizedText;
};

/**
 * Work done inside employment, split by what it actually was.
 *
 * `shaped` covers responsibility, strategy and change; `built` covers tools
 * that were actually developed. No employer is named, so both sections stay
 * usable while Chris is applying elsewhere.
 */
export const shaped: WorkItem[] = [
  {
    number: "01",
    title: {
      de: "Team- und Prozess-Enablement",
      en: "Team & Process Enablement",
    },
    solution: {
      de: "Graphical Support Team operativ geführt, Prozesse in Flow-Pläne übersetzt und optimiert, auf neue Prozesse und Systeme geschult.",
      en: "Led the Graphical Support team operationally, translated processes into flow charts and optimized them, trained staff on new processes and systems.",
    },
    stats: [
      { value: "16", label: { de: "Mitarbeiter", en: "team members" } },
      { value: "3", label: { de: "Hauptprozesse", en: "core processes" } },
    ],
    meta: "change · operations",
    period: { de: "seit 2023", en: "since 2023" },
  },
  {
    number: "02",
    title: { de: "KI-Projekt", en: "AI Project" },
    solution: {
      de: "Chatbots getestet, Use-Cases ermittelt, Anforderungen fürs Lastenheft geliefert, Dienstleister mit dem Projektteam sondiert, Messebesuch.",
      en: "Tested chatbots, identified use cases, supplied requirements for the specification sheet, screened vendors with the project team, trade fair visit.",
    },
    stats: [
      { value: "5", label: { de: "Monate", en: "months" } },
      { value: "2", label: { de: "Chatbots", en: "chatbots" } },
    ],
    meta: "strategie · conversational ai",
    period: { de: "2024", en: "2024" },
  },
  {
    number: "03",
    title: {
      de: "Dachmarkenstrategie & CD-Relaunch",
      en: "Umbrella Brand Strategy & CD Relaunch",
    },
    solution: {
      de: "Konzerngesellschaften unter einer Dachmarke vereint. Corporate Design konzernweit entwickelt, verankert und in allen Bereichen durchgesetzt.",
      en: "United the group companies under a single umbrella brand. Developed the corporate design, embedded it group-wide and carried it into every division.",
    },
    stats: [
      { value: "7", label: { de: "Gesellschaften", en: "companies" } },
      { value: "1", label: { de: "Dachmarke", en: "umbrella brand" } },
      { value: "3", label: { de: "Teilprojekte", en: "sub-projects" } },
    ],
    meta: "markenstrategie · ci/cd",
    period: { de: "2011 bis 2016", en: "2011 to 2016" },
  },
  {
    number: "04",
    title: {
      de: "Internet- und Intranet-Relaunch",
      en: "Website & Intranet Relaunch",
    },
    solution: {
      de: "Relaunch verantwortet, von der Strategie bis zum Livegang. Struktur, Content und Usability neu gedacht, Akzeptanz im Konzern aufgebaut.",
      en: "Owned the relaunch from strategy to go-live. Rethought structure, content and usability, and built acceptance across the group.",
    },
    stats: [
      { value: "2", label: { de: "Portale", en: "portals" } },
      { value: "1", label: { de: "CMS", en: "CMS" } },
    ],
    meta: "web · content · usability",
    period: { de: "2011 bis 2016", en: "2011 to 2016" },
  },
];

export const built: WorkItem[] = [
  {
    number: "01",
    title: { de: "Schnelltext-Buddy", en: "Quick Text Buddy" },
    problem: {
      de: "Textbausteine in Excel, manuelles Suchen, Copy und Paste bei jedem Kontakt.",
      en: "Text modules in Excel, searched and pasted by hand on every contact.",
    },
    solution: {
      de: "Power Apps: E-Mail-Builder mit Drag-and-Drop und automatischen Regeln.",
      en: "Power Apps: email builder with drag and drop and automatic rules.",
    },
    stats: [
      { value: "5", label: { de: "Nutzer", en: "users" } },
      { value: "300", label: { de: "Mails pro Tag", en: "emails a day" } },
    ],
    meta: "power apps · low-code",
    period: { de: "2025", en: "2025" },
  },
  {
    number: "02",
    title: { de: "Report-Visualisierer", en: "Report Visualizer" },
    problem: {
      de: "Prüfdaten und -ergebnisse in XML, kein automatisches Auswerten.",
      en: "Test data and results in XML, no automated evaluation.",
    },
    solution: {
      de: "Browser-Tool: Drag-and-Drop der XML-Datei liefert visuellen Report.",
      en: "Browser tool: drop in the XML file, get a visual report back.",
    },
    stats: [
      { value: "3000", label: { de: "Zeilen XML", en: "lines of XML" } },
      { value: "1", label: { de: "Seite Report", en: "page report" } },
    ],
    meta: "typescript · browser",
    period: { de: "2024", en: "2024" },
  },
  {
    number: "03",
    title: { de: "Teams-Workflows", en: "Teams Workflows" },
    problem: {
      de: "Ungefilterte Infos und Anfragen über Anrufe, Mails und Teams-Nachrichten.",
      en: "Unfiltered information and requests via calls, email and Teams messages.",
    },
    solution: {
      de: "Power-Automate: Formulare und Filter bringen Tasks in ein Kanban-Board.",
      en: "Power Automate: forms and filters bring tasks into a Kanban board.",
    },
    stats: [
      { value: "3", label: { de: "Kanäle", en: "channels" } },
      { value: "1", label: { de: "Workflow", en: "workflow" } },
      { value: "1", label: { de: "Tracker", en: "tracker" } },
    ],
    meta: "power automate",
    period: { de: "seit 2023", en: "since 2023" },
  },
];
