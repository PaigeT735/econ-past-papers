/**
 * Content registry.
 * To add a past paper: create a file in ./papers/ (copy practice-final.js as a template)
 * and add it to PAPERS below, newest first.
 */
import practiceFinal from './papers/practice-final.js';
import practice2 from './papers/practice-2.js';
import practice3 from './papers/practice-3.js';
import ps1 from './papers/ps-1.js';
import ps2 from './papers/ps-2.js';
import ps3 from './papers/ps-3.js';
import ps4 from './papers/ps-4.js';
import ps5 from './papers/ps-5.js';
import ws1 from './papers/ws-1.js';
import ws2 from './papers/ws-2.js';
import ws3 from './papers/ws-3.js';
import formulaSheet from './formula-sheet.js';
import { TOPICS } from './topics.js';

/** Tab order: practice papers, then the problem sets, then the harder worksheets. */
export const PAPERS = [practiceFinal, practice2, practice3, ps1, ps2, ps3, ps4, ps5, ws1, ws2, ws3];
export const FORMULA_SHEET = formulaSheet;

/** Pages in tab order: the formula sheet, then each exam (newest first). */
export const SECTIONS = [FORMULA_SHEET, ...PAPERS];
export const sectionById = new Map(SECTIONS.map((s) => [s.id, s]));

/** Question parts: partId -> { part, question, section } */
export const partIndex = new Map();
PAPERS.forEach((section) => section.questions.forEach((question) => question.parts.forEach((part) => partIndex.set(part.id, { part, question, section }))));

/** Formula cards: cardId -> { card, section, index } */
export const cardIndex = new Map();
FORMULA_SHEET.cards.forEach((card, index) => cardIndex.set(card.id, { card, section: FORMULA_SHEET, index }));

/** Display code for formula cards, e.g. "F.03" */
export function cardCode(section, index) {
  return `F.${String(index + 1).padStart(2, '0')}`;
}

/** Topic id -> list of { part, question, section } across all papers */
export function partsByTopic() {
  const map = new Map(TOPICS.map((t) => [t.id, []]));
  partIndex.forEach((entry) => entry.part.topics?.forEach((id) => map.get(id)?.push(entry)));
  return map;
}

const allParts = [...partIndex.values()];
export const STATS = {
  papers: PAPERS.length,
  questions: PAPERS.reduce((n, p) => n + p.questions.length, 0),
  parts: allParts.length,
  calcs: allParts.filter((e) => e.part.type === 'calc').length,
  formulas: FORMULA_SHEET.cards.length,
};
