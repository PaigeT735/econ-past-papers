import { t } from '../../lib/tag.js';

/**
 * ECU22011 Intermediate Economics A (Micro) — Final Practice Questions
 * Model answers: step-by-step working, then checks and exam tips.
 */
export default {
  kind: 'paper',
  practice: true,
  group: 'exams',
  id: 'practice-final',
  title: 'Final Practice Questions',
  short: 'Final',
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
          method: 'perfect-complements',
          label: '1',
          title: 'Perfect complements',
          type: 'calc',
          topics: ['consumer-choice'],
          prompt: t`A consumer has utility $u(x_1, x_2) = \min\{2x_1,\ x_2\}$. Income is $m = 24$. Prices are $p_1 = 3$ and $p_2 = 2$. Find the optimal bundle $(x_1^*, x_2^*)$.`,
          approach: t`A $\min\{\cdot\}$ utility means **perfect complements**: the optimum is at the **kink**, where the two arguments are equal. Do **not** use the MRS/tangency.`,
          given: [[t`Utility`, t`$\min\{2x_1, x_2\}$`], [t`Income $m$`, '24'], [t`Prices $p_1, p_2$`, '3, 2']],
          working: [
            { title: 'Find the kink', why: t`With perfect complements the consumer never buys "spare" units of one good, so at the optimum the two arguments of $\min\{\cdot\}$ are equal.`, math: t`2x_1 = x_2`, note: t`So the consumer buys two units of good 2 for every unit of good 1.` },
            { title: 'Write the budget constraint', why: 'All income is spent on the two goods.', math: t`p_1x_1 + p_2x_2 = m \;\Rightarrow\; 3x_1 + 2x_2 = 24` },
            { title: 'Substitute the kink into the budget', why: t`Replace $x_2$ with $2x_1$ so there is only one unknown.`, math: [t`3x_1 + 2(2x_1) = 24`, t`7x_1 = 24 \;\Rightarrow\; x_1^* = \frac{24}{7} \approx 3.43`] },
            { title: 'Find the other good', why: 'Use the kink condition from Step 1.', math: t`x_2^* = 2x_1^* = 2 \times \frac{24}{7} = \frac{48}{7} \approx 6.86` },
            { title: 'Check', why: 'The bundle should spend exactly all income.', math: t`3\left(\tfrac{24}{7}\right) + 2\left(\tfrac{48}{7}\right) = \tfrac{72 + 96}{7} = \tfrac{168}{7} = 24 \;✓` },
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
          method: 'cobb-douglas-demand',
          label: '2',
          title: 'Cobb-Douglas utility',
          type: 'calc',
          topics: ['consumer-choice'],
          prompt: t`A consumer has utility $u(x_1, x_2) = x_1^{1/2}x_2^{1/2}$. Income is $m = 100$. Prices are $p_1 = 5$ and $p_2 = 10$. Find the optimal consumption bundle.`,
          approach: t`Smooth Cobb-Douglas utility: use the **tangency condition** $MRS = -p_1/p_2$ together with the **budget constraint**.`,
          given: [[t`Utility`, t`$x_1^{1/2}x_2^{1/2}$`], [t`Income $m$`, '100'], [t`Prices $p_1, p_2$`, '5, 10']],
          working: [
            { title: 'Marginal utilities', why: t`Differentiate $u$ with respect to each good, holding the other constant.`, math: t`MU_1 = \tfrac12 x_1^{-1/2}x_2^{1/2}, \qquad MU_2 = \tfrac12 x_1^{1/2}x_2^{-1/2}` },
            { title: 'Marginal rate of substitution', why: 'Divide them: the ½s cancel and the powers simplify.', math: t`MRS = -\frac{MU_1}{MU_2} = -\frac{x_1^{-1/2}x_2^{1/2}}{x_1^{1/2}x_2^{-1/2}} = -\frac{x_2}{x_1}` },
            { title: 'Tangency condition', why: 'At the optimum the indifference curve has the same slope as the budget line.', math: [t`-\frac{x_2}{x_1} = -\frac{p_1}{p_2} = -\frac{5}{10}`, t`\frac{x_2}{x_1} = \frac12 \;\Rightarrow\; x_2 = \frac{x_1}{2}`] },
            { title: 'Substitute into the budget constraint', why: t`Replace $x_2$ so there is only one unknown.`, math: [t`5x_1 + 10\left(\frac{x_1}{2}\right) = 100`, t`5x_1 + 5x_1 = 100 \;\Rightarrow\; x_1^* = 10`] },
            { title: 'Find the other good and check', why: 'Use the ratio from Step 3, then check the spending adds up.', math: [t`x_2^* = \frac{10}{2} = 5`, t`5(10) + 10(5) = 100 \;✓`] },
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
          method: 'explain-nash',
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
          method: 'conditional-demands',
          label: '4',
          title: 'Conditional input demands',
          type: 'calc',
          topics: ['cost-minimisation'],
          prompt: t`A firm uses two inputs, $x_1$ and $x_2$. Input prices are $w_1 = 2$ and $w_2 = 8$. The production function is $q = 4x_1^{1/2}x_2^{1/2}$. For a given output level $q$, derive the firm's conditional input demand functions $x_1(q)$ and $x_2(q)$.`,
          approach: t`Cost minimisation: set $TRS = -w_1/w_2$ to get the input ratio, then **substitute into the production function** and solve for $x_1$ in terms of $q$.`,
          given: [[t`Production`, t`$q = 4x_1^{1/2}x_2^{1/2}$`], [t`Input prices $w_1, w_2$`, '2, 8']],
          working: [
            { title: 'Set up the problem', why: t`The firm wants the cheapest input mix that still produces $q$.`, math: t`\min_{x_1, x_2}\ 2x_1 + 8x_2 \quad \text{s.t.} \quad q = 4x_1^{1/2}x_2^{1/2}` },
            { title: 'Marginal products', why: 'Differentiate the production function with respect to each input.', math: [t`MP_1 = 2x_1^{-1/2}x_2^{1/2}, \qquad MP_2 = 2x_1^{1/2}x_2^{-1/2}`, t`\frac{MP_1}{MP_2} = \frac{x_2}{x_1}`] },
            { title: 'Cost-minimising condition', why: 'Set the ratio of marginal products equal to the ratio of input prices (TRS = −w₁/w₂).', math: [t`\frac{x_2}{x_1} = \frac{w_1}{w_2} = \frac{2}{8} = \frac14`, t`x_2 = \frac{x_1}{4}`], note: 'Input 1 is cheaper, so the firm uses four times as much of it.' },
            { title: 'Substitute into the production function', why: t`Replace $x_2$ so output depends on $x_1$ only. Remember $\sqrt{4} = 2$.`, math: [t`q = 4x_1^{1/2}\left(\frac{x_1}{4}\right)^{1/2} = 4x_1^{1/2}\cdot\frac{x_1^{1/2}}{2}`, t`q = 2x_1`] },
            { title: 'Solve for each input', why: t`Rearrange for $x_1$, then use the ratio from Step 3 for $x_2$.`, math: [t`x_1(q) = \frac{q}{2}`, t`x_2(q) = \frac{x_1}{4} = \frac{q}{8}`] },
            { title: 'Check with a number', why: t`Pick an output, e.g. $q = 8$, and confirm the inputs produce it.`, math: t`x_1 = 4,\; x_2 = 1 \;\Rightarrow\; 4\sqrt{4 \times 1} = 8 \;✓` },
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
          method: 'cost-function',
          label: '5',
          title: 'Cost and marginal cost',
          type: 'calc',
          topics: ['cost-minimisation'],
          prompt: t`Using the same production function and input prices as in Question 4, derive the firm's total cost function $c(q)$ and marginal cost function $MC(q)$.`,
          approach: t`Price the conditional input demands from Q4: $c(q) = w_1x_1(q) + w_2x_2(q)$, then differentiate.`,
          given: [[t`From Q4`, t`$x_1(q) = q/2$, $\;x_2(q) = q/8$`], [t`Prices`, t`$w_1 = 2$, $w_2 = 8$`]],
          working: [
            { title: 'Write total cost', why: 'Total cost = price of each input × the amount used (the conditional demands from Q4).', math: t`c(q) = w_1x_1(q) + w_2x_2(q)` },
            { title: 'Substitute and simplify', why: t`Plug in $w_1 = 2$, $w_2 = 8$, $x_1 = q/2$, $x_2 = q/8$.`, math: [t`c(q) = 2\left(\frac{q}{2}\right) + 8\left(\frac{q}{8}\right)`, t`c(q) = q + q = 2q`] },
            { title: 'Marginal cost', why: 'MC is the derivative of total cost with respect to output.', math: t`MC(q) = \frac{dc(q)}{dq} = \frac{d(2q)}{dq} = 2` },
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
          method: 'monopoly-optimum',
          label: '6',
          title: 'Monopoly output, price and profit',
          type: 'calc',
          topics: ['monopoly'],
          prompt: t`A monopolist faces demand $p(q) = 80 - q$. The firm's cost function is $c(q) = 20q$. Find the monopoly output $q^M$, monopoly price $p^M$, and monopoly profit.`,
          approach: t`$TR \to MR \to$ set $MR = MC$ for $q^M$, read the price off the **demand** curve, then profit $= TR - TC$.`,
          given: [[t`Demand`, t`$p = 80 - q$`], [t`Cost`, t`$c(q) = 20q$`]],
          working: [
            { title: 'Total revenue', why: 'Revenue = price × quantity, where price comes from the demand curve.', math: t`TR = p(q)\cdot q = (80 - q)q = 80q - q^2` },
            { title: 'Marginal revenue', why: 'Differentiate TR with respect to q.', math: t`MR = \frac{dTR}{dq} = 80 - 2q` },
            { title: 'Marginal cost', why: 'Differentiate the cost function.', math: t`MC = \frac{d(20q)}{dq} = 20` },
            { title: 'Set MR = MC', why: 'The monopolist produces until the last unit adds as much to revenue as to cost.', math: [t`80 - 2q = 20`, t`60 = 2q \;\Rightarrow\; q^M = 30`] },
            { title: 'Price from the demand curve', why: t`Substitute $q^M$ into **demand** (not MR) to find what consumers will pay.`, math: t`p^M = 80 - 30 = 50` },
            { title: 'Profit', why: 'Profit = total revenue − total cost at the monopoly output.', math: [t`\pi^M = p^Mq^M - c(q^M) = 50(30) - 20(30)`, t`\pi^M = 1500 - 600 = 900`] },
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
          method: ['monopoly-optimum', 'monopoly-dwl'],
          label: '7',
          title: 'Monopoly vs competition and deadweight loss',
          type: 'calc',
          topics: ['monopoly', 'welfare'],
          prompt: t`A monopolist faces demand $p(q) = 100 - 2q$. The firm has constant marginal cost $MC = 20$. Find the competitive output, monopoly output, monopoly price, and deadweight loss caused by monopoly.`,
          approach: t`Competitive output: **price = MC**. Monopoly output: **MR = MC**. DWL: the triangle between demand and MC from $q^M$ to $q^C$.`,
          given: [[t`Demand`, t`$p = 100 - 2q$`], [t`Marginal cost`, '20']],
          working: [
            { title: 'Competitive output: price = MC', why: 'A competitive market produces until the price buyers pay equals marginal cost.', math: [t`100 - 2q = 20`, t`80 = 2q \;\Rightarrow\; q^C = 40`] },
            { title: 'Monopolist’s revenue', why: 'Find total revenue, then differentiate for MR.', math: [t`TR = (100 - 2q)q = 100q - 2q^2`, t`MR = 100 - 4q`], note: 'MR has the same intercept as demand and twice the slope.' },
            { title: 'Monopoly output: MR = MC', why: 'The monopolist restricts output to where MR meets MC.', math: [t`100 - 4q = 20`, t`80 = 4q \;\Rightarrow\; q^M = 20`] },
            { title: 'Monopoly price', why: t`Substitute $q^M$ into the demand curve.`, math: t`p^M = 100 - 2(20) = 60` },
            { title: 'Deadweight loss', why: t`The triangle between demand and MC for the units the monopolist does not produce ($q^M$ to $q^C$). Base = lost output; height = price − MC at $q^M$.`, math: [t`DWL = \tfrac12\,(q^C - q^M)(p^M - MC)`, t`DWL = \tfrac12(40 - 20)(60 - 20) = \tfrac12(20)(40) = 400`] },
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
          method: 'conditional-demands',
          label: '8(a)',
          title: 'Conditional input demands',
          type: 'calc',
          topics: ['cost-minimisation'],
          prompt: t`A monopolist has production function $q = x_1^{1/2}x_2^{1/2}$. Input prices are $w_1 = 1$ and $w_2 = 4$. Market demand is $p(q) = 60 - q$. **(a)** Derive the conditional input demands $x_1(q)$ and $x_2(q)$.`,
          approach: t`Same method as Q4: tangency gives the ratio, then substitute into the production function.`,
          given: [[t`Production`, t`$q = x_1^{1/2}x_2^{1/2}$`], [t`Input prices`, t`$w_1 = 1$, $w_2 = 4$`], [t`Demand`, t`$p = 60 - q$`]],
          working: [
            { title: 'Ratio of marginal products', why: t`With $q = x_1^{1/2}x_2^{1/2}$ the ½s cancel and the ratio simplifies.`, math: t`\frac{MP_1}{MP_2} = \frac{\tfrac12 x_1^{-1/2}x_2^{1/2}}{\tfrac12 x_1^{1/2}x_2^{-1/2}} = \frac{x_2}{x_1}` },
            { title: 'Cost-minimising condition', why: 'Set it equal to the input price ratio.', math: [t`\frac{x_2}{x_1} = \frac{w_1}{w_2} = \frac14`, t`x_2 = \frac{x_1}{4}`] },
            { title: 'Substitute into the production function', why: t`Replace $x_2$; remember $\sqrt{4} = 2$.`, math: [t`q = x_1^{1/2}\left(\frac{x_1}{4}\right)^{1/2} = x_1^{1/2}\cdot\frac{x_1^{1/2}}{2}`, t`q = \frac{x_1}{2}`] },
            { title: 'Solve for each input', why: t`Rearrange for $x_1$, then use the ratio from Step 2.`, math: [t`x_1(q) = 2q`, t`x_2(q) = \frac{2q}{4} = \frac{q}{2}`] },
          ],
          result: t`$x_1(q) = 2q, \qquad x_2(q) = \dfrac{q}{2}$`,
          formulas: ['cost-min-condition', 'conditional-demands'],
        },
        {
          id: 'pf-q8b',
          method: 'cost-function',
          label: '8(b)',
          title: 'Cost function',
          type: 'calc',
          topics: ['cost-minimisation'],
          prompt: t`**(b)** Derive the cost function $c(q)$.`,
          working: [
            { title: 'Price the inputs', why: 'Total cost = w₁ × x₁(q) + w₂ × x₂(q), using the demands from part (a).', math: t`c(q) = 1(2q) + 4\left(\frac{q}{2}\right)` },
            { title: 'Simplify', why: 'Both inputs cost 2q in total.', math: t`c(q) = 2q + 2q = 4q` },
            { title: 'Marginal cost', why: 'Differentiate. With linear cost, MC = AC.', math: t`MC = \frac{dc}{dq} = 4` },
          ],
          result: t`$c(q) = 4q$ (so $MC = 4$)`,
          answer: [{ heading: 'Shortcut to check', list: [t`$c(q) = 2q\sqrt{w_1w_2} = 2q\sqrt{4} = 4q$ ✓`] }],
          formulas: ['total-cost-function', 'marginal-cost'],
        },
        {
          id: 'pf-q8c',
          method: 'monopoly-optimum',
          label: '8(c)',
          title: 'Monopoly output and price',
          type: 'calc',
          topics: ['monopoly'],
          prompt: t`**(c)** Find the monopoly output and price.`,
          working: [
            { title: 'Total and marginal revenue', why: 'Revenue from the demand curve, then differentiate.', math: [t`TR = (60 - q)q = 60q - q^2`, t`MR = 60 - 2q`] },
            { title: 'Set MR = MC', why: t`MC = 4 from part (b).`, math: [t`60 - 2q = 4`, t`56 = 2q \;\Rightarrow\; q^M = 28`] },
            { title: 'Price from demand', why: t`Substitute $q^M$ into the demand curve.`, math: t`p^M = 60 - 28 = 32` },
          ],
          result: t`$q^M = 28, \qquad p^M = 32$`,
          answer: [{ heading: 'Shortcut to check', list: [t`$q^M = \dfrac{60 - 4}{2} = 28$, $\;p^M = \dfrac{60 + 4}{2} = 32$ ✓`] }],
          formulas: ['mr-equals-mc', 'monopoly-price'],
        },
        {
          id: 'pf-q8d',
          method: 'producer-surplus',
          label: '8(d)',
          title: 'Producer surplus',
          type: 'calc',
          topics: ['monopoly', 'welfare'],
          prompt: t`**(d)** Calculate the producer surplus under monopoly.`,
          working: [
            { title: 'What producer surplus measures', why: 'PS = revenue − variable cost. With constant MC and no fixed cost, it is the rectangle between the price and MC.', math: t`PS = TR - VC = (p^M - MC)\,q^M` },
            { title: 'Substitute', why: t`Use $p^M = 32$, $MC = 4$, $q^M = 28$.`, math: [t`PS = (32 - 4)(28)`, t`PS = 28 \times 28 = 784`] },
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
          method: 'cournot-profit-functions',
          label: '9(a)',
          title: 'Profit functions',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`Two firms produce identical products. Market demand is $p(q) = 90 - q$, where $q = q_1 + q_2$. Both firms have constant marginal and average cost equal to 30. The firms choose quantities simultaneously. **(a)** Write down each firm's profit function.`,
          approach: t`Profit = (price × own output) − cost, where the price depends on **total** output $q_1 + q_2$.`,
          working: [
            { title: 'General profit function', why: t`Each firm earns the market price on its own output, minus its cost. The price depends on **total** output $q_1 + q_2$.`, math: t`\pi_i = p(q_1 + q_2)\,q_i - 30q_i` },
            { title: 'Firm 1', why: 'Substitute demand and expand.', math: [t`\pi_1 = (90 - q_1 - q_2)\,q_1 - 30q_1`, t`\pi_1 = 90q_1 - q_1^2 - q_1q_2 - 30q_1 = 60q_1 - q_1^2 - q_1q_2`] },
            { title: 'Firm 2', why: 'Same steps, swapping the roles.', math: [t`\pi_2 = (90 - q_1 - q_2)\,q_2 - 30q_2`, t`\pi_2 = 60q_2 - q_2^2 - q_1q_2`] },
          ],
          result: t`$\pi_1 = 60q_1 - q_1^2 - q_1q_2, \qquad \pi_2 = 60q_2 - q_2^2 - q_1q_2$`,
          formulas: ['cournot-profit'],
        },
        {
          id: 'pf-q9b',
          method: 'cournot-best-response',
          label: '9(b)',
          title: 'Best responses',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`**(b)** Derive each firm's best response function.`,
          working: [
            { title: 'Firm 1: first-order condition', why: t`Firm 1 chooses $q_1$ to maximise profit, taking $q_2$ as given. Differentiate with respect to $q_1$ only and set to zero.`, math: t`\frac{\partial \pi_1}{\partial q_1} = 60 - 2q_1 - q_2 = 0` },
            { title: 'Rearrange for q₁', why: 'This is firm 1’s best response to any output of firm 2.', math: [t`2q_1 = 60 - q_2`, t`q_1 = 30 - \frac{q_2}{2}`] },
            { title: 'Firm 2, the same way', why: t`Differentiate $\pi_2$ with respect to $q_2$.`, math: [t`\frac{\partial \pi_2}{\partial q_2} = 60 - 2q_2 - q_1 = 0`, t`q_2 = 30 - \frac{q_1}{2}`] },
          ],
          result: t`$BR_1: q_1 = 30 - \dfrac{q_2}{2}, \qquad BR_2: q_2 = 30 - \dfrac{q_1}{2}$`,
          tips: [t`Differentiate with respect to **your own** quantity only; the rival's output is treated as a constant.`],
          formulas: ['best-response-cournot'],
        },
        {
          id: 'pf-q9c',
          method: 'cournot-equilibrium',
          label: '9(c)',
          title: 'Cournot-Nash quantities',
          type: 'calc',
          topics: ['cournot', 'game-theory'],
          prompt: t`**(c)** Find the Cournot-Nash equilibrium quantities $q_1^*$ and $q_2^*$.`,
          working: [
            { title: 'Use both best responses together', why: 'In equilibrium each firm is on its own best response at the same time, so solve the two equations simultaneously.', math: t`q_1 = 30 - \frac{q_2}{2}, \qquad q_2 = 30 - \frac{q_1}{2}` },
            { title: 'Substitute firm 2’s best response into firm 1’s', why: t`This leaves one equation in $q_1$.`, math: [t`q_1 = 30 - \frac12\left(30 - \frac{q_1}{2}\right) = 30 - 15 + \frac{q_1}{4}`, t`q_1 = 15 + \frac{q_1}{4}`] },
            { title: 'Solve for q₁', why: t`Collect the $q_1$ terms on one side.`, math: [t`q_1 - \frac{q_1}{4} = 15 \;\Rightarrow\; \frac34 q_1 = 15`, t`q_1^* = 20`] },
            { title: 'Find q₂', why: 'Substitute back into firm 2’s best response.', math: t`q_2^* = 30 - \frac{20}{2} = 20` },
            { title: 'Quicker route (identical firms)', why: t`With equal costs the equilibrium is symmetric, so set $q_1 = q_2 = q$ in either best response.`, math: t`q = 30 - \frac{q}{2} \;\Rightarrow\; \frac32 q = 30 \;\Rightarrow\; q = 20 \;✓` },
          ],
          result: t`$q_1^* = q_2^* = 20$`,
          answer: [{ heading: 'Shortcut to check', list: [t`$q_i^* = \dfrac{a - c}{3b} = \dfrac{90 - 30}{3} = 20$ ✓`] }],
          formulas: ['cournot-symmetric'],
        },
        {
          id: 'pf-q9d',
          method: 'price-and-profits',
          label: '9(d)',
          title: 'Equilibrium price',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`**(d)** Find the equilibrium price.`,
          working: [
            { title: 'Total market output', why: 'Add the two firms’ equilibrium outputs.', math: t`q = q_1^* + q_2^* = 20 + 20 = 40` },
            { title: 'Price from demand', why: 'Substitute total output into the market demand curve.', math: t`p^* = 90 - 40 = 50` },
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
          method: 'cournot-profit-functions',
          label: '10(a)',
          title: 'Profit functions',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`Two firms produce identical products. Market demand is $p(q) = 120 - q$, where $q = q_1 + q_2$. Firm 1 has $MC_1 = AC_1 = 20$. Firm 2 has $MC_2 = AC_2 = 40$. The firms choose quantities simultaneously. **(a)** Write down each firm's profit function.`,
          working: [
            { title: 'General profit function', why: t`Same structure as Q9, but each firm has its **own** marginal cost.`, math: t`\pi_i = p(q_1 + q_2)\,q_i - c_iq_i` },
            { title: 'Firm 1 (cost 20)', why: 'Substitute demand and expand.', math: [t`\pi_1 = (120 - q_1 - q_2)\,q_1 - 20q_1`, t`\pi_1 = 100q_1 - q_1^2 - q_1q_2`] },
            { title: 'Firm 2 (cost 40)', why: 'Same steps with the higher cost.', math: [t`\pi_2 = (120 - q_1 - q_2)\,q_2 - 40q_2`, t`\pi_2 = 80q_2 - q_2^2 - q_1q_2`] },
          ],
          result: t`$\pi_1 = 100q_1 - q_1^2 - q_1q_2, \qquad \pi_2 = 80q_2 - q_2^2 - q_1q_2$`,
          formulas: ['cournot-profit'],
        },
        {
          id: 'pf-q10b',
          method: 'cournot-best-response',
          label: '10(b)',
          title: 'Best responses',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`**(b)** Derive each firm's best response function.`,
          working: [
            { title: 'Firm 1: first-order condition', why: t`Differentiate $\pi_1$ with respect to $q_1$ only and set to zero.`, math: [t`\frac{\partial \pi_1}{\partial q_1} = 100 - 2q_1 - q_2 = 0`, t`q_1 = 50 - \frac{q_2}{2}`] },
            { title: 'Firm 2: first-order condition', why: t`Differentiate $\pi_2$ with respect to $q_2$ only.`, math: [t`\frac{\partial \pi_2}{\partial q_2} = 80 - 2q_2 - q_1 = 0`, t`q_2 = 40 - \frac{q_1}{2}`], note: 'Firm 2’s intercept is lower (40 vs 50) because its costs are higher.' },
          ],
          result: t`$BR_1: q_1 = 50 - \dfrac{q_2}{2}, \qquad BR_2: q_2 = 40 - \dfrac{q_1}{2}$`,
          formulas: ['best-response-cournot'],
        },
        {
          id: 'pf-q10c',
          method: 'cournot-equilibrium',
          label: '10(c)',
          title: 'Cournot-Nash quantities',
          type: 'calc',
          topics: ['cournot', 'game-theory'],
          prompt: t`**(c)** Find the Cournot-Nash equilibrium quantities.`,
          working: [
            { title: 'Use both best responses together', why: 'Costs differ, so the firms produce different amounts: do not assume q₁ = q₂.', math: t`q_1 = 50 - \frac{q_2}{2}, \qquad q_2 = 40 - \frac{q_1}{2}` },
            { title: 'Substitute firm 2’s best response into firm 1’s', why: t`This leaves one equation in $q_1$.`, math: [t`q_1 = 50 - \frac12\left(40 - \frac{q_1}{2}\right) = 50 - 20 + \frac{q_1}{4}`, t`q_1 = 30 + \frac{q_1}{4}`] },
            { title: 'Solve for q₁', why: t`Collect the $q_1$ terms.`, math: [t`\frac34 q_1 = 30`, t`q_1^* = 40`] },
            { title: 'Find q₂', why: 'Substitute back into firm 2’s best response.', math: t`q_2^* = 40 - \frac{40}{2} = 20` },
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
          method: 'price-and-profits',
          label: '10(d)',
          title: 'Market price',
          type: 'calc',
          topics: ['cournot'],
          prompt: t`**(d)** Find the market price.`,
          working: [
            { title: 'Total market output', why: 'Add the two equilibrium outputs.', math: t`q = q_1^* + q_2^* = 40 + 20 = 60` },
            { title: 'Price from demand', why: 'Substitute into the market demand curve.', math: t`p^* = 120 - 60 = 60` },
          ],
          formulas: ['cournot-asymmetric'],
        },
      ],
    },
  ],
};
