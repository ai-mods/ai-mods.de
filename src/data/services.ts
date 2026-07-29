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
    title: { de: "Mindset", en: "Mindset" },
    text: {
      de: "Ich arbeite nicht, um zu beeindrucken, sondern weil meine Lösungen im Alltag wirken. Das ist die Messlatte für den Erfolg von Change und Enablement.",
      en: "I don't work to impress, I work because my solutions take effect in daily use. That is the benchmark for successful change and enablement.",
    },
  },
];
