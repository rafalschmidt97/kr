// Consent-gated Google Analytics loader.
// Called from Analytics.astro with the configured measurement ID.
declare global {
  interface Window {
    __gaLoaded?: boolean;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "cookie-consent";

export function initConsentAnalytics(gaId: string): void {
  const banner = document.getElementById("cookie-consent");

  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + gaId;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", gaId);
  }

  function hideBanner() {
    if (banner) banner.hidden = true;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "accepted") {
    loadGA();
  } else if (stored === "rejected") {
    // respected: do nothing
  } else if (banner) {
    banner.hidden = false;
  }

  const accept = document.getElementById("consent-accept");
  const reject = document.getElementById("consent-reject");
  accept?.addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    hideBanner();
    loadGA();
  });
  reject?.addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    hideBanner();
  });
}
