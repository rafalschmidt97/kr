import assert from "node:assert/strict";
import test from "node:test";
import { initConsentAnalytics } from "../src/scripts/consent.ts";
import { initPreview } from "../src/scripts/preview.ts";

function element(hidden = false) {
  const listeners = new Map();
  return {
    hidden,
    attributes: new Map(),
    addEventListener: (name, listener) => listeners.set(name, listener),
    setAttribute(name, value) {
      this.attributes.set(name, value);
    },
    contains(target) {
      return target === this;
    },
    fire(name, event = { stopPropagation() {} }) {
      listeners.get(name)?.(event);
    },
  };
}

function withBrowser(
  { query = "", stored, blocked = false, writeBlocked = false },
  run,
) {
  const names = ["document", "window", "localStorage"];
  const descriptors = names.map((name) =>
    Object.getOwnPropertyDescriptor(globalThis, name),
  );
  const ids = Object.fromEntries(
    [
      "cookie-consent",
      "consent-accept",
      "consent-reject",
      "preview-more",
      "preview-more-btn",
      "preview-more-menu",
      "preview-off",
    ].map((id) => [
      id,
      element(
        id === "cookie-consent" ||
          id === "preview-more" ||
          id === "preview-more-menu",
      ),
    ]),
  );
  const values = new Map(Object.entries(stored ?? {}));
  const scripts = [];
  const document = {
    ...element(),
    getElementById: (id) => ids[id] ?? null,
    createElement: () => ({}),
    head: { appendChild: (script) => scripts.push(script) },
  };
  const window = { location: { search: query } };
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem(key, value) {
      if (writeBlocked) throw new Error("Storage writes unavailable");
      values.set(key, value);
    },
    removeItem(key) {
      if (writeBlocked) throw new Error("Storage writes unavailable");
      values.delete(key);
    },
  };
  Object.defineProperties(globalThis, {
    document: { configurable: true, value: document },
    window: { configurable: true, value: window },
    localStorage: {
      configurable: true,
      get() {
        if (blocked) throw new Error("Storage access unavailable");
        return storage;
      },
    },
  });
  try {
    run({ ids, scripts, values, document, window });
  } finally {
    names.forEach((name, index) => {
      if (descriptors[index])
        Object.defineProperty(globalThis, name, descriptors[index]);
      else delete globalThis[name];
    });
  }
}

test("blocked storage still offers consent and loads analytics only after acceptance", () => {
  withBrowser({ blocked: true }, ({ ids, scripts }) => {
    initConsentAnalytics("G-TEST");
    assert.equal(ids["cookie-consent"].hidden, false);
    assert.equal(scripts.length, 0);
    ids["consent-accept"].fire("click");
    assert.equal(ids["cookie-consent"].hidden, true);
    assert.equal(scripts.length, 1);
    ids["consent-accept"].fire("click");
    assert.equal(scripts.length, 1);
  });
});

test("rejection works without storage and never loads analytics", () => {
  withBrowser({ blocked: true }, ({ ids, scripts }) => {
    initConsentAnalytics("G-TEST");
    ids["consent-reject"].fire("click");
    assert.equal(ids["cookie-consent"].hidden, true);
    assert.equal(scripts.length, 0);
  });
});

test("failed consent writes do not block the visitor's current choice", () => {
  for (const choice of ["accept", "reject"]) {
    withBrowser({ writeBlocked: true }, ({ ids, scripts }) => {
      initConsentAnalytics("G-TEST");
      ids[`consent-${choice}`].fire("click");
      assert.equal(ids["cookie-consent"].hidden, true);
      assert.equal(scripts.length, choice === "accept" ? 1 : 0);
    });
  }
});

test("stored acceptance and rejection retain their existing behavior", () => {
  for (const choice of ["accepted", "rejected"]) {
    withBrowser(
      { stored: { "cookie-consent": choice } },
      ({ ids, scripts }) => {
        initConsentAnalytics("G-TEST");
        assert.equal(ids["cookie-consent"].hidden, true);
        assert.equal(scripts.length, choice === "accepted" ? 1 : 0);
      },
    );
  }
});

test("normal consent remembers the visitor's choice", () => {
  withBrowser({}, ({ ids, values }) => {
    initConsentAnalytics("G-TEST");
    ids["consent-reject"].fire("click");
    assert.equal(values.get("cookie-consent"), "rejected");
  });
});

test("preview flag works without storage, including open, Escape and off", () => {
  withBrowser({ query: "?preview=1", blocked: true }, ({ ids, document }) => {
    initPreview();
    assert.equal(ids["preview-more"].hidden, false);
    ids["preview-more-btn"].fire("click");
    assert.equal(ids["preview-more-menu"].hidden, false);
    assert.equal(
      ids["preview-more-btn"].attributes.get("aria-expanded"),
      "true",
    );
    document.fire("keydown", { key: "Escape" });
    assert.equal(ids["preview-more-menu"].hidden, true);
    ids["preview-more-btn"].fire("click");
    ids["preview-off"].fire("click");
    assert.equal(ids["preview-more"].hidden, true);
    assert.equal(ids["preview-more-menu"].hidden, true);
  });
});

test("disabled or absent preview flag stays hidden when storage is blocked", () => {
  for (const query of ["", "?preview=0"]) {
    withBrowser({ query, blocked: true }, ({ ids }) => {
      initPreview();
      assert.equal(ids["preview-more"].hidden, true);
    });
  }
});

test("explicit preview off wins over remembered state even if removal fails", () => {
  withBrowser(
    { query: "?preview=0", writeBlocked: true, stored: { "kr-preview": "1" } },
    ({ ids }) => {
      initPreview();
      assert.equal(ids["preview-more"].hidden, true);
    },
  );
});

test("normal preview retains remembered state, outside-click closure and clearing", () => {
  withBrowser(
    { stored: { "kr-preview": "1" } },
    ({ ids, values, document }) => {
      initPreview();
      assert.equal(ids["preview-more"].hidden, false);
      ids["preview-more-btn"].fire("click");
      document.fire("click", { target: {} });
      assert.equal(ids["preview-more-menu"].hidden, true);
      ids["preview-off"].fire("click");
      assert.equal(values.has("kr-preview"), false);
    },
  );
});
