# Econ A Past Papers

Revision site for **ECU22011 Intermediate Economics A (Micro)** at Trinity College Dublin. The top bar has one tab for the **Formula Sheet** and one tab per **paper**. Each paper lists its questions; every answer opens in a dropdown under its question.

Same design and engine as the Finance Past Papers site: plain HTML, CSS and JavaScript (ES modules), no build step, KaTeX and fonts bundled in `assets/`. Light mode by default, dark mode toggle.

## Run locally

```bash
python3 -m http.server 5173
# open http://localhost:5173
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Econ A past papers v1"
git branch -M main
gh repo create PaigeT735/econ-past-papers --public --source=. --remote=origin --push
gh api -X POST repos/PaigeT735/econ-past-papers/pages -f "source[branch]=main" -f "source[path]=/"
```

Live at `https://paiget735.github.io/econ-past-papers/`.

## Adding a paper

1. Copy `src/content/papers/practice-final.js` to a new file (e.g. `2025-12.js`).
2. Change `id`, `title`, `short` (the tab label) and `summary`, then replace the questions.
   - Each part needs a unique `id`, a `label` (`1`, `8(a)`…), `type` (`essay` or `calc`) and the `prompt`. `marks` is optional.
   - Optional: `title`, `approach`, `given`, `working`, `result`, `answer` (blocks with `heading`, `paras`, `formula`, `list`, `table`), `tips`, `topics`, `formulas`.
   - Real exams: drop `practice: true` and mark Question 1 `compulsory: true` if it is.
3. Import it in `src/content/index.js` and add it to `PAPERS` (newest first).
4. `npm install` once, then `npm run check`.

## Formula sheet

`src/content/formula-sheet.js` picks cards from the full Econ A Formula Library (`src/content/library/`). Add a card id to `PICK` to put it on the sheet.
