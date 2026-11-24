import { t } from '../../lib/tag.js';
import { plot } from '../../lib/plot.js';

/**
 * ECU22011 Problem Set 1: preferences, utility, MRS, budget sets, Lagrangian.
 */
export default {
  kind: 'paper',
  practice: true,
  group: 'psets',
  id: 'ps-1',
  title: 'Problem Set 1',
  short: 'PS 1',
  accent: 'consumer',
  summary: t`Preferences and utility: the **Condorcet paradox**, checking transitivity and monotonicity, ordering bundles under **monotonic transformations**, the **MRS** and indifference curves, **budget sets**, and the **Lagrangian** for Cobb-Douglas utility. Show all work: graphs are drawn in the answers.`,
  meta: [['Module', 'ECU22011 Intermediate Economics A (Micro)'], ['Set', 'Problem Set 1 with solutions']],
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      topic: 'The Condorcet paradox',
      points: 20,
      parts: [
        {
          id: 'ps1-q1a',
          method: 'condorcet',
          label: '1(a)',
          title: 'Social preference by pairwise majority',
          type: 'calc',
          topics: ['preferences'],
          prompt: t`A society has three voters, $i \in \{1, 2, 3\}$, and three alternatives, A, B and C. Each voter has strict, transitive preferences: **Voter 1:** $A \succ B \succ C$. **Voter 2:** $B \succ C \succ A$. **Voter 3:** $C \succ A \succ B$. **(a)** Using pairwise majority voting, find the social preference $\succ_s$ between each pair of alternatives. (If most voters prefer A to B, then $A \succ_s B$.)`,
          approach: 'Take one pair at a time. For each voter, only ask "which of these two is higher in my list?" and count the votes.',
          working: [
            { title: 'A vs B', why: t`Voter 1: A above B. Voter 2: B above A. Voter 3 ($C \succ A \succ B$): A above B.`, math: t`\text{A: voters 1, 3}\quad \text{B: voter 2} \;\Rightarrow\; A \succ_s B\ (2\text{–}1)` },
            { title: 'B vs C', why: t`Voter 1: B above C. Voter 2: B above C. Voter 3: C above B.`, math: t`\text{B: voters 1, 2}\quad \text{C: voter 3} \;\Rightarrow\; B \succ_s C\ (2\text{–}1)` },
            { title: 'A vs C', why: t`Voter 1: A above C. Voter 2 ($B \succ C \succ A$): C above A. Voter 3: C above A.`, math: t`\text{A: voter 1}\quad \text{C: voters 2, 3} \;\Rightarrow\; C \succ_s A\ (2\text{–}1)` },
          ],
          result: t`$A \succ_s B$, $\ B \succ_s C$, $\ C \succ_s A$`,
          answer: [{ heading: 'Summary table', table: { columns: ['Pair', 'Votes', 'Social preference'], rows: [['A vs B', '2–1 for A', t`$A \succ_s B$`], ['B vs C', '2–1 for B', t`$B \succ_s C$`], ['A vs C', '2–1 for C', t`$C \succ_s A$`]] } }],
          formulas: ['preference-axioms'],
        },
        {
          id: 'ps1-q1b',
          method: 'condorcet',
          label: '1(b)',
          title: 'Is the social preference transitive?',
          type: 'essay',
          topics: ['preferences'],
          prompt: t`**(b)** Does the resulting social preference relation satisfy transitivity? Explain.`,
          answer: [
            {
              heading: 'No: the social preference cycles',
              list: [
                t`Transitivity requires: if $A \succ_s B$ and $B \succ_s C$, then $A \succ_s C$.`,
                t`We have $A \succ_s B$ and $B \succ_s C$, so transitivity would need $A \succ_s C$.`,
                t`But the majority actually prefers C to A: $C \succ_s A$. So $A \succ_s B \succ_s C \succ_s A$, a **cycle**.`,
                '**Transitivity fails**, even though every individual voter has transitive preferences. This is the **Condorcet paradox**: majority voting does not always produce a consistent social ranking.',
                'There is also no Condorcet winner (no alternative beats both others), so the outcome of a sequence of votes depends on the order (the agenda).',
              ],
            },
          ],
          formulas: ['preference-axioms'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      topic: t`Utility $u = x_1 - x_2$ (good 2 is a bad)`,
      points: 30,
      parts: [
        {
          id: 'ps1-q2a',
          method: 'mrs-indifference',
          label: '2(a)',
          title: 'Plot the indifference curves',
          type: 'calc',
          topics: ['preferences'],
          prompt: t`Consider the utility function $u(x_1, x_2) = x_1 - x_2$. **(a)** Plot the indifference curves. Use an arrow to show the direction in which utility increases.`,
          working: [
            { title: 'Equation of an indifference curve', why: t`Set utility equal to a constant $\bar u$ and solve for $x_2$.`, math: [t`x_1 - x_2 = \bar u`, t`x_2 = x_1 - \bar u`] },
            { title: 'Shape', why: t`Straight lines with slope $+1$. A higher $\bar u$ shifts the line **down** (lower intercept).`, math: t`\bar u = 0: x_2 = x_1;\quad \bar u = 2: x_2 = x_1 - 2;\quad \bar u = -2: x_2 = x_1 + 2` },
            { title: 'Direction of increasing utility', why: t`$MU_1 = 1 > 0$ (more $x_1$ is good) and $MU_2 = -1 < 0$ (more $x_2$ is bad).`, math: t`\text{utility rises to the bottom right (more } x_1\text{, less } x_2)` },
          ],
          result: 'Upward-sloping parallel lines with slope 1; utility increases towards the bottom right.',
          answer: [
            {
              heading: 'Graph',
              svg: plot({
                xMax: 7, yMax: 7, xLabel: 'x₁', yLabel: 'x₂', alt: 'Indifference curves of x1 minus x2',
                curves: [
                  { fn: (x) => x + 2, tone: 2, label: 'ū = −2', labelAt: [3.4, 6.2] },
                  { fn: (x) => x, tone: 2, label: 'ū = 0', labelAt: [5.3, 6.2] },
                  { fn: (x) => x - 2, tone: 1, label: 'ū = 2', labelAt: [6.1, 3.3] },
                ],
                arrows: [{ from: [2.2, 4.2], to: [3.6, 2.8], label: 'higher u' }],
                xTicks: [2, 4, 6], yTicks: [2, 4, 6],
              }),
              caption: t`Indifference curves $x_2 = x_1 - \bar u$. Utility rises towards more $x_1$ and less $x_2$.`,
            },
          ],
          formulas: ['mrs'],
        },
        {
          id: 'ps1-q2b',
          method: 'preference-properties',
          label: '2(b)',
          title: 'Transitivity',
          type: 'essay',
          topics: ['preferences'],
          prompt: t`**(b)** Does the preference relation represented by $u$ satisfy transitivity? Explain.`,
          answer: [
            {
              heading: 'Yes',
              list: [
                t`The preferences are represented by a utility function: $A \succeq B \iff u(A) \ge u(B)$.`,
                t`Utility values are real numbers, and $\ge$ on the real numbers is transitive: if $u(A) \ge u(B)$ and $u(B) \ge u(C)$ then $u(A) \ge u(C)$.`,
                t`So $A \succeq B$ and $B \succeq C$ imply $A \succeq C$. **Any** preference represented by a utility function is transitive (and complete).`,
              ],
            },
          ],
          formulas: ['preference-axioms'],
        },
        {
          id: 'ps1-q2c',
          method: 'preference-properties',
          label: '2(c)',
          title: 'Monotonicity',
          type: 'essay',
          topics: ['preferences'],
          prompt: t`**(c)** Does the preference relation represented by $u$ satisfy monotonicity (more is better)? Explain.`,
          working: [
            { title: 'Marginal utilities', why: 'Monotonicity needs more of each good to never make the consumer worse off.', math: t`MU_1 = \frac{\partial u}{\partial x_1} = 1 > 0,\qquad MU_2 = \frac{\partial u}{\partial x_2} = -1 < 0` },
            { title: 'Counterexample', why: t`Bundle $(1, 2)$ has at least as much of both goods as $(1, 1)$, but lower utility.`, math: t`u(1, 2) = 1 - 2 = -1 \;<\; u(1, 1) = 1 - 1 = 0` },
          ],
          result: t`**No.** Good 2 is a **bad** ($MU_2 < 0$): more of it lowers utility, so "more is better" fails.`,
          formulas: ['preference-axioms'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      topic: 'Ordering bundles and monotonic transformations',
      points: 30,
      parts: [
        {
          id: 'ps1-q3a',
          method: 'monotonic-transform',
          label: '3(a)',
          title: 'Rank three bundles',
          type: 'calc',
          topics: ['preferences'],
          prompt: t`Consider $u(x_1, x_2) = x_1x_2$ and the bundles $A = (3, 2)$, $B = (1, 2)$ and $C = (4, 1)$. **(a)** Order the three bundles according to the preferences represented by $u$.`,
          working: [
            { title: 'Utility of each bundle', why: t`Multiply the two quantities.`, math: [t`u(A) = 3 \times 2 = 6`, t`u(B) = 1 \times 2 = 2`, t`u(C) = 4 \times 1 = 4`] },
            { title: 'Rank', why: 'Higher utility means preferred.', math: t`6 > 4 > 2` },
          ],
          result: t`$A \succ C \succ B$`,
          formulas: ['monotonic-transformation'],
        },
        {
          id: 'ps1-q3b',
          method: 'monotonic-transform',
          label: '3(b)',
          title: t`Using $v = \ln u$`,
          type: 'calc',
          topics: ['preferences'],
          prompt: t`**(b)** Let $v(x_1, x_2) = \ln[u(x_1, x_2)]$. Does the ordering of the three bundles change if you use $v$? Explain.`,
          working: [
            { title: 'Compute v', why: '', math: [t`v(A) = \ln 6 \approx 1.79`, t`v(B) = \ln 2 \approx 0.69`, t`v(C) = \ln 4 \approx 1.39`] },
            { title: 'Why the order is the same', why: t`$\ln$ is strictly increasing for $u > 0$: its derivative $1/u$ is positive.`, math: t`\frac{dv}{du} = \frac1u > 0 \;\Rightarrow\; u(A) > u(B) \iff v(A) > v(B)` },
          ],
          result: t`**No change:** $A \succ C \succ B$.`,
          answer: [{ heading: 'Explanation', paras: [t`Utility is **ordinal**: it only ranks bundles. Any strictly increasing transformation of $u$ (such as $\ln u$) represents exactly the same preferences, with the same indifference curves and the same MRS.`] }],
          formulas: ['monotonic-transformation'],
        },
        {
          id: 'ps1-q3c',
          method: 'monotonic-transform',
          label: '3(c)',
          title: t`Using $w = -u$`,
          type: 'calc',
          topics: ['preferences'],
          prompt: t`**(c)** What if you use the preferences represented by $w(x_1, x_2) = -u(x_1, x_2)$? Does the ordering change? Explain.`,
          working: [
            { title: 'Compute w', why: '', math: [t`w(A) = -6,\quad w(B) = -2,\quad w(C) = -4`] },
            { title: 'Rank', why: 'Higher (less negative) is preferred.', math: t`-2 > -4 > -6 \;\Rightarrow\; B \succ C \succ A` },
          ],
          result: t`**The order reverses:** $B \succ C \succ A$.`,
          answer: [{ heading: 'Explanation', paras: [t`$w = -u$ is a strictly **decreasing** transformation ($dw/du = -1 < 0$), so every ranking flips. $w$ represents different (opposite) preferences: under $w$, both goods are bads.`] }],
          formulas: ['monotonic-transformation'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      topic: 'MRS and indifference curves',
      points: 20,
      parts: [
        {
          id: 'ps1-q4a',
          method: 'mrs-indifference',
          label: '4(a)',
          title: t`$u = x_1x_2$`,
          type: 'calc',
          topics: ['preferences'],
          prompt: t`Calculate the MRS of good 1 for good 2, plot indifference curves and use an arrow to show the direction in which utility increases ($x_1$ on the horizontal axis). **(a)** $u(x_1, x_2) = x_1x_2$.`,
          working: [
            { title: 'Marginal utilities', why: '', math: t`MU_1 = x_2,\qquad MU_2 = x_1` },
            { title: 'MRS', why: 'Slope of the indifference curve.', math: t`MRS = -\frac{MU_1}{MU_2} = -\frac{x_2}{x_1}` },
            { title: 'Indifference curves', why: t`Set $x_1x_2 = \bar u$.`, math: t`x_2 = \frac{\bar u}{x_1}` },
          ],
          result: t`$MRS = -\dfrac{x_2}{x_1}$: convex hyperbolas, utility increasing to the north-east.`,
          answer: [
            {
              heading: 'Graph',
              svg: plot({
                xMax: 8, yMax: 8, xLabel: 'x₁', yLabel: 'x₂', alt: 'Hyperbolic indifference curves',
                curves: [
                  { fn: (x) => 2 / x, from: 0.2, tone: 2, label: 'ū = 2', labelAt: [6.4, 0.9] },
                  { fn: (x) => 6 / x, from: 0.2, tone: 2, label: 'ū = 6', labelAt: [6.4, 1.6] },
                  { fn: (x) => 14 / x, from: 0.2, tone: 1, label: 'ū = 14', labelAt: [6.4, 2.9] },
                ],
                arrows: [{ from: [2, 2], to: [3.3, 3.3], label: 'higher u' }],
                xTicks: [2, 4, 6], yTicks: [2, 4, 6],
              }),
              caption: t`The curves get flatter as $x_1$ rises: $|MRS| = x_2/x_1$ falls (diminishing MRS).`,
            },
          ],
          formulas: ['mrs', 'cobb-douglas-utility'],
        },
        {
          id: 'ps1-q4b',
          method: ['mrs-indifference', 'perfect-complements'],
          label: '4(b)',
          title: t`$u = \min\{x_1, 3x_2\}$`,
          type: 'calc',
          topics: ['preferences'],
          prompt: t`**(b)** $u(x_1, x_2) = \min\{x_1, 3x_2\}$.`,
          working: [
            { title: 'Where the kinks are', why: 'The two terms inside the min are equal.', math: t`x_1 = 3x_2 \;\Rightarrow\; x_2 = \tfrac13 x_1` },
            { title: 'Right of the kink line', why: t`If $x_1 > 3x_2$, utility is $3x_2$: extra $x_1$ adds nothing, so the curve is **horizontal**.`, math: t`MU_1 = 0 \;\Rightarrow\; MRS = 0` },
            { title: 'Above the kink line', why: t`If $x_1 < 3x_2$, utility is $x_1$: extra $x_2$ adds nothing, so the curve is **vertical**.`, math: t`MU_2 = 0 \;\Rightarrow\; MRS = -\infty\ (\text{undefined})` },
            { title: 'At the kink', why: 'The slope jumps from vertical to horizontal, so the MRS is not defined.', math: t`\text{kink of } u = \bar u \text{ at } (\bar u,\ \bar u/3)` },
          ],
          result: t`L-shaped indifference curves with kinks on $x_2 = x_1/3$. MRS $= 0$ on the horizontal arm, infinite on the vertical arm, undefined at the kink.`,
          answer: [
            {
              heading: 'Graph',
              svg: plot({
                xMax: 12, yMax: 6, xLabel: 'x₁', yLabel: 'x₂', alt: 'L-shaped indifference curves',
                curves: [
                  { fn: (x) => x / 3, tone: 2, dashed: true, label: 'x₂ = x₁/3', labelAt: [10.1, 4.35] },
                  { points: [[3, 6], [3, 1], [12, 1]], tone: 2, label: 'ū = 3', labelAt: [10.4, 1.3] },
                  { points: [[6, 6], [6, 2], [12, 2]], tone: 2, label: 'ū = 6', labelAt: [10.4, 2.3] },
                  { points: [[9, 6], [9, 3], [12, 3]], tone: 1, label: 'ū = 9', labelAt: [10.4, 3.3] },
                ],
                arrows: [{ from: [4.5, 1.5], to: [6.8, 2.8], label: 'higher u' }],
                xTicks: [3, 6, 9], yTicks: [1, 2, 3],
              }),
              caption: 'Perfect complements: good 1 and good 2 are used in the ratio 3 : 1.',
            },
          ],
          formulas: ['perfect-complements', 'mrs'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      topic: 'Budget sets',
      points: 20,
      parts: [
        {
          id: 'ps1-q5a',
          method: 'budget-set',
          label: '5(a)',
          title: 'Plot the budget set',
          type: 'calc',
          topics: ['budget'],
          prompt: t`Two goods, 1 and 2, with prices $p_1$ and $p_2$. William's income is $m = 100$. **(a)** Suppose $p_1 = 20$ and $p_2 = 25$. Plot William's budget set and show which bundles are affordable and which are not.`,
          working: [
            { title: 'Budget constraint', why: '', math: t`20x_1 + 25x_2 \le 100` },
            { title: 'Intercepts', why: 'Spend everything on one good.', math: t`x_1 = \frac{100}{20} = 5,\qquad x_2 = \frac{100}{25} = 4` },
            { title: 'Slope', why: '', math: t`-\frac{p_1}{p_2} = -\frac{20}{25} = -0.8` },
          ],
          result: t`Triangle with corners $(0, 0)$, $(5, 0)$, $(0, 4)$. Bundles on or below the line are affordable; above it they are not.`,
          answer: [
            {
              heading: 'Graph',
              svg: plot({
                xMax: 6.5, yMax: 5.5, xLabel: 'x₁', yLabel: 'x₂', alt: 'Budget set',
                fills: [{ points: [[0, 0], [5, 0], [0, 4]] }],
                curves: [{ points: [[0, 4], [5, 0]], label: '20x₁ + 25x₂ = 100', labelAt: [2.6, 2.6] }],
                dots: [{ x: 1, y: 1, label: 'affordable' }, { x: 4, y: 3, label: 'not affordable' }],
                xTicks: [5], yTicks: [4],
              }),
              caption: 'Shaded: the budget set (all affordable bundles, including the line itself).',
            },
          ],
          formulas: ['budget-constraint'],
        },
        {
          id: 'ps1-q5b',
          method: 'budget-set',
          label: '5(b)',
          title: 'Income doubles',
          type: 'calc',
          topics: ['budget'],
          prompt: t`**(b)** Suppose William's income rises to 200. What does the new budget set look like?`,
          working: [
            { title: 'New intercepts', why: 'Prices unchanged, income doubled.', math: t`x_1 = \frac{200}{20} = 10,\qquad x_2 = \frac{200}{25} = 8` },
            { title: 'Slope', why: 'Prices have not changed.', math: t`-0.8 \ \text{(unchanged)}` },
          ],
          result: 'The budget line shifts out **parallel**; the set doubles in each direction: corners (0, 0), (10, 0), (0, 8).',
          answer: [
            {
              heading: 'Graph',
              svg: plot({
                xMax: 11.5, yMax: 9.5, xLabel: 'x₁', yLabel: 'x₂', alt: 'Budget set after an income rise',
                fills: [{ points: [[0, 0], [10, 0], [0, 8]], tone: 2 }],
                curves: [{ points: [[0, 4], [5, 0]], tone: 2, dashed: true, label: 'm = 100', labelAt: [2.8, 2.6] }, { points: [[0, 8], [10, 0]], label: 'm = 200', labelAt: [5.6, 4.6] }],
                xTicks: [5, 10], yTicks: [4, 8],
              }),
            },
          ],
          formulas: ['budget-constraint'],
        },
        {
          id: 'ps1-q5c',
          method: 'budget-set',
          label: '5(c)',
          title: 'Price of good 2 doubles',
          type: 'calc',
          topics: ['budget'],
          prompt: t`**(c)** Suppose William's income stays at 100 but $p_2$ rises to 50. What does the new budget set look like?`,
          working: [
            { title: 'New intercepts', why: t`Only the $x_2$-intercept changes.`, math: t`x_1 = \frac{100}{20} = 5\ (\text{same}),\qquad x_2 = \frac{100}{50} = 2` },
            { title: 'New slope', why: 'The line is flatter.', math: t`-\frac{20}{50} = -0.4` },
          ],
          result: t`The line **pivots inward** around the $x_1$-intercept (5, 0); the vertical intercept falls from 4 to 2.`,
          answer: [
            {
              heading: 'Graph',
              svg: plot({
                xMax: 6.5, yMax: 5.5, xLabel: 'x₁', yLabel: 'x₂', alt: 'Budget set after a rise in the price of good 2',
                fills: [{ points: [[0, 0], [5, 0], [0, 2]] }],
                curves: [{ points: [[0, 4], [5, 0]], tone: 2, dashed: true, label: 'p₂ = 25', labelAt: [2.6, 2.4] }, { points: [[0, 2], [5, 0]], label: 'p₂ = 50', labelAt: [0.6, 2.2] }],
                xTicks: [5], yTicks: [2, 4],
              }),
            },
          ],
          formulas: ['budget-constraint'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q6 */
    {
      number: 6,
      topic: 'Lagrangian for Cobb-Douglas utility',
      points: 20,
      parts: [
        {
          id: 'ps1-q6a',
          method: 'lagrangian-cd',
          label: '6(a)',
          title: 'Solve with the Lagrangian',
          type: 'calc',
          topics: ['consumer-choice'],
          prompt: t`Consider $\displaystyle\max_{x_1, x_2}\ u(x_1, x_2) = x_1^a x_2^b$ s.t. $p_1x_1 + p_2x_2 \le m$. **(a)** Use the Lagrangian method to solve the problem. Give the optimal bundle $(x_1^*, x_2^*)$.`,
          approach: t`Utility is increasing in both goods, so the budget binds: $p_1x_1 + p_2x_2 = m$.`,
          working: [
            { title: 'Lagrangian', why: '', math: t`\mathcal L = x_1^a x_2^b + \lambda\,(m - p_1x_1 - p_2x_2)` },
            { title: 'First-order conditions', why: '', math: [t`(1)\quad a\,x_1^{a-1}x_2^{b} = \lambda p_1`, t`(2)\quad b\,x_1^{a}x_2^{b-1} = \lambda p_2`, t`(3)\quad p_1x_1 + p_2x_2 = m`] },
            { title: 'Divide (1) by (2)', why: t`λ cancels, and so do most of the powers: $\frac{x_1^{a-1}x_2^b}{x_1^a x_2^{b-1}} = \frac{x_2}{x_1}$.`, math: [t`\frac{a\,x_2}{b\,x_1} = \frac{p_1}{p_2}`, t`p_2x_2 = \frac{b}{a}\,p_1x_1`] },
            { title: 'Substitute into (3)', why: t`Replace $p_2x_2$.`, math: [t`p_1x_1 + \frac{b}{a}\,p_1x_1 = m`, t`p_1x_1\cdot\frac{a + b}{a} = m`, t`\boxed{x_1^* = \frac{a}{a+b}\cdot\frac{m}{p_1}}`] },
            { title: 'Then good 2', why: t`From $p_2x_2 = \frac{b}{a}p_1x_1^*$.`, math: [t`p_2x_2 = \frac{b}{a}\cdot\frac{a}{a+b}\,m = \frac{b}{a+b}\,m`, t`\boxed{x_2^* = \frac{b}{a+b}\cdot\frac{m}{p_2}}`] },
          ],
          result: t`$(x_1^*, x_2^*) = \left(\dfrac{a}{a+b}\dfrac{m}{p_1},\ \dfrac{b}{a+b}\dfrac{m}{p_2}\right)$`,
          tips: [t`Memorise the result: with Cobb-Douglas the consumer spends the fixed share $\frac{a}{a+b}$ of income on good 1.`],
          formulas: ['lagrangian', 'cobb-douglas-utility'],
        },
        {
          id: 'ps1-q6b',
          method: ['lagrangian-cd', 'income-derivative'],
          label: '6(b)',
          title: t`Derive $\partial x_1^*/\partial m$`,
          type: 'calc',
          topics: ['consumer-choice', 'demand'],
          prompt: t`**(b)** Derive $\dfrac{\partial x_1^*}{\partial m}$.`,
          working: [
            { title: 'Differentiate the demand', why: t`$a$, $b$ and $p_1$ are constants.`, math: t`x_1^* = \frac{a}{(a+b)\,p_1}\cdot m \;\Rightarrow\; \frac{\partial x_1^*}{\partial m} = \frac{a}{(a+b)\,p_1}` },
            { title: 'Sign', why: t`$a, b, p_1 > 0$.`, math: t`\frac{\partial x_1^*}{\partial m} > 0` },
          ],
          result: t`$\dfrac{\partial x_1^*}{\partial m} = \dfrac{a}{(a+b)p_1} > 0$: good 1 is a **normal** good.`,
          formulas: ['cobb-douglas-utility'],
        },
      ],
    },
  ],
};
