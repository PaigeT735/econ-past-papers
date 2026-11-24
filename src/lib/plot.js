/**
 * Tiny SVG graph helper for model answers (indifference curves, budget sets,
 * isoquants, market diagrams). Colours come from CSS, so graphs follow the
 * light/dark theme and the page accent.
 *
 *   plot({
 *     xMax, yMax, xLabel, yLabel,
 *     curves: [{ fn: (x) => y, from, to, tone, dashed, label, labelAt: [x, y] }
 *              | { points: [[x, y], ...], tone, dashed, label, labelAt }],
 *     fills:  [{ points: [[x, y], ...], tone }],
 *     dots:   [{ x, y, label, dx, dy }],
 *     arrows: [{ from: [x, y], to: [x, y], label }],
 *     xTicks: [values or [value, text]], yTicks: [...], guides: true (dotted lines from dots to the axes),
 *   })
 * tone: 1 = accent, 2 = muted ink, 3 = second colour.
 */
const W = 360;
const H = 250;
const PAD = { l: 40, r: 16, t: 14, b: 34 };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fmt = (n) => (Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.round(n)) : String(+n.toFixed(2)));

export function plot(spec) {
  const { xMax, yMax, xLabel = 'x', yLabel = 'y' } = spec;
  const sx = (x) => PAD.l + (x / xMax) * (W - PAD.l - PAD.r);
  const sy = (y) => H - PAD.b - (y / yMax) * (H - PAD.t - PAD.b);
  const pt = ([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`;
  const out = [];

  for (const f of spec.fills ?? []) {
    out.push(`<polygon class="plot__fill plot__fill--${f.tone ?? 1}" points="${f.points.map(pt).join(' ')}"/>`);
  }

  // Axes
  out.push(`<line class="plot__axis" x1="${sx(0)}" y1="${sy(0)}" x2="${sx(xMax)}" y2="${sy(0)}" marker-end="url(#plot-head)"/>`);
  out.push(`<line class="plot__axis" x1="${sx(0)}" y1="${sy(0)}" x2="${sx(0)}" y2="${sy(yMax)}" marker-end="url(#plot-head)"/>`);
  out.push(`<text class="plot__axis-label" x="${sx(xMax)}" y="${sy(0) + 26}" text-anchor="end">${esc(xLabel)}</text>`);
  out.push(`<text class="plot__axis-label" x="${sx(0) - 8}" y="${sy(yMax) + 4}" text-anchor="end">${esc(yLabel)}</text>`);
  const tick = (v) => (Array.isArray(v) ? v : [v, fmt(v)]);
  for (const v of spec.xTicks ?? []) {
    const [x, s] = tick(v);
    out.push(`<line class="plot__tick" x1="${sx(x)}" y1="${sy(0)}" x2="${sx(x)}" y2="${sy(0) + 4}"/><text class="plot__tick-label" x="${sx(x)}" y="${sy(0) + 15}" text-anchor="middle">${esc(s)}</text>`);
  }
  for (const v of spec.yTicks ?? []) {
    const [y, s] = tick(v);
    out.push(`<line class="plot__tick" x1="${sx(0) - 4}" y1="${sy(y)}" x2="${sx(0)}" y2="${sy(y)}"/><text class="plot__tick-label" x="${sx(0) - 7}" y="${sy(y) + 3.5}" text-anchor="end">${esc(s)}</text>`);
  }

  // Curves
  for (const c of spec.curves ?? []) {
    let segs = [];
    if (c.points) segs = [c.points];
    else {
      const a = c.from ?? 0;
      const b = c.to ?? xMax;
      let cur = [];
      for (let i = 0; i <= 160; i += 1) {
        const x = a + ((b - a) * i) / 160;
        const y = c.fn(x);
        if (Number.isFinite(y) && y >= 0 && y <= yMax * 1.001) cur.push([x, y]);
        else if (cur.length) { segs.push(cur); cur = []; }
      }
      if (cur.length) segs.push(cur);
    }
    const cls = `plot__curve plot__curve--${c.tone ?? 1}${c.dashed ? ' plot__curve--dashed' : ''}`;
    segs.filter((s) => s.length > 1).forEach((s) => out.push(`<polyline class="${cls}" points="${s.map(pt).join(' ')}"/>`));
    if (c.label && c.labelAt) out.push(`<text class="plot__label plot__label--${c.tone ?? 1}" x="${sx(c.labelAt[0])}" y="${sy(c.labelAt[1])}">${esc(c.label)}</text>`);
  }

  for (const a of spec.arrows ?? []) {
    out.push(`<line class="plot__arrow" x1="${sx(a.from[0])}" y1="${sy(a.from[1])}" x2="${sx(a.to[0])}" y2="${sy(a.to[1])}" marker-end="url(#plot-head-accent)"/>`);
    if (a.label) out.push(`<text class="plot__label plot__label--1" x="${sx(a.to[0]) + 5}" y="${sy(a.to[1]) - 4}">${esc(a.label)}</text>`);
  }

  for (const d of spec.dots ?? []) {
    if (spec.guides && d.guide !== false) {
      out.push(`<polyline class="plot__guide" points="${pt([0, d.y])} ${pt([d.x, d.y])} ${pt([d.x, 0])}"/>`);
    }
    out.push(`<circle class="plot__dot" cx="${sx(d.x)}" cy="${sy(d.y)}" r="3.4"/>`);
    if (d.label) out.push(`<text class="plot__label" x="${sx(d.x) + (d.dx ?? 6)}" y="${sy(d.y) + (d.dy ?? -6)}">${esc(d.label)}</text>`);
  }

  return `<svg class="plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt ?? 'Graph')}">
    <defs>
      <marker id="plot-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="plot__head"/></marker>
      <marker id="plot-head-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="plot__head plot__head--accent"/></marker>
    </defs>${out.join('')}</svg>`;
}
