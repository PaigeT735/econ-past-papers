/**
 * Topic registry. Every question part lists topic ids. Add new topics here as needed.
 */
export const TOPICS = [
  { id: 'consumer-choice', label: 'Consumer choice' },
  { id: 'cost-minimisation', label: 'Cost minimisation & costs' },
  { id: 'monopoly', label: 'Monopoly' },
  { id: 'welfare', label: 'Surplus & deadweight loss' },
  { id: 'cournot', label: 'Cournot oligopoly' },
  { id: 'collusion-stackelberg', label: 'Collusion & Stackelberg' },
  { id: 'tax-incidence', label: 'Taxes & incidence' },
  { id: 'game-theory', label: 'Game theory & Nash equilibrium' },
];

export const topicById = new Map(TOPICS.map((t) => [t.id, t]));
