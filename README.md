# Service Stream Task 01 Prototype

Standalone GitHub Pages prototype for the Service Stream "View out-of-scope assets" flow, built from the canonical Pencil file `Task-01.pen`.

## What is included

- `index.html` renders the prototype shell and review controls.
- `css/styles.css` contains the desktop/mobile layout and hotspot styling.
- `js/app.js` defines the screen registry, hash routing, auto-advance loading state, and hotspot navigation.
- `design-exports/` contains the exact PNG exports from `Task-01.pen` used as the pixel-accurate visual source.

## Screen coverage

- Main flow: Hero, `1.0` through `1.4`
- Edge cases: `1.5` through `1.8`
- Work log sub-flow: `1.9` through `1.14`
- Flow map: exported `WiK0c` diagram

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

## Notes

- The mobile screens are exact Pencil exports for pixel fidelity.
- Navigation is implemented with hotspots and hash routes so every state can be linked directly.
- The flow diagram uses a wide presentation mode because it is not a phone-sized frame.
