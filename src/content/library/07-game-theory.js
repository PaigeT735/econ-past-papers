import { t } from '../../lib/tag.js';

const exampleGame = t`$$\begin{array}{c|cc} & L & R \\ \hline U & 3,\ 1 & 0,\ 0 \\ D & 1,\ 2 & 2,\ 3 \end{array}$$`;
const exampleGameMarked = t`$$\begin{array}{c|cc} & L & R \\ \hline U & \br{3},\ \br{1} & 0,\ 0 \\ D & 1,\ 2 & \br{2},\ \br{3} \end{array}$$`;
const pdGame = t`$$\begin{array}{c|cc} & C & D \\ \hline C & 3,\ 3 & 0,\ 5 \\ D & 5,\ 0 & 1,\ 1 \end{array}$$`;
const bosGame = t`$$\begin{array}{c|cc} & O & F \\ \hline O & 2,\ 1 & 0,\ 0 \\ F & 0,\ 0 & 1,\ 2 \end{array}$$`;

export default {
  id: 'game-theory',
  number: 7,
  title: 'Game Theory',
  short: 'Games',
  accent: 'games',
  summary: t`Strategic interaction: best responses, Nash equilibrium, dominant strategies, Pareto efficiency and the prisoners' dilemma, plus mixed strategies and backward induction.`,
  method: {
    title: 'Finding pure-strategy Nash equilibria in a payoff matrix',
    steps: [
      t`**Row player:** in each column, mark the row player's highest payoff (payoffs are written as (row, column)).`,
      t`**Column player:** in each row, mark the column player's highest payoff.`,
      t`**Nash equilibria** are the cells where **both** payoffs are marked.`,
      t`**Efficiency check:** is there another cell that makes both players better off? If so, the equilibrium is not Pareto efficient.`,
    ],
  },
  cards: [
    {
      id: 'normal-form',
      title: 'Normal-form game',
      summary: t`A game listed by its players, each player's strategies, and the payoff each player gets from every combination of strategies.`,
      formula: t`G = \big\{\,N,\ (S_i)_{i \in N},\ (u_i)_{i \in N}\,\big\}`,
      tags: ['payoff matrix', 'strategies', 'players', 'normal form', 'strategic form', 'simultaneous game'],
      forms: [
        { label: 'Strategy profile', tex: t`s = (s_1, s_2, \ldots, s_n), \qquad s_{-i} = \text{everyone else's strategies}` },
        { label: 'Payoff convention in a matrix', tex: t`(\text{row player's payoff},\ \text{column player's payoff})` },
      ],
      variables: [
        [t`N`, 'Set of players'],
        [t`S_i`, t`Strategies available to player $i$`],
        [t`u_i(s)`, t`Player $i$'s payoff from profile $s$`],
      ],
      when: ['Any simultaneous-move game. Cournot is a normal-form game where strategies are quantities.'],
      clues: ['"Payoff matrix"', '"Players choose simultaneously"'],
      assumptions: ['Players know the game (complete information) and choose without seeing each other\'s choice.'],
      example: {
        given: 'Two players: Row chooses U or D, Column chooses L or R.',
        steps: [exampleGame, t`In cell $(D, R)$ the row player gets 2 and the column player gets 3.`],
        answer: 'Used in the next cards.',
      },
      related: ['best-response', 'nash-equilibrium'],
    },
    {
      id: 'best-response',
      title: 'Best response',
      summary: t`The strategy (or strategies) that give a player the highest payoff, given what everyone else is doing.`,
      formula: t`BR_i(s_{-i}) = \arg\max_{s_i \in S_i}\ u_i(s_i,\ s_{-i})`,
      tags: ['best response', 'BR', 'argmax', 'underline method'],
      forms: [
        { label: 'Continuous strategies (e.g. Cournot)', tex: t`\frac{\partial u_i}{\partial s_i} = 0 \;\Rightarrow\; s_i = BR_i(s_{-i})` },
      ],
      variables: [[t`\arg\max`, 'The choice that achieves the maximum (not the maximum value itself)']],
      when: ['The building block of Nash equilibrium.'],
      clues: ['"Best response"', '"What should player 1 do if player 2 plays …?"'],
      example: {
        given: 'The game from the normal-form card.',
        steps: [
          t`Row: $BR_1(L) = U$ (3 > 1) and $BR_1(R) = D$ (2 > 0).`,
          t`Column: $BR_2(U) = L$ (1 > 0) and $BR_2(D) = R$ (3 > 2).`,
          exampleGameMarked,
        ],
        answer: 'Marked payoffs are best responses.',
      },
      related: ['nash-equilibrium', 'best-response-cournot'],
    },
    {
      id: 'nash-equilibrium',
      title: 'Nash equilibrium',
      summary: t`A strategy profile in which every player is playing a best response to the others, so no one can gain by changing their own strategy alone.`,
      formula: t`u_i(s_i^*,\ s_{-i}^*) \;\ge\; u_i(s_i,\ s_{-i}^*) \qquad \forall\, s_i \in S_i,\ \ \forall\, i`,
      paper: ['Q3', 'Q9', 'Q10'],
      tags: ['Nash equilibrium', 'NE', 'unilateral deviation', 'stable', 'mutual best responses', 'self-enforcing'],
      forms: [
        { label: 'Best-response form', tex: t`s_i^* \in BR_i(s_{-i}^*) \quad \text{for every player } i` },
        { label: 'Cournot: intersection of best-response functions', tex: t`q_1^* = BR_1(q_2^*), \qquad q_2^* = BR_2(q_1^*)` },
      ],
      variables: [[t`s^*`, 'Equilibrium strategy profile'], [t`s_{-i}^*`, 'Other players\' equilibrium strategies']],
      when: [
        'Use for any "find the equilibrium" question, and for verbal explanations.',
        t`**Structure for a verbal answer:** (1) define it as mutual best responses; (2) no player gains from a **unilateral** deviation, so it is stable and self-enforcing; (3) it need not be the best joint outcome, because each player ignores the effect of their choice on others; (4) illustrate with the prisoners' dilemma.`,
      ],
      clues: ['"Explain the concept of Nash equilibrium"', '"No incentive to deviate"', '"Find all Nash equilibria"', '"Cournot-Nash equilibrium"'],
      assumptions: [
        'Unilateral: it checks one player changing strategy at a time, holding the others fixed.',
        'It is about stability, not optimality.',
        'There can be several pure-strategy equilibria, or none, but every finite game has at least one equilibrium in mixed strategies (Nash, 1950).',
      ],
      traps: ['Nash equilibrium does not mean the best outcome for the players as a group. That is Pareto efficiency, a different concept.'],
      example: {
        given: 'The game from the normal-form card.',
        steps: [
          t`$(U, L)$: Row switching to D gets $1 < 3$; Column switching to R gets $0 < 1$. Nobody gains, so it is a NE.`,
          t`$(D, R)$: Row switching to U gets $0 < 2$; Column switching to L gets $2 < 3$. Also a NE.`,
          t`$(U, R)$ and $(D, L)$ are not: at least one player gains by switching.`,
        ],
        answer: t`Two pure-strategy Nash equilibria: $(U, L)$ and $(D, R)$.`,
      },
      related: ['best-response', 'pareto-efficiency', 'prisoners-dilemma', 'cournot-symmetric'],
    },
    {
      id: 'dominant-strategy',
      title: 'Dominant strategies',
      summary: t`A strategy that is best whatever the other players do. If every player has one, the outcome is easy to predict.`,
      formula: t`u_i(s_i',\ s_{-i}) > u_i(s_i,\ s_{-i}) \qquad \forall\, s_{-i},\ \ \forall\, s_i \ne s_i'`,
      tags: ['dominant strategy', 'dominated strategy', 'IESDS', 'iterated elimination', 'weakly dominant'],
      forms: [
        { label: 'Weakly dominant', tex: t`u_i(s_i', s_{-i}) \ge u_i(s_i, s_{-i}) \ \ \forall s_{-i}, \text{ strictly for at least one}` },
        { label: 'Relationship', tex: t`\text{dominant-strategy equilibrium} \;\Rightarrow\; \text{Nash equilibrium (not the reverse)}` },
      ],
      variables: [[t`s_i'`, 'The dominant strategy']],
      when: ['Check for dominant strategies first: if they exist, they solve the game immediately. Iterated elimination of strictly dominated strategies never removes a Nash equilibrium.'],
      clues: ['"Does either player have a dominant strategy?"', '"Dominated strategy"'],
      assumptions: ['Many games (including the normal-form example) have no dominant strategies; then use best responses.'],
      example: {
        given: 'The prisoners\' dilemma below.',
        steps: [t`For each player, D gives $5 > 3$ if the other plays C and $1 > 0$ if the other plays D. D strictly dominates C.`],
        answer: t`Dominant-strategy equilibrium $(D, D)$.`,
      },
      related: ['prisoners-dilemma', 'nash-equilibrium'],
    },
    {
      id: 'pareto-efficiency',
      title: 'Pareto efficiency',
      summary: t`An outcome is Pareto efficient if no other outcome makes someone better off without making anyone worse off.`,
      formula: t`\nexists\ s' :\ u_i(s') \ge u_i(s)\ \ \forall i \ \text{ and } \ u_j(s') > u_j(s) \text{ for some } j`,
      paper: ['Q3'],
      tags: ['Pareto efficient', 'Pareto optimal', 'Pareto improvement', 'best joint outcome', 'efficiency'],
      forms: [
        { label: 'Pareto improvement', tex: t`s' \text{ Pareto dominates } s \text{ if nobody is worse off and someone is better off}` },
      ],
      variables: [[t`s'`, 'An alternative outcome']],
      when: ['Use to evaluate an equilibrium: is there an outcome everyone would prefer? It is the "best joint outcome" idea in exam questions.'],
      clues: ['"Best possible joint outcome"', '"Efficient", "socially optimal"', '"Could both players be better off?"'],
      assumptions: ['A Pareto-efficient outcome need not be fair, and there are usually several.'],
      example: {
        given: 'The prisoners\' dilemma below.',
        steps: [t`$(C, C) = (3, 3)$ makes both better off than $(D, D) = (1, 1)$, so the Nash equilibrium $(D, D)$ is not Pareto efficient.`],
        answer: t`$(C, C)$, $(C, D)$ and $(D, C)$ are Pareto efficient; $(D, D)$ is not.`,
      },
      related: ['nash-equilibrium', 'prisoners-dilemma', 'total-surplus'],
    },
    {
      id: 'prisoners-dilemma',
      title: "Prisoners' dilemma",
      summary: t`Each player has a dominant strategy to defect, but both would be better off cooperating. The standard example of an inefficient Nash equilibrium.`,
      formula: t`T > R > P > S`,
      paper: ['Q3'],
      tags: ['prisoners dilemma', 'cooperation', 'defection', 'inefficient equilibrium', 'collusion'],
      forms: [
        { label: 'General structure (row payoff listed first)', tex: t`\begin{array}{c|cc} & C & D \\ \hline C & R,\ R & S,\ T \\ D & T,\ S & P,\ P \end{array}` },
      ],
      variables: [
        [t`T`, 'Temptation: defect while the other cooperates'],
        [t`R`, 'Reward: both cooperate'],
        [t`P`, 'Punishment: both defect'],
        [t`S`, 'Sucker\'s payoff: cooperate while the other defects'],
      ],
      when: [
        'The go-to example when asked why a Nash equilibrium need not be the best joint outcome.',
        'Economic versions: cartel members cheating on output quotas, advertising wars, arms races.',
      ],
      clues: ['"Why doesn\'t Nash equilibrium mean the best joint outcome?"', '"Give an example"', '"Collusion is unstable"'],
      assumptions: ['One-shot game. Repeated play can sustain cooperation (e.g. through trigger strategies).'],
      example: {
        given: 'Payoffs (row, column):',
        steps: [
          pdGame,
          t`D is dominant for both, so the unique Nash equilibrium is $(D, D)$ with payoffs $(1, 1)$.`,
          t`Both would prefer $(C, C)$ with $(3, 3)$, but it is not stable: each gains 2 by switching to D.`,
        ],
        answer: 'Individually rational choices lead to a collectively worse outcome.',
      },
      related: ['nash-equilibrium', 'pareto-efficiency', 'cartel', 'dominant-strategy'],
    },
    {
      id: 'mixed-strategy',
      title: 'Mixed-strategy Nash equilibrium',
      level: 'extension',
      summary: t`Players randomise. In equilibrium each player's mix makes the other player indifferent between their pure strategies.`,
      formula: t`\mathbb{E}\big[u_1(\text{row } A)\big] = \mathbb{E}\big[u_1(\text{row } B)\big]`,
      tags: ['mixed strategy', 'randomise', 'indifference condition', 'probabilities', 'expected payoff'],
      forms: [
        { label: t`Expected payoff when the column player plays L with probability $q$`, tex: t`\mathbb{E}[u_1(U)] = q\,u_1(U, L) + (1 - q)\,u_1(U, R)` },
        { label: 'Rule of thumb', tex: t`\text{each player's mix is pinned down by the } \textit{other } \text{player's payoffs}` },
      ],
      variables: [[t`p,\ q`, 'Probabilities with which each player plays their first strategy']],
      when: ['Games with no pure-strategy equilibrium (matching pennies), or to find every equilibrium of a coordination game.'],
      clues: ['"Mixed strategy"', '"Randomise"', '"Find all Nash equilibria"'],
      assumptions: ['A player is only willing to mix if indifferent between the strategies being mixed.'],
      example: {
        given: t`Battle of the sexes. Column plays O with probability $q$, Row plays O with probability $p$.`,
        steps: [
          bosGame,
          t`Row indifferent: $2q = 1(1 - q) \Rightarrow q = \tfrac13$.`,
          t`Column indifferent: $1\cdot p = 2(1 - p) \Rightarrow p = \tfrac23$.`,
        ],
        answer: t`Mixed NE: Row plays O with probability $\tfrac23$, Column plays O with probability $\tfrac13$, alongside the pure NE $(O, O)$ and $(F, F)$.`,
      },
      related: ['nash-equilibrium'],
    },
    {
      id: 'backward-induction',
      title: 'Sequential games and backward induction',
      level: 'extension',
      summary: t`When players move in turn, solve from the last move backwards. The result is a subgame perfect Nash equilibrium (SPNE).`,
      formula: t`\text{SPNE: a Nash equilibrium in every subgame}`,
      tags: ['backward induction', 'subgame perfect', 'SPNE', 'sequential', 'game tree', 'credible threat', 'extensive form'],
      forms: [
        { label: 'Procedure', tex: t`\text{last mover's best choice} \;\to\; \text{previous mover anticipates it} \;\to\; \cdots \;\to\; \text{first move}` },
      ],
      variables: [[t`\text{SPNE}`, 'Subgame perfect Nash equilibrium']],
      when: ['Any game with a time order. Stackelberg is the quantity-setting version.'],
      clues: ['"Moves first", "then observes"', '"Game tree"', '"Credible threat"'],
      assumptions: ['Rules out equilibria that rely on threats a player would not carry out when the time came.'],
      example: {
        given: t`Entrant chooses Out (payoffs 0, 4) or In. After In, the incumbent chooses Fight $(-1, 0)$ or Accommodate $(1, 2)$.`,
        steps: [
          t`Last move: the incumbent prefers Accommodate ($2 > 0$).`,
          t`Anticipating that, the entrant compares In ($1$) with Out ($0$) and enters.`,
          t`(Out, Fight) is also a Nash equilibrium, but it relies on a non-credible threat to fight.`,
        ],
        answer: 'SPNE: (In, Accommodate).',
      },
      related: ['stackelberg'],
    },
  ],
  tables: [
    {
      id: 'solution-concepts',
      title: 'Solution concepts compared',
      columns: ['Concept', 'Definition', 'Always exists?', 'Efficient?'],
      rows: [
        ['Dominant-strategy equilibrium', 'Every player plays a strategy that is best against anything', 'No', 'Not necessarily (prisoners\' dilemma)'],
        ['Pure-strategy Nash equilibrium', 'Mutual best responses', 'No (matching pennies has none)', 'Not necessarily'],
        ['Mixed-strategy Nash equilibrium', 'Mutual best responses in probabilities', 'Yes, in every finite game', 'Not necessarily'],
        ['Subgame perfect equilibrium', 'Nash equilibrium in every subgame (backward induction)', 'Yes, in finite games of perfect information', 'Not necessarily'],
        ['Pareto efficiency', 'No outcome makes someone better off without hurting anyone', 'Yes', 'Yes, by definition'],
      ],
    },
  ],
};
