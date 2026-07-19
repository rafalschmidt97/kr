// Preview mode: reveals links to hidden guest-group pages for the couple.
// Activated by ?preview=1, disabled by ?preview=0, remembered in localStorage.
// This is convenience only, not security — hidden pages are public by URL.
const STORAGE_KEY = "kr-preview";

export function initPreview(): void {
  const params = new URLSearchParams(window.location.search);
  const flag = params.get("preview");
  if (flag === "1") {
    localStorage.setItem(STORAGE_KEY, "1");
  } else if (flag === "0") {
    localStorage.removeItem(STORAGE_KEY);
  }

  const panel = document.getElementById("preview-panel");
  if (!panel) return;

  const active = localStorage.getItem(STORAGE_KEY) === "1";
  panel.hidden = !active;

  // "×" button turns preview off without needing the URL.
  const close = document.getElementById("preview-close");
  close?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    panel.hidden = true;
  });
}
