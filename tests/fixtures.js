import { test as base, expect } from "@playwright/test";
import { fileURLToPath } from "node:url";

const fontFiles = {
  "dm-sans": "@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  fraunces: "@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2",
};
const fontCss = Object.entries({ "dm-sans": "DM Sans", fraunces: "Fraunces" })
  .map(([file, family]) => `@font-face { font-family: '${family}'; font-style: normal;
    font-weight: 100 900; font-display: block;
    src: url('http://127.0.0.1:4175/__test-fonts/${file}') format('woff2'); }`)
  .join("\n");

export const test = base.extend({
  page: async ({ page, context }, use) => {
    const errors = [];
    const failedAssets = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (response.url().startsWith("http://127.0.0.1:4175/") && response.status() >= 400) {
        failedAssets.push(`${response.status()} ${response.url()}`);
      }
    });
    await context.route("**/*", async (route) => {
      const url = new URL(route.request().url());
      if (url.pathname.startsWith("/__test-fonts/")) {
        const file = fontFiles[url.pathname.split("/").pop()];
        return route.fulfill({
          path: fileURLToPath(new URL(`../node_modules/${file}`, import.meta.url)),
          contentType: "font/woff2",
        });
      }
      if (url.hostname === "fonts.googleapis.com") {
        return route.fulfill({ contentType: "text/css", body: fontCss });
      }
      if (url.origin === "http://127.0.0.1:4175") return route.continue();
      // Test navigation without relying on, or sending data to, external services.
      return route.fulfill({ contentType: "text/html", body: "<title>External resource</title>" });
    });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await use(page);
    expect(errors, "Uncaught application errors").toEqual([]);
    expect(failedAssets, "Missing local assets").toEqual([]);
  },
});

export { expect };
