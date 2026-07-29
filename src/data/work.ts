import type { LocalizedText } from "./projects";

export type WorkItem = {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
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
    description: {
      de: "16-köpfiges Team geführt, Prozesse in Flow-Pläne übersetzt und optimiert, Mitarbeitende auf neue Systeme geschult.",
      en: "Led a team of 16, translated processes into flow charts and optimized them, trained staff on new systems.",
    },
    meta: "change · operations",
    period: { de: "seit 2023", en: "since 2023" },
  },
  {
    number: "02",
    title: { de: "KI-Projekt", en: "AI Project" },
    description: {
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
    description: {
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
    description: {
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
    description: {
      de: "Power App, die eine Excel-Liste mit Textbausteinen in einen E-Mail-Builder verwandelt. Im Team täglich im Einsatz.",
      en: "Power App that turns an Excel list of text modules into an email builder. In daily use across the team.",
    },
    meta: "power apps · low-code",
    period: { de: "2025", en: "2025" },
  },
  {
    number: "02",
    title: { de: "Report-Visualisierer", en: "Report Visualizer" },
    description: {
      de: "Browser-Tool, das XML-Daten per Drag-and-Drop analysiert und daraus visuelle Auswertungen erzeugt.",
      en: "Browser tool that analyzes XML data via drag and drop and turns it into visual reports.",
    },
    meta: "typescript · browser",
    period: { de: "2024", en: "2024" },
  },
  {
    number: "03",
    title: { de: "Teams-Workflows", en: "Teams Workflows" },
    description: {
      de: "Power-Automate-Automationen: Teams-Nachrichten und Formulare landen automatisch als Mail oder als Item im Kanban-Board.",
      en: "Power Automate flows: Teams messages and forms land automatically as mail or as an item on the Kanban board.",
    },
    meta: "power automate",
    period: { de: "seit 2023", en: "since 2023" },
  },
];
