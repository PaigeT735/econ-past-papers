/**
 * Econ A formula sheet: the cards from the Econ A Formula Library
 * (src/content/library/) that the past papers use. To add a card, put its id
 * in PICK below. "Related" links only point to cards that are on the sheet.
 */
import { t } from '../lib/tag.js';
import consumer from './library/01-consumer.js';
import production from './library/02-production.js';
import costs from './library/03-costs.js';
import competition from './library/04-competition.js';
import monopoly from './library/05-monopoly.js';
import oligopoly from './library/06-oligopoly.js';
import games from './library/07-game-theory.js';
import welfare from './library/08-welfare.js';
import general from './library/09-general.js';

const PICK = [
  'budget-constraint', 'mrs', 'tangency-condition', 'cobb-douglas-utility', 'perfect-complements', 'perfect-substitutes',
  'trs', 'cost-min-condition', 'conditional-demands', 'returns-to-scale', 'total-cost-function', 'fixed-variable-cost', 'marginal-cost',
  'competitive-market-outcome', 'marginal-revenue', 'mr-equals-mc', 'monopoly-price', 'monopoly-profit', 'monopoly-shortcuts', 'lerner-index', 'elasticity',
  'producer-surplus', 'consumer-surplus', 'deadweight-loss',
  'cournot-profit', 'best-response-cournot', 'cournot-symmetric', 'cournot-asymmetric', 'cournot-n-firms', 'cartel', 'stackelberg',
  'nash-equilibrium', 'dominant-strategy', 'pareto-efficiency', 'prisoners-dilemma',
];

const all = new Map([consumer, production, costs, competition, monopoly, oligopoly, games, welfare, general].flatMap((s) => s.cards.map((c) => [c.id, c])));
const picked = new Set(PICK);
const cards = PICK.map((id) => {
  const card = all.get(id);
  if (!card) throw new Error(`Formula sheet: no card with id "${id}"`);
  const { paper, ...rest } = card; // practice-paper badges belong to the old site
  return { ...rest, related: (card.related ?? []).filter((r) => picked.has(r)) };
});

export default {
  kind: 'formulas',
  id: 'formula-sheet',
  title: 'Formula Sheet',
  short: 'Formula Sheet',
  accent: 'consumer',
  summary: t`Every formula the papers have needed so far, with when to use it, the usual traps and a short worked example.`,
  cards,
};
