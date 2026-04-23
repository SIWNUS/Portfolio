let hasTrackedInitialPageView = false;

export function trackEvent(eventName) {
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible(eventName);
  }
}

export function trackPageView() {
  if (
    !hasTrackedInitialPageView &&
    typeof window !== "undefined" &&
    typeof window.plausible === "function"
  ) {
    hasTrackedInitialPageView = true;
    window.plausible("pageview");
  }
}
