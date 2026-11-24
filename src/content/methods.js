import { t } from '../lib/tag.js';
import PS_METHODS from './methods-ps.js';

/**
 * Standard methods: the same recipe for every question of a given type,
 * written with letters instead of numbers so it works for any version of
 * the question. Every question part points at one or more of these with
 *   method: 'monopoly-optimum'            or
 *   method: ['conditional-demands', 'cost-function']
 *
 * Method fields
 *   title      short name
 *   when       how to recognise the question (rich text)
 *   setup      optional notation line, e.g. "Demand p = a − bq, MC = c"
 *   steps      [{ title, how, math }]  how = one line saying what to do; math = LaTeX string or array
 *   shortcut   optional closed-form result to check against (LaTeX, display)
 *   check      optional sense check (rich text)
 *   traps      optional list of common mistakes (rich text)
 */
const BASE_METHODS = [
  /* ------------------------------------------------------------ Consumer choice */
  {
    id: 'perfect-complements',
    title: 'Perfect complements: optimal bundle',
    when: t`Utility is a **min**: $u = \min\{a x_1,\ b x_2\}$. The goods are used in fixed proportions, so there is no tangency. The consumer always sits on the kink.`,
    setup: t`Utility $u = \min\{a x_1, b x_2\}$, prices $p_1, p_2$, income $m$.`,
    steps: [
      { title: 'Set the two terms inside the min equal', how: 'Any extra unit off the kink is wasted, so the optimum has both terms equal.', math: t`a x_1 = b x_2 \;\Rightarrow\; x_2 = \tfrac{a}{b}\,x_1` },
      { title: 'Write the budget constraint', how: 'The consumer spends all income.', math: t`p_1 x_1 + p_2 x_2 = m` },
      { title: 'Substitute the kink condition into the budget', how: 'Replace $x_2$ so only $x_1$ is left.', math: t`p_1 x_1 + p_2\,\tfrac{a}{b}\,x_1 = m` },
      { title: 'Solve for $x_1$, then $x_2$', how: 'Rearrange, then use the kink condition again.', math: [t`x_1^* = \frac{m}{p_1 + \frac{a}{b}p_2} = \frac{b\,m}{b\,p_1 + a\,p_2}`, t`x_2^* = \tfrac{a}{b}\,x_1^* = \frac{a\,m}{b\,p_1 + a\,p_2}`] },
      { title: 'State the bundle (and utility if asked)', how: 'Plug back in to get the utility level.', math: t`u^* = a x_1^* = b x_2^*` },
    ],
    check: t`Plug $(x_1^*, x_2^*)$ into the budget: it must cost exactly $m$, and $a x_1^* = b x_2^*$.`,
    traps: [t`Do **not** use MRS = price ratio. The MRS is undefined at the kink.`, t`Watch which good the coefficient is on: $\min\{2x_1, 3x_2\}$ gives $x_2 = \tfrac{2}{3}x_1$, not $\tfrac{3}{2}x_1$.`],
  },
  {
    id: 'compensating-income',
    title: 'Compensating income after a price change',
    when: t`The question asks how much **extra income** returns the consumer to the **original utility** at the **new** prices.`,
    steps: [
      { title: 'Find the original utility $u_0$', how: 'Solve the original problem (old prices, old income) and plug the bundle into $u$.', math: t`u_0 = u(x_1^{\text{old}}, x_2^{\text{old}})` },
      { title: 'Find the cheapest bundle giving $u_0$ at the new prices', how: t`For perfect complements this is the kink: $a x_1 = b x_2 = u_0$. For Cobb-Douglas use the tangency condition plus $u = u_0$.`, math: t`\text{perfect complements: } x_1 = \tfrac{u_0}{a},\quad x_2 = \tfrac{u_0}{b}` },
      { title: 'Cost that bundle at the new prices', how: 'This is the income needed.', math: t`m' = p_1' x_1 + p_2' x_2` },
      { title: 'Subtract the original income', how: 'The difference is the compensation (compensating variation).', math: t`\Delta m = m' - m` },
    ],
    check: t`With perfect complements there is no substitution, so the needed bundle is the **original** bundle. A quick check is $\Delta m = \Delta p_1 \times x_1^{\text{old}}$.`,
    traps: ['Use the new price for the good whose price changed and the unchanged price for the other.', 'Answer with the extra income, not the total, if the question asks "how much extra".'],
  },
  {
    id: 'cobb-douglas-demand',
    title: 'Cobb-Douglas utility: optimal bundle',
    when: t`Utility is a product of powers: $u = x_1^{\alpha} x_2^{\beta}$. This also works for $\ln$ form: $\alpha \ln x_1 + \beta \ln x_2$.`,
    setup: t`Utility $u = x_1^{\alpha}x_2^{\beta}$, prices $p_1, p_2$, income $m$.`,
    steps: [
      { title: 'Turn the exponents into spending shares', how: 'Each good gets a fixed fraction of income.', math: t`s_1 = \frac{\alpha}{\alpha+\beta},\qquad s_2 = \frac{\beta}{\alpha+\beta}` },
      { title: 'Spend each share on its good', how: 'Spending on a good divided by its price gives the quantity.', math: [t`x_1^* = \frac{\alpha}{\alpha+\beta}\cdot\frac{m}{p_1}`, t`x_2^* = \frac{\beta}{\alpha+\beta}\cdot\frac{m}{p_2}`] },
      { title: 'If you must show the derivation: tangency', how: 'Set MRS equal to the price ratio, then substitute into the budget.', math: [t`MRS = \frac{MU_1}{MU_2} = \frac{\alpha\,x_2}{\beta\,x_1} = \frac{p_1}{p_2} \;\Rightarrow\; p_2 x_2 = \tfrac{\beta}{\alpha}\,p_1 x_1`, t`p_1x_1 + \tfrac{\beta}{\alpha}p_1x_1 = m \;\Rightarrow\; x_1^* = \tfrac{\alpha}{\alpha+\beta}\tfrac{m}{p_1}`] },
      { title: 'After a price change, redo step 2 with the new price', how: 'Only the demand for the good whose price changed moves.', math: t`x_1^{\text{new}} = \frac{\alpha}{\alpha+\beta}\cdot\frac{m}{p_1^{\text{new}}}` },
    ],
    check: t`$p_1x_1^* + p_2x_2^* = m$, and spending on good 1 is exactly the share $s_1$ of income.`,
    traps: [t`If the exponents don't add to 1, divide by $\alpha+\beta$. Don't just use $\alpha$ as the share.`],
  },
  {
    id: 'explain-cobb-douglas-cross',
    title: 'Explaining why the other good does not change (Cobb-Douglas)',
    when: t`An "explain" question after a price change with Cobb-Douglas utility, where the demand for the **other** good stayed the same.`,
    steps: [
      { title: 'Point to the demand function', how: 'Show it does not contain the other price.', math: t`x_2^* = \frac{\beta}{\alpha+\beta}\cdot\frac{m}{p_2} \quad(\text{no } p_1)` },
      { title: 'Say "constant expenditure shares"', how: t`The consumer always spends the same fraction $\tfrac{\beta}{\alpha+\beta}$ of income on good 2, whatever $p_1$ is.` },
      { title: 'Explain it with income and substitution effects', how: 'When $p_1$ rises, the substitution effect pushes $x_2$ up, because good 2 is relatively cheaper. The income effect pushes $x_2$ down, because real income falls. With Cobb-Douglas these exactly cancel.' },
      { title: 'Conclude', how: 'The cross-price elasticity is zero. This is a special property of Cobb-Douglas preferences, not a general rule.' },
    ],
  },

  /* ---------------------------------------------------------------- Game theory */
  {
    id: 'dominant-strategies',
    title: 'Finding dominant strategies in a payoff matrix',
    when: 'A 2×2 (or bigger) payoff table asks whether either player has a dominant strategy.',
    setup: 'Payoffs are written (Row player, Column player).',
    steps: [
      { title: "Row player: fix each of the column player's choices in turn", how: "In each column, compare the row player's **first** payoffs and mark the higher one." },
      { title: 'Check whether the same row wins in every column', how: 'If it does, that row is a **dominant strategy**. It is strictly dominant if it is strictly higher every time.' },
      { title: "Column player: fix each of the row player's choices in turn", how: "In each row, compare the column player's **second** payoffs and mark the higher one." },
      { title: 'Check whether the same column wins in every row', how: 'If it does, that column is dominant for the column player.' },
      { title: 'State the answer with the comparisons', how: 'For example: "A is dominant for Firm 1 since 3 > 1 (vs A) and 8 > 6 (vs N)."' },
    ],
    traps: ["Compare a player's payoffs **holding the opponent fixed**. Never compare across the opponent's choices.", "Use the right number in each cell: the first payoff is the row player's, the second is the column player's."],
  },
  {
    id: 'nash-matrix',
    title: 'Finding Nash equilibria in a payoff matrix',
    when: 'A payoff table asks for the Nash equilibrium (pure strategies).',
    steps: [
      { title: "Underline the row player's best responses", how: "In each column, underline the highest **first** payoff." },
      { title: "Underline the column player's best responses", how: 'In each row, underline the highest **second** payoff.' },
      { title: 'Find cells where both payoffs are underlined', how: "Each such cell is a Nash equilibrium: each player's strategy is a best response to the other's." },
      { title: 'Confirm there is no profitable unilateral deviation', how: 'From the equilibrium cell, check that neither player can do better by switching on their own.' },
    ],
    check: 'If both players have dominant strategies, the Nash equilibrium is simply both playing their dominant strategy.',
    traps: ['There can be zero, one or several pure-strategy equilibria. Report all of them.', 'Nash equilibrium ≠ the cell with the highest total payoff.'],
  },
  {
    id: 'explain-nash',
    title: 'Explaining Nash equilibrium and why it can be inefficient',
    when: 'An "explain in words" question on Nash equilibrium, prisoners\' dilemmas, or why an equilibrium is not the best joint outcome.',
    steps: [
      { title: 'Define it', how: "A Nash equilibrium is a set of strategies where **each player's strategy is a best response** to the strategies of the others." },
      { title: 'Give the test', how: '**No player can gain by changing their strategy on their own** (unilateral deviation), given what the others do. It is self-enforcing and stable.' },
      { title: 'Separate individual from joint interest', how: 'Each player maximises **their own** payoff. Nobody maximises the **total**, so the equilibrium need not be Pareto efficient.' },
      { title: "Illustrate with a prisoners' dilemma", how: 'Both players have a dominant strategy (defect, advertise, cheat). The equilibrium is mutual defection, even though mutual cooperation would make **both** better off. Cooperation is not an equilibrium because each player gains by deviating from it.' },
      { title: 'Conclude', how: 'Nash equilibrium predicts **stable** outcomes, not **efficient** ones. Better outcomes need commitment, binding contracts, regulation or repeated interaction.' },
    ],
  },

  /* ---------------------------------------------------------------- Production and costs */
  {
    id: 'conditional-demands',
    title: 'Conditional input demands (cost minimisation)',
    when: t`A production function $q = A x_1^{\alpha} x_2^{\beta}$ and input prices $w_1, w_2$. The question asks for $x_1(q)$ and $x_2(q)$: the cheapest inputs for a given output.`,
    setup: t`Production $q = A x_1^{\alpha}x_2^{\beta}$, input prices $w_1, w_2$.`,
    steps: [
      { title: 'Set TRS equal to the input price ratio', how: 'At the cost-minimising point, the isoquant is tangent to the isocost line.', math: t`TRS = \frac{MP_1}{MP_2} = \frac{\alpha\,x_2}{\beta\,x_1} = \frac{w_1}{w_2}` },
      { title: 'Rearrange into the expansion path', how: t`Write $x_2$ in terms of $x_1$.`, math: t`x_2 = \frac{\beta\,w_1}{\alpha\,w_2}\,x_1` },
      { title: 'Substitute into the production function', how: t`Now output depends on $x_1$ only.`, math: t`q = A\,x_1^{\alpha}\left(\frac{\beta w_1}{\alpha w_2}\,x_1\right)^{\beta}` },
      { title: t`Solve for $x_1(q)$`, how: t`Collect the powers of $x_1$, then raise both sides to the power $1/(\alpha+\beta)$.`, math: t`x_1(q) = \left[\frac{q}{A}\left(\frac{\alpha w_2}{\beta w_1}\right)^{\beta}\right]^{\frac{1}{\alpha+\beta}}` },
      { title: t`Back out $x_2(q)$`, how: 'Use the expansion path from step 2.', math: t`x_2(q) = \frac{\beta\,w_1}{\alpha\,w_2}\,x_1(q)` },
    ],
    check: t`Substitute $x_1(q), x_2(q)$ back into the production function: you should get $q$. When $\alpha = \beta$ the expansion path is simply $x_2 = \tfrac{w_1}{w_2}x_1$.`,
    traps: [t`TRS is $MP_1/MP_2$, which equals $w_1/w_2$, not $w_2/w_1$.`, t`Keep $A$. With $q = 4\sqrt{x_1x_2}$ the 4 changes the answer.`],
  },
  {
    id: 'cost-function',
    title: 'Cost function and marginal cost',
    when: t`After finding the conditional demands, the question asks for $c(q)$, $MC(q)$ or the variable cost.`,
    steps: [
      { title: 'Cost = price × quantity of each input', how: 'Use the conditional demands, so this is the minimum cost of producing $q$.', math: t`VC(q) = w_1\,x_1(q) + w_2\,x_2(q)` },
      { title: 'Add any fixed cost', how: t`A fixed cost $F$ does not depend on $q$.`, math: t`c(q) = VC(q) + F` },
      { title: 'Differentiate for marginal cost', how: t`The fixed cost drops out.`, math: t`MC(q) = c'(q) = VC'(q)` },
      { title: 'Average cost if needed', how: 'Divide total cost by output.', math: t`AC(q) = \frac{c(q)}{q}` },
    ],
    shortcut: t`q = A x_1^{\alpha}x_2^{\beta} \;\Rightarrow\; c(q) \propto q^{\frac{1}{\alpha+\beta}}`,
    check: t`The power of $q$ in $c(q)$ should be $1/(\alpha+\beta)$. Constant returns ($\alpha+\beta = 1$) give a linear cost and a constant MC.`,
  },
  {
    id: 'returns-to-scale',
    title: 'Returns to scale and the shape of costs',
    when: 'The question asks whether technology has increasing, constant or decreasing returns, or how that shows up in costs.',
    steps: [
      { title: t`Scale all inputs by $t > 1$`, how: 'See what happens to output.', math: t`f(tx_1, tx_2) = A(tx_1)^{\alpha}(tx_2)^{\beta} = t^{\alpha+\beta}\,f(x_1,x_2)` },
      { title: t`Compare $\alpha+\beta$ with 1`, how: 'Output grows faster than, the same as, or slower than the inputs.', math: t`\alpha+\beta > 1:\ \text{IRS}\qquad \alpha+\beta = 1:\ \text{CRS}\qquad \alpha+\beta < 1:\ \text{DRS}` },
      { title: 'Link to the cost function', how: t`Costs rise with $q^{1/(\alpha+\beta)}$.`, math: t`c(q) \propto q^{\frac{1}{\alpha+\beta}}` },
      { title: 'Describe the shape', how: '**DRS:** the exponent is above 1, so cost is convex, and MC and AC rise (MC > AC). **CRS:** cost is linear and MC = AC is constant. **IRS:** cost is concave and AC falls (economies of scale).' },
    ],
  },

  /* ---------------------------------------------------------------- Monopoly */
  {
    id: 'monopoly-optimum',
    title: 'Monopoly: output, price and profit',
    when: t`One firm with an inverse demand $p(q)$ and a cost function $c(q)$ (or a constant MC). Find $q^M$, $p^M$ and profit.`,
    setup: t`Inverse demand $p = a - bq$, cost $c(q)$.`,
    steps: [
      { title: 'Write total revenue', how: 'Price depends on quantity, so revenue is price × quantity.', math: t`TR(q) = p(q)\,q = aq - bq^2` },
      { title: 'Differentiate for marginal revenue', how: 'For linear demand, MR has the same intercept and twice the slope.', math: t`MR(q) = a - 2bq` },
      { title: 'Find marginal cost', how: 'Differentiate the cost function. It is constant if costs are linear.', math: t`MC(q) = c'(q)` },
      { title: t`Set MR = MC and solve for $q^M$`, how: 'This is the profit-maximising condition.', math: t`a - 2bq = MC(q) \;\Rightarrow\; q^M` },
      { title: 'Read the price off the demand curve', how: 'Not off MR or MC.', math: t`p^M = a - b\,q^M` },
      { title: 'Calculate profit', how: 'Revenue minus **total** cost, including any fixed cost.', math: t`\pi^M = p^M q^M - c(q^M)` },
    ],
    shortcut: t`\text{Constant } MC = c:\quad q^M = \frac{a-c}{2b},\qquad p^M = \frac{a+c}{2},\qquad \pi^M = \frac{(a-c)^2}{4b}`,
    check: t`$p^M > MC(q^M)$, and the monopoly output is below the competitive output.`,
    traps: ['Use the demand curve for the price, not MR.', 'Subtract the fixed cost in profit. It does not change $q^M$.'],
  },
  {
    id: 'monopoly-dwl',
    title: 'Competitive output and deadweight loss from monopoly',
    when: 'The question compares monopoly with a competitive market (p = MC) and asks for the deadweight loss.',
    steps: [
      { title: t`Competitive output: set price = MC`, how: 'A competitive market produces where demand meets marginal cost.', math: t`a - b\,q^C = MC(q^C) \;\Rightarrow\; q^C` },
      { title: t`Monopoly output from MR = MC`, how: 'Use the standard monopoly method.', math: t`q^M,\quad p^M = a - b\,q^M` },
      { title: 'Find the height of the triangle', how: 'The gap between the price and MC **at the monopoly output**.', math: t`h = p^M - MC(q^M)` },
      { title: 'Find the base of the triangle', how: 'The units the monopoly does not produce.', math: t`q^C - q^M` },
      { title: 'Deadweight loss = ½ × base × height', how: 'The area between demand and MC from $q^M$ to $q^C$ (a triangle when both are linear).', math: t`DWL = \tfrac12\,(q^C - q^M)\,\big(p^M - MC(q^M)\big)` },
    ],
    shortcut: t`\text{Constant } MC = c:\quad q^C = \frac{a-c}{b} = 2q^M,\qquad DWL = \frac{(a-c)^2}{8b}`,
    traps: [t`With rising MC, the height is $p^M - MC(q^M)$, **not** $p^M - MC(q^C)$.`, 'Competitive output comes from p = MC, not MR = MC.'],
  },
  {
    id: 'lerner-elasticity',
    title: 'Elasticity and the Lerner index at the monopoly point',
    when: t`The question asks for the price elasticity at the monopoly outcome, or asks you to verify $(p - MC)/p = 1/|\varepsilon|$.`,
    steps: [
      { title: t`Get $dq/dp$ from the demand curve`, how: t`Write demand as $q(p)$ and differentiate.`, math: t`p = a - bq \;\Rightarrow\; q = \frac{a-p}{b},\quad \frac{dq}{dp} = -\frac1b` },
      { title: 'Elasticity at the monopoly point', how: t`Use $p^M$ and $q^M$.`, math: t`\varepsilon = \frac{dq}{dp}\cdot\frac{p^M}{q^M} = -\frac{1}{b}\cdot\frac{p^M}{q^M}` },
      { title: 'Lerner index (markup)', how: 'The price-cost margin as a share of price.', math: t`L = \frac{p^M - MC(q^M)}{p^M}` },
      { title: t`Compare with $1/|\varepsilon|$`, how: 'They must be equal, because MR = MC can be rewritten as the inverse-elasticity rule.', math: t`MR = p\Big(1 + \frac1\varepsilon\Big) = MC \;\Rightarrow\; \frac{p - MC}{p} = \frac{1}{|\varepsilon|}` },
    ],
    check: t`A monopolist always operates where demand is **elastic** ($|\varepsilon| > 1$), so $0 < L < 1$.`,
  },
  {
    id: 'producer-surplus',
    title: 'Producer surplus and profit',
    when: 'The question asks for producer surplus, or why profit and producer surplus differ.',
    steps: [
      { title: 'Producer surplus = revenue minus variable cost', how: 'It is the area between price and the MC curve up to the output sold.', math: t`PS = p\,q - VC(q) = \int_0^{q}\big(p - MC(x)\big)\,dx` },
      { title: 'Profit = revenue minus total cost', how: 'Total cost includes the fixed cost.', math: t`\pi = p\,q - VC(q) - F` },
      { title: 'Relate them', how: 'They differ only by the fixed cost.', math: t`\pi = PS - F` },
      { title: 'Explain the difference', how: 'Producer surplus ignores fixed costs because they are paid whatever the output. With no fixed cost, PS = profit.' },
    ],
    shortcut: t`\text{Constant } MC = c:\quad PS = (p - c)\,q`,
  },
  {
    id: 'consumer-surplus',
    title: 'Consumer surplus (linear demand)',
    when: 'The question asks for consumer surplus at a given price and quantity.',
    steps: [
      { title: 'Find the choke price', how: 'The demand intercept: the price at which nobody buys.', math: t`p = a - bq \;\Rightarrow\; p(0) = a` },
      { title: 'Consumer surplus = ½ × base × height', how: 'The triangle between the demand curve and the price paid.', math: t`CS = \tfrac12\,q\,(a - p)` },
    ],
    check: t`For linear demand, $a - p = bq$, so $CS = \tfrac12\,b\,q^2$.`,
  },

  /* ---------------------------------------------------------------- Oligopoly */
  {
    id: 'cournot-profit-functions',
    title: 'Cournot: writing the profit functions',
    when: 'Firms choose quantities simultaneously and the question asks for their profit functions.',
    setup: t`Demand $p = a - b(q_1+q_2)$, marginal costs $c_1, c_2$.`,
    steps: [
      { title: 'Write price in terms of both quantities', how: 'The market price depends on total output.', math: t`p = a - b\,(q_1 + q_2)` },
      { title: "Each firm's revenue is price × its own output", how: "Revenue depends on the rival's output through the price.", math: t`TR_i = \big(a - b q_1 - b q_2\big)\,q_i` },
      { title: 'Subtract its own cost', how: t`Constant MC = AC means the cost is $c_i q_i$.`, math: t`\pi_i = \big(a - b q_1 - b q_2\big)\,q_i - c_i\,q_i` },
    ],
    traps: ["Each firm's profit uses **its own** cost and **its own** quantity outside the bracket."],
  },
  {
    id: 'cournot-best-response',
    title: 'Cournot: best response functions',
    when: "The question asks each firm's best response (reaction) function.",
    setup: t`$\pi_i = (a - b q_i - b q_j)\,q_i - c_i q_i$.`,
    steps: [
      { title: t`Differentiate firm $i$'s profit with respect to its own quantity`, how: 'Treat the rival\'s quantity as fixed.', math: t`\frac{\partial \pi_i}{\partial q_i} = a - 2b\,q_i - b\,q_j - c_i` },
      { title: 'Set the derivative equal to zero', how: 'First-order condition (this is MR = MC for firm $i$).', math: t`a - 2b\,q_i - b\,q_j - c_i = 0` },
      { title: t`Solve for $q_i$ as a function of $q_j$`, how: 'This is the best response.', math: t`q_i = R_i(q_j) = \frac{a - c_i - b\,q_j}{2b}` },
      { title: 'Repeat for the other firm', how: 'Swap the subscripts and use its own cost.', math: t`q_j = R_j(q_i) = \frac{a - c_j - b\,q_i}{2b}` },
    ],
    check: 'Best responses slope **downwards**: the more the rival produces, the less you produce (strategic substitutes).',
  },
  {
    id: 'cournot-equilibrium',
    title: 'Cournot-Nash equilibrium quantities',
    when: 'Given (or after deriving) the best responses, the question asks for the equilibrium quantities, and possibly the price.',
    steps: [
      { title: 'Write both best responses', how: 'Use the previous method.', math: [t`q_1 = \frac{a - c_1 - b q_2}{2b}`, t`q_2 = \frac{a - c_2 - b q_1}{2b}`] },
      { title: 'Identical costs? Impose symmetry', how: t`Set $q_1 = q_2 = q$ in one best response and solve.`, math: t`q = \frac{a - c - bq}{2b} \;\Rightarrow\; q^* = \frac{a-c}{3b}` },
      { title: 'Different costs? Substitute one into the other', how: t`Plug $q_2$ into firm 1's best response, solve for $q_1$, then back out $q_2$.`, math: [t`q_1^* = \frac{a - 2c_1 + c_2}{3b}`, t`q_2^* = \frac{a - 2c_2 + c_1}{3b}`] },
      { title: 'Price from total output', how: 'Plug the total into demand.', math: t`p^* = a - b\,(q_1^* + q_2^*) = \frac{a + c_1 + c_2}{3}` },
    ],
    check: 'The lower-cost firm produces more. Each quantity should satisfy **both** best responses.',
  },
  {
    id: 'price-and-profits',
    title: 'Market price and profits from equilibrium quantities',
    when: 'Quantities are known (Cournot, Stackelberg, collusion) and the question asks for price and/or profits.',
    steps: [
      { title: 'Add up total output', how: 'The market price depends on the total.', math: t`Q = q_1 + q_2\ (+\,q_3 \dots)` },
      { title: 'Read the price off demand', how: 'Use the inverse demand curve.', math: t`p = a - b\,Q` },
      { title: 'Profit = (price − average cost) × own output', how: 'With constant MC = AC this is the margin times quantity. Subtract any fixed cost.', math: t`\pi_i = (p - c_i)\,q_i` },
    ],
    shortcut: t`\text{Cournot, linear demand, constant MC:}\quad p - c_i = b\,q_i^* \;\Rightarrow\; \pi_i = b\,(q_i^*)^2`,
  },
  {
    id: 'cournot-n-firms',
    title: 'Cournot with n identical firms',
    when: t`Three or more identical firms choose quantities simultaneously.`,
    setup: t`Demand $p = a - bQ$, $n$ firms, each with MC $= c$.`,
    steps: [
      { title: t`Write firm $i$'s profit with the others' output as $Q_{-i}$`, how: 'Everyone else is grouped together.', math: t`\pi_i = \big(a - b q_i - b Q_{-i}\big)\,q_i - c\,q_i` },
      { title: 'First-order condition and best response', how: t`Differentiate with respect to $q_i$ and set it to zero.`, math: t`a - 2b q_i - b Q_{-i} - c = 0 \;\Rightarrow\; q_i = \frac{a - c - bQ_{-i}}{2b}` },
      { title: 'Impose symmetry', how: t`All firms produce the same $q$, so $Q_{-i} = (n-1)\,q$.`, math: t`a - 2bq - b(n-1)q - c = 0 \;\Rightarrow\; q^* = \frac{a-c}{(n+1)\,b}` },
      { title: 'Total output, price and profit', how: 'Then use the price-and-profit method.', math: [t`Q^* = n\,q^* = \frac{n}{n+1}\cdot\frac{a-c}{b}`, t`p^* = \frac{a + n\,c}{n+1}`, t`\pi_i = (p^* - c)\,q^* = b\,(q^*)^2`] },
    ],
    check: t`$n = 1$ gives monopoly and $n = 2$ gives duopoly. As $n \to \infty$, $p^* \to c$ (competition).`,
  },
  {
    id: 'cartel',
    title: 'Collusion (cartel) output and profit',
    when: 'Firms collude to maximise **joint** profit and split output equally.',
    steps: [
      { title: 'Treat the industry as one monopolist', how: 'Maximise total profit by setting industry MR = MC.', math: t`MR(Q) = a - 2bQ = c \;\Rightarrow\; Q^{\text{cartel}} = \frac{a-c}{2b}` },
      { title: 'Monopoly price', how: 'From demand.', math: t`p^{\text{cartel}} = a - bQ^{\text{cartel}} = \frac{a+c}{2}` },
      { title: 'Split output and profit equally', how: t`Each of the $n$ firms gets an equal share.`, math: [t`q_i = \frac{Q^{\text{cartel}}}{n}`, t`\pi_i = (p^{\text{cartel}} - c)\,q_i = \frac{\pi^M}{n}`] },
    ],
    check: 'Each firm earns more than in Cournot, and total output is lower.',
  },
  {
    id: 'cartel-cheating',
    title: 'Cheating on a cartel (stability of collusion)',
    when: 'The others stick to the collusive output. What is one firm\'s best deviation, and what does it earn?',
    steps: [
      { title: "Fix the others' output at the cartel level", how: t`$Q_{-i}$ is the sum of their collusive quantities.`, math: t`Q_{-i} = (n-1)\cdot\frac{Q^{\text{cartel}}}{n}` },
      { title: 'Use the Cournot best response', how: 'The deviator maximises its own profit given $Q_{-i}$.', math: t`q_i^{\text{dev}} = \frac{a - c - b\,Q_{-i}}{2b}` },
      { title: 'New price and the cheater\'s profit', how: 'The total rises, so the price falls.', math: [t`p' = a - b\,(q_i^{\text{dev}} + Q_{-i})`, t`\pi_i^{\text{dev}} = (p' - c)\,q_i^{\text{dev}}`] },
      { title: 'Compare and conclude', how: 'If $\\pi_i^{\\text{dev}} > \\pi_i^{\\text{cartel}}$, every firm has an incentive to cheat. The cartel is **not a Nash equilibrium**, so collusion is unstable without enforcement, punishment or repeated interaction. The loyal firms earn less than before.' },
    ],
  },
  {
    id: 'stackelberg-follower',
    title: "Stackelberg: the follower's best response",
    when: 'One firm moves first; the second observes its output and then chooses.',
    steps: [
      { title: "Write the follower's profit, taking the leader's output as given", how: t`The follower already knows $q_1$.`, math: t`\pi_2 = \big(a - b q_1 - b q_2\big)\,q_2 - c_2\,q_2` },
      { title: 'Differentiate and set to zero', how: 'This is the same first-order condition as Cournot.', math: t`a - b q_1 - 2b q_2 - c_2 = 0` },
      { title: t`Solve for $q_2$`, how: "The follower's reaction function.", math: t`q_2 = R_2(q_1) = \frac{a - c_2 - b\,q_1}{2b}` },
    ],
    check: "This is identical to the Cournot best response. The difference is only in how the leader uses it.",
  },
  {
    id: 'stackelberg-leader',
    title: "Stackelberg: the leader's optimal output",
    when: "The leader chooses its output knowing how the follower will react.",
    steps: [
      { title: "Substitute the follower's reaction into the leader's profit", how: "The leader anticipates the follower's response (backward induction).", math: t`\pi_1 = \Big(a - b q_1 - b\,R_2(q_1)\Big)\,q_1 - c_1\,q_1` },
      { title: 'Simplify the price term', how: 'With identical costs the price becomes a function of $q_1$ only.', math: t`a - bq_1 - b\cdot\frac{a - c - bq_1}{2b} = \frac{a + c - b q_1}{2}` },
      { title: t`Differentiate with respect to $q_1$ and set to zero`, how: "Solve for the leader's output.", math: t`\pi_1 = \Big(\frac{a - c - bq_1}{2}\Big) q_1 \;\Rightarrow\; \frac{a - c - 2bq_1}{2} = 0 \;\Rightarrow\; q_1^* = \frac{a-c}{2b}` },
      { title: "Plug into the follower's reaction", how: "Get the follower's output.", math: t`q_2^* = R_2(q_1^*) = \frac{a-c}{4b}` },
    ],
    shortcut: t`q_L = \frac{a-c}{2b}\ (\text{= monopoly output}),\quad q_F = \frac{a-c}{4b},\quad p = \frac{a+3c}{4}`,
  },
  {
    id: 'compare-cournot-stackelberg',
    title: 'Comparing Stackelberg with Cournot',
    when: 'An "explain" or "compare" question: who gains from moving first?',
    steps: [
      { title: 'Compute both outcomes', how: t`Cournot: $q_i = \tfrac{a-c}{3b}$ each. Stackelberg: $q_L = \tfrac{a-c}{2b}$, $q_F = \tfrac{a-c}{4b}$.` },
      { title: 'Put them in a table', how: 'Quantities, total output, price and each profit, side by side.' },
      { title: 'Describe the changes', how: 'The leader produces **more** and earns **more**. The follower produces **less** and earns **less**. Total output is **higher** and the price **lower** than in Cournot.' },
      { title: 'Explain why: first-mover advantage', how: 'By committing to a large output first, the leader forces the follower to cut back, since its best response slopes downwards. The commitment is credible because the output is already chosen.' },
      { title: 'Who else gains', how: 'Consumers gain from the higher output and lower price, so total surplus is higher than in Cournot.' },
    ],
  },

  /* ---------------------------------------------------------------- Taxes */
  {
    id: 'monopoly-tax',
    title: 'Monopoly with a per-unit tax',
    when: t`A per-unit tax $t$ is levied on the monopolist.`,
    steps: [
      { title: 'Add the tax to marginal cost', how: 'Each unit now costs the firm $c + t$.', math: t`MC_t = c + t` },
      { title: 'Redo MR = MC with the new cost', how: 'Use the standard monopoly method.', math: t`a - 2bq = c + t \;\Rightarrow\; q_t = \frac{a - c - t}{2b}` },
      { title: 'New price from demand', how: 'Read the price off the demand curve.', math: t`p_t = a - b\,q_t = \frac{a + c + t}{2}` },
      { title: 'New profit', how: 'The firm keeps the price minus cost minus tax on each unit.', math: t`\pi_t = (p_t - c - t)\,q_t` },
    ],
    check: 'Output falls and the price rises, but by **less than the tax** (here by $t/2$).',
  },
  {
    id: 'tax-incidence',
    title: 'Who pays a tax (incidence) and tax revenue',
    when: 'After a tax, the question asks how the burden splits between consumers and the firm, and how much revenue it raises.',
    steps: [
      { title: 'Consumer burden per unit', how: 'The rise in the price consumers pay.', math: t`\text{consumers} = p_t - p_0` },
      { title: 'Firm burden per unit', how: 'The rest of the tax, which the firm absorbs.', math: t`\text{firm} = t - (p_t - p_0)` },
      { title: 'Shares of the tax', how: 'Divide each burden by $t$.', math: t`\text{consumer share} = \frac{p_t - p_0}{t}` },
      { title: 'Tax revenue', how: 'The tax times the quantity sold **after** the tax.', math: t`R = t \times q_t` },
    ],
    shortcut: t`\text{Monopoly, linear demand, constant MC:}\quad p_t - p_0 = \tfrac{t}{2}\ \Rightarrow\ \text{50/50 split}`,
    traps: ['Use the after-tax quantity for revenue, not the original quantity.'],
  },

  /* ---------------------------------------------------------------- Income and substitution effects */
  {
    id: 'slutsky-decomposition',
    title: 'Slutsky decomposition of a price change',
    when: t`A price changes and the question asks for the substitution and income effects using the **Slutsky** approach: compensated income makes the **original bundle just affordable**.`,
    setup: t`Old prices $(p_1, p_2)$, new price $p_1'$, income $m$.`,
    steps: [
      { title: 'Original bundle', how: 'Solve the consumer problem at the old prices and old income.', math: t`A = (x_1, x_2) \text{ at } (p_1, p_2, m)` },
      { title: 'New bundle', how: 'Solve again at the new price, with the same income.', math: t`C = (x_1', x_2') \text{ at } (p_1', p_2, m)` },
      { title: 'Compensated income', how: 'The income that buys the **original** bundle at the **new** prices.', math: t`m' = p_1'\,x_1 + p_2\,x_2` },
      { title: 'Compensated bundle', how: 'Solve the consumer problem at the new prices with income $m\'$.', math: t`B = (x_1^s, x_2^s) \text{ at } (p_1', p_2, m')` },
      { title: 'Substitution effect: A → B', how: 'The move caused by the change in relative prices alone.', math: t`SE = x_1^s - x_1` },
      { title: 'Income effect: B → C', how: 'The move caused by the loss of purchasing power.', math: t`IE = x_1' - x_1^s` },
      { title: 'Check and classify', how: 'The effects add up to the total. For a price rise: IE < 0 means normal, IE > 0 means inferior.', math: t`SE + IE = x_1' - x_1` },
    ],
    check: 'For a price rise, the own-good substitution effect is always ≤ 0.',
    traps: ['Use the compensated income only for the middle bundle B. The new bundle C uses the original income.', 'For the other good, the substitution effect is positive if it is now relatively cheaper.'],
  },
  {
    id: 'hicks-decomposition',
    title: 'Hicks decomposition of a price change',
    when: t`The question asks for the **Hicksian** effects: compensate so the consumer reaches the **original utility** at the new prices.`,
    steps: [
      { title: 'Original bundle and utility', how: t`Solve at the old prices, then compute $u_0$.`, math: t`u_0 = u(x_1, x_2)` },
      { title: 'Tangency at the new prices', how: 'The Hicks bundle is where an indifference curve is tangent to a budget line with the new slope.', math: t`MRS = \frac{p_1'}{p_2} \;\Rightarrow\; x_2 \text{ in terms of } x_1` },
      { title: 'Stay on the original indifference curve', how: t`Substitute into $u(x_1, x_2) = u_0$ and solve.`, math: t`u(x_1^H, x_2^H) = u_0` },
      { title: 'Cost of the Hicks bundle (if asked)', how: 'The minimum income to reach the old utility at new prices.', math: t`m^H = p_1'\,x_1^H + p_2\,x_2^H` },
      { title: 'Effects', how: 'Substitution: old bundle → Hicks bundle. Income: Hicks bundle → new bundle.', math: [t`SE^H = x_1^H - x_1`, t`IE^H = x_1' - x_1^H`] },
    ],
    check: t`$m^H \le m'$ (Slutsky income), so $|SE^H| \ge |SE^{\text{Slutsky}}|$.`,
  },
  {
    id: 'explain-slutsky-vs-hicks',
    title: 'Explaining Slutsky vs Hicks compensation',
    when: 'An "explain why" question comparing the two substitution effects.',
    steps: [
      { title: 'Say what each holds constant', how: '**Slutsky** holds **purchasing power** constant (the old bundle is just affordable). **Hicks** holds **utility** constant (the old indifference curve is just reachable).' },
      { title: 'Compare the compensation', how: 'With the old bundle affordable, the consumer can re-optimise and reach a **higher** indifference curve. So Slutsky gives **more** income than is needed to restore the old utility.' },
      { title: 'Link to the size of the effect', how: 'Extra income pulls demand back towards the original level (for a normal good), so the Slutsky substitution effect is **smaller in size** than the Hicksian one.' },
      { title: 'Quote the numbers', how: 'State both compensated incomes and both substitution effects from the question.' },
    ],
  },
  {
    id: 'perfect-substitutes',
    title: 'Perfect substitutes: optimal bundle',
    when: t`Utility is **linear**: $u = a x_1 + b x_2$. The consumer usually buys only one good (a corner solution).`,
    steps: [
      { title: 'Compare utility per euro', how: 'Which good gives more utility per unit of money?', math: t`\frac{a}{p_1} \;\text{ vs }\; \frac{b}{p_2}` },
      { title: 'Spend all income on the better-value good', how: 'If $a/p_1 > b/p_2$, buy only good 1, and the other way round otherwise.', math: t`x_1 = \frac{m}{p_1},\; x_2 = 0 \quad\text{or}\quad x_1 = 0,\; x_2 = \frac{m}{p_2}` },
      { title: 'Tie', how: 'If they are equal, any bundle on the budget line is optimal.', math: t`\frac{a}{p_1} = \frac{b}{p_2}` },
    ],
    traps: ['Do not use MRS = price ratio: the MRS is constant, so there is no tangency.'],
  },
  {
    id: 'explain-se-extremes',
    title: 'Explaining the substitution effect for complements and substitutes',
    when: 'Explain why the substitution effect is zero for perfect complements but is the whole change for perfect substitutes.',
    steps: [
      { title: 'Perfect complements: L-shaped indifference curves', how: 'The consumer always wants the goods in a fixed ratio. Changing relative prices gives no reason to change the mix, so after compensation the old bundle is still optimal: **SE = 0, and the whole change is an income effect.**' },
      { title: 'Perfect substitutes: straight-line indifference curves', how: 'The consumer only cares which good is cheaper per unit of utility. Once good 1 becomes relatively dearer, they switch completely: **a pure substitution effect.**' },
      { title: 'Why the income effect is zero for substitutes here', how: 'Extra income would be spent on the now-cheaper good, so $x_1$ is zero with or without the compensation.' },
      { title: 'General lesson', how: 'The more curved the indifference curves (less substitutable), the smaller the substitution effect.' },
    ],
  },
  {
    id: 'classify-good',
    title: 'Classifying a good from its substitution and income effects',
    when: 'Given SE and IE for an own-price change, find the total effect and the type of good.',
    steps: [
      { title: 'Total effect', how: 'Add the two effects.', math: t`\Delta x_1 = SE + IE` },
      { title: 'Normal or inferior?', how: 'Look at the income effect for a price **rise** (real income falls).', math: t`IE < 0 \Rightarrow \text{normal}, \qquad IE > 0 \Rightarrow \text{inferior}` },
      { title: 'Giffen?', how: 'Giffen means demand **rises** when the price rises, i.e. the positive income effect outweighs the substitution effect.', math: t`\Delta x_1 > 0 \text{ when } p_1 \uparrow \;\Rightarrow\; \text{Giffen}` },
    ],
    traps: ['For a price **fall** the signs of the effects flip: be careful which direction the question uses.'],
  },
  {
    id: 'explain-slutsky-equation',
    title: 'Writing and explaining the Slutsky equation',
    when: 'Write down the Slutsky equation, or explain Giffen goods or the sign of the substitution effect.',
    steps: [
      { title: 'Write the equation', how: 'Total = substitution + income.', math: t`\frac{\partial x_1}{\partial p_1} = \frac{\partial x_1^s}{\partial p_1} - x_1\frac{\partial x_1}{\partial m}` },
      { title: 'Explain the substitution term', how: 'The response to the price change with purchasing power held constant. It is **always ≤ 0** (revealed preference: the consumer moves away from the good that became dearer).' },
      { title: 'Explain the income term', how: 'A price rise makes the consumer poorer by roughly $x_1\,\Delta p_1$. The effect on demand depends on how much of the good they buy ($x_1$) and how demand responds to income ($\\partial x_1 / \\partial m$).' },
      { title: 'Apply to normal, inferior and Giffen goods', how: 'Normal: both terms are negative, so demand falls (never Giffen). Inferior: the income term is positive, and Giffen only if it is larger than the substitution term (rare, because the good must be a large share of the budget).' },
    ],
  },

  /* ---------------------------------------------------------------- Oligopoly explanations */
  {
    id: 'explain-cournot',
    title: 'Describing the Cournot model',
    when: 'An "explain in words" question about Cournot competition or why best responses slope down.',
    steps: [
      { title: 'Set-up', how: "Firms choose **quantities** simultaneously; the market price adjusts to clear demand." },
      { title: 'What each firm takes as given', how: "Each firm maximises its profit taking the **rival's output as given** (fixed)." },
      { title: 'Why best responses slope down', how: "More rival output → lower price → less **residual demand** left for the firm → lower marginal revenue → the firm's profit-maximising output falls." },
      { title: 'Equilibrium', how: "A Cournot-Nash equilibrium is where each firm's output is a best response to the other's: the best responses cross." },
    ],
  },
  {
    id: 'explain-cournot-between',
    title: 'Why the Cournot price lies between competition and monopoly',
    when: 'Explain why Cournot output and price sit between the competitive and monopoly outcomes.',
    steps: [
      { title: 'Why the price is above MC', how: "A Cournot firm knows that selling more lowers the price on **all its own units**, so it holds back output: price > MC." },
      { title: 'Why the price is below monopoly', how: "It ignores the **damage its extra output does to the rival's revenue**. A monopolist or cartel would take that into account and produce less." },
      { title: 'Conclude', how: 'So monopoly output < Cournot output < competitive output, and the Cournot price lies strictly between the two.' },
      { title: 'Optional: the formula', how: 'With linear demand and n firms:', math: t`p^* = \frac{a + nc}{n+1}: \quad n = 1 \text{ gives the monopoly price},\; n \to \infty \text{ gives } c` },
    ],
  },
  {
    id: 'explain-bertrand',
    title: 'Bertrand competition (identical products)',
    when: 'Firms choose **prices** simultaneously for an identical product.',
    steps: [
      { title: 'Rule of the market', how: 'Consumers buy from the cheapest firm and split equally if prices tie.' },
      { title: 'Undercutting argument', how: 'At any common price above MC, either firm can cut its price slightly and win the **whole** market, nearly doubling its profit. So no price above MC can be an equilibrium.' },
      { title: 'Equilibrium', how: 'Both firms price at marginal cost and earn zero profit.', math: t`p_1^* = p_2^* = MC, \qquad \pi_1 = \pi_2 = 0` },
      { title: 'Why nobody deviates', how: 'Pricing above MC sells nothing. Pricing below MC wins the market but loses money on every unit.' },
      { title: 'Contrast with Cournot', how: 'In Cournot, output is committed, so a firm cannot steal the whole market by cutting price. That softens competition, and the price stays above MC.' },
    ],
  },
  {
    id: 'explain-collusion',
    title: 'Why collusion is hard to sustain (and what helps)',
    when: 'Explain why collusion fails in a one-shot game and what makes it easier in a repeated game.',
    steps: [
      { title: 'One-shot game', how: 'Given the others stick to the collusive output, each firm gains by producing more (cheating). So collusion is **not a Nash equilibrium**: a prisoners\' dilemma.' },
      { title: 'Repeated game', how: 'Firms can threaten **punishment**, e.g. reverting to Cournot (or a price war) forever after any deviation (a trigger strategy).' },
      { title: 'Condition', how: 'Collusion is sustained if the value of future cooperation outweighs the one-time gain from cheating.', math: t`\text{one-off gain from cheating} < \text{present value of future losses from punishment}` },
      { title: 'What helps', how: 'Patient firms (high discount factor), easy detection of cheating, few firms, frequent interaction and stable demand.' },
    ],
  },
  {
    id: 'bertrand-equilibrium',
    title: 'Bertrand equilibrium with equal costs (calculation)',
    when: 'Identical product, simultaneous prices, equal constant MC. Find prices, output and profits.',
    steps: [
      { title: 'Price equals marginal cost', how: 'From the undercutting argument.', math: t`p_1 = p_2 = c` },
      { title: 'Market output from demand', how: t`Substitute $p = c$ into demand.`, math: t`p = a - bQ = c \;\Rightarrow\; Q = \frac{a - c}{b}` },
      { title: 'Split equally', how: 'Equal prices, so customers split evenly.', math: t`q_1 = q_2 = \frac{Q}{2}` },
      { title: 'Profits', how: 'Zero margin on every unit.', math: t`\pi_i = (c - c)\,q_i = 0` },
      { title: 'Show no one wants to deviate', how: 'Raising the price sells nothing; cutting it loses money. List both.' },
    ],
  },
  {
    id: 'bertrand-asymmetric',
    title: 'Bertrand with different costs',
    when: t`Simultaneous prices for an identical product, with $c_1 < c_2$.`,
    steps: [
      { title: 'Who wins the market', how: 'The low-cost firm can price just below the rival\'s cost. The rival cannot follow without selling below its own cost.', math: t`p^* \approx c_2 \;(\text{just below}), \quad \text{Firm 1 serves the whole market}` },
      { title: 'Check the monopoly price', how: "If Firm 1's own monopoly price is **below** $c_2$, it simply charges that instead.", math: t`p^* = \min\{c_2,\ p^M(c_1)\}` },
      { title: 'Quantity and profit', how: 'Read quantity off demand at that price.', math: [t`Q = D(p^*)`, t`\pi_1 = (p^* - c_1)\,Q, \qquad \pi_2 = 0`] },
    ],
    traps: ['Firm 1 does not charge its monopoly price if that price is above the rival\'s cost: Firm 2 would undercut it.'],
  },
  {
    id: 'compare-market-structures',
    title: 'Comparing Bertrand, Cournot and monopoly',
    when: 'Same demand and cost; compare the outcomes of different market structures.',
    setup: t`Demand $p = a - bQ$, constant MC $c$, two firms.`,
    steps: [
      { title: 'Bertrand', how: 'Price equals MC.', math: t`p = c, \quad Q = \frac{a - c}{b}, \quad \pi = 0` },
      { title: 'Cournot', how: 'Symmetric best responses.', math: t`q_i = \frac{a - c}{3b}, \quad p = \frac{a + 2c}{3}, \quad \pi_i = b\,q_i^2` },
      { title: 'Monopoly', how: 'MR = MC.', math: t`Q = \frac{a - c}{2b}, \quad p = \frac{a + c}{2}, \quad \pi = \frac{(a - c)^2}{4b}` },
      { title: 'Rank them', how: 'Price: Bertrand < Cournot < monopoly. Output: the reverse. Profit: Bertrand (0) < Cournot < monopoly.' },
    ],
  },
  {
    id: 'free-entry',
    title: 'Free entry with a fixed cost (Cournot)',
    when: 'Each firm pays a fixed cost F; firms enter as long as profit net of F is non-negative.',
    steps: [
      { title: 'Profit per firm as a function of n', how: 'From the n-firm Cournot method (before the fixed cost).', math: t`\pi(n) = b\left(\frac{a - c}{(n+1)b}\right)^2` },
      { title: 'Entry condition', how: 'Net profit must be non-negative.', math: t`\pi(n) - F \ge 0` },
      { title: 'Solve for n', how: 'Take square roots, then rearrange.', math: t`\frac{a - c}{(n+1)\sqrt{b}} \ge \sqrt{F} \;\Rightarrow\; n + 1 \le \frac{a - c}{\sqrt{bF}}` },
      { title: 'Take the largest whole number', how: 'Check that one more firm would make a loss.', math: t`n^* = \Big\lfloor \tfrac{a - c}{\sqrt{bF}} \Big\rfloor - 1` },
    ],
    traps: ['Round down, and confirm with n* + 1 that the next entrant would lose money.'],
  },
  {
    id: 'explain-many-firms',
    title: 'Market structure and competition as n grows',
    when: 'What happens to price as the number of Cournot firms becomes very large?',
    steps: [
      { title: 'Use the n-firm formulas', how: 'Output per firm and price as functions of n.', math: t`q = \frac{a - c}{(n+1)b} \to 0, \qquad p = \frac{a + nc}{n+1} \to c` },
      { title: 'Interpret', how: 'Each firm becomes too small to affect the price, so the outcome approaches **perfect competition** (price = MC).' },
      { title: 'Link structure to competition', how: 'n = 1 gives monopoly. As n rises, output rises and the price falls towards MC. More firms means more competition.' },
      { title: 'Add the real-world limit', how: 'With fixed costs, entry stops at a finite n, so the price stays above MC.' },
    ],
  },

  /* ---------------------------------------------------------------- Regulation */
  {
    id: 'natural-monopoly',
    title: 'Testing for a natural monopoly',
    when: 'Increasing returns (or a fixed cost) and "would p = MC cover costs?" or "is one firm cheaper than two?"',
    steps: [
      { title: 'Compare MC with AC', how: 'If MC < AC, average cost is falling.', math: t`MC(q) < AC(q)` },
      { title: 'Marginal-cost pricing', how: 'At p = MC, revenue per unit is below average cost, so the firm makes a loss.', math: t`\pi = (p - AC)\,q = (MC - AC)\,q < 0` },
      { title: 'One firm vs two', how: 'Cost of producing the total in one firm vs splitting it.', math: t`c(q) \;\text{ vs }\; c(q/2) + c(q/2)` },
      { title: 'Conclude', how: 'If one firm is cheaper, it is a **natural monopoly**: competition would waste resources, so the market is usually regulated or subsidised.' },
    ],
  },
  {
    id: 'marginal-cost-pricing',
    title: 'Efficient output (p = MC), profit there, and regulation',
    when: 'The question asks for the efficient output, the firm\'s profit at p = MC, and why the regulator can\'t just impose it.',
    steps: [
      { title: 'Efficient output', how: 'Set price equal to marginal cost.', math: t`a - bq^C = MC \;\Rightarrow\; q^C` },
      { title: 'Profit at the efficient output', how: 'Revenue minus total cost, including the fixed cost.', math: t`\pi^C = (MC - MC)\,q^C - F = -F \quad(\text{constant MC})` },
      { title: 'Deadweight loss of monopoly', how: 'The triangle from the monopoly to the efficient output.', math: t`DWL = \tfrac12\,(q^C - q^M)(p^M - MC)` },
      { title: 'Explain', how: 'At p = MC the firm loses its fixed cost, so it would shut down unless subsidised. Forcing p = MC is not sustainable without a subsidy (or a two-part tariff).' },
    ],
  },
  {
    id: 'price-cap',
    title: 'Monopoly under a price cap',
    when: t`A regulator sets a maximum price $\bar p$ below the monopoly price.`,
    steps: [
      { title: 'Check the cap is above MC', how: 'If so, every extra unit sold at the cap is profitable.', math: t`MC \le \bar p < p^M` },
      { title: 'Output at the cap', how: 'The firm sells everything demanded at the capped price.', math: t`a - bq = \bar p \;\Rightarrow\; q = \frac{a - \bar p}{b}` },
      { title: 'Profit', how: 'Margin times quantity, minus any fixed cost.', math: t`\pi = (\bar p - MC)\,q - F` },
      { title: 'New deadweight loss', how: 'Triangle between the new output and the efficient output.', math: t`DWL = \tfrac12\,(q^C - q)(\bar p - MC)` },
    ],
    check: 'Output rises and the price falls compared with monopoly, so the deadweight loss shrinks.',
  },
  {
    id: 'surplus-comparison',
    title: 'Consumer surplus and total surplus before and after a policy',
    when: 'Compare CS, profit and total surplus across two outcomes (e.g. before and after a price cap).',
    steps: [
      { title: 'Consumer surplus in each case', how: 'Triangle under demand above the price.', math: t`CS = \tfrac12\,q\,(a - p)` },
      { title: 'Profit in each case', how: 'Use the profits already found (net of fixed cost).', math: t`\pi = (p - MC)\,q - F` },
      { title: 'Total surplus', how: 'Add them.', math: t`TS = CS + \pi` },
      { title: 'Compare and check', how: 'The rise in total surplus should equal the fall in deadweight loss.', math: t`\Delta TS = -\Delta DWL` },
    ],
  },

  /* ---------------------------------------------------------------- Game theory */
  {
    id: 'iesds',
    title: 'Iterated elimination of strictly dominated strategies',
    when: 'A payoff table (often 3×3) asks you to use iterated elimination.',
    steps: [
      { title: "Look for a strictly dominated strategy for either player", how: "Compare two of a player's strategies against **every** remaining strategy of the rival. Strictly worse every time means dominated." },
      { title: 'Delete it and redraw the table', how: 'Write the comparison you used, e.g. "C beats R: 3 > 1, 4 > 0, 2 > 1".' },
      { title: 'Repeat with the smaller table', how: 'A strategy that was not dominated before can become dominated once rival strategies are removed.' },
      { title: 'Stop when nothing is dominated', how: 'If one cell remains, that is the (unique) Nash equilibrium.' },
    ],
    traps: ['A tie in any column means the strategy is **not** strictly dominated.', 'Only compare against the rival\'s strategies that are still in the table.'],
  },
  {
    id: 'explain-dominated-not-ne',
    title: 'Why a strictly dominated strategy is never in a Nash equilibrium',
    when: 'An "explain" question on dominance and Nash equilibrium.',
    steps: [
      { title: 'Definition', how: 'A strictly dominated strategy is beaten by another strategy **whatever the rival does**.' },
      { title: 'Apply to the equilibrium', how: "That includes the strategy the rival plays in any candidate equilibrium, so the player would gain by switching." },
      { title: 'Conclude', how: 'A dominated strategy is never a best response, so it cannot be part of a Nash equilibrium. This is why IESDS never removes a Nash equilibrium.' },
    ],
  },
];

export const METHODS = [...BASE_METHODS, ...PS_METHODS];

export const methodById = new Map(METHODS.map((m) => [m.id, m]));
