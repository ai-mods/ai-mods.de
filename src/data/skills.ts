import type { LocalizedText } from "./projects";

export type Skill = {
  title: LocalizedText;
  lines: LocalizedText[];
};

export const skills: Skill[] = [
  {
    title: {
      de: "Enablement & Strategie",
      en: "Enablement & Strategy",
    },
    lines: [
      { de: "KI-Use-Cases erkennen", en: "Spotting AI use cases" },
      { de: "Aktivieren & schulen", en: "Enabling & training" },
      { de: "Stakeholder-Sprache", en: "Stakeholder language" },
      { de: "Cross-Domain-Expertise", en: "Cross-domain expertise" },
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
      { de: "Salesforce", en: "Salesforce" },
      { de: "Workflow-Design", en: "Workflow design" },
    ],
  },
  {
    title: { de: "Web & Design", en: "Web & Design" },
    lines: [
      { de: "Konzept & Umsetzung", en: "Concept & build" },
      { de: "Astro · HTML · CMS", en: "Astro · HTML · CMS" },
      { de: "TypeScript · React", en: "TypeScript · React" },
      { de: "Corporate Design", en: "Corporate design" },
    ],
  },
];
