// Preview mode: reveals links to hidden guest-group pages for the couple.
// Activated by ?preview=1, then remembered in localStorage.
// This is convenience only, not security — hidden pages are public by URL.
const STORAGE_KEY = "kr-preview";

export function initPreview(): void {
  const params = new URLSearchParams(window.location.search);
  if (params.get("preview") === "1") {
    localStorage.setItem(STORAGE_KEY, "1");
  }

  const active = localStorage.getItem(STORAGE_KEY) === "1";
  if (!active) return;

  const panel = document.getElementById("preview-panel");
  if (panel) panel.hidden = false;
}
