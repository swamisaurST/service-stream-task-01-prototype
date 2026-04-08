# Service Stream Task 01 Prototype

Standalone GitHub Pages prototype for the Service Stream "View out-of-scope assets" flow, built from the canonical Pencil file `Task-01.pen`.

## What is included

- `index.html` renders the prototype shell and review controls.
- `css/styles.css` contains the desktop/mobile layout and hotspot styling.
- `js/app.js` defines the screen registry, hash routing, auto-advance loading state, and hotspot navigation.
- `design-exports/` — PNG exports from `Task-01.pen` (Pencil MCP `export_nodes`).
  - **1x** (`*.png`): **396×874** per phone frame, matching the Pencil artboard (pixel-aligned hotspots).
  - **2x** (`2x/*.png`): **792×1748** for Retina `srcset`.
  - **`map-layers/`** — Map-area-only exports (`M3S3x` default map, `SyCra` populated) for reference / future compositing; full screens already include the same map raster.
  - **`WiK0c.png`** — User-flow diagram (2200×560 at 1x).

## Screen coverage

- **Hero** (`VvQHl`) — Cover / entry CTA into the map flow (not on the technical flow diagram).
- **Main flow:** `1.0` → `1.1` → `1.2` → `1.3` → `1.4` (default map through read-only OOS detail).
- **Edge cases:** `1.5`–`1.8` (empty, error, permission denied, toggle off). On the canonical Pencil diagram **`WiK0c`**, **1.7** branches from **1.1**, **1.5** and **1.8** from **1.3**, and **1.6** follows **1.5** when retry fails; this prototype also exposes **1.6** and **1.7** via hotspots on **1.3** so every state is one tap away for QA.
- **Work log sub-flow:** `1.9` through `1.14` (from **1.4**).
- **Flow map:** exported `WiK0c` diagram — see `../OOS-AUDIT.md` § *User flow diagram (`WiK0c`)* for legend and branch points.

## Local preview

Run either command from this folder:

```bash
/usr/bin/python3 -m http.server 4173
```

```bash
npx serve .
```

Then open `http://127.0.0.1:4173/`.

## GitHub Pages

- Repository: `https://github.com/swamisaurST/service-stream-task-01-prototype`
- Live site: `https://swamisaurst.github.io/service-stream-task-01-prototype/`
- Pages source: `main` branch, repository root

## Re-export from Pencil

From Cursor, open `../Task-01.pen` and run Pencil **export_nodes** (or re-run the design workflow) with `scale: 1` into `design-exports/` and `scale: 2` into `design-exports/2x/` for the same node IDs as in `js/app.js`.

## Notes

- Hotspot rectangles are defined in **396×874** space; they track the image when the phone stage scales down on narrow viewports.
- Hash routes (e.g. `#Fx6sb`) work on GitHub Pages without a build step.
- The flow diagram uses **wide** stage layout because it is not a phone-sized frame.
