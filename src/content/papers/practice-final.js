import { t } from '../../lib/tag.js';

/**
 * ECU22011 Intermediate Economics A (Micro) — Final Practice Questions
 * Model answers: step-by-step working, then checks and exam tips.
 */
export default {
  kind: 'paper',
  practice: true,
  id: 'practice-final',
  title: 'Final Practice Questions',
  short: 'Practice Final',
  accent: 'production',
  summary: t`ECU22011 final practice questions: ten questions on consumer choice, cost minimisation, monopoly, deadweight loss, Cournot and Nash equilibrium.`,
  meta: [['Module', 'ECU22011 Intermediate Economics A (Micro)'], ['Set', 'Final practice questions with solutions']],
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      topic: 'Perfect complements',
      parts: [
        {
          id: 'pf-q1',
          label: '1',
          title: 'Perfect complements',
          type: 'calc',
          topics: ['consumer-choice'],
          prompt: t`A consumer has utility $u(x_1, x_2) = \min\{2x_1,\ x_2\}$. Income is $m = 24$. Prices are $p_1 = 3$ and $p_2 = 2$. Find the optimal bundle $(x_1^*, x_2^*)$.`,
          approach: t`A $\min\{\cdot\}$ utility means **perfect complements**: the optimum is at the **kink**, where the two arguments are equal. Do **not** use the MRS/tangency.`,
          given: [[t`Utility`, t`$\min\{2x_1, x_2\}$`], [t`Income $m$`, '24'], [t`Prices $p_1, p_2$`, '3, 2']],
          working: [
            t`**Kink condition:** set the arguments equal: $2x_1 = x_2$`,
            t`**Budget constraint:** $3x_1 + 2x_2 = 24$`,
            t`**Substitute** $x_2 = 2x_1$: $\;3x_1 + 2(2x_1) = 24 \Rightarrow 7x_1 = 24 \Rightarrow x_1^* = \dfrac{24}{7}$`,
            t`**Back out** $x_2$: $\;x_2^* = 2 \times \dfrac{24}{7} = \dfrac{48}{7}$`,
            t`**Check:** $3\left(\tfrac{24}{7}\right) + 2\left(\tfrac{48}{7}\right) = \tfrac{72 + 96}{7} = 24$ ✓`,
          ],
          result: t`$(x_1^*, x_2^*) = \left(\dfrac{24}{7},\ \dfrac{48}{7}\right) \approx (3.43,\ 6.86)$`,
          answer: [
            {
              heading: 'Shortcut to check',
              formula: t`u = \min\{ax_1, bx_2\} \;\Rightarrow\; x_1^* = \frac{b\,m}{b\,p_1 + a\,p_2} = \frac{1(24)}{1(3) + 2(2)} = \frac{24}{7}`,
            },
          ],
          tips: [
            t`Watch the direction: $\min\{2x_1, x_2\}$ means $x_2 = 2x_1$ (two units of good 2 per unit of good 1), **not** $x_1 = 2x_2$.`,
            'Fractions are fine as final answers. Leave them exact rather than rounding.',
          ],
          formulas: ['perfect-complements', 'budget-constraint'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      topic: 'Cobb-Douglas utility',
      parts: [
        {
          id: 'pf-q2',
          label: '2',
          title: 'Cobb-Douglas utility',
          type: 'calc',
          topics: ['consumer-choice'],
          prompt: t`A consumer has utility $u(x_1, x_2) = x_1^{1/2}x_2^{1/2}$. Income is $m = 100$. Prices are $p_1 = 5$ and $p_2 = 10$. Find the optimal consumption bundle.`,
          approach: t`Smooth Cobb-Douglas utility: use the **tangency condition** $MRS = -p_1/p_2$ together with the **budget constraint**.`,
          given: [[t`Utility`, t`$x_1^{1/2}x_2^{1/2}$`], [t`Income $m$`, '100'], [t`Prices $p_1, p_2$`, '5, 10']],
          working: [
            t`**Marginal utilities:** $MU_1 = \tfrac12 x_1^{-1/2}x_2^{1/2}$, $\;MU_2 = \tfrac12 x_1^{1/2}x_2^{-1/2}$`,
            t`**MRS:** $\;MRS = -\dfrac{MU_1}{MU_2} = -\dfrac{x_2}{x_1}$`,
            t`**Tangency:** $\;-\dfrac{x_2}{x_1} = -\dfrac{p_1}{p_2} = -\dfrac{5}{10} \Rightarrow x_2 = \dfrac{x_1}{2}$`,
            t`**Budget:** $\;5x_1 + 10\left(\dfrac{x_1}{2}\right) = 100 \Rightarrow 10x_1 = 100 \Rightarrow x_1^* = 10$`,
            t`**Back out:** $\;x_2^* = 10/2 = 5$. Check: $5(10) + 10(5) = 100$ ✓`,
          ],
          result: t`$(x_1^*, x_2^*) = (10,\ 5)$`,
          answer: [
            {
              heading: 'Shortcut to check',
              list: [
                t`With equal exponents the consumer spends **half** of income on each good: $x_1^* = \dfrac{m}{2p_1} = \dfrac{100}{10} = 10$, $\;x_2^* = \dfrac{m}{2p_2} = \dfrac{100}{20} = 5$ ✓`,
                t`Good 1 is cheaper, so more of it is bought, as expected.`,
              ],
            },
          ],
          tips: [t`The ratio flips: $x_2/x_1 = p_1/p_2$ (not $p_2/p_1$). If you find more of the **expensive** good, check this step.`],
          formulas: ['tangency-condition', 'cobb-douglas-utility', 'mrs'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      topic: 'Nash equilibrium',
      parts: [
        {
          id: 'pf-q3',
          label: '3',
          title: 'Nash equilibrium',
          type: 'essay',
          topics: ['game-theory'],
          prompt: t`Verbally explain the concept of Nash equilibrium. In your answer, explain why a Nash equilibrium does not necessarily mean that players achieve the best possible joint outcome.`,
          approach: t`Three steps: **define** it (mutual best responses), say **why it is stable** (no profitable unilateral deviation), then explain **why it can be inefficient**, using the **prisoners' dilemma**.`,
          answer: [
            {
              heading: 'Definition',
              list: [
                t`A Nash equilibrium is a set of strategies, one per player, where **each player's strategy is a best response** to the strategies of the others.`,
                t`Given what everyone else is doing, **no player can do better by changing their own strategy alone** (no profitable unilateral deviation).`,
                t`So it is **self-enforcing**: once there, nobody has a reason to move.`,
              ],
            },
            {
              heading: 'Why it need not be the best joint outcome',
              list: [
                t`Each player maximises **their own** payoff and ignores the effect of their choice on the others.`,
                t`Nash equilibrium is about **individual stability**, not **collective efficiency** (Pareto efficiency).`,
                t`Players cannot (or do not) make binding agreements to coordinate on a better outcome.`,
              ],
            },
            {
              heading: "Example: the prisoners' dilemma",
              formula: t`\begin{array}{c|cc} & \text{Cooperate} & \text{Defect} \\ \hline \text{Cooperate} & 3,\ 3 & 0,\ 5 \\ \text{Defect} & 5,\ 0 & 1,\ 1 \end{array}`,
              list: [
                t`Whatever the other player does, **Defect** pays more (5 > 3 and 1 > 0), so it is a dominant strategy.`,
                t`The unique Nash equilibrium is **(Defect, Defect)** with payoffs (1, 1).`,
                t`But **(Cooperate, Cooperate)** gives (3, 3): both would be better off, so the equilibrium is **not Pareto efficient**.`,
                t`Cooperation is not stable: each player gains by switching to Defect.`,
              ],
            },
            {
              heading: 'Economic applications',
              list: [
                t`**Cournot / cartels:** firms would earn more by jointly restricting output, but each has an incentive to produce more (compare Q9: each firm earns 400 in Cournot, but 450 if they shared the monopoly output).`,
                t`Advertising wars, arms races, overfishing of common resources.`,
              ],
            },
          ],
          tips: [
            'Use the words "best response", "unilateral deviation" and "Pareto efficient". They are what the marker looks for.',
            'Draw a small payoff matrix: it makes the inefficiency obvious in seconds.',
          ],
          formulas: ['nash-equilibrium', 'prisoners-dilemma', 'pareto-efficiency'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      topic: 'Conditional input demands',
      parts: [
        {
          id: 'pf-q4',
          label: '4',
          title: 'Conditional input demands',
          type: 'calc',
          topics: ['cost-minimisation'],
          prompt: t`A firm uses two inputs, $x_1$ and $x_2$. Input prices are $w_1 = 2$ and $w_2 = 8$. The production function is $q = 4x_1^{1/2}x_2^{1/2}$. For a given output level $q$, derive the firm's conditional input demand functions $x_1(q)$ and $x_2(q)$.`,
          approach: t`Cost minimisation: set $TRS = -w_1/w_2$ to get the input ratio, then **substitute into the production function** and solve for $x_1$ in terms of $q$.`,
          given: [[t`Production`, t`$q = 4x_1^{1/2}x_2^{1/2}$`], [t`Input prices $w_1, w_2$`, '2, 8']],
          working: [
            t`**Problem:** $\;\min_{x_1, x_2}\ 2x_1 + 8x_2 \;$ s.t. $\; q = 4x_1^{1/2}x_2^{1/2}$`,
            t`**Marginal products:** $MP_1 = 2x_1^{-1/2}x_2^{1/2}$, $\;MP_2 = 2x_1^{1/2}x_2^{-1/2}$, so $\dfrac{MP_1}{MP_2} = \dfrac{x_2}{x_1}$`,
            t`**Tangency:** $\;\dfrac{x_2}{x_1} = \dfrac{w_1}{w_2} = \dfrac{2}{8} = \dfrac14 \Rightarrow x_2 = \dfrac{x_1}{4}$`,
            t`**Substitute:** $\;q = 4x_1^{1/2}\left(\dfrac{x_1}{4}\right)^{1/2} = 4x_1^{1/2}\cdot\dfrac{x_1^{1/2}}{2} = 2x_1$`,
            t`**Solve:** $\;x_1(q) = \dfrac{q}{2}$, then $\;x_2(q) = \dfrac{1}{4}\cdot\dfrac{q}{2} = \dfrac{q}{8}$`,
            t`**Check** at $q = 8$: $x = (4, 1)$, and $4\sqrt{4 \times 1} = 8$ ✓`,
          ],
          result: t`$x_1(q) = \dfrac{q}{2}, \qquad x_2(q) = \dfrac{q}{8}$`,
          answer: [
            {
              heading: 'Shortcut to check',
              formula: t`q = A\sqrt{x_1x_2}: \quad x_1(q) = \frac{q}{A}\sqrt{\frac{w_2}{w_1}} = \frac{q}{4}\sqrt{4} = \frac{q}{2}, \qquad x_2(q) = \frac{q}{A}\sqrt{\frac{w_1}{w_2}} = \frac{q}{4}\cdot\frac12 = \frac{q}{8}`,
              list: [t`Input 1 is cheaper, so the firm uses more of it ($x_1 > x_2$), as expected.`],
            },
          ],
          tips: [t`$(x_1/4)^{1/2} = x_1^{1/2}/2$: the square root of 4 is 2. Slips here are the most common error.`],
          formulas: ['cost-min-condition', 'conditional-demands', 'trs'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      topic: 'Cost and marginal cost',
      parts: [
        {
          id: 'pf-q5',
          label: '5',
          title: 'Cost and marginal cost',
          type: 'calc',
          topics: ['cost-minimisation'],
          prompt: t`Using the same production function and input prices as in Question 4, derive the firm's total cost function $c(q)$ and marginal cost function $MC(q)$.`,
          approach: t`Price the conditional input demands from Q4: $c(q) = w_1x_1(q) + w_2x_2(q)$, then differentiate.`,
          given: [[t`From Q4`, t`$x_1(q) = q/2$, $\;x_2(q) = q/8$`], [t`Prices`, t`$w_1 = 2$, $w_2 = 8$`]],
          working: [
            t`**Total cost:** $\;c(q) = 2\left(\dfrac{q}{2}\right) + 8\left(\dfrac{q}{8}\right) = q + q = 2q$`,
            t`**Marginal cost:** $\;MC(q) = \dfrac{dc(q)}{dq} = 2$`,
          ],
          result: t`$c(q) = 2q, \qquad MC(q) = 2$`,
          answer: [
            {
              heading: 'What it tells you',
              list: [
                t`The cost function is **linear**, so $AC = MC = 2$ for every unit.`,
                t`That is because $x_1^{1/2}x_2^{1/2}$ has **constant returns to scale** (exponents sum to 1).`,
                t`Shortcut: $c(q) = \dfrac{2q}{A}\sqrt{w_1w_2} = \dfrac{2q}{4}\sqrt{16} = 2q$ ✓`,
              ],
            },
          ],
          formulas: ['total-cost-function', 'marginal-cost'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q6 */
    {
      number: 6,
      topic: 'Monopoly',
      parts: [
        {
          id: 'pf-q6',
          label: '6',
          title: 'Monopoly output, price and profit',
          type: 'calc',
          topics: ['monopoly'],
          prompt: t`A monopolist faces demand $p(q) = 80 - q$. The firm's cost function is $c(q) = 20q$. Find the monopoly output $q^M$, monopoly price $p^M$, and monopoly profit.`,
          approach: t`$TR \to MR \to$ set $MR = MC$ for $q^M$, read the price off the **demand** curve, then profit $= TR - TC$.`,
          given: [[t`Demand`, t`$p = 80 - q$`], [t`Cost`, t`$c(q) = 20q$`]],
          working: [
            t`**Total revenue:** $\;TR = (80 - q)q = 80q - q^2$`,
            t`**Marginal revenue:** $\;MR = 80 - 2q$`,
            t`**Marginal cost:** $\;MC = 20$`,
            t`**MR = MC:** $\;80 - 2q = 20 \Rightarrow q^M = 30$`,
            t`**Price from demand:** $\;p^M = 80 - 30 = 50$`,
            t`**Profit:** $\;\pi^M = 50(30) - 20(30) = 1500 - 600 = 900$`,
          ],
          result: t`$q^M = 30, \quad p^M = 50, \quad \pi^M = 900$`,
          answer: [
            {
              heading: 'Extra figures (useful if the question is extended)',
              list: [
                t`Shortcuts: $q^M = \dfrac{a - c}{2b} = \dfrac{60}{2} = 30$, $\;p^M = \dfrac{a + c}{2} = 50$, $\;\pi^M = \dfrac{(a - c)^2}{4b} = 900$ ✓`,
                t`Competitive output: $80 - q = 20 \Rightarrow q^C = 60$.`,
                t`Consumer surplus under monopoly: $\tfrac12(80 - 50)(30) = 450$.`,
                t`Deadweight loss: $\tfrac12(60 - 30)(50 - 20) = 450$.`,
              ],
            },
          ],
          tips: [t`Price comes from **demand**, not MR. Plugging $q^M$ into MR just gives back $MC = 20$.`],
          formulas: ['marginal-revenue', 'mr-equals-mc', 'monopoly-price', 'monopoly-profit', 'monopoly-shortcuts'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q7 */
    {
      number: 7,
      topic: 'Monopoly vs competition',
      parts: [
        {
          id: 'pf-q7',
          label: '7',
          title: 'Monopoly vs competition and deadweight loss',
          type: 'calc',
          topics: ['monopoly', 'welfare'],
          prompt: t`A monopolist faces demand $p(q) = 100 - 2q$. The firm has constant marginal cost $MC = 20$. Find the competitive output, monopoly output, monopoly price, and deadweight loss caused by monopoly.`,
          approach: t`Competitive output: **price = MC**. Monopoly output: **MR = MC**. DWL: the triangle between demand and MC from $q^M$ to $q^C$.`,
          given: [[t`Demand`, t`$p = 100 - 2q$`], [t`Marginal cost`, '20']],
          working: [
            t`**Competitive output:** $\;100 - 2q = 20 \Rightarrow q^C = 40$`,
            t`**Total revenue:** $\;TR = 100q - 2q^2 \Rightarrow MR = 100 - 4q$`,
            t`**Monopoly output:** $\;100 - 4q = 20 \Rightarrow q^M = 20$`,
            t`**Monopoly price:** $\;p^M = 100 - 2(20) = 60$`,
            t`**Deadweight loss:** $$DWL = \tfrac12\,(q^C - q^M)(p^M - MC) = \tfrac12(40 - 20)(60 - 20) = 400$$`,
          ],
          result: t`$q^C = 40, \quad q^M = 20, \quad p^M = 60, \quad DWL = 400$`,
          answer: [
            {
              heading: 'Checks and extra figures',
              list: [
                t`Linear demand with constant MC: $q^C = 2q^M$ ✓ (40 = 2 × 20).`,
                t`Shortcut: $DWL = \dfrac{(a - c)^2}{8b} = \dfrac{80^2}{16} = 400$ ✓`,
                t`Under monopoly: consumer surplus $= \tfrac12(100 - 60)(20) = 400$; producer surplus (profit) $= (60 - 20)(20) = 800$.`,
                t`Total surplus under competition $= \tfrac12(100 - 20)(40) = 1600 = 400 + 800 + 400$ ✓`,
              ],
            },
          ],
          tips: [
            t`The height of the DWL triangle is $p^M - MC$ (60 − 20), not $p^M$.`,
            'Sketching demand, MR and MC with the triangle shaded earns easy marks.',
          ],
          formulas: ['competitive-market-outcome', 'mr-equals-mc', 'deadweight-loss'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q8 */
    {
      number: 8,
      topic: 'Production, costs and monopoly',
      parts: [
        {
          id: 'pf-q8a',
          label: '8(a)',
          title: 'Conditional input demands',
          type: 'calc',
          topics: ['cost-minimisation'],
          prompt: t`A monopolist has production function $q = x_1^{1/2}x_2^{1/2}$. Input prices are $w_1 = 1$ and $w_2 = 4$. Market demand is $p(q) = 60 - q$. **(a)** Derive the conditional input demands $x_1(q)$ and $x_2(q)$.`,
          approach: t`Same method as Q4: tangency gives the ratio, then substitute into the production function.`,
          given: [[t`Production`, t`$q = x_1^{1/2}x_2^{1/2}$`], [t`Input prices`, t`$w_1 = 1$, $w_2 = 4$`], [t`Demand`, t`$p = 60 - q$`]],
          working: [
            t`**Ratio of marginal products:** $\;\dfrac{MP_1}{MP_2} = \dfrac{x_2}{x_1}$`,
            t`**Tangency:** $\;\dfrac{x_2}{x_1} = \dfrac{w_1}{w_2} = \dfrac14 \Rightarrow x_2 = \dfrac{x_1}{4}$`,
            t`**Substitute:** $\;q = x_1^{1/2}\left(\dfrac{x_1}{4}\right)^{1/2} = \dfrac{x_1}{2}$`,
            t`**Solve:** $\;x_1(q) = 2q$, $\;x_2(q) = \dfrac{2q}{4} = \dfrac{q}{2}$`,
          ],
          result: t`$x_1(q) = 2q, \qquad x_2(q) = \dfrac{q}{2}$`,
          formulas: ['cost-min-condition', 'conditional-demands'],
        },
        {
          id: 'pf-q8b',
          label: '8(b)',
          title: 'Cost function',
          type: 'calc',
          topics: ['cost-minimisation'],
          prompt: t`**(b)** Derive the cost function $c(q)$.`,
          working: [
            t`$c(q) = w_1x_1(q) + w_2x_2(q) = 1(2q) + 4\left(\dfrac{q}{2}\right) = 2q + 2q = 4q$`,
            t`So $MC = AC = 4$.`,
          ],
          result: t`$c(q) = 4q$ (so $MC = 4$)`,
          answer: [{ heading: 'Shortcut to check', list: [t`$c(q) = 2q\sqrt{w_1w_2} = 2q\sqrt{4} = 4q$ ✓`] }],
          formulas: ['total-cost-function', 'marginal-cost'],
        },
        {
          id: 'pf-q8c',
          label: '8(c)',
          title: 'Monopoly output and price',
          type: 'calc',
          topics: ['monopoly'],
          prompt: t`**(c)** Find the monopoly output and price.`,
          working: [
            t`$TR = (60 - q)q = 60q - q^2 \Rightarrow MR = 60 - 2q$`,
            t`$MR = MC$: $\;60 - 2q = 4 \Rightarrow q^M = 28$`,
            t`$p^M = 60 - 28 = 32$`,
          ],
          result: t`$q^M = 28, \qquad p^M = 32$`,
          answer: [{ heading: 'Shortcut to check', list: [t`$q^M = \dfrac{60 - 4}{2} = 28$, $\;p^M = \dfrac{60 + 4}{2} = 32$ ✓`] }],
          formulas: ['mr-equals-mc', 'monopoly-price'],
        },
        {
          id: 'pf-q8d',
          label: '8(d)',
          title: 'Producer surplus',
          type: 'calc',
          topics: ['monopoly', 'welfare'],
          prompt: t`**(d)** Calculate the producer surplus under monopoly.`,
          working: [
            t`**Producer surplus** $= TR - VC$. There is no fixed cost and MC is constant, so it is the rectangle $(p^M - MC)\,q^M$.`,
            t`$PS = (32 - 4)(28) = 28 \times 28 = 784$`,
          ],
          result: t`$PS = 784$`,
          answer: [
            {
              heading: 'Extra figures',
              list: [
                t`With no fixed cost, PS = profit: $TR - TC = 32(28) - 4(28) = 896 - 112 = 784$ ✓`,
                t`Consumer surplus $= \tfrac12(60 - 32)(28) = 392$.`,
                t`Competitive output $q^C = 56$, so $DWL = \tfrac12(56 - 28)(32 - 4) = 392$.`,
              ],
            },
          ],
          tips: ['Producer surplus is not deadweight loss: PS is what the firm gains, DWL is surplus nobody gets.'],
          formulas: ['producer-surplus', 'deadweight-loss'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q9 */
    {
      number: 9,
      topic: 'Cournot, identical costs',
      parts: [
        {
          id: 'pf-q9a',
          label: '9(a)',
          title: 'Profit functions',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`Two firms produce identical products. Market demand is $p(q) = 90 - q$, where $q = q_1 + q_2$. Both firms have constant marginal and average cost equal to 30. The firms choose quantities simultaneously. **(a)** Write down each firm's profit function.`,
          approach: t`Profit = (price × own output) − cost, where the price depends on **total** output $q_1 + q_2$.`,
          working: [
            t`$\pi_1 = (90 - q_1 - q_2)\,q_1 - 30q_1 = 60q_1 - q_1^2 - q_1q_2$`,
            t`$\pi_2 = (90 - q_1 - q_2)\,q_2 - 30q_2 = 60q_2 - q_2^2 - q_1q_2$`,
          ],
          result: t`$\pi_1 = 60q_1 - q_1^2 - q_1q_2, \qquad \pi_2 = 60q_2 - q_2^2 - q_1q_2$`,
          formulas: ['cournot-profit'],
        },
        {
          id: 'pf-q9b',
          label: '9(b)',
          title: 'Best responses',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`**(b)** Derive each firm's best response function.`,
          working: [
            t`Firm 1: $\;\dfrac{\partial \pi_1}{\partial q_1} = 60 - 2q_1 - q_2 = 0 \Rightarrow q_1 = 30 - \dfrac{q_2}{2}$`,
            t`Firm 2: $\;\dfrac{\partial \pi_2}{\partial q_2} = 60 - 2q_2 - q_1 = 0 \Rightarrow q_2 = 30 - \dfrac{q_1}{2}$`,
          ],
          result: t`$BR_1: q_1 = 30 - \dfrac{q_2}{2}, \qquad BR_2: q_2 = 30 - \dfrac{q_1}{2}$`,
          tips: [t`Differentiate with respect to **your own** quantity only; the rival's output is treated as a constant.`],
          formulas: ['best-response-cournot'],
        },
        {
          id: 'pf-q9c',
          label: '9(c)',
          title: 'Cournot-Nash quantities',
          type: 'calc',
          topics: ['cournot', 'game-theory'],
          prompt: t`**(c)** Find the Cournot-Nash equilibrium quantities $q_1^*$ and $q_2^*$.`,
          working: [
            t`Substitute $BR_2$ into $BR_1$: $\;q_1 = 30 - \tfrac12\left(30 - \dfrac{q_1}{2}\right) = 15 + \dfrac{q_1}{4}$`,
            t`$\dfrac{3}{4}q_1 = 15 \Rightarrow q_1^* = 20$, then $q_2^* = 30 - 10 = 20$`,
            t`Symmetry check: costs are equal, so $q_1 = q_2 = q$: $\;q = 30 - q/2 \Rightarrow q = 20$ ✓`,
          ],
          result: t`$q_1^* = q_2^* = 20$`,
          answer: [{ heading: 'Shortcut to check', list: [t`$q_i^* = \dfrac{a - c}{3b} = \dfrac{90 - 30}{3} = 20$ ✓`] }],
          formulas: ['cournot-symmetric'],
        },
        {
          id: 'pf-q9d',
          label: '9(d)',
          title: 'Equilibrium price',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`**(d)** Find the equilibrium price.`,
          working: [t`Total output $q = 20 + 20 = 40$, so $p^* = 90 - 40 = 50$`],
          result: t`$p^* = 50$`,
          answer: [
            {
              heading: 'Extra figures',
              list: [
                t`Shortcut: $p^* = \dfrac{a + 2c}{3} = \dfrac{90 + 60}{3} = 50$ ✓`,
                t`Profit per firm: $(50 - 30)(20) = 400$.`,
                t`Compare: a monopoly would produce 30 at a price of 60 (profit 900, i.e. 450 each if shared); competition would produce 60 at a price of 30. Cournot sits in between.`,
              ],
            },
          ],
          formulas: ['cournot-symmetric'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q10 */
    {
      number: 10,
      topic: 'Cournot, different costs',
      parts: [
        {
          id: 'pf-q10a',
          label: '10(a)',
          title: 'Profit functions',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`Two firms produce identical products. Market demand is $p(q) = 120 - q$, where $q = q_1 + q_2$. Firm 1 has $MC_1 = AC_1 = 20$. Firm 2 has $MC_2 = AC_2 = 40$. The firms choose quantities simultaneously. **(a)** Write down each firm's profit function.`,
          working: [
            t`$\pi_1 = (120 - q_1 - q_2)\,q_1 - 20q_1 = 100q_1 - q_1^2 - q_1q_2$`,
            t`$\pi_2 = (120 - q_1 - q_2)\,q_2 - 40q_2 = 80q_2 - q_2^2 - q_1q_2$`,
          ],
          result: t`$\pi_1 = 100q_1 - q_1^2 - q_1q_2, \qquad \pi_2 = 80q_2 - q_2^2 - q_1q_2$`,
          formulas: ['cournot-profit'],
        },
        {
          id: 'pf-q10b',
          label: '10(b)',
          title: 'Best responses',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`**(b)** Derive each firm's best response function.`,
          working: [
            t`Firm 1: $\;100 - 2q_1 - q_2 = 0 \Rightarrow q_1 = 50 - \dfrac{q_2}{2}$`,
            t`Firm 2: $\;80 - 2q_2 - q_1 = 0 \Rightarrow q_2 = 40 - \dfrac{q_1}{2}$`,
          ],
          result: t`$BR_1: q_1 = 50 - \dfrac{q_2}{2}, \qquad BR_2: q_2 = 40 - \dfrac{q_1}{2}$`,
          formulas: ['best-response-cournot'],
        },
        {
          id: 'pf-q10c',
          label: '10(c)',
          title: 'Cournot-Nash quantities',
          type: 'calc',
          topics: ['cournot', 'game-theory'],
          prompt: t`**(c)** Find the Cournot-Nash equilibrium quantities.`,
          working: [
            t`Substitute $BR_2$ into $BR_1$: $\;q_1 = 50 - \tfrac12\left(40 - \dfrac{q_1}{2}\right) = 30 + \dfrac{q_1}{4}$`,
            t`$\dfrac34 q_1 = 30 \Rightarrow q_1^* = 40$, then $q_2^* = 40 - 20 = 20$`,
          ],
          result: t`$q_1^* = 40, \qquad q_2^* = 20$`,
          answer: [
            {
              heading: 'Shortcut to check',
              list: [
                t`$q_i^* = \dfrac{a - 2c_i + c_j}{3b}$: $\;q_1^* = \dfrac{120 - 40 + 40}{3} = 40$ ✓, $\;q_2^* = \dfrac{120 - 80 + 20}{3} = 20$ ✓`,
                t`The **lower-cost** firm produces more.`,
              ],
            },
          ],
          tips: [t`Costs differ, so do **not** set $q_1 = q_2$. Substitute one best response into the other.`],
          formulas: ['cournot-asymmetric'],
        },
        {
          id: 'pf-q10d',
          label: '10(d)',
          title: 'Market price',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`**(d)** Find the market price.`,
          working: [t`Total output $q = 40 + 20 = 60$, so $p^* = 120 - 60 = 60$`],
          result: t`$p^* = 60$`,
          answer: [
            {
              heading: 'Extra figures',
              list: [
                t`Shortcut: $p^* = \dfrac{a + c_1 + c_2}{3} = \dfrac{120 + 20 + 40}{3} = 60$ ✓`,
                t`Profits: $\pi_1 = (60 - 20)(40) = 1600$; $\;\pi_2 = (60 - 40)(20) = 400$.`,
                t`Neat check: in linear Cournot, $\pi_i = (q_i^*)^2$ when $b = 1$: $40^2 = 1600$, $20^2 = 400$ ✓`,
              ],
            },
          ],
          formulas: ['cournot-asymmetric'],
        },
      ],
    },
  ],
};
