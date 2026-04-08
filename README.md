# Service Stream Task 01 Prototype

Static prototype for **View out-of-scope assets** (`Task-01.pen`). Screens are PNG exports at **396×874** (plus `2x/` for Retina `srcset`).

## Interaction model

- **Left sidebar** — Title, state hint, and human-readable flow pills (no Pencil node IDs). Groups: Happy path, Edge cases, Add to project, Reference. On narrow viewports the sidebar stacks above the phone.
- **Phone** — Centered in the main column. Hash routes use **slugs** (e.g. `#map-oos-on`). Legacy hashes like `#Fx6sb` are rewritten once to the matching slug.
- **Tap targets** — Invisible buttons aligned to the Pencil layout. Tap a non-interactive area on the mockup to briefly highlight tappable regions (blue shimmer). Edge-only screens are opened from the sidebar, not from fake map hotspots.

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
