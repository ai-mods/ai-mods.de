import type { LocalizedText } from "./projects";

export type Skill = {
  title: LocalizedText;
  lines: LocalizedText[];
};

export const skills: Skill[] = [
  {
    title: {
      de: "Strategie & Use-Cases",
      en: "Strategy & Use Cases",
    },
    lines: [
      { de: "KI-Use-Cases erkennen", en: "Spotting AI use cases" },
      {
        de: "Nutzen vs. KI-Theater",
        en: "Value vs. AI theater",
      },
      {
        de: "Nachhaltig planen",
        en: "Planning to last",
      },
      { de: "Cross-Domain-Expertise", en: "Cross-domain expertise" },
    ],
  },
  {
    title: {
      de: "Change & Enablement",
      en: "Change & Enablement",
    },
    lines: [
      { de: "Teams aktivieren & schulen", en: "Enabling & training teams" },
      { de: "Stakeholder-Sprache", en: "Stakeholder language" },
      { de: "Adoption begleiten", en: "Guiding adoption" },
      { de: "Templates & Playbooks", en: "Templates & playbooks" },
    ],
  },
  {
    title: { de: "AI & Agents", en: "AI & Agents" },
    lines: [
      { de: "Claude Code · Codex", en: "Claude Code · Codex" },
      { de: "Agent-Harnesses & MCP", en: "Agent harnesses & MCP" },
      {
        de: "Context Engineering",
        en: "Context Engineering",
      },
      { de: "RAG-Evaluierung", en: "RAG evaluation" },
    ],
  },
  {
    title: {
      de: "Low-Code & Automation",
      en: "Low-Code & Automation",
    },
    lines: [
      { de: "Power Platform · n8n", en: "Power Platform · n8n" },
      { de: "Copilot Studio", en: "Copilot Studio" },
      { de: "Workflow-Design", en: "Workflow design" },
      { de: "Browser-Tools", en: "Browser tools" },
    ],
  },
];
