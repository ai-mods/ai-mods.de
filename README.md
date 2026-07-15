# ai-mods.de

Source of my personal website: a static one pager about me, my projects, skills, and services.
German is the default language, an English version lives under `/en/`.

Live: [ai-mods.de](https://ai-mods.de)

## Stack

- [Astro](https://astro.build) 7, statically built, no backend
- Strict TypeScript (`astro/tsconfigs/strict`), ESLint (strict), Prettier
- IBM Plex Mono and Space Grotesk, self hosted via Fontsource

## Design decisions

- **Almost no client JavaScript.** The blinking cursor and smooth scrolling are pure CSS. The only script on the site is a small progressive enhancement for the "back to top" button.
- **Design tokens.** All colors, radii, and layout constants live in [`src/styles/tokens.css`](src/styles/tokens.css). Components contain no magic color values.
- **Typed content.** Projects, skills, and services are TypeScript data files in [`src/data/`](src/data/), so the schema is checked at build time.
- **Checked translations.** UI strings live in flat dictionaries in [`src/i18n/`](src/i18n/). A `satisfies` constraint pins the English dictionary to the German key set, so a missing key fails `astro check` instead of rendering `undefined`.
- **Privacy by default.** No cookies, no tracking, no third party requests. Fonts are served from the same host.

## Development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev
```

| Script            | Purpose                            |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Local dev server                   |
| `npm run build`   | Build the static site into `dist/` |
| `npm run preview` | Preview the built site             |
| `npm run check`   | Type check (`astro check`)         |
| `npm run lint`    | ESLint                             |
| `npm run format`  | Prettier                           |

## Structure

```text
src/
  components/   UI building blocks (header, hero, cards, footer, ...)
  layouts/      BaseLayout: meta, Open Graph, canonical, hreflang
  pages/        index (DE), en/ (EN), legal pages
  data/         typed content: projects, skills, services
  i18n/         de.json, en.json, lookup utilities
  styles/       tokens.css, global.css
  config.ts     availability flag, contact email, profile links
```

## Deployment

Every push to `main` runs [a GitHub Actions workflow](.github/workflows/deploy.yml) that type checks, lints, builds, and deploys the site to GitHub Pages, served at [ai-mods.de](https://ai-mods.de).

## License

The source code is licensed under the [MIT License](LICENSE).
Site content is not covered by that license: all texts, images, the logo, and personal data remain all rights reserved.
