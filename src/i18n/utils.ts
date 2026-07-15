import de from "./de.json";
import en from "./en.json";

export const defaultLang = "de";

/**
 * Translation dictionaries keyed by locale.
 * `satisfies` pins every locale to the German key set, so a missing or misspelled
 * key in `en.json` fails the type check instead of silently returning `undefined`.
 */
export const ui = { de, en } satisfies Record<string, typeof de>;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof de;

/**
 * Derives the active locale from the URL path (`/en/...` → `en`, everything else → `de`).
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

/**
 * Returns a lookup function bound to the given locale.
 */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key];
  };
}
