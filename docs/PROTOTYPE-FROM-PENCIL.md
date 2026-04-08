# Replicating this prototype pattern for any Pencil (`.pen`) file

This document describes how the Task 01 static prototype is built so you can **clone the pattern** for another `.pen` deliverable (different frames, flows, or repos).

## 1. What you are building

A **zero-build** static site that:

- Shows **exported PNGs** of Pencil frames (pixel-aligned with the artboard).
- Uses a **left sidebar** for human-readable **flow groups** (colored + icon per group).
- Uses **slug-based** URL hashes (e.g. `#my-screen`) instead of exposing Pencil node IDs in the UI.
- Overlays **invisible hit targets** in **frame coordinates** (same units as the Pencil phone frame).
- Offers a **Fit / 1:1** toggle on the **right rail** to scale the preview to the viewport or lock to design pixels.
- Optionally highlights interactive regions after tapping a **non-interactive** area (shimmer).

## 2. Export images from Pencil

Use the Pencil MCP tool **`export_nodes`** (or your design workflow) with:

| Setting | Phone frames | Wide / diagram frames |
|--------|----------------|------------------------|
| `scale` | `1` → exact artboard size (e.g. **396×874**) | `1` at native frame size |
| `scale` | `2` → optional `2x/` folder for Retina `srcset` | Same if you want 2× assets |
| `format` | `png` | `png` |

- Write **1×** files to `design-exports/<PencilNodeId>.png` (filename = node id — **internal only**).
- Write **2×** files to `design-exports/2x/<PencilNodeId>.png`.

**Important:** `PHONE_WIDTH` and `PHONE_HEIGHT` in `js/app.js` must match the exported frame size for every “phone” screen, or **percentage-based hotspots will be wrong**.

## 3. Screen registry (`js/app.js`)

Define a `screens` array. Each entry is one navigable state:

| Field | Purpose |
|--------|---------|
| `id` | Pencil node id — used **only** for image paths (`design-exports/{id}.png`). |
| `slug` | Public URL fragment, e.g. `map-oos-on`. Stable for sharing. |
| `flowLabel` | Short label shown on the pill. |
| `navGroup` | One of your sidebar groups: `happy`, `edge`, `subflow`, `ref` (or add new groups in HTML + CSS). |
| `hint` | Copy for the sidebar hint (`#state-hint`). |
| `hits` | Array of `{ x, y, width, height, target, aria }` in **frame coordinates** (0–396, 0–874 for a 396×874 frame). `target` is a **slug**. |
| `mode` | Optional: `"wide"` for non-phone frames (disables hit layer layout if you hide hits in CSS). |
| `autoAdvanceTo` / `autoAdvanceDelay` | Optional: auto-navigation after delay (ms). |

Build maps:

- `slugToScreen` from `slug` → object  
- `idToSlug` from `id` → `slug` (for legacy `#nodeId` hashes)

**Hash handling:** On load, normalize unknown hashes to your default slug; optionally rewrite `#oldNodeId` → `#nice-slug` with `history.replaceState`.

## 4. Hotspot coordinates

Coordinates must match the **same origin** as the exported frame (top-left of the frame, not the canvas).

Recommended workflow:

1. In Pencil, use **`snapshot_layout`** on each screen’s root frame (`parentId` = frame id, `maxDepth` ~10).
2. Sum nested `y` values to get **absolute position inside the frame**.
3. Store rectangles for real controls only (no fake “QA” regions unless you document them).

Hit layers use **percentages** derived from `PHONE_WIDTH` / `PHONE_HEIGHT` so scaling (**Fit** mode) keeps hotspots aligned.

## 5. Sidebar: groups, colors, icons

1. In **`index.html`**, each group is a `.flow-nav__group` with a modifier class, e.g. `flow-nav__group--happy`.
2. Put a **small inline SVG** inside `.flow-nav__group-label` (stroke icons ~15×15).
3. In **`css/styles.css`**, define:
   - `--group-*` accent variables in `:root`
   - `.flow-nav__group--* .flow-nav__group-label { color: … }`
   - `.flow-nav__group--* .flow-pill:hover`, `:focus-visible`, `.is-active` using the same accent

To add a **new group**:

1. New `flow-nav__group flow-nav__group--mygroup` block + pill container `id="flow-pills--mygroup"`.
2. CSS block for `--mygroup` and pill states.
3. In `js/app.js`, add `"mygroup"` to the `groups` array in `buildFlowPills()` and set `navGroup: "mygroup"` on relevant screens.

## 6. Fit vs 1:1 toggle (right rail)

- **Markup:** `.stage-column` contains `.stage-body` (main preview) and `.stage-rail` with `#scale-toggle`.
- **State:** `scaleMode` is `"actual"` or `"fit"`; persist with `localStorage` (see `SCALE_STORAGE_KEY` in `app.js`).
- **CSS:** `.stage.fit-mode` changes `.device-screen` / `.screen-image` to `max-height: min(874px, calc(100dvh - …))`, `aspect-ratio`, `object-fit: contain`, etc. **Non–fit-mode** locks **396×874** for phone frames.
- **Wide frames:** extend `.stage.fit-mode.is-wide` if diagram exports need a max height.

Icons on the button:

- **Fit** (expand corners) when current mode is **1:1** (click to enter fit).
- **Phone** when current mode is **Fit** (click to return to 1:1).

Update `aria-pressed`, `title`, and the short label via `applyScaleMode()` in JS.

## 7. Optional: tap-empty shimmer

- **Pointer events:** `.hits-layer { pointer-events: none }`, `.hit { pointer-events: auto }` so taps on the screenshot hit the image except on buttons.
- **Listener** on `#device-screen`: if target is not `.hit` and the screen has hits, toggle class `reveal-hints` on `#hits-layer`.
- **CSS:** `.reveal-hints .hit` gets a low-opacity blue fill + animated gradient `::after`.

## 8. GitHub Pages

- Site is **static**; repo root = site root.
- Add **`.nojekyll`** so `_` paths are not processed by Jekyll.
- **Settings → Pages:** branch `main`, folder `/ (root)`.
- Set `<link rel="canonical" href="https://<user>.github.io/<repo>/">` if you use a single production URL.

## 9. Checklist for a new Pencil file

- [ ] Export all frames at **scale 1** (and optional **2x**) into `design-exports/`.
- [ ] Set `PHONE_WIDTH` / `PHONE_HEIGHT` to match phone artboard.
- [ ] Replace `screens[]` with your slugs, ids, groups, hints, hits.
- [ ] Update `buildFlowPills()` group list and HTML pill container ids if groups changed.
- [ ] Adjust sidebar title / eyebrow in `index.html`.
- [ ] Verify Fit / 1:1 and hit alignment in both modes.
- [ ] Update `SCALE_STORAGE_KEY` (and title) if you fork multiple prototypes in one origin (avoid clashing `localStorage` keys).

## 10. File map (this repo)

| File | Role |
|------|------|
| `index.html` | Shell: sidebar groups + icons, stage column, scale rail |
| `css/styles.css` | Layout, group colors, fit-mode, hits, rail |
| `js/app.js` | Registry, routing, hits, scale persistence, shimmer |
| `design-exports/` | 1× PNGs; `2x/` optional |
| `.nojekyll` | GitHub Pages |

For **Task 01** specifically, the canonical Pencil source is `service-stream/Task-01.pen`.
