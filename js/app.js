const PHONE_WIDTH = 396;
const PHONE_HEIGHT = 874;

const pctX = (value) => `${(value / PHONE_WIDTH) * 100}%`;
const pctY = (value) => `${(value / PHONE_HEIGHT) * 100}%`;

const screens = [
  {
    id: "VvQHl",
    slug: "hero",
    title: "Hero",
    group: "main",
    note: "Cover frame for the Requirement 1 prototype. Tap the lower CTA area to enter the map flow.",
    image: "./design-exports/VvQHl.png",
    hotspots: [
      { x: 74, y: 756, width: 248, height: 70, label: "Start", target: "nATGl", wide: true },
    ],
  },
  {
    id: "nATGl",
    slug: "default-map",
    title: "1.0 Default Map",
    group: "main",
    note: "Entry state with OOS inactive. Tap the filter control to open nearby layer selection.",
    image: "./design-exports/nATGl.png",
    hotspots: [
      { x: 330, y: 145, width: 46, height: 46, label: "Layers", target: "W6XyF" },
    ],
  },
  {
    id: "W6XyF",
    slug: "layer-selection",
    title: "1.1 Layer Selection",
    group: "main",
    note: "Nearby / layer panel open. Tap the Planned row toggle to fetch OOS assets.",
    image: "./design-exports/W6XyF.png",
    hotspots: [
      { x: 258, y: 649, width: 94, height: 34, label: "Enable", target: "FoXXr", wide: true },
      { x: 16, y: 64, width: 38, height: 38, label: "Back", target: "nATGl" },
    ],
  },
  {
    id: "FoXXr",
    slug: "loading",
    title: "1.2 Loading",
    group: "main",
    note: "Loading state. This screen auto-advances into the populated map after a short pause.",
    image: "./design-exports/FoXXr.png",
    autoAdvanceTo: "Fx6sb",
    autoAdvanceDelay: 1400,
    hotspots: [{ x: 16, y: 64, width: 38, height: 38, label: "Back", target: "W6XyF" }],
  },
  {
    id: "Fx6sb",
    slug: "populated-map",
    title: "1.3 Populated Map",
    group: "main",
    note: "Assets loaded with legend and marker states. Tap the center asset to open the detail card, or branch into an edge case.",
    image: "./design-exports/Fx6sb.png",
    hotspots: [
      { x: 160, y: 463, width: 74, height: 74, label: "Asset", target: "UOyL2" },
      { x: 330, y: 144, width: 46, height: 46, label: "Layers", target: "W6XyF" },
      { x: 320, y: 320, width: 58, height: 32, label: "Empty", target: "Ynrkt", wide: true },
      { x: 320, y: 364, width: 58, height: 32, label: "Error", target: "Y3qLp", wide: true },
      { x: 305, y: 408, width: 73, height: 32, label: "No access", target: "Egs8X", wide: true },
      { x: 325, y: 452, width: 53, height: 32, label: "Off", target: "TzhY7", wide: true },
    ],
  },
  {
    id: "UOyL2",
    slug: "oos-detail",
    title: "1.4 OOS Asset Detail",
    group: "main",
    note: "Read-only OOS detail card. Continue into the extended add-to-project sub-flow from the primary CTA.",
    image: "./design-exports/UOyL2.png",
    hotspots: [
      { x: 16, y: 64, width: 38, height: 38, label: "Back", target: "Fx6sb" },
      { x: 27, y: 768, width: 342, height: 46, label: "Add to project", target: "8LdJ5", wide: true },
    ],
  },
  {
    id: "Ynrkt",
    slug: "empty-state",
    title: "1.5 Empty State",
    group: "edge",
    note: "No assets returned for the selected radius. Use the bottom action to return to the layer sheet.",
    image: "./design-exports/Ynrkt.png",
    hotspots: [
      { x: 28, y: 727, width: 340, height: 42, label: "Adjust filters", target: "W6XyF", wide: true },
    ],
  },
  {
    id: "Y3qLp",
    slug: "error-state",
    title: "1.6 Error State",
    group: "edge",
    note: "Fetch failed. Retry from the inline action or return to the layer sheet from the QA list.",
    image: "./design-exports/Y3qLp.png",
    hotspots: [
      { x: 24, y: 726, width: 348, height: 44, label: "Retry", target: "FoXXr", wide: true },
    ],
  },
  {
    id: "Egs8X",
    slug: "permission-denied",
    title: "1.7 Permission Denied",
    group: "edge",
    note: "User lacks access to the layer. Return to the layer selector to continue the happy path.",
    image: "./design-exports/Egs8X.png",
    hotspots: [
      { x: 28, y: 720, width: 340, height: 44, label: "Back to layers", target: "W6XyF", wide: true },
    ],
  },
  {
    id: "TzhY7",
    slug: "toggle-off",
    title: "1.8 Toggle Off",
    group: "edge",
    note: "OOS markers hidden. Return to the default map entry state from the toast branch.",
    image: "./design-exports/TzhY7.png",
    hotspots: [
      { x: 28, y: 720, width: 340, height: 44, label: "Done", target: "nATGl", wide: true },
    ],
  },
  {
    id: "8LdJ5",
    slug: "add-to-project",
    title: "1.9 Add to Project",
    group: "subflow",
    note: "Extended intake step launched from the OOS detail card.",
    image: "./design-exports/8LdJ5.png",
    hotspots: [
      { x: 16, y: 64, width: 38, height: 38, label: "Back", target: "UOyL2" },
      { x: 28, y: 768, width: 340, height: 46, label: "Choose project", target: "gxYDh", wide: true },
    ],
  },
  {
    id: "gxYDh",
    slug: "project-picker",
    title: "1.10 Project Picker",
    group: "subflow",
    note: "Select a destination project to continue into the work log form.",
    image: "./design-exports/gxYDh.png",
    hotspots: [
      { x: 24, y: 210, width: 348, height: 70, label: "Select project", target: "dyUol", wide: true },
      { x: 16, y: 64, width: 38, height: 38, label: "Back", target: "8LdJ5" },
    ],
  },
  {
    id: "dyUol",
    slug: "work-log-form",
    title: "1.11 Work Log Form",
    group: "subflow",
    note: "Form entry state. Continue from the bottom action into the review screen.",
    image: "./design-exports/dyUol.png",
    hotspots: [
      { x: 211, y: 822, width: 157, height: 34, label: "Review", target: "DSeSv", wide: true },
      { x: 28, y: 822, width: 158, height: 34, label: "Back", target: "gxYDh", wide: true },
    ],
  },
  {
    id: "DSeSv",
    slug: "work-log-review",
    title: "1.12 Work Log Review",
    group: "subflow",
    note: "Final review. Submit for success or use the alternate branch to inspect the conflict state.",
    image: "./design-exports/DSeSv.png",
    hotspots: [
      { x: 212, y: 822, width: 156, height: 34, label: "Submit", target: "TaeoT", wide: true },
      { x: 28, y: 822, width: 158, height: 34, label: "Conflict", target: "tYbkE", wide: true },
    ],
  },
  {
    id: "TaeoT",
    slug: "success",
    title: "1.13 Success",
    group: "subflow",
    note: "Success toast on the map. Return to the populated map to keep exploring.",
    image: "./design-exports/TaeoT.png",
    hotspots: [
      { x: 28, y: 768, width: 340, height: 46, label: "Back to map", target: "Fx6sb", wide: true },
    ],
  },
  {
    id: "tYbkE",
    slug: "conflict",
    title: "1.14 Error / Conflict",
    group: "subflow",
    note: "Conflict sheet branch from the review step.",
    image: "./design-exports/tYbkE.png",
    hotspots: [
      { x: 28, y: 781, width: 340, height: 40, label: "Back to review", target: "DSeSv", wide: true },
    ],
  },
  {
    id: "WiK0c",
    slug: "flow-diagram",
    title: "Flow Diagram",
    group: "diagram",
    note: "Reference diagram exported from the Pencil canvas for the overall Task 01 path.",
    image: "./design-exports/WiK0c.png",
    mode: "wide",
    hotspots: [],
  },
];

const orderedIds = screens.map((screen) => screen.id);
const screenMap = new Map(screens.map((screen) => [screen.id, screen]));

const state = {
  currentId: window.location.hash.replace("#", "") || "VvQHl",
  hotspotsVisible: true,
  autoAdvanceTimer: null,
};

const els = {
  image: document.querySelector("#screen-image"),
  hotspotsLayer: document.querySelector("#hotspots-layer"),
  prototypeStage: document.querySelector(".prototype-stage"),
  currentScreenTitle: document.querySelector("#current-screen-title"),
  currentScreenNote: document.querySelector("#current-screen-note"),
  previousButton: document.querySelector("#previous-screen"),
  nextButton: document.querySelector("#next-screen"),
  toggleHotspots: document.querySelector("#toggle-hotspots"),
  template: document.querySelector("#screen-button-template"),
  lists: {
    main: document.querySelector("#main-flow-list"),
    edge: document.querySelector("#edge-case-list"),
    subflow: document.querySelector("#subflow-list"),
  },
};

function buildScreenLists() {
  ["main", "edge", "subflow"].forEach((group) => {
    const target = els.lists[group];
    target.innerHTML = "";

    screens
      .filter((screen) => screen.group === group)
      .forEach((screen) => {
        const node = els.template.content.firstElementChild.cloneNode(true);
        node.dataset.target = screen.id;
        node.querySelector(".screen-list__label").textContent = screen.title;
        node.querySelector(".screen-list__id").textContent = screen.id;
        node.addEventListener("click", () => navigateTo(screen.id));
        target.appendChild(node);
      });
  });
}

function clearAutoAdvance() {
  if (state.autoAdvanceTimer) {
    window.clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }
}

function navigateTo(screenId) {
  const fallback = orderedIds[0];
  const nextId = screenMap.has(screenId) ? screenId : fallback;

  if (window.location.hash !== `#${nextId}`) {
    window.location.hash = nextId;
    return;
  }

  state.currentId = nextId;
  render();
}

function renderHotspots(screen) {
  els.hotspotsLayer.innerHTML = "";

  screen.hotspots.forEach((hotspot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `hotspot${hotspot.wide ? " hotspot--wide" : ""}`;
    button.dataset.label = hotspot.label;
    button.setAttribute("aria-label", `${hotspot.label} → ${hotspot.target}`);
    button.style.left = pctX(hotspot.x);
    button.style.top = pctY(hotspot.y);
    button.style.width = pctX(hotspot.width);
    button.style.height = pctY(hotspot.height);
    button.textContent = hotspot.label;
    button.addEventListener("click", () => navigateTo(hotspot.target));
    els.hotspotsLayer.appendChild(button);
  });

  els.hotspotsLayer.classList.toggle("is-visible", state.hotspotsVisible && screen.hotspots.length > 0);
}

function renderNavButtons(index) {
  const previousId = orderedIds[index - 1];
  const nextId = orderedIds[index + 1];

  els.previousButton.disabled = !previousId;
  els.nextButton.disabled = !nextId;
  els.previousButton.onclick = previousId ? () => navigateTo(previousId) : null;
  els.nextButton.onclick = nextId ? () => navigateTo(nextId) : null;
}

function renderActiveButtons() {
  document.querySelectorAll(".screen-list__item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === state.currentId);
  });
}

function render() {
  clearAutoAdvance();

  const screen = screenMap.get(state.currentId) || screenMap.get("VvQHl");
  const index = orderedIds.indexOf(screen.id);

  els.image.src = screen.image;
  els.image.alt = `${screen.title} screen`;
  els.prototypeStage.classList.toggle("is-wide", screen.mode === "wide");
  els.currentScreenTitle.textContent = screen.title;
  els.currentScreenNote.textContent = screen.note;
  renderHotspots(screen);
  renderNavButtons(index);
  renderActiveButtons();

  els.toggleHotspots.textContent = state.hotspotsVisible ? "Hide hotspots" : "Show hotspots";
  els.toggleHotspots.disabled = screen.hotspots.length === 0;

  if (screen.autoAdvanceTo) {
    state.autoAdvanceTimer = window.setTimeout(() => {
      navigateTo(screen.autoAdvanceTo);
    }, screen.autoAdvanceDelay || 1200);
  }
}

function handleHashChange() {
  const nextId = window.location.hash.replace("#", "");
  state.currentId = screenMap.has(nextId) ? nextId : "VvQHl";
  render();
}

els.toggleHotspots.addEventListener("click", () => {
  state.hotspotsVisible = !state.hotspotsVisible;
  render();
});

buildScreenLists();
window.addEventListener("hashchange", handleHashChange);

if (!screenMap.has(state.currentId)) {
  state.currentId = "VvQHl";
  window.location.hash = state.currentId;
} else {
  render();
}
