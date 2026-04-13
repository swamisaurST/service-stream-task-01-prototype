/**
 * Task-01 prototype — images from Pencil node IDs; URLs and UI use human slugs only.
 */
const PHONE_WIDTH = 396;
const PHONE_HEIGHT = 874;

const pctX = (v) => `${(v / PHONE_WIDTH) * 100}%`;
const pctY = (v) => `${(v / PHONE_HEIGHT) * 100}%`;

const EXPORT_BASE = "./design-exports";
const EXPORT_VERSION = "20260413";

function imageAttrs(screen) {
  const id = screen.id;
  const v = `?v=${EXPORT_VERSION}`;
  return {
    src: `${EXPORT_BASE}/${id}.png${v}`,
    srcset: `${EXPORT_BASE}/2x/${id}.png${v} 2x`,
    sizes:
      screen.mode === "wide"
        ? "(max-width: 1400px) min(96vw, 1200px), 1200px"
        : `${PHONE_WIDTH}px`,
    width: screen.mode === "wide" ? 2200 : PHONE_WIDTH,
    height: screen.mode === "wide" ? 560 : PHONE_HEIGHT,
  };
}

/**
 * Tap targets from Task-01.pen layout (frame coordinates). `target` = slug.
 * No decorative QA zones on the map — edge cases are reached from the top flow only.
 */
const screens = [
  {
    id: "VvQHl",
    slug: "intro",
    flowLabel: "Intro",
    navGroup: "happy",
    hint: "Cover screen from the design file. Use the pill “Map — OOS off” above to start the happy path (no phantom tap targets on this artboard).",
    hits: [],
  },
  {
    id: "nATGl",
    slug: "map-oos-off",
    flowLabel: "Map — OOS off",
    navGroup: "happy",
    hint: "OOS is inactive. Open the layers funnel to choose which nearby asset types to load.",
    hits: [{ x: 340, y: 123, width: 40, height: 40, target: "layer-picker", aria: "Open nearby assets / layers" }],
  },
  {
    id: "W6XyF",
    slug: "layer-picker",
    flowLabel: "Nearby layers",
    navGroup: "happy",
    hint: "Turn on Planned (first row) to load out-of-scope assets. Back returns to the map with OOS off.",
    hits: [
      { x: 4, y: 38, width: 44, height: 44, target: "map-oos-off", aria: "Back to map" },
      { x: 0, y: 643, width: 396, height: 64, target: "loading", aria: "Toggle Planned layer on" },
    ],
  },
  {
    id: "FoXXr",
    slug: "loading",
    flowLabel: "Loading",
    navGroup: "happy",
    hint: "Fetching nearby assets. This prototype continues automatically to the populated map.",
    autoAdvanceTo: "map-oos-on",
    autoAdvanceDelay: 1600,
    hits: [{ x: 4, y: 38, width: 44, height: 44, target: "layer-picker", aria: "Back to layer sheet" }],
  },
  {
    id: "Fx6sb",
    slug: "map-oos-on",
    flowLabel: "Map — OOS on",
    navGroup: "happy",
    hint: "Markers and legend are visible. Tap the highlighted pit marker to open the read-only card, or the funnel to adjust layers.",
    hits: [
      { x: 340, y: 123, width: 40, height: 40, target: "layer-picker", aria: "Open nearby assets / layers" },
      { x: 172, y: 391, width: 56, height: 56, target: "oos-detail", aria: "Open asset detail" },
    ],
  },
  {
    id: "UOyL2",
    slug: "oos-detail",
    flowLabel: "OOS detail",
    navGroup: "happy",
    hint: "Read-only sheet. Add to project continues the optional work-log story; back returns to the map.",
    hits: [
      { x: 4, y: 38, width: 44, height: 44, target: "map-oos-on", aria: "Back to map" },
      { x: 16, y: 752, width: 364, height: 72, target: "add-to-project", aria: "Add to project" },
    ],
  },
  {
    id: "Ynrkt",
    slug: "empty-nearby",
    flowLabel: "No assets nearby",
    navGroup: "edge",
    hint: "Nothing in radius. Adjust filters returns to the layer sheet.",
    hits: [
      { x: 16, y: 758, width: 364, height: 40, target: "layer-picker", aria: "Adjust filters" },
    ],
  },
  {
    id: "Y3qLp",
    slug: "fetch-error",
    flowLabel: "Fetch error",
    navGroup: "edge",
    hint: "Retry runs the load again. Use the flow bar to jump to any other state.",
    hits: [{ x: 24, y: 708, width: 348, height: 48, target: "loading", aria: "Retry load" }],
  },
  {
    id: "Egs8X",
    slug: "layer-permission",
    flowLabel: "Layer blocked",
    navGroup: "edge",
    hint: "Role cannot enable this layer. Back to layers returns to the sheet.",
    hits: [{ x: 28, y: 712, width: 340, height: 44, target: "layer-picker", aria: "Back to layers" }],
  },
  {
    id: "TzhY7",
    slug: "oos-disabled",
    flowLabel: "OOS off",
    navGroup: "edge",
    hint: "OOS deactivated; toast confirms. Dismiss returns to the default map.",
    hits: [{ x: 28, y: 712, width: 340, height: 44, target: "map-oos-off", aria: "Dismiss" }],
  },
  {
    id: "8LdJ5",
    slug: "add-to-project",
    flowLabel: "Add to project",
    navGroup: "subflow",
    hint: "Choose a project to attach context before logging work.",
    hits: [
      { x: 4, y: 38, width: 44, height: 44, target: "oos-detail", aria: "Back" },
      { x: 20, y: 778, width: 356, height: 48, target: "pick-project", aria: "Choose project" },
    ],
  },
  {
    id: "gxYDh",
    slug: "pick-project",
    flowLabel: "Choose project",
    navGroup: "subflow",
    hint: "Pick a destination project row, then continue to the work log.",
    hits: [
      { x: 4, y: 38, width: 44, height: 44, target: "add-to-project", aria: "Back" },
      { x: 24, y: 200, width: 348, height: 72, target: "work-log", aria: "Select project" },
    ],
  },
  {
    id: "dyUol",
    slug: "work-log",
    flowLabel: "Work log",
    navGroup: "subflow",
    hint: "Fill fields, then review before submit.",
    hits: [
      { x: 28, y: 818, width: 158, height: 40, target: "pick-project", aria: "Back" },
      { x: 206, y: 818, width: 162, height: 40, target: "work-log-review", aria: "Review" },
    ],
  },
  {
    id: "DSeSv",
    slug: "work-log-review",
    flowLabel: "Review & submit",
    navGroup: "subflow",
    hint: "Submit completes the happy path. The sync-conflict outcome is only in the flow bar (not a second primary button here).",
    hits: [
      { x: 28, y: 818, width: 158, height: 40, target: "work-log", aria: "Back" },
      { x: 206, y: 818, width: 162, height: 40, target: "linked-success", aria: "Submit" },
    ],
  },
  {
    id: "TaeoT",
    slug: "linked-success",
    flowLabel: "Success",
    navGroup: "subflow",
    hint: "Asset linked; toast on map. Return to the populated map to keep exploring.",
    hits: [{ x: 28, y: 760, width: 340, height: 56, target: "map-oos-on", aria: "Back to map" }],
  },
  {
    id: "tYbkE",
    slug: "sync-conflict",
    flowLabel: "Sync conflict",
    navGroup: "subflow",
    hint: "Error sheet from a failed submit. Back returns to review.",
    hits: [{ x: 28, y: 772, width: 340, height: 48, target: "work-log-review", aria: "Back to review" }],
  },
  {
    id: "WiK0c",
    slug: "flow-overview",
    flowLabel: "Flow map",
    navGroup: "ref",
    hint: "Pencil user-flow diagram (WiK0c). Use the pills above to open each interactive screen.",
    mode: "wide",
    hits: [],
  },
];

const slugToScreen = new Map(screens.map((s) => [s.slug, s]));
const idToScreen = new Map(screens.map((s) => [s.id, s]));
const idToSlug = new Map(screens.map((s) => [s.id, s.slug]));

const DEFAULT_SLUG = "flow-overview";
const SCALE_STORAGE_KEY = "st-task01-preview-scale";

const state = {
  slug: DEFAULT_SLUG,
  autoTimer: null,
  hintRevealTimer: null,
  /** @type {"actual" | "fit"} */
  scaleMode: "actual",
};

const els = {
  stage: document.getElementById("prototype-stage"),
  screen: document.getElementById("device-screen"),
  image: document.getElementById("screen-image"),
  hits: document.getElementById("hits-layer"),
  hint: document.getElementById("state-hint"),
  scaleToggle: document.getElementById("scale-toggle"),
  scaleToggleLabel: document.querySelector("#scale-toggle .scale-toggle__label"),
  pillGroups: {
    happy: document.getElementById("flow-pills--happy"),
    edge: document.getElementById("flow-pills--edge"),
    subflow: document.getElementById("flow-pills--subflow"),
    ref: document.getElementById("flow-pills--ref"),
  },
};

function readStoredScaleMode() {
  try {
    const v = localStorage.getItem(SCALE_STORAGE_KEY);
    if (v === "fit" || v === "actual") return v;
  } catch {
    /* ignore */
  }
  return "actual";
}

function persistScaleMode() {
  try {
    localStorage.setItem(SCALE_STORAGE_KEY, state.scaleMode);
  } catch {
    /* ignore */
  }
}

function applyScaleMode() {
  const isFit = state.scaleMode === "fit";
  els.stage.classList.toggle("fit-mode", isFit);
  if (els.scaleToggle) {
    els.scaleToggle.setAttribute("aria-pressed", isFit ? "true" : "false");
    els.scaleToggle.title = isFit
      ? "Show design pixels at 1:1"
      : "Scale preview to fit the window";
    if (els.scaleToggleLabel) {
      els.scaleToggleLabel.textContent = isFit ? "1:1" : "Fit";
    }
  }
}

function toggleScaleMode() {
  state.scaleMode = state.scaleMode === "fit" ? "actual" : "fit";
  persistScaleMode();
  applyScaleMode();
}

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "").trim();
  if (!raw) return DEFAULT_SLUG;
  if (slugToScreen.has(raw)) return raw;
  if (idToSlug.has(raw)) return idToSlug.get(raw);
  return DEFAULT_SLUG;
}

function setHash(slug) {
  if (window.location.hash !== `#${slug}`) {
    window.location.hash = slug;
    return true;
  }
  return false;
}

function navigateToSlug(slug) {
  if (!slugToScreen.has(slug)) return;
  if (setHash(slug)) return;
  state.slug = slug;
  render();
}

function clearAuto() {
  if (state.autoTimer) {
    clearTimeout(state.autoTimer);
    state.autoTimer = null;
  }
}

function clearHintRevealTimer() {
  if (state.hintRevealTimer) {
    clearTimeout(state.hintRevealTimer);
    state.hintRevealTimer = null;
  }
}

function setRevealHints(on) {
  clearHintRevealTimer();
  els.hits.classList.toggle("reveal-hints", on);
  if (on) {
    state.hintRevealTimer = window.setTimeout(() => {
      els.hits.classList.remove("reveal-hints");
      state.hintRevealTimer = null;
    }, 5500);
  }
}

function renderHits(screen) {
  els.hits.innerHTML = "";
  els.hits.classList.remove("reveal-hints");
  clearHintRevealTimer();

  (screen.hits || []).forEach((h) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "hit";
    btn.setAttribute("aria-label", h.aria);
    btn.style.left = pctX(h.x);
    btn.style.top = pctY(h.y);
    btn.style.width = pctX(h.width);
    btn.style.height = pctY(h.height);
    btn.addEventListener("click", () => {
      setRevealHints(false);
      navigateToSlug(h.target);
    });
    els.hits.appendChild(btn);
  });
}

function renderImage(screen) {
  const attrs = imageAttrs(screen);
  els.image.src = attrs.src;
  els.image.srcset = attrs.srcset;
  els.image.sizes = attrs.sizes;
  els.image.width = attrs.width;
  els.image.height = attrs.height;
  els.image.alt = screen.flowLabel;
  els.image.decoding = "async";
}

function renderPills() {
  document.querySelectorAll(".flow-pill").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.slug === state.slug);
  });
}

function render() {
  clearAuto();

  const screen = slugToScreen.get(state.slug) || slugToScreen.get(DEFAULT_SLUG);
  els.hint.textContent = screen.hint;
  renderImage(screen);
  els.stage.classList.toggle("is-wide", screen.mode === "wide");
  renderHits(screen);
  renderPills();

  if (screen.autoAdvanceTo && slugToScreen.has(screen.autoAdvanceTo)) {
    state.autoTimer = window.setTimeout(() => {
      navigateToSlug(screen.autoAdvanceTo);
    }, screen.autoAdvanceDelay ?? 1400);
  }
}

function buildFlowPills() {
  const groups = ["ref", "happy", "edge", "subflow"];
  groups.forEach((g) => {
    const host = els.pillGroups[g];
    host.innerHTML = "";
    screens
      .filter((s) => s.navGroup === g)
      .forEach((s) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "flow-pill";
        b.dataset.slug = s.slug;
        b.dataset.navGroup = s.navGroup;
        b.textContent = s.flowLabel;
        b.addEventListener("click", () => navigateToSlug(s.slug));
        host.appendChild(b);
      });
  });
}

function onHashChange() {
  const raw = window.location.hash.replace(/^#/, "").trim();
  const slug = parseHash();
  if (raw && idToSlug.has(raw) && raw !== slug) {
    history.replaceState(null, "", `#${slug}`);
  }
  state.slug = slug;
  render();
}

function initFromLocation() {
  const raw = window.location.hash.replace(/^#/, "").trim();
  const slug = parseHash();
  if (!raw) {
    history.replaceState(null, "", `#${slug}`);
  } else if (!slugToScreen.has(raw) && !idToSlug.has(raw)) {
    history.replaceState(null, "", `#${DEFAULT_SLUG}`);
    state.slug = DEFAULT_SLUG;
    render();
    return;
  } else if (idToSlug.has(raw) && raw !== slug) {
    history.replaceState(null, "", `#${slug}`);
  }
  state.slug = slug;
  render();
}

function onDeviceScreenClick(e) {
  if (els.stage.classList.contains("is-wide")) return;
  if (e.target.closest(".hit")) return;

  const inDevice = e.target.closest("#device-screen");
  if (!inDevice) return;

  const screen = slugToScreen.get(state.slug);
  if (!screen?.hits?.length) return;

  if (els.hits.classList.contains("reveal-hints")) {
    setRevealHints(false);
  } else {
    setRevealHints(true);
  }
}

buildFlowPills();
state.scaleMode = readStoredScaleMode();
applyScaleMode();
if (els.scaleToggle) {
  els.scaleToggle.addEventListener("click", () => toggleScaleMode());
}
els.screen.addEventListener("click", onDeviceScreenClick);
window.addEventListener("hashchange", onHashChange);
initFromLocation();
