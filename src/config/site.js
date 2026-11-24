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

const item = (p) => ({ id: `section:${p.id}`, label: p.title, href: `#/papers/${p.id}`, accent: p.accent });
const GROUP_LABELS = { exams: 'Practice papers', psets: 'Problem sets', worksheets: 'Harder worksheets' };

/** Drawer groups: the formula sheet, then one group per paper type, in tab order. */
export const NAV_GROUPS = [
  { id: 'reference', label: 'Reference', items: [item(FORMULA_SHEET)] },
  ...Object.entries(GROUP_LABELS).map(([id, label]) => ({ id, label, items: PAPERS.filter((p) => (p.group ?? 'exams') === id).map(item) })).filter((g) => g.items.length),
];
