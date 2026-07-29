import type { LocalizedText } from "./projects";

export type WorkItem = {
  number: string;
  title: LocalizedText;
  /** Only for entries that fixed something. `shaped` describes responsibility
   *  and therefore carries a plain description without labels. */
  problem?: LocalizedText;
  solution: LocalizedText;
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
      de: "16-köpfiges Team operativ geführt, Prozesse in Flow-Pläne übersetzt und optimiert, Mitarbeitende auf neue Systeme geschult.",
      en: "Led a team of 16 on an operational basis, translated processes into flow charts and optimized them, trained staff on new systems.",
    },
    meta: "change · operations",
    period: { de: "seit 2023", en: "since 2023" },
  },
  {
    number: "02",
    title: { de: "KI-Projekt", en: "AI Project" },
    solution: {
      de: "5 Monate Sonderprojekt: Use-Cases ermittelt, Chatbots getestet, Anforderungen fürs Lastenheft geliefert, Dienstleister mit dem Projektteam sondiert.",
      en: "Five-month special project: identified use cases, tested chatbots, supplied requirements for the specification sheet, screened vendors with the project team.",
    },
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
      de: "Sieben Konzerngesellschaften unter einer Dachmarke vereint. Corporate Design konzernweit entwickelt, verankert und in allen Bereichen durchgesetzt.",
      en: "United seven group companies under a single umbrella brand. Developed the corporate design, embedded it group-wide and carried it into every division.",
    },
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
      de: "Relaunch verantwortet, von der Strategie bis zum Livegang. Struktur, Content und Usability neu gedacht, Widerstände im Konzern aufgelöst.",
      en: "Owned the relaunch from strategy to go-live. Rethought structure, content and usability, and resolved resistance across the group.",
    },
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
    meta: "power apps · low-code",
    period: { de: "2025", en: "2025" },
  },
  {
    number: "02",
    title: { de: "Report-Visualisierer", en: "Report Visualizer" },
    problem: {
      de: "Prüfdaten und -ergebnisse in über 3.000 Zeilen XML verteilt.",
      en: "Test data and results spread across more than 3,000 lines of XML.",
    },
    solution: {
      de: "Browser-Tool: Drag-and-Drop der XML-Datei liefert visuelle Auswertung.",
      en: "Browser tool: drop in the XML file, get a visual report back.",
    },
    meta: "typescript · browser",
    period: { de: "2024", en: "2024" },
  },
  {
    number: "03",
    title: { de: "Teams-Workflows", en: "Teams Workflows" },
    problem: {
      de: "Ungefilterte Infos und Anfragen über mehrere Kontaktkanäle verteilt.",
      en: "Unfiltered information and requests spread across several channels.",
    },
    solution: {
      de: "Power-Automate: Teams- und Formular-Anfragen ins Kanban-Board gebracht.",
      en: "Power Automate: Teams and form requests routed into the Kanban board.",
    },
    meta: "power automate",
    period: { de: "seit 2023", en: "since 2023" },
  },
];
