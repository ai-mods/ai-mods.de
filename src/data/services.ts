import type { LocalizedText } from "./projects";

export type Service = {
  title: LocalizedText;
  text: LocalizedText;
};

export const services: Service[] = [
  {
    title: { de: "Prototypen & Tools", en: "Prototypes & Tools" },
    text: {
      de: "Von der Idee zum lauffähigen Prototyp. Ich baue Lösungen für echte Use-Cases. Egal ob Webapps, interne Tools oder Frameworks direkt in Claude und Codex.",
      en: "From idea to working prototype: I build solutions for real use cases. Whether it's web apps, internal tools, or frameworks directly in Claude and Codex.",
    },
  },
  {
    title: { de: "AI Enablement", en: "AI Enablement" },
    text: {
      de: "KI-Use-Cases erkennen, Workflows optimieren, Teams ins Boot holen: pragmatisch, leidenschaftlich und mit gemeinsamem Spaß am Erfolg.",
      en: "Spot AI use cases, optimize workflows, get teams on board: pragmatic, passionate, and with shared enjoyment of success.",
    },
  },
  {
    title: { de: "Websites", en: "Websites" },
    text: {
      de: "Webauftritte für Vereine, Betriebe oder Bands. Konzept, Design und Umsetzung aus einer Hand, mit CMS zum Selbst-Pflegen statt Agentur-Abhängigkeit.",
      en: "Web presences for clubs, local businesses, bands, or portfolios. Concept, design, and implementation from a single source, with a CMS for self-maintenance instead of agency dependency.",
    },
  },
];
