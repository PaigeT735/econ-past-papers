/**
 * Site-wide configuration and the navigation registry.
 * New papers appear in the navigation automatically once added to src/content/index.js.
 */
import { PAPERS, FORMULA_SHEET } from '../content/index.js';

export const SITE = {
  name: 'Econ A',
  title: 'Econ A Past Papers',
  course: 'ECU22011 · Intermediate Economics A (Micro)',
  docTitle: 'Intermediate Economics A',
  sub: 'ECU22011 · Econ A Micro',
};

export const NAV_GROUPS = [
  {
    id: 'pages',
    label: 'Pages',
    items: [
      { id: `section:${FORMULA_SHEET.id}`, label: FORMULA_SHEET.title, href: `#/papers/${FORMULA_SHEET.id}`, accent: FORMULA_SHEET.accent },
      ...PAPERS.map((p) => ({ id: `section:${p.id}`, label: p.title, href: `#/papers/${p.id}`, accent: p.accent })),
    ],
  },
];
