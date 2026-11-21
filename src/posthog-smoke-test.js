// Explicit opt-in on the Vite dev server only. This code is excluded from production.
export const runPostHogSmokeTest = () => {
  if (!import.meta.env.DEV) return;

  const test = new URLSearchParams(window.location.search).get("posthog_test");
  if (test === "error") {
    window.setTimeout(() => {
      throw new Error("Eco-Consumo PostHog smoke test: unhandled error");
    }, 3000);
  } else if (test === "rejection") {
    window.setTimeout(() => {
      void Promise.reject(new Error("Eco-Consumo PostHog smoke test: unhandled rejection"));
    }, 3000);
  }
};
