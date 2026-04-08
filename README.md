# Service Stream Task 01 Prototype

Static prototype for **View out-of-scope assets** (`Task-01.pen`). Screens are PNG exports at **396×874** (plus `2x/` for Retina `srcset`).

## Interaction model

- **Left sidebar** — Title, state hint, and flow pills grouped by **color + icon** (teal happy path, amber edge, violet sub-flow, blue reference). No Pencil node IDs in the UI. On narrow viewports the sidebar stacks above the preview.
- **Preview column** — Phone (or wide diagram) centered. **Right rail:** **Fit** scales the frame to the viewport (saved in `localStorage`); **1:1** locks **396×874** design pixels.
- **Routing** — Hash **slugs** (e.g. `#map-oos-on`). Legacy `#Fx6sb`-style ids rewrite once to the slug.
- **Tap targets** — Invisible, Pencil-aligned. Tap a non-interactive area to briefly show a blue shimmer on interactive regions.

**Reusing this setup for another `.pen` file:** see [docs/PROTOTYPE-FROM-PENCIL.md](docs/PROTOTYPE-FROM-PENCIL.md).

## Local preview

```bash
/usr/bin/python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/` (or `#map-oos-off`, `#layer-picker`, etc.).

## Assets

| Path | Role |
|------|------|
| `design-exports/<id>.png` | 1× export per Pencil frame (`id` is internal only) |
| `design-exports/2x/` | 2× for `srcset` |
| `design-exports/map-layers/` | Optional map-area-only refs (`M3S3x`, `SyCra`) |

Re-export from Pencil with **export_nodes** on `Task-01.pen` if frames change.

## GitHub Pages

- **Live:** https://swamisaurst.github.io/service-stream-task-01-prototype/
- **Repo:** https://github.com/swamisaurST/service-stream-task-01-prototype  
- Source: `main` branch, site from repository root (`.nojekyll` present).

## Slugs (for sharing)

| Slug | Screen |
|------|--------|
| `intro` | Hero / cover |
| `map-oos-off` | Default map, OOS inactive |
| `layer-picker` | Nearby / layer sheet |
| `loading` | Loading |
| `map-oos-on` | Populated map |
| `oos-detail` | OOS read-only card |
| `empty-nearby` | No assets |
| `fetch-error` | Error / retry |
| `layer-permission` | Permission denied |
| `oos-disabled` | OOS toggled off |
| `add-to-project` … `sync-conflict` | Work-log sub-flow |
| `flow-overview` | Exported flow diagram (wide) |
