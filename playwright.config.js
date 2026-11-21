import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:4175",
    browserName: "chromium",
    locale: "pt-BR",
    colorScheme: "light",
    reducedMotion: "reduce",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
    { name: "mobile-small", use: { viewport: { width: 320, height: 740 }, isMobile: true, hasTouch: true } },
  ],
  webServer: {
    command: "yarn build && yarn preview --host 127.0.0.1 --port 4175 --strictPort",
    url: "http://127.0.0.1:4175",
    reuseExistingServer: false,
    // Empty values override .env.local, keeping test traffic out of PostHog.
    env: { VITE_POSTHOG_KEY: "", VITE_POSTHOG_HOST: "" },
  },
});
