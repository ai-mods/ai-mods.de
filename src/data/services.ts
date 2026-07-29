import type { LocalizedText } from "./projects";

export type Service = {
  title: LocalizedText;
  text: LocalizedText;
};

export const services: Service[] = [
  {
    title: { de: "Change", en: "Change" },
    text: {
      de: "Erst Use Case, dann Strategie, dann Werkzeug. Datenschutz und Security von Anfang an mitdenken, den Menschen nie vergessen. Das ist mein Maßstab.",
      en: "Use case first, then strategy, then tooling. Data protection and security considered from day one, the people never forgotten. That is my benchmark.",
    },
  },
  {
    title: { de: "Macher", en: "Maker" },
    text: {
      de: "Browser-Apps, Automationen und KI-Frameworks in Claude oder Copilot Studio. Nicht als Demo gebaut, sondern für den Betrieb, in dem sie täglich laufen.",
      en: "Browser apps, automations and AI frameworks in Claude or Copilot Studio. Not built as a demo, but for the operation they run in every day.",
    },
  },
  {
    title: { de: "Enabler", en: "Enabler" },
    text: {
      de: "KI-Use-Cases erkennen, Workflows optimieren, Teams ins Boot holen: pragmatisch, leidenschaftlich und mit gemeinsamem Spaß am Erfolg.",
      en: "Spot AI use cases, optimize workflows, get teams on board: pragmatic, passionate, and with shared enjoyment of success.",
    },
  },
];
