// Preview mode: reveals a "⋯ more" control in the nav that links to the hidden
// guest-group and schedule pages. Activated by ?preview=1, disabled by
// ?preview=0 or the "Wyłącz podgląd" switch, remembered in localStorage.
// Convenience only, not security — hidden pages are public by URL.
const STORAGE_KEY = "kr-preview";

export function initPreview(): void {
  const params = new URLSearchParams(window.location.search);
  const flag = params.get("preview");
  let active = flag === "1";
  try {
    if (flag === "1") {
      localStorage.setItem(STORAGE_KEY, "1");
    } else if (flag === "0") {
      localStorage.removeItem(STORAGE_KEY);
    }
    active =
      flag === "1" ||
      (flag !== "0" && localStorage.getItem(STORAGE_KEY) === "1");
  } catch {
    // The explicit URL flag still works when its choice cannot be remembered.
  }

  const more = document.getElementById("preview-more");
  if (!more) return;

  more.hidden = !active;
  if (!active) return;

  const btn = document.getElementById("preview-more-btn");
  const menu = document.getElementById("preview-more-menu");
  const off = document.getElementById("preview-off");
  if (!btn || !menu) return;

  const setOpen = (open: boolean) => {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(menu.hidden);
  });

  // Clicking outside the menu closes it.
  document.addEventListener("click", (e) => {
    if (!menu.hidden && !more.contains(e.target as Node)) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // "Wyłącz podgląd" turns preview off without needing the URL.
  off?.addEventListener("click", () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Always allow hiding preview for the current page.
    }
    more.hidden = true;
    setOpen(false);
  });
}
