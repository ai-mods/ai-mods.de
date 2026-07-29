import type { LocalizedText } from "./projects";

export type Service = {
  title: LocalizedText;
  text: LocalizedText;
};

export const services: Service[] = [
  {
    title: { de: "Change", en: "Change" },
    text: {
      de: "Use Case >> Strategie >> Werkzeug. Datenschutz und Security von Anfang an dabei und nie den Menschen im Prozess vergessen. Das ist der Weg.",
      en: "Use case >> strategy >> tooling. Data protection and security on board from day one, and never forget the people in the process. This is the way.",
    },
  },
  {
    title: { de: "Macher", en: "Maker" },
    text: {
      de: "Apps, Automationen oder Frameworks in Claude oder Copilot Studio. Nicht nur als Demo gebaut, sondern für den Betrieb, in dem sie täglich laufen.",
      en: "Apps, automations or frameworks in Claude or Copilot Studio. Not just a demo, but built for the operation they run in every day.",
    },
  },
  {
    title: { de: "Enabler", en: "Enabler" },
    text: {
      de: "Keine Buzz-Words oder Folien-Kino. Ich übersetze zwischen Problem, Technik und Menschen. Mein Erfolg ist, wenn es danach ohne mich läuft.",
      en: "No buzzwords, no slide theater. I translate between problem, technology and people. My success is when it runs without me afterwards.",
    },
  },
];
